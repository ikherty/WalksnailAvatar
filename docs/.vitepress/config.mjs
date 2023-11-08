import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Walksnail Avatar HD System",
  description: "Полезная информация про Walksnail Avatar HD Digital System",
  lang: "ru",
  //base: "/WalksnailAvatar/",
  head: [
    ["link", { rel: "icon", type: "image/x-icon", href: "/favicon.svg" }],
    ],
  themeConfig: {
    siteTitle: "Walksnail Avatar",
    logo: "/favicon.svg",
    returnToTopLabel: "Наверх",
    sidebarMenuLabel: "Меню",
    darkModeSwitchLabel: "Сменить тему",
    outline: { label: "Содержание:" },
    docFooter: {
      prev: "Назад",
      next: "Далее",
    },
    editLink: {
      pattern: "https://github.com/ikherty/WalksnailAvatar/edit/master/docs/:path",
      text: "Редактировать эту страницу на GitHub",
    },

    sidebar: [
      {
        text: "Инструкции",
        collapsible: false,
        items: [
          { text: "FAQ", link: "/FAQ" },
          { text: "Подключение", link: "/building" },
          { text: "Прошивка", link: "/firmware" },
          { text: "Настройки оборудования", link: "/settings" },
          { text: "Известные проблемы", link: "/problems" },
        ]
      },
      {
        text: "Полезные материалы",
        collapsible: false,
        items: [
          { text: "Тесты и замеры", link: "/test" },
          { text: "Аксессуары", link: "/shopping" },
          { text: "3D печать", link: "/3D" },
        ]
      },
    ],

    socialLinks: [
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12c0-6.627-5.373-12-12-12zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/></svg>',
        },
        link: "https://t.me/hdfpv",
      },
      { icon: 'github', link: 'https://github.com/ikherty/WalksnailAvatar' }
    ]
  }
})
