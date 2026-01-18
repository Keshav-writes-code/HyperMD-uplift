import * as HyperMD from 'hypermd-uplift'
import 'codemirror/lib/codemirror.css'
// In a real app using the published package, this would be:
// import 'hypermd-uplift/style.css'
// But since we are linking to local source via file:../../, we rely on the build output or source.
// If using source alias in vite.config.js, styles are imported by JS.

const editor = HyperMD.fromTextArea(document.getElementById('editor') as HTMLTextAreaElement)
editor.setSize('100%', '500px')
