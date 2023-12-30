import type { AppOption } from "@/types/AppOption";
import { Theme } from "@/types/Theme";

export const option: AppOption = {
  owner: "Penyo",
  socialLinks: [
    {
      link: "https://github.com/penyoofficial/",
      icon: "https://github.com/favicons/favicon.png",
      name: "GitHub",
    },
    {
      link: "https://gitee.com/penyo/",
      icon: "https://gitee.com/favicon.ico",
      name: "Gitee",
    },
    {
      link: "https://steamcommunity.com/id/penyoofficial/",
      icon: "https://store.steamchina.com/favicon.ico",
      name: "Steam",
    },
    {
      link: "https://account.xbox.com/profile?gamertag=penyoofficial",
      icon: "https://support.xbox.com/favicon.png",
      name: "Xbox",
    },
    {
      link: "https://music.163.com/#/user/home?id=507084557",
      icon: "https://s1.music.126.net/style/favicon.ico",
      name: "Netease Music",
    },
    {
      link: "https://space.bilibili.com/92465406",
      icon: "https://www.bilibili.com/favicon.ico",
      name: "Bilibili",
    },
    {
      link: "https://t.me/penyoofficial",
      icon: "https://web.tel.onl/assets/img/favicon-32x32.png",
      name: "Telegram",
    },
  ],
  dataSource: "https://raw.githubusercontent.com/penyoofficial/penyo-portal-rd/main/",

  bottomFunctions: {
    support: [
      { name: "聚合图床", link: "https://www.superbed.cn/" },
      { name: "木星计划", link: "https://penyoofficial.github.io/project-jupiter/" },
    ],
  },

  global: {
    theme: Theme.BUBBLEGUM,
    backgroundMusic: "https://music.163.com/song/media/outer/url?id=1853327677.mp3",
  },

  projectName: "Project MDHu",
  icpInfo: "互联网 ICP 备案：皖ICP备2023005063号",
};
