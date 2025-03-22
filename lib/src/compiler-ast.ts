import type { Plugin } from "unified";
import type * as Ast from "@unified-latex/unified-latex-types";

/**
 * Unified compiler plugin that passes through a LaTeX AST without modification.
 */
export const unifiedLatexAstComplier: Plugin<void[], Ast.Root, Ast.Root> =
  function unifiedLatexAstComplier() {
    Object.assign(this, { Compiler: (x: Ast.Root) => x });
  };
