## Usage

By installing this package, you will be able to specify classes on tags and components as JSX properties when using [`alamode`](https://github.com/a-la/alamode) transpiler.

To receive access to auto-completions, you'll need to import the `@a-la/bulma` package in your source code:

%EXAMPLE: example, ../ => @a-la/bulma%

The actual import doesn't do anything as the source file is blank. It is needed only for VSCode to pick up distributed typings.

Because of [a bug](https://github.com/microsoft/TypeScript/issues/28905) in VSCode, you won't see properties with hyphens, e.g., `is-loading` and will only see `isLoading`, but you can actually use both. The camel cases are added for discoverability of classes.

<details>
<summary>
Full list of 816 Bulma classes.
<summary>
<fork>example/list</fork>
</details>

%~%

<!-- ## API

The package is available by importing its default function:

```js
import bulma from '@a-la/bulma'
```

%~%

<typedef method="bulma">types/api.xml</typedef>

<typedef>types/index.xml</typedef>

%FORK example%

%~% -->