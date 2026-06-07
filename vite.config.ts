import { resolve } from 'node:path'
import process from 'node:process'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router'],
      dts: 'src/types/auto-imports.d.ts',
    }),
    Components({
      resolvers: [NaiveUiResolver()],
      dts: 'src/types/components.d.ts',
      directoryAsNamespace: true,
    }),
  ],

  // prevent vite from obscuring rust errors
  clearScreen: false,
  server: {
    // Tauri expects a fixed port
    port: 5173,
    strictPort: true,
    // access the dev server from Tauri
    host: '0.0.0.0',
  },
  // Env variables starting with the item of `envPrefix` will be exposed in tauri's source code through `import.meta.env`.
  envPrefix: ['VITE_', 'TAURI_ENV_*'],
  build: {
    // Tauri uses WebView2 on Windows and WKWebView on macOS/Linux
    target: process.env.TAURI_ENV_PLATFORM === 'windows' ? 'chrome105' : 'safari16',
    // don't minify for debug builds
    minify: !process.env.TAURI_ENV_DEBUG ? 'esbuild' : false,
    // produce sourcemaps for debug builds
    sourcemap: !!process.env.TAURI_ENV_DEBUG,
  },
})
