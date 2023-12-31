import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "",
  description: "Sintone是一个专注于macOS/iOS开发的博客网站，提供独立开发技术、经验以及一人公司旅程收获的记录。我们主要开发小工具，并为海外用户提供app软件服务。通过Sintone，您可以获取到关于macOS/iOS开发的专业知识、技术分享和实用工具。我们致力于为海外用户提供高质量的软件服务。欢迎访问Sintone，了解更多关于macOS/iOS开发和海外软件服务的信息。",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: '独立开发经验',
        items: [
          // { text: 'CleanClip 的快捷键设计', link: '/indiemaker/cleanclip-shortcuts' },
          { text: 'Cloudflare + Resend + Gmail 免费企业邮件收发', link: '/indiemaker/enteremail/' },
        ]
      },
      {
        text: '一些猴子',
        items: [
          { text: 'AR+ 影子跑步怎么样？', link: '/inspiration/shadowrun' },
        ]
      },
      
    ],

    socialLinks: [
      { icon: 'twitter', link: 'https://twitter.com/s1ntone' },
      { icon: 'github', link: 'https://github.com/auv1107' }
    ],
  }
})
