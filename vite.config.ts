import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from "rollup-plugin-visualizer";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), visualizer({ open: false })],
  server: {
    host: '0.0.0.0',
  },
   build: {
    rolldownOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        a2zml: resolve(import.meta.dirname, 'A2zml/index.html'),
        v2: resolve(import.meta.dirname, 'A2zml/v2/index.html'),
      },
      onwarn(warning, warn) {
        if (warning.code === 'EVAL' && warning.message.includes('lottie-web')) {
          return
        }
        warn(warning)
      },
    },
  },
})
