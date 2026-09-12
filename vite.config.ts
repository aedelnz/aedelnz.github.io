import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        a2zml: resolve(import.meta.dirname, 'A2zml/index.html'),
        v2: resolve(import.meta.dirname, 'A2zml/v2/index.html'),
        404: resolve(import.meta.dirname, '404.html'),
      },
    },
  },
})