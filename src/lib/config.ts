export const config = {
  site: {
    title: "Upfive blog",
    name: "Upfive blog",
    description: "Upfive blog",
    keywords: ["Upfive blog", "AI", "Web3", "Full Stack Developer"],
    url: "https://upfive.cc",
    baseUrl: "https://upfive.cc",
    image: "https://xxx.com/og-image.png",
    favicon: {
      ico: "/favicon.ico",
      png: "/favicon.png",
      svg: "/favicon.svg",
      appleTouchIcon: "/favicon.png",
    },
    manifest: "/site.webmanifest",
    rss: {
      title: "Upfive blog",
      description: "Thoughts on Full-stack development, AI",
      feedLinks: {
        rss2: "/rss.xml",
        json: "/feed.json",
        atom: "/atom.xml",
      },
    },
  },
  author: {
    name: "upfive",
    email: "upfive@outlook.com",
    bio: "每一个不曾起舞的日子，都是对生命的辜负， \r\n 一个还在不断学习，重塑自我的开发者。",
  },
  social: {
    github: "https://github.com/upfive",
    x: "https://x.com/upfive",
    xiaohongshu: "https://www.xiaohongshu.com/user/profile/68ae5777000000001a0093a2",
    wechat: "https://ps.ssl.qhimg.com/t02b9c1ee9104934135.jpg",
    buyMeACoffee: "https://www.buymeacoffee.com/xxx",
  },
  giscus: {
    repo: "guangzhengli/hugo-ladder-exampleSite",
    repoId: "R_kgDOHyVOjg",
    categoryId: "DIC_kwDOHyVOjs4CQsH7",
  },
  navigation: {
    main: [
      { 
        title: "文章", 
        href: "/blog",
      },
      { 
        title: "课程", 
        href: "/course",
      },
      { 
        title: "动态", 
        href: "/timeline",
      },
      { 
        title: "服务", 
        href: "/hacker-menu",
      }
    ],
  },
  seo: {
    metadataBase: new URL("https://www.upfive.cc"),
    alternates: {
      canonical: './',
    },
    openGraph: {
      type: "website" as const,
      locale: "zh_CN",
    },
    twitter: {
      card: "summary_large_image" as const,
      creator: "@xxx",
    },
  },
};
