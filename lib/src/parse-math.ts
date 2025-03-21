import { unified } from "unified";
import * as Ast from "@unified-latex/unified-latex-types";
import { unifiedLatexFromString } from "./plugin-from-string";

/**
 * Parse `str` into an AST. Parsing starts in math mode and a list of
 * nodes is returned (instead of a "root" node).
 */
export function parseMath(str: string): Ast.Node[] {
  const parser = unified().use(unifiedLatexFromString, { mode: "math" });
  return (parser.parse({ value: str }) as Ast.Root).content;
}
