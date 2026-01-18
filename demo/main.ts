import * as HyperMD from '../src/index'
import * as CodeMirror from 'codemirror'
import './style.css'

const textarea = document.getElementById('demo') as HTMLTextAreaElement
const editor = HyperMD.fromTextArea(textarea, {
  hmdModeLoader: false,
})

editor.setSize('100%', '100%')
textarea.style.display = 'none'

// Expose for debugging
;(window as any).editor = editor
;(window as any).HyperMD = HyperMD
;(window as any).CodeMirror = CodeMirror

editor.setValue(`# HyperMD Demo

**HyperMD** is a WYSIWYG Markdown editor for the modern web.

## Features

- [x] **Fold**: Hide markdown syntax
- [x] **Math**: $E=mc^2$ (requires Katex/MathJax)
- [x] **Table**: Align tables
- [x] **Images**: Display images inline
- [x] **Click**: Follow links

## Try typing here!
`)
