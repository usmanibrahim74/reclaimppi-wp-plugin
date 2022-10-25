import { fileURLToPath, URL } from 'node:url'

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
                    app: './resources/views/app.blade.php', // default
                },
            },
            outDir: 'public/dist'
        },
        plugins: [vue(), vueJsx()],
        resolve: {
          alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
          }
        }
      }
})