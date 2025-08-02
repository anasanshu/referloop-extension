import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import webExtension from "vite-plugin-web-extension";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
      react(),
      webExtension({
        manifest: './public/manifest.json',
        additionalInputs: [
          'src/background/index.ts',
          'src/content/index.ts',
        ],
      }),
  ],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})
