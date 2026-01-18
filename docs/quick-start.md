# Quick Start

## Installation

```bash
npm install hypermd-uplift codemirror
```

## Usage with Vite / Webpack / ESM

This is the recommended way to use HyperMD in modern applications.

### 1. Import CSS

In your main entry file (e.g., `main.ts` or `app.js`):

```javascript
import 'codemirror/lib/codemirror.css'
// HyperMD styles are imported by the library, but you might need to ensure your bundler handles SCSS/CSS imports.
// If using the pre-built CSS:
import 'hypermd-uplift/style.css'
```

### 2. Initialize Editor

```javascript
import * as HyperMD from 'hypermd-uplift'

const myTextarea = document.getElementById('input-area')
const editor = HyperMD.fromTextArea(myTextarea, {
  // HyperMD options
  hmdHideToken: true,
  hmdFold: {
    image: true,
    link: true,
    math: true, // requires KaTeX or MathJax
  },
  // CodeMirror options
  lineNumbers: true,
})
```

## Using with TypeScript

HyperMD is written in TypeScript and ships with type definitions.

```typescript
import * as HyperMD from 'hypermd-uplift'
import { cm_t } from 'hypermd-uplift/core/type'

const editor: cm_t = HyperMD.fromTextArea(document.getElementById('editor') as HTMLTextAreaElement)
```

## Legacy / UMD Usage

If you are not using a bundler, you can use the UMD build from the `dist` folder.

```html
<link rel="stylesheet" href="path/to/hypermd/dist/style.css" />
<script src="path/to/codemirror.js"></script>
<script src="path/to/hypermd/dist/index.umd.js"></script>

<script>
  var editor = HyperMD.fromTextArea(document.getElementById('editor'))
</script>
```
