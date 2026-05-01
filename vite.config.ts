import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   build: {
    outDir: 'docs',
    rolldownOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        notFound: resolve(import.meta.dirname, '404.html'),
        a2zml: resolve(import.meta.dirname, 'A2zml/index.html'),
        v2: resolve(import.meta.dirname, 'A2zml/v2/index.html'),
      },
    },
  },
})
