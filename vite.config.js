import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig(() => {
    return {
        root: 'resources/js',
        // root: 'resources/js/unbounce',
        build: {
            cssCodeSplit: true,
            rollupOptions: {
                input: {
                    claim1: './resources/js/claim1/index.html',
                    claim2: './resources/js/claim2/index.html',
                    claim3: './resources/js/claim3/index.html',
                    claim4: './resources/js/claim4/index.html',
                    claim5: './resources/js/claim5/index.html',
                }
            },
            outDir: '../../public/dist'
            // outDir: '../../../public/dist'
        },
        plugins: [vue(), vueJsx()],
        resolve: {
          alias: {
            '@': fileURLToPath(new URL('./resources/js', import.meta.url))
          }
        }
      }
})