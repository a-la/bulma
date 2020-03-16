# @a-la/bulma

[![npm version](https://badge.fury.io/js/%40a-la%2Fbulma.svg)](https://www.npmjs.com/package/@a-la/bulma)

`@a-la/bulma` is Bulma Class Properties And Types Definitions For JSX.

<p align="center">
  <img src="./doc/modal.gif" alt="bulma modal jsx autocompletions">
</p>

```sh
yarn add -D @a-la/bulma
npm i --save-dev @a-la/bulma
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [Usage](#usage)
- [Closure Stylesheets](#closure-stylesheets)
- [Copyright & License](#copyright--license)

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/0.svg?sanitize=true">
</a></p>

## Usage

By installing this package, you will be able to specify classes on tags and components as JSX properties when using [`alamode`](https://github.com/a-la/alamode) transpiler.

To receive access to auto-completions, you'll need to import the `@a-la/bulma` package in your source code:

```jsx
import '@a-la/bulma'
// or when using Preact 8:
import '@a-la/bulma/preact'

export const Component =
  () => (<div modal>Hello World</div>)
```

The actual import doesn't do anything as the source file is blank. It is needed only for VSCode to pick up distributed typings.

Because of [a bug](https://github.com/microsoft/TypeScript/issues/28905) in VSCode, you won't see properties with hyphens, e.g., `is-loading` and will only see `isLoading`, but you can actually use both. The camel cases are added for discoverability of classes.

See the <kbd>📙 [full list of Bulma classes](../../wiki/Bulma_Classes)</kbd> in Wiki.

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/1.svg?sanitize=true">
</a></p>

## Closure Stylesheets

An annotated version of Bulma 0.8.0 is available in `bulma/bulma.css` where `/* @alternate */` annotations were added for compatibility with [Closure Stylesheets](https://github.com/artdecocode/closure-stylsheets-java).

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/2.svg?sanitize=true">
</a></p>

## Copyright & License

GNU Affero General Public License v3.0

<table>
  <tr>
    <th>
      <a href="https://www.artd.eco">
        <img width="100" src="https://raw.githubusercontent.com/wrote/wrote/master/images/artdeco.png"
          alt="Art Deco">
      </a>
    </th>
    <th>© <a href="https://www.artd.eco">Art Deco™</a> for <a href="https://alamode.cc">À La Mode</a> 2020</th>
  </tr>
</table>

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/-1.svg?sanitize=true">
</a></p>