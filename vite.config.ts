import { resolve } from 'path'
import { defineConfig } from 'vite'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import WindiCSS from 'vite-plugin-windicss'
import ViteRestart from 'vite-plugin-restart'

export default defineConfig({
  resolve: {
    alias: {
      '@/': `${resolve(__dirname, '.vuepress/theme')}/`
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          windicss: ['windicss']
        }
      }
    }
  },
  plugins: [
    Components({
      dirs: ['.vuepress/theme/components'],
      extensions: ['vue', 'ts'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [
        IconsResolver({
          componentPrefix: ''
        })
      ],
      dts: true
    }),
    Icons(),
    WindiCSS(),
    ViteRestart({
      restart: '.vuepress/config/*.*'
    })
  ]
})
