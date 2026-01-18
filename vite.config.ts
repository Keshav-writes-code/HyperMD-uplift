import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'HyperMD',
      fileName: 'index',
    },
    rollupOptions: {
      external: ['codemirror'],
      output: {
        globals: {
          codemirror: 'CodeMirror',
        },
      },
    },
  },
  plugins: [dts()],
  server: {
    open: '/demo/index.html',
  },
  resolve: {
    alias: {
      'hypermd-uplift': resolve(__dirname, 'src/index.ts'),
    },
  },
})
