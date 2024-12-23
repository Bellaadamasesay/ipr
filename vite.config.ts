import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'

export default defineConfig({
  plugins: [
    react(),
    eslint({
      include: ['src/**/*.ts', 'src/**/*.tsx'],
      exclude: ['node_modules/**', 'dist/**'],
      failOnError: false,
    }),
  ],
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
  build: {
    sourcemap: true,
  },
  server: {
    open: true,
  },
})

