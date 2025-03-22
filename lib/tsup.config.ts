import { defineConfig, type Options } from "tsup";
import { rdiPlugin } from "esbuild-plugin-rdi";
import { peggyPlugin } from "esbuild-plugin-peggy";

export default defineConfig(
  (options: Options) =>
    ({
      format: ["cjs", "esm"],
      target: "es2019",
      entry: ["./src/index.ts"],
      sourcemap: false,
      clean: !options.watch,
      bundle: true,
      minify: !options.watch,
      esbuildPlugins: [
        rdiPlugin(),
        // @ts-expect-error --- issue with Peggy not exporting proper types - @see https://github.com/peggyjs/peggy/pull/585
        peggyPlugin({
          output: "source",
          format: "bare",
          allowedStartRules: ["document", "math"],
          cache: true,
        }),
      ],
      ...options,
    }) as Options,
);
