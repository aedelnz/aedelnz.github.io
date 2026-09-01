import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  input: {
    main: resolve(import.meta.dirname, 'index.html'),
    a2zml: resolve(import.meta.dirname, 'A2zml/index.html'),
    v2: resolve(import.meta.dirname, 'A2zml/v2/index.html'),
    404: resolve(import.meta.dirname, '404.html'),
  },
    server: {
    proxy: {
      '/baidu-suggestion': {
        target: 'https://suggestion.baidu.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/baidu-suggestion/, ''),
      },
    },
  },
})
