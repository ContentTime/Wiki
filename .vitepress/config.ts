import UnoCSS from "unocss/vite";
import { defineConfig } from 'vitepress';
import { DefaultTheme } from 'vitepress';
import { tabsMarkdownPlugin } from "vitepress-plugin-tabs";

function sidebar(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'ContentTime',
      collapsed: false,
      items: [
        { text: 'Что такое ваш ContentTime?', link: '/server' },
        { text: 'Как получить проходку?', link: '/server/whitelist' },
        { text: 'Правила', link: '/server/rules' },
        { text: 'Для тестеров', link: '/server/for-testers' },
      ],
    },
    {
      text: 'Фишки сервера',
      collapsed: false,
      items: [
        { text: 'Дебаг палочка', link: '/server/features/debugstick' },
        { text: 'Команды сервера', link: '/server/features/cmd-list' },
        { text: 'Кастомные крафты', link: '/server/features/custom-crafts' },
      ],
    },
    {
      text: 'Для сборок',
      collapsed: false,
      items: [
        { text: 'Начало модинга', link: '/server/mods/start' },
        { text: 'EmoteCraft', link: '/server/mods/emotecraft' },
        { text: 'PlasmoVoice', link: '/server/mods/plasmovoice' },
        { text: 'Готовая сборка', link: '/server/mods/modpack' },
      ],
    },
    {
      text: 'Документы',
      collapsed: false,
      items: [
        { text: 'Условия использования', link: '/server/legal/terms-of-service' },
        { text: 'Политика конфиденциальности', link: '/server/legal/privacy-policy' },
        { text: 'Политическая партия', link: '/server/legal/polit' },
      ],
    },
  ];
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: {
    optimizeDeps: {
      exclude: ["vitepress"],
    },
    plugins: [UnoCSS()],
    css: { preprocessorOptions: { scss: { api: 'modern-compiler' } } }
  },
  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin);
    },
  },
  head: [["link", { rel: "icon", href: "/assets/ctime-logo.svg" }]],

  lang: "ru-RU",
  title: "Вики ContentTime",
  description: "Вики с полезной информацией для игроков ContentTime",

  srcDir: "src",
  cleanUrls: true,
  lastUpdated: false,
  sitemap: {
    hostname: "https://wiki.content-time.pro",
  },
  

  themeConfig: {
    footer: {
      message: 'Лицензия CC BY-NC-SA 4.0.',
      copyright: new Date().getFullYear() + '. <a href="https://content-time.pro">ContentTime</a>',
    },
    notFound: {
      code: "Ошибка 404",
      title: "Страница не найдена",
      quote: "Возможно, она была удалена, либо же переименована без перенаправления. Если вы думаете, что здесь не должно быть этой ошибки, сообщите о ней в Discord сервере/отправьте исправление на GitHub.",
      linkText: "Вернуться на главную",
    },

    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "Поиск",
            buttonAriaLabel: "Поиск страницы",
          },
          modal: {
            noResultsText: "Результатов не найдено по запросу",
            resetButtonTitle: "Очистить",
            footer: {
              selectText: "- выбрать",
              navigateText: "- переключение между результатами",
              closeText: "- закрыть",
            },
          },
        },
      },
    },
    

    sidebarMenuLabel: "Меню",
    darkModeSwitchLabel: "Режим",
    returnToTopLabel: "Наверх",
    docFooter: {
      prev: "Предыдущая страница",
      next: "Следующая страница",
    },
    outline: {
      label: "Содержание",
      level: [2, 3],
    },

    editLink: {
      pattern: "https://github.com/contenttime/wiki/edit/main/src/:path",
      text: "Править",
    },

    lastUpdated: {
      text: "Обновлено",
      formatOptions: {
        dateStyle: "medium",
        timeStyle: "medium",
      },
    },

    logo: {
      dark: "/assets/ctime-logo.svg",
      light: "/assets/light/p2g-wiki-logo.svg",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Главная", link: "/" },
      { text: "Сервер", link: "/server/", activeMatch: "server/*" },
      { text: "Сайт", link: "/site/", activeMatch: "site/*" },
    ],

    sidebar: sidebar(),

    socialLinks: [
      { icon: "discord", link: "https://discord.gg/contenttime" },
      { icon: "github", link: "https://github.com/contenttime/wiki" },
    ],
  },
});
