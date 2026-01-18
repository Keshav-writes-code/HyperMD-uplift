declare global {
  namespace HyperMD {
    interface HelperCollection extends Object {
      // Editor.hmd Object
      // @see AddonAlias in src/addon/skeleton.ts
      // @see getAddon in src/core/addon.ts
    }

    interface EditorConfiguration {
      // addon may declare option items in its own .ts file
      // @see OptionName in src/addon/skeleton.ts
    }

    interface Editor {
      hmd: HelperCollection // containing some HyperMD addon/helper instances

      // addon may declare more methods and properties (aka. "Extension" in CodeMirror)
      // @see ExtName in src/addon/skeleton.ts
    }
  }
}

export type cm_t = CodeMirror.Editor

declare module 'codemirror' {
  /** initial value for options */
  // const Init: any // Exists

  /// SOME LEGACY METHODS

  // var modes: { [mode: string]: CodeMirror.Mode<any> } // Exists

  /**
   * Compare two positions, return 0 if they are the same,
   * a negative number when a is less, and a positive number otherwise.
   */
  // function cmpPos(a: CodeMirror.Position, b: CodeMirror.Position): number; // Exists

  function addClass(el: HTMLElement, className: string) // Maybe missing?
  function rmClass(el: HTMLElement, className: string)
  function contains(parent: HTMLElement, child: Node): boolean

  /// MODE AND MIME

  // function defineMIME(mime: string, mode: string);
  // function defineMode<T>(id: string, modefactory: CodeMirror.ModeFactory<T>, alias: string | string[]): void;

  // function startState<T>(mode: CodeMirror.Mode<T>): T;
  // function copyState<T>(mode: CodeMirror.Mode<T>, state: T): T;

  interface Mode<T> {
    innerMode?<U>(state: T): { state: U; mode: CodeMirror.Mode<U> }
  }

  /// Key Binding

  /** Multi-stroke key bindings can be specified by
   * separating the key names by spaces in the property name,
   * for example Ctrl-X Ctrl-V.
   *
   * When a map contains multi-stoke bindings or keys with modifiers that
   * are not specified in the default order (Shift-Cmd-Ctrl-Alt) */
  // type KeyMap = { // Exists?
  //   [keyName: string]: Command | ((cm: CodeMirror.Editor) => void) | string
  // }

  type BuiltinCommand =
    | 'selectAll'
    | 'singleSelection'
    | 'killLine'
    | 'deleteLine'
    | 'delLineLeft'
    | 'delWrappedLineLeft'
    | 'delWrappedLineRight'
    | 'undo'
    | 'redo'
    | 'undoSelection'
    | 'redoSelection'
    | 'goDocStart'
    | 'goDocEnd'
    | 'goLineStart'
    | 'goLineStartSmart'
    | 'goLineEnd'
    | 'goLineRight'
    | 'goLineLeft'
    | 'goLineLeftSmart'
    | 'goLineUp'
    | 'goLineDown'
    | 'goPageUp'
    | 'goPageDown'
    | 'goCharLeft'
    | 'goCharRight'
    | 'goColumnLeft'
    | 'goColumnRight'
    | 'goWordLeft'
    | 'goWordRight'
    | 'goGroupLeft'
    | 'goGroupRight'
    | 'delCharBefore'
    | 'delCharAfter'
    | 'delWordBefore'
    | 'delWordAfter'
    | 'delGroupBefore'
    | 'delGroupAfter'
    | 'indentAuto'
    | 'indentMore'
    | 'indentLess'
    | 'insertTab'
    | 'insertSoftTab'
    | 'defaultTab'
    | 'transposeChars'
    | 'newlineAndIndent'
    | 'toggleOverwrite'
    | 'save'
    | 'find'
    | 'findNext'
    | 'findPrev'
    | 'replace'
    | 'replaceAll'
    | 'newlineAndIndentContinueMarkdownList' // 'codemirror/addon/edit/continuelist'

  type Command = keyof CommandFunctions
  // var keyMap: { [keymapName: string]: KeyMap } // Exists in @types/codemirror?
  // var commands: CommandFunctions // Exists?

  interface CommandFunctions extends Record<BuiltinCommand, (cm: cm_t) => any> {
    hmdNewline: (cm: cm_t) => any
    hmdNewlineAndContinue: (cm: cm_t) => any
    hmdShiftTab: (cm: cm_t) => any
    hmdTab: (cm: cm_t) => any
  }

  // function normalizeKeyMap(keymap: KeyMap): object;

  // codemirror/mode/meta
  interface ModeMeta {
    name: string
    mime: string
    mode: string
    ext?: string[]
  }
  function findModeByName(lang: string): ModeMeta

  interface EditorConfiguration extends HyperMD.EditorConfiguration {
    autoCloseBrackets?: boolean
  }

  interface StringStream {
    lineOracle: any

    lookAhead(lineCount: number): string
  }

  interface LineWidget {
    on(event: 'redraw', fn: Function): void
    off(event: 'redraw', fn: Function): void
  }

  interface Editor extends CodeMirror.Doc, HyperMD.Editor {
    display: any
    options: any

    getAllMarks(): CodeMirror.TextMarker[]

    getTokenTypeAt(pos: CodeMirror.Position): string

    execCommand(cmd: Command): void

    listSelections(): { anchor: CodeMirror.Position; head: CodeMirror.Position; empty(): boolean }[]
    replaceSelections(replacements: string[], select?: 'around' | 'start'): void

    startOperation(): void
    endOperation(): void
  }

  interface TextMarker {
    changed(): void
    className: string

    on(eventName: 'beforeCursorEnter', handler: (this: CodeMirror.Editor) => void): void
    off(eventName: 'beforeCursorEnter', handler: (this: CodeMirror.Editor) => void): void

    on(
      eventName: 'clear',
      handler: (
        this: CodeMirror.Editor,
        from: CodeMirror.Position,
        to: CodeMirror.Position,
      ) => void,
    ): void
    off(
      eventName: 'clear',
      handler: (
        this: CodeMirror.Editor,
        from: CodeMirror.Position,
        to: CodeMirror.Position,
      ) => void,
    ): void

    on(eventName: 'hide' | 'unhide', handler: Function): void
    off(eventName: 'hide' | 'unhide', handler: Function): void
  }

  interface LineHandle {
    styles?: (string | number)[]
    parent: any

    lineNo(): number

    markedSpans?: { from: number | null; to: number | null; marker: CodeMirror.TextMarker }[]
  }

  interface LineView {
    line: CodeMirror.LineHandle
    lineN: number
    rest: CodeMirror.LineHandle[]
    hidden?: boolean
    text: HTMLPreElement
    measure?: {
      heights?: number[]

      cache?: object
      map?: (number | Text | HTMLSpanElement)[]

      caches?: object[]
      maps?: (number | Text | HTMLSpanElement)[][]
    }
  }
}
