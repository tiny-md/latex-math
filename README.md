# LaTeX Math to AST <img src="https://raw.githubusercontent.com/mayank1513/mayank1513/main/popper.png" style="height: 40px"/>

[![test](https://github.com/tiny-md/latex-math/actions/workflows/test.yml/badge.svg)](https://github.com/tiny-md/latex-math/actions/workflows/test.yml) [![Maintainability](https://api.codeclimate.com/v1/badges/aa896ec14c570f3bb274/maintainability)](https://codeclimate.com/github/tiny-md/latex-math/maintainability) [![codecov](https://codecov.io/gh/tiny-md/latex-math/graph/badge.svg)](https://codecov.io/gh/tiny-md/latex-math) [![Version](https://img.shields.io/npm/v/latex-math.svg?colorB=green)](https://www.npmjs.com/package/latex-math) [![Downloads](https://img.jsdelivr.com/img.shields.io/npm/d18m/latex-math.svg)](https://www.npmjs.com/package/latex-math) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/latex-math) [![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/from-referrer/)

> Convert LaTeX math strings into structured abstract syntax trees (ASTs) — lightweight, Vite-compatible, and built for modern tooling.

---

## ✨ Overview

This utility parses **LaTeX math strings** and transforms them into **LaTeX ASTs** for further processing, analysis, or transformation.

It is a **trimmed-down version of [`@unified-latex/unified-latex-util-parse`](https://www.npmjs.com/package/@unified-latex/unified-latex-util-parse)**, built specifically to address compatibility issues with **Vite** and modern build tools.

---

## 🚀 Features

- 🧠 Converts LaTeX math strings to ASTs
- ⚡️ Lightweight & minimal dependencies
- 🛠 Vite-compatible (unlike `@unified-latex/unified-latex-util-parse`)
- 🔌 Easy to integrate with `remark-math` pipelines
- 📦 Suitable for client-side or server-side rendering

---

### Installation

```bash
pnpm add latex-math
```

**_or_**

```bash
npm install latex-math
```

**_or_**

```bash
yarn add latex-math
```

---

## 🔧 Usage

```ts
import { parseMath } from "latex-math";

const latex = "\\frac{a}{b}";
const ast = parseMath(latex);

console.log(ast);
```

---

## 📚 Why this exists

The original package [`@unified-latex/unified-latex-util-parse`](https://github.com/unified-latex/unified-latex) is robust, but includes many dependencies and causes issues in **Vite-based** or **modern ESM** projects.

This package solves that by providing only what's necessary to parse **math-mode LaTeX**, with modern compatibility and minimal footprint.

---

> <img src="https://raw.githubusercontent.com/mayank1513/mayank1513/main/popper.png" style="height: 20px"/> Star [this repository](https://github.com/tiny-md/latex-math) and share it with your friends.

## 📄 License

This library is licensed under the MPL-2.0 open-source license.

> <img src="https://raw.githubusercontent.com/mayank1513/mayank1513/main/popper.png" style="height: 20px"/> Please enroll in [our courses](https://mayank-chaudhari.vercel.app/courses) or [sponsor](https://github.com/sponsors/mayank1513) our work.

<hr />

<p align="center" style="text-align:center">with 💖 by <a href="https://mayank-chaudhari.vercel.app" target="_blank">Mayank Kumar Chaudhari</a></p>
````
