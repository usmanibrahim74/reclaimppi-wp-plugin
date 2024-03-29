import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig(() => {
    return {
        root: 'resources/js',
        // root: 'resources/js/unbounce2',
        esbuildOptions:{
          target: 'es5'
        },
        build: {
            cssCodeSplit: true,
            rollupOptions: {
                input: {
                    claim1: './resources/js/claim1/index.html',
                    claim4: './resources/js/claim4/index.html',
                    claim5: './resources/js/claim5/index.html',
                    claim6: './resources/js/claim6/index.html',
                    claim7: './resources/js/claim7/index.html',
                    claim8: './resources/js/claim8/index.html',
                    unbounce1: './resources/js/unbounce1/index.html',
                    unbounce2: './resources/js/unbounce2/index.html',
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