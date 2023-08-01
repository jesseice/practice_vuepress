import { defineUserConfig, defaultTheme } from "vuepress";
export default defineUserConfig({
  lang: "zh-CN",
  title: " VuePress ！",
  description: "VuePress 站点",
  head: [["link", { rel: "icon", href: "/images/logo.png" }]],
  theme: defaultTheme({
    // 默认主题配置
    navbar: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "文档",
        link: "/guide/one",
      },
    ],
    sidebar: {
      "/guide": [
        { text: "第一页", link: "/guide/one" },
        { text: "第二页", link: "/guide/two" },
      ],
    },
  }),
});
