import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";
import peg from "peggy";
import { transform } from "esbuild";
import fs from "node:fs";
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  // @ts-expect-error -- no plugin type exported by vitest
  plugins: [tsconfigPaths(), peggyLoader()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: [],
    coverage: {
      include: ["src/**"],
      exclude: ["src/**/*.test.*", "src/**/declaration.d.ts"],
      reporter: ["text", "json", "clover", "html"],
    },
  },
});

/**
 * Plugin to allow importing peggy/pegjs files directly.
 */
function peggyLoader(options = {}) {
  const peggyRegex = /\.peg(js|gy)$/;

  const ret = {
    name: "pegjs-loader",
    enforce: "pre",

    async load(filePath: string) {
      if (!filePath.match(peggyRegex)) {
        return;
      }
      const source = fs.readFileSync(filePath, "utf-8");
      const filename = path.relative(process.cwd(), filePath);

      const defaultOptions: Record<string, any> = {
        output: "source",
        format: "bare",
        ...options,
      };
      if (filename.match(/latex\.(pegjs|peggy)$/)) {
        defaultOptions.allowedStartRules = ["document", "math"];
        // Avoid slow parsing as in https://github.com/siefkenj/unified-latex/issues/47
        // and https://github.com/siefkenj/unified-latex/issues/115
        defaultOptions.cache = true;
      }
      if (filename.match(/tikz\.(pegjs|peggy)$/)) {
        defaultOptions.allowedStartRules = ["path_spec", "foreach_body"];
      }

      const contents = peg.generate(source, defaultOptions);
      // contents might have some typescript in it, so we transpile the typescript
      // away with esbuild.
      const { code } = await transform(`export default ${contents}`, { loader: "ts" });
      return { code };
    },
  };
  return ret;
}
