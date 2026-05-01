import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
  },
  base: 'https://github.com/aedelnz/aedelnz.github.io', // 👈 必须加这个
   build: {
    outDir: 'dist',
    rolldownOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        a2zml: resolve(import.meta.dirname, 'A2zml/index.html'),
        v2: resolve(import.meta.dirname, 'A2zml/v2/index.html'),
      },
    },
  },
})
