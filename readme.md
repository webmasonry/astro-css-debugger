# @webmasonry/astro-css-debugger

This **[Astro integration]()** provides a persistent css debugger outlining elements to visually see whats going on in your development process.

- <strong>[Installation](#installation)</strong>

## Installation

The `astro add` command-line tool automates the installation for you. Run one of the following command in a new terminal window.

### Quick Install

```sh
# Using npm
npx astro add @webmasonry/astro-css-debugger
# Using yarn
yarn astro add @webmasonry/astro-css-debugger
# Using pnpm
pnpm astro add @webmasonry/astro-css-debugger
```

# Manual Install

First, install the `@webmasonry/astro-css-debugger` package using your package manager.

```sh
# Using npm
npm install @webmasonry/astro-css-debugger
# Using yarn
yarn install @webmasonry/astro-css-debugger
# Using pnpm
pnpm install @webmasonry/astro-css-debugger
```

**`astro.config.{js,mjs,mts,ts}`**

```js
import { defineConfig } from "astro/config";
import astroCssDebugger from "@webmasonry/astro-css-debugger";

export default defineConfig({
  integrations: [astroCssDebugger()],
});
```
