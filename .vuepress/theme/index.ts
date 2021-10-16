import { ThemeObject } from '@vuepress/core'
import { path } from '@vuepress/utils'
import {} from '@vuepress/plugin-debug'

const uselessTheme: ThemeObject = {
  name: 'vuepress-theme-useless',
  extends: '@vuepress/theme-default',
  layouts: {
    Layout: path.resolve(__dirname, 'u-layout.vue')
  }
}

export default uselessTheme
