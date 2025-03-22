"use client";

import styles from "./demo.module.scss";
import { LiveProvider, LiveEditor, LivePreview } from "react-live";
import { Dots1, Dots2, Bars1, Bars2 } from "react18-loaders/dist/server";
import code from "./loader-demo?raw";
import { parseMath } from "latex-math";

/** React live demo */
export function Demo() {
  return (
    <LiveProvider code={code.replace(/import.*/, "")} scope={{ Dots1, Dots2, Bars1, Bars2 }}>
      <div className={styles.demo}>
        <h2>Inline Math E=mc^2</h2>
        <pre>{JSON.stringify(parseMath("E=mc^2"), null, 2)}</pre>
        <LiveEditor className={styles.code} />
        <LivePreview className={styles.preview} />
      </div>
    </LiveProvider>
  );
}
