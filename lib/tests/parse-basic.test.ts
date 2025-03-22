import { describe, it, expect } from "vitest";
import util from "util";
import { printRaw } from "@unified-latex/unified-latex-util-print-raw";
import { parseMath } from "../src/parse-math";

/* eslint-env jest */

// Make console.log pretty-print by default
const origLog = console.log;
console.log = (...args) => {
  origLog(...args.map(x => util.inspect(x, false, 10, true)));
};

describe("unified-latex-util-parse", () => {
  it("Parses inline math", () => {
    parseMath("x^2");
  });

  it("Parses \\^ and \\_ macros correctly (e.g. doesn't attach an argument to them)", () => {
    let parsed = parseMath("^2");
    console.log(parsed);
    expect(printRaw(parsed)).toEqual("^{2}");

    parsed = parseMath("_2");
    expect(printRaw(parsed)).toEqual("_{2}");

    parsed = parseMath("\\_2");
    expect(printRaw(parsed)).toEqual("\\_2");
  });

  it("Can parse math mode directly", () => {
    let parsed;
    parsed = parseMath("^2");
    expect(printRaw(parsed)).toEqual("^{2}");
  });

  it("Can parse trailing \\", () => {
    const parsed = parseMath("\\");
    expect(printRaw(parsed)).toEqual("\\");
  });

  it("Keeps whitespace between macro parameter (e.g. `#1`) and surrounding math", () => {
    let parsed;
    parsed = parseMath("\\x   #1    y");
    expect(printRaw(parsed)).toEqual("\\x #1 y");
  });
});
