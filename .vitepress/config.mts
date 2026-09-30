import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "每日一句",
  description: "每日一句 文档",

  lastUpdated: true,
  cleanUrls: true,

  head: [
    ['link', {
      rel: 'icon',
      href: '/favicon.svg'
    }]
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },

    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: '开始使用',
        link: '/getting-started',
        items: [
          { text: 'HTTP API', link: '/getting-started/http-api' },
          { text: '每日多言 CI 插件', link: '/getting-started/stc-plugin' },
          { text: 'EI 名句一言', link: '/getting-started/extraisland-provider' }
        ]
      },
      {
        text: '关于项目',
        items: [
          { text: '反馈', link: '/feedback' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/dlystc' }
    ]
  }
})
