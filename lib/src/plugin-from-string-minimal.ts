import { Plugin, Parser } from "unified";
import * as Ast from "@unified-latex/unified-latex-types";
import { parseMathMinimal } from "./parse-minimal";

/**
 * Parse a string to a LaTeX AST with no post processing. For example,
 * no macro arguments will be attached, etc.
 */
export const unifiedLatexFromStringMinimal: Plugin<{}[], string, Ast.Root> =
  function unifiedLatexFromStringMinimal(options) {
    const parser: Parser<Ast.Root> = str => {
      return {
        type: "root",
        content: parseMathMinimal(str),
        _renderInfo: { inMathMode: true },
      };
    };

    Object.assign(this, { Parser: parser });
  };
