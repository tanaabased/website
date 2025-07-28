import { defineConfig } from '@lando/vitepress-theme-default-plus/config';

export default defineConfig({
  lang: 'en-US',
  title: 'TMS Website',
  description: 'Main marketing site',
  themeConfig: {
    collections: false,
    contributors: false,
    sidebar: {},
  },
});
