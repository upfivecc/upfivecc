
export default [
  {
    "content": "这篇文章包含markdown语法基本的内容。\n\n在markdown里可以使用 \\ 对特殊符号进行转义。  \n\n# 1. 标题\n\n**语法**\n```md\n# This is an <h1> tag\n## This is an <h2> tag\n### This is an <h3> tag\n#### This is an <h4> tag\n```\n\n**实例**\n\n# This is an h1 tag\n## This is an h2 tag\n### This is an h3 tag\n#### This is an h4 tag\n\n# 2. 强调和斜体\n\n**语法**\n```md\n*This text will be italic*\n_This will also be italic_\n\n**This text will be bold**\n__This will also be bold__\n```\n\n**实例**\n\n*This text will be italic*\n_This will also be italic_\n\n**This text will be bold**\n__This will also be bold__\n\n# 3. 有序列表和无序列表\n\n**语法**\n```md\n* Item 1\n* Item 2\n* Item 3\n\n1. Item 1\n2. Item 2\n3. Item 3\n```\n\n**实例**\n* Item 1\n* Item 2\n* Item 3\n\n1. Item 1\n2. Item 2\n3. Item 3\n\n# 4. 图片\n\n**语法**\n```\n![img-name](img-url)\n```\n\n**实例**\n![微信公众号](https://storage.guangzhengli.com/images/wechat-official-account.png)\n\n# 5. 超链接\n\n**语法**\n```\n[link-name](link-url)\n```\n\n**实例**\n\n[微信公众号链接](https://storage.guangzhengli.com/images/wechat-official-account.png)\n\n# 6. 引用\n\n**语法**\n```md\n> 引用本意是引用别人的话之类  \n```\n\n**实例**\n\n> If you please draw me a sheep!  \n> 不想当将军的士兵, 不是好士兵.  \n\n# 7. 单行代码\n\n**语法**\n```\n`This is an inline code.`\n```\n\n**实例**\n\n`同样的单行代码, 我经常用来显示特殊名词`\n\n# 8. 多行代码\n\n**语法**\n\n```md\n​```js\nfor (var i=0; i<100; i++) {\n    console.log(\"hello world\" + i);\n}\n​```\n```\n\n**实例**\n\n```js\nfor (var i=0; i<100; i++) {\n    console.log(\"hello world\" + i);\n}\n```\n\n也可以通过缩进来显示代码, 下面是示例:  \n\n    console.loe(\"Hello_World\");\n\n# 9. 表格\n\n## Table\n\n| Table Header 1 | Table Header 2 | Table Header 3 |\n| - | - | - |\n| Division 1 | Division 2 | Division 3 |\n| Division 1 | Division 2 | Division 3 |\n| Division 1 | Division 2 | Division 3 |\n\n# 参考链接\n\n- https://guides.github.com/features/mastering-markdown/  \n- https://help.github.com/articles/basic-writing-and-formatting-syntax/",
    "title": "Markdown 基本用法",
    "date": "2022-04-05T20:10:00+08:00",
    "updated": "2022-04-05T20:10:00+08:00",
    "featured": true,
    "summary": "这篇文章包含markdown语法基本的内容。",
    "keywords": [
      "hello",
      "world"
    ],
    "_meta": {
      "filePath": "hello-world.md",
      "fileName": "hello-world.md",
      "directory": ".",
      "extension": "md",
      "path": "hello-world"
    },
    "slug": "hello-world"
  },
  {
    "content": "这是一个 Nextjs 博客模板，本文会介绍这个模板的一些基本用法。\n\n## 1. 如何编写博客\n\n这个仓库的博客文件需要放在 `src/content/blog` 目录下，可以是 markdown 文件，也可以是 mdx 文件。\n\n有以下这些元数据需要用户自行根据需要进行配置：\n\n- `title`: 博客标题\n- `date`: 博客发布日期\n- `updated`: 博客更新日期\n- `keywords`: 博客关键词，优化 SEO\n- `featured`: 是否放在首页\n- `summary`: 博客摘要\n\n## 2. 博客配置\n\n博客的所有配置都集中在 `src/lib/config.ts` 文件中，这样做的好处是：\n\n1. 集中管理：所有配置都在一个文件中，方便维护和修改\n2. 类型安全：使用 TypeScript 可以获得类型检查和自动补全\n3. 复用性：避免重复的配置散落在各个文件中\n4. 一致性：确保所有地方使用相同的配置值\n\n### 2.1 站点基本配置\n\n```typescript\nsite: {\n  title: \"你的博客标题\",\n  name: \"你的博客名称\",\n  description: \"博客描述\",\n  keywords: [\"关键词1\", \"关键词2\"],\n  url: \"https://你的域名.com\",\n  baseUrl: \"https://你的域名.com\",\n  image: \"https://你的域名.com/og-image.png\",\n  favicon: {\n    ico: \"/favicon.ico\",\n    png: \"/favicon.png\",\n    svg: \"/favicon.svg\",\n    appleTouchIcon: \"/favicon.png\",\n  },\n  manifest: \"/site.webmanifest\",\n}\n```\n\n这些配置用于：\n- 网站的基本信息展示\n- SEO 优化\n- 浏览器标签页图标\n- 社交媒体分享预览\n\n### 2.2 作者信息配置\n\n```typescript\nauthor: {\n  name: \"你的名字\",\n  email: \"你的邮箱\",\n  bio: \"个人简介\",\n}\n```\n\n作者信息会用于：\n- 首页展示\n- RSS 订阅源信息\n- 博客文章的作者信息\n\n### 2.3 社交媒体配置\n\n```typescript\nsocial: {\n  github: \"https://github.com/你的用户名\",\n  x: \"https://x.com/你的用户名\",\n  xiaohongshu: \"https://www.xiaohongshu.com/user/profile/你的ID\",\n  wechat: \"你的微信二维码图片链接\",\n  buyMeACoffee: \"https://www.buymeacoffee.com/你的用户名\",\n}\n```\n\n这些链接会显示在：\n- 首页的社交媒体链接区域\n- 导航栏的社交媒体图标\n\n### 2.4 评论系统配置\n\n```typescript\ngiscus: {\n  repo: \"你的GitHub仓库名\",\n  repoId: \"仓库ID\",\n  categoryId: \"分类ID\",\n}\n```\n\n使用 Giscus 作为评论系统，需要：\n1. 在 GitHub 上安装 Giscus 应用\n2. 在你的仓库中启用 Discussions\n3. 获取配置信息并填入这里\n\n### 2.5 导航菜单配置\n\n```typescript\nnavigation: {\n  main: [\n    { \n      title: \"文章\", \n      href: \"/blog\",\n    },\n    // 可以添加更多导航项\n  ],\n}\n```\n\n这里配置网站的导航菜单，支持：\n- 普通链接\n- 带子菜单的下拉菜单\n\n### 2.6 SEO 配置\n\n```typescript\nseo: {\n  metadataBase: new URL(\"https://你的域名.com\"),\n  alternates: {\n    canonical: './',\n  },\n  openGraph: {\n    type: \"website\" as const,\n    locale: \"zh_CN\",\n  },\n  twitter: {\n    card: \"summary_large_image\" as const,\n    creator: \"@你的推特用户名\",\n  },\n}\n```\n\n这些配置用于：\n- 搜索引擎优化\n- 社交媒体分享卡片\n- 网站元数据\n\n### 2.7 RSS 订阅配置\n\n```typescript\nrss: {\n  title: \"你的博客标题\",\n  description: \"博客描述\",\n  feedLinks: {\n    rss2: \"/rss.xml\",\n    json: \"/feed.json\",\n    atom: \"/atom.xml\",\n  },\n}\n```\n\n这些配置用于生成：\n- RSS 2.0 订阅源\n- JSON Feed\n- Atom 订阅源\n\n## 3. 如何修改配置\n\n1. 打开 `src/lib/config.ts` 文件\n2. 根据你的需求修改相应的配置项\n3. 保存文件后，Next.js 会自动重新构建并应用新的配置\n\n注意事项：\n- 确保所有 URL 都是有效的\n- 图片链接应该是可访问的\n- 社交媒体链接要填写完整的 URL\n- 配置修改后，建议检查网站的：\n  - 首页展示\n  - 导航菜单\n  - SEO 信息\n  - 社交媒体分享效果\n  - RSS 订阅源\n\n## 4. 如何生成 RSS 订阅源\n\n修改 scripts/generate-rss.js 文件中的配置，然后运行：\n\n```bash\nnpm run generate-rss\n```\n\n## 5. 如何生成 Sitemap\n\n修改 scripts/generate-sitemap.js 文件中的配置，然后运行：\n\n```bash\nnpm run generate-sitemap\n```",
    "title": "博客模板使用介绍",
    "date": "2022-04-05T21:10:00+08:00",
    "updated": "2022-04-05T21:10:00+08:00",
    "featured": true,
    "summary": "这是一个 Nextjs 博客模板，本文会介绍这个模板的一些基本用法",
    "keywords": [
      "hello",
      "world"
    ],
    "_meta": {
      "filePath": "intro.md",
      "fileName": "intro.md",
      "directory": ".",
      "extension": "md",
      "path": "intro"
    },
    "slug": "intro"
  }
]