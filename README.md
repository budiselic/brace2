# brace2

[![npm version](https://img.shields.io/npm/v/brace2.svg)](https://www.npmjs.com/package/brace2)
[![npm downloads](https://img.shields.io/npm/dm/brace2.svg)](https://www.npmjs.com/package/brace2)
[![license](https://img.shields.io/npm/l/brace2.svg)](https://github.com/budiselic/brace2#license)

Browserify-compatible packaging of [Ace Editor](https://ace.c9.io/) with its
Web Workers inlined into the bundle. `brace2` is a maintained fork of
[`brace`](https://github.com/thlorenz/brace); use the `brace2` package name in
imports, while Ace's runtime module IDs remain under the `ace/` namespace.

This release packages Ace `1.2.9`. It has no runtime npm dependencies and ships
TypeScript declarations.

## Installation

```sh
npm install brace2
```

## Quick start

Load the editor plus the mode and theme you want to use:

```js
var ace = require('brace2');
require('brace2/mode/javascript');
require('brace2/theme/monokai');

var editor = ace.edit('editor');
editor.session.setMode('ace/mode/javascript');
editor.setTheme('ace/theme/monokai');
editor.setValue('const greeting = "Hello from brace2";');
```

Add a target element with an explicit size:

```html
<div id="editor"></div>

<style>
  #editor {
    width: 100%;
    height: 400px;
  }
</style>
```

Use the JavaScript file above as an entry in your Browserify build:

```sh
npx browserify app.js --outfile bundle.js
```

Modes and themes are registered by their side-effect imports. Their Ace IDs
still start with `ace/`, which is why `setMode` and `setTheme` use
`ace/mode/javascript` and `ace/theme/monokai`.

## TypeScript

The package exposes declarations through `package.json`; no separate
`@types` package is needed.

```ts
import * as ace from 'brace2';
import 'brace2/mode/typescript';
import 'brace2/theme/monokai';

const editor = ace.edit('editor');
editor.session.setMode('ace/mode/typescript');
editor.setTheme('ace/theme/monokai');
```

## Optional modules

Import only the modules your editor needs:

```js
require('brace2/ext/language_tools');
require('brace2/keybinding/vim');
require('brace2/mode/json');
require('brace2/snippets/javascript');
require('brace2/theme/dracula');
```

The package contains:

- language modes in `brace2/mode/*`
- themes in `brace2/theme/*`
- extensions in `brace2/ext/*`
- keybindings in `brace2/keybinding/*`
- snippets in `brace2/snippets/*`

## Inlined workers

Ace normally loads worker scripts from URLs that must be hosted separately.
`brace2` packages supported workers into JavaScript modules and connects them
to their corresponding modes, so syntax checking works without copying worker
files to your server.

Workers for CoffeeScript, CSS, HTML, JavaScript, JSON, Lua, and XML are inlined.
PHP and XQuery workers are not inlined. If a browser cannot create a worker from
a Blob URL, the editor remains usable but background annotations are disabled.

## Development

Development requires Node.js 18 or newer.

```sh
npm install
npm run build:test
```

`npm test` also builds the browser test bundle and opens the test page in your
default browser. `npm run update` regenerates the package from the pinned Ace
build and refreshes its TypeScript declarations; review generated changes
before committing them.

## License

The Brace integration code is available under the [MIT license](LICENSE).
Bundled files derived from Ace Editor are available under the BSD 3-Clause
license; see [third-party licenses](THIRD_PARTY_LICENSES.md). The distributed
package is therefore marked `MIT AND BSD-3-Clause`.
