<!--BEGIN HEADER-->
<div id="top" align="center">
  <h1>has-script</h1>
  <a href="https://npmjs.com/package/has-script">
    <img alt="npm" src="https://img.shields.io/npm/v/has-script.svg">
  </a>
  <a href="https://github.com/bconnorwhite/has-script">
    <img alt="typescript" src="https://img.shields.io/github/languages/top/bconnorwhite/has-script.svg">
  </a>
</div>

<br />

<blockquote align="center">Check if package.json contains a script.</blockquote>

<br />

_If I should maintain this repo, please ⭐️_
<a href="https://github.com/bconnorwhite/has-script">
  <img align="right" alt="GitHub stars" src="https://img.shields.io/github/stars/bconnorwhite/has-script?label=%E2%AD%90%EF%B8%8F&style=social">
</a>

_DM me on [Twitter](https://twitter.com/bconnorwhite) if you have questions or suggestions._
<a href="https://twitter.com/bconnorwhite">
  <img align="right" alt="Twitter Follow" src="https://img.shields.io/twitter/url?label=%40bconnorwhite&style=social&url=https%3A%2F%2Ftwitter.com%2Fbconnorwhite">
</a>

---
<!--END HEADER-->

## Installation

```sh
yarn add has-script
```

```sh
npm install has-script
```

```sh
pnpm add has-script
```

## Usage

```ts
import { hasScript, hasScriptLike } from "has-script";

// Returns true if the exact match exists in the package.json script field.
function hasScript(name: string): Promise<boolean>;

// All strings that match the given RegExp.
function hasScriptLike(regex: RegExp): Promise<string[]>;
```

<!--BEGIN FOOTER-->

<br />

<h2 id="dependencies">Dependencies<a href="https://www.npmjs.com/package/has-script?activeTab=dependencies"><img align="right" alt="dependencies" src="https://img.shields.io/librariesio/release/npm/has-script.svg"></a></h2>

- [file-structure](https://www.npmjs.com/package/file-structure): Define and manage file structures


<br />

<h3>Dev Dependencies</h3>

- [autorepo](https://www.npmjs.com/package/autorepo): Autorepo abstracts away your dev dependencies, providing a single command to run all of your scripts.


<br />

<h2 id="license">License <a href="https://opensource.org/licenses/MIT"><img align="right" alt="license" src="https://img.shields.io/npm/l/has-script.svg"></a></h2>

[MIT](https://opensource.org/licenses/MIT) - _The MIT License_
<!--END FOOTER-->
