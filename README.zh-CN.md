# ume

Astro 博客主题。标题明朝、正文角哥、青梅绿。只有白天。

[English](README.md)

![首页](docs/screenshot.jpg)

用这个仓库当 GitHub 模板，或作为依赖，在站点根目录放自己的 `plum.config.ts`。

## 功能

- Markdown 文章（`src/content/blog/`）
- 首页一张全幅风景，下面是头条和带日期纵列的笔记流（有封面才出缩略图）
- 笔记在 `/notes/<slug>/`
- 按年归档、分类（`/categories/`）、标签、分页
- About、RSS、404、sitemap
- 一份配置：`plum.config.ts`
- 浅色

## 快速开始

```bash
git clone https://github.com/hareai/plum.git
cd plum
npm install
npm run dev
```

Node 22+。

## 目录

```text
/
├── plum.config.ts
├── src/
│   ├── content/blog/
│   ├── pages/
│   └── styles/global.css
└── public/
```

文章头：`title`、`date`、`description`、`category`（`note` | `travel`），可选 `tags`、`lang`、`cover`、`images`。

## 配置

改 [`plum.config.ts`](plum.config.ts)：

| 键 | |
|---|---|
| `site` | 站名、网址、邮箱、GitHub、favicon、年份 |
| `nav` | 顶栏 |
| `home` | 标题、导语、头图、流标题、每页条数、pin（slug；空则最新一篇） |
| `archive` / `tags` / `categories` | 归档、标签、分类 |
| `about` | 关于页 |
| `notFound` | 404 |
| `ui` | 固定界面文案 |

照片放站点 `public/`，用配置指向它们。不要改主题源码。

颜色在 `src/styles/global.css`。

## 命令

| 命令 | |
|---|---|
| `npm run dev` | 开发服务器 |
| `npm run build` | 生产构建 |
| `npm run check` | 类型检查 |
| `npm run preview` | 预览 `dist/` |

## 许可

[MIT](LICENSE)
