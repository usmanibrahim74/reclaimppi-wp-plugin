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
                    claim: './resources/js/cliam*/index.html',
                    
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