import { defineUserConfig, ViteBundlerOptions } from 'vuepress-vite'
import type { DefaultThemeOptions } from 'vuepress-vite'
import { path } from '@vuepress/utils'
import { resolve } from 'path'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import WindiCSS from 'vite-plugin-windicss'
import ViteRestart from 'vite-plugin-restart'

export default defineUserConfig<DefaultThemeOptions, ViteBundlerOptions>({
  bundlerConfig: {
    viteOptions: {
      resolve: {
        alias: {
          '@/': `${resolve(__dirname, '../.vuepress/theme')}/`
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
          dirs: ['../.vuepress/theme'],
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
          restart: '../.vuepress/config/*.*'
        })
      ]
    }
  },

  base: '/',
  lang: 'en-US',
  title: 'Ryan Moyo',
  description: 'Ryan Moyo',
  head: [],
  locales: {},

  // development
  debug: true,
  open: true,

  plugins: ['@vuepress/debug'],

  theme: path.resolve(__dirname, 'theme'),
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png'
  }
})
