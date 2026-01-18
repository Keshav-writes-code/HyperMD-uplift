# HyperMD

![HyperMD Markdown Editor](./demo/logo.png)

**Breaks the Wall** between _writing_ and _preview_, in a Markdown Editor.

> **Note:** This repository has been uplifted to support modern web development tooling (Vite, TypeScript, ESM).

[Online Demo](https://laobubu.net/HyperMD/) | [Documentation][doc]

## Quickstart

### Installation

```bash
npm install hypermd-uplift codemirror
```

### Usage (Vite / Webpack / ESM)

```typescript
import * as HyperMD from 'hypermd-uplift'
import 'codemirror/lib/codemirror.css'

const myTextarea = document.getElementById('input-area')
const editor = HyperMD.fromTextArea(myTextarea)
```

For more advanced configuration, see the [Documentation][doc].

## Why use HyperMD?

HyperMD is a set of [CodeMirror][] add-ons / modes / themes / commands / keymap etc.

### 🌈 Write, and preview on the fly

- **Regular Markdown** blocks and elements
  - **Strong**, _Emphasis_, ~~Strikethrough~~, `Code`
  - [Links](https://laobubu.net), Images
  - Title / Quote / Code Block / List / Horizontal Rule
- **Markdown Extension**
  - Simple Table
  - Footnote [^1]
  - [x] TODO List _(the box is clickable)_
  - YAML Front Matter
  - $\LaTeX$ Formula, inline or block display mode [^4]
  - Emoji: `:joy:` => :joy:
- **And more**
  - <span style="color:red">HTML in Markdown</span> -- WYSIWIG MDX is possible
  - #hashtag support [^6]
  - Flowchart and Diagrams ([mermaid][], [flowchart.js][])

### 💪 Better **Markdown-ing Experience**

- **Upload Images** and files via clipboard, or drag'n'drop
- **Alt+Click** to open link / jump to footnote [^1]
- **Hover** to read footnotes
- **Copy and Paste**, translate HTML into Markdown [^5]
- Easy and ready-to-use **Key-bindings** (aka. KeyMap)

### 🎁 **CodeMirror** benefits

- Syntax Highlight for code blocks, supports 120+ languages[^2]. Mode can be loaded on-demand.
- Configurable key-bindings
- Diff and Merge
- Themes [^3]
- Almost all of CodeMirror addons!

## Development

This project uses **Vite** and **TypeScript**.

### Setup

```bash
npm install
```

### Start Dev Server (Playground)

```bash
npm run dev
```

### Build Library

```bash
npm run build
```

## Special Thanks

💎 **Service and Resource**

- **[CodeMirror][]** - In-browser code editor.
- **[KaTeX][]** - The fastest math typesetting library for the web.
- **[marked][]**, **[turndown][]** and more remarkable libs.

## Contributing

HyperMD is a personal Open-Source project by [laobubu].
Contributions are welcomed.

---

[CodeMirror]: https://codemirror.net/
[MathJax]: https://www.mathjax.org/
[marked]: https://github.com/chjj/marked/
[katex]: https://khan.github.io/KaTeX/
[laobubu]: https://laobubu.net/
[doc]: https://laobubu.net/HyperMD/docs/
[mermaid]: https://mermaid-js.github.io/mermaid/
[flowchart.js]: http://flowchart.js.org/

[^1]: Ctrl+Click works too, but will jump to the footnote if exists.

[^2]: Languages as many as CodeMirror supports.

[^3]: If the theme is not designed for HyperMD, some features might not be present.

[^4]: Math block use `$$` to wrap your TeX expression.

[^5]: Use `Ctrl+Shift+V` to paste plain text.

[^6]: Disabled by default, see [doc]; #use two hash symbol# if tag name contains spaces.
