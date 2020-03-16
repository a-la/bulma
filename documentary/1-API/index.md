## Usage

By installing this package, you will be able to specify classes on tags and components as JSX properties when using [`alamode`](https://github.com/a-la/alamode) transpiler.

To receive access to auto-completions, you'll need to import the `@a-la/bulma` package in your source code:

%EXAMPLE: example, ../ => @a-la/bulma%

The actual import doesn't do anything as the source file is blank. It is needed only for VSCode to pick up distributed typings.

Because of [a bug](https://github.com/microsoft/TypeScript/issues/28905) in VSCode, you won't see properties with hyphens, e.g., `is-loading` and will only see `isLoading`, but you can actually use both. The camel cases are added for discoverability of classes.

See the <kbd>📙 [full list of Bulma classes](../../wiki/Bulma_Classes)</kbd> in Wiki.

%~%

## Closure Stylesheets

An annotated version of Bulma 0.8.0 is available in `bulma/bulma.css` where `/* @alternate */` annotations were added for compatibility with [Closure Stylesheets](https://github.com/artdecocode/closure-stylsheets-java).

%~%