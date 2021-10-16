import { defineConfig } from 'vite-plugin-windicss'
import typography from 'windicss/plugin/typography'

export default defineConfig({
  extract: {
    include: ['.vuepress/theme/**/*.{ts,vue}']
  },
  plugins: [typography()]
})
