<div align="center">
  <h1>has-script</h1>
  <a href="https://npmjs.com/package/has-script">
    <img alt="npm" src="https://img.shields.io/npm/v/has-script.svg">
  </a>
  <a href="https://github.com/bconnorwhite/has-script">
    <img alt="typescript" src="https://img.shields.io/badge/TypeScript-%F0%9F%91%8D-blue.svg">
  </a>
  <a href="https://github.com/bconnorwhite/has-script">
    <img alt="GitHub stars" src="https://img.shields.io/github/stars/bconnorwhite/has-script?label=Stars%20Appreciated%21&style=social">
  </a>
  <a href="https://twitter.com/bconnorwhite">
    <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/bconnorwhite.svg?label=%40bconnorwhite&style=social">
  </a>
</div>

<br />

> Check if package.json contains a script.

## Installation

```bash
yarn add has-script
```

```bash
npm install has-script
```

## API

```ts
import { hasScript, hasScriptLike } from "has-script";

// Returns true if the exact match exists in the package.json script field.
function hasScript(name: string): Promise<boolean>;

// All strings that match the given RegExp.
function hasScriptLike(regex: RegExp): Promise<string[]>;
```

<br />

<h2>Dependencies<img align="right" alt="dependencies" src="https://img.shields.io/david/bconnorwhite/has-script.svg"></h2>

- [@bconnorwhite/package](https://www.npmjs.com/package/@bconnorwhite/package): A utility for reading package.json of a project, and forming paths relative to it.

<br />

<h2>Dev Dependencies<img align="right" alt="David" src="https://img.shields.io/david/dev/bconnorwhite/has-script.svg"></h2>

- [@bconnorwhite/bob](https://www.npmjs.com/package/@bconnorwhite/bob): Bob is a toolkit for TypeScript projects
- [jest](https://www.npmjs.com/package/jest): Delightful JavaScript Testing.

<br />

<h2>License <img align="right" alt="license" src="https://img.shields.io/npm/l/has-script.svg"></h2>

[MIT](https://opensource.org/licenses/MIT)
