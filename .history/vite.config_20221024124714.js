import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig(() => {
    return {
        root: 'resources/js',
        build: {
            rollupOptions: {
                input: {
                    claim1: './resources/js/cliam1/index.html',
                    claim2: './resources/js/cliam2/index.html',
                }
            },
            outDir: '../../public/dist'
        },
        plugins: [vue(), vueJsx()],
        resolve: {
          alias: {
            '@': fileURLToPath(new URL('./resources/js', import.meta.url))
          }
        }
      }
})