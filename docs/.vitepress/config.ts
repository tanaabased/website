import { defineConfig } from 'vitepress'
import theme from '@lando/vitepress-theme-default-plus'

export default defineConfig({
  extends: theme,
  lang: 'en-US',
  title: 'TMS Website',
  description: 'Main marketing site',
})
