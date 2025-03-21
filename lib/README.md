# Latex Math <img src="https://raw.githubusercontent.com/mayank1513/mayank1513/main/popper.png" style="height: 40px"/>

[![test](https://github.com/tiny-md/latex-math/actions/workflows/test.yml/badge.svg)](https://github.com/tiny-md/latex-math/actions/workflows/test.yml) [![Maintainability](https://api.codeclimate.com/v1/badges/aa896ec14c570f3bb274/maintainability)](https://codeclimate.com/github/tiny-md/latex-math/maintainability) [![codecov](https://codecov.io/gh/tiny-md/latex-math/graph/badge.svg)](https://codecov.io/gh/tiny-md/latex-math) [![Version](https://img.shields.io/npm/v/latex-math.svg?colorB=green)](https://www.npmjs.com/package/latex-math) [![Downloads](https://img.jsdelivr.com/img.shields.io/npm/d18m/latex-math.svg)](https://www.npmjs.com/package/latex-math) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/latex-math) [![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/from-referrer/)

Latex Math is a comprehensive library designed to unlock the full potential of React 18 server components. It provides customizable loading animation components and a fullscreen loader container, seamlessly integrating with React and Next.js.

✅ Fully Treeshakable (import from `latex-math/client/loader-container`)

✅ Fully TypeScript Supported

✅ Leverages the power of React 18 Server components

✅ Compatible with all React 18 build systems/tools/frameworks

✅ Documented with [Typedoc](https://tiny-md.github.io/latex-math) ([Docs](https://tiny-md.github.io/latex-math))

✅ Examples for Next.js, and Vite

> <img src="https://raw.githubusercontent.com/mayank1513/mayank1513/main/popper.png" style="height: 20px"/> Star [this repository](https://github.com/tiny-md/latex-math) and share it with your friends.

## Getting Started

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

## Want Lite Version? [![npm bundle size](https://img.shields.io/bundlephobia/minzip/latex-math-lite)](https://www.npmjs.com/package/latex-math-lite) [![Version](https://img.shields.io/npm/v/latex-math-lite.svg?colorB=green)](https://www.npmjs.com/package/latex-math-lite) [![Downloads](https://img.jsdelivr.com/img.shields.io/npm/d18m/latex-math-lite.svg)](https://www.npmjs.com/package/latex-math-lite)

```bash
pnpm add latex-math-lite
```

**or**

```bash
npm install latex-math-lite
```

**or**

```bash
yarn add latex-math-lite
```

> You need `r18gs` as a peer-dependency

### Import Styles

You can import styles globally or within specific components.

```css
/* globals.css */
@import "latex-math/dist";
```

```tsx
// layout.tsx
import "latex-math/dist/index.css";
```

For selective imports:

```css
/* globals.css */
@import "latex-math/dist/client"; /** required if you are using LoaderContainer */
@import "latex-math/dist/server/bars/bars1";
```

### Usage

Using loaders is straightforward.

```tsx
import { Bars1 } from "latex-math/dist/server/bars/bars1";

export default function MyComponent() {
  return someCondition ? <Bars1 /> : <>Something else...</>;
}
```

For detailed API and options, refer to [the API documentation](https://tiny-md.github.io/latex-math).

**Using LoaderContainer**

`LoaderContainer` is a fullscreen component. You can add this component directly in your layout and then use `useLoader` hook to toggle its visibility.

```tsx
// layout.tsx
<LoaderContainer />
	 ...
```

```tsx
// some other page or component
import { useLoader } from "latex-math/dist/hooks";

export default MyComponent() {
	const { setLoading } = useLoader();
	useCallback(()=>{
		setLoading(true);
		...do some work
		setLoading(false);
	}, [])
	...
}
```

## License

This library is licensed under the MPL-2.0 open-source license.



> <img src="https://raw.githubusercontent.com/mayank1513/mayank1513/main/popper.png" style="height: 20px"/> Please enroll in [our courses](https://mayank-chaudhari.vercel.app/courses) or [sponsor](https://github.com/sponsors/mayank1513) our work.

<hr />

<p align="center" style="text-align:center">with 💖 by <a href="https://mayank-chaudhari.vercel.app" target="_blank">Mayank Kumar Chaudhari</a></p>
