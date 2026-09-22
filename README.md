# ume

A magazine-style Astro blog theme. Mincho titles, gothic body, ume green. Light only.

[简体中文](README.zh-CN.md)

Use this repository as a GitHub template, or install it as a dependency and keep your own `ume.config.ts` at the site root.

## Features

- Markdown posts in `src/content/blog/`
- Home: one landscape, then a lead note and a date-rail stream (a thumb only when the note has a cover)
- Notes at `/notes/<slug>/`, with photos, a contents list, and older/newer links
- Archive by year, kinds (`/categories/`), tags, and pagination
- About, RSS, 404, sitemap
- One config file: `ume.config.ts`
- Light theme

## Quick start

```bash
git clone https://github.com/fennlee/ume.git
cd ume
npm install
npm run dev
```

Node 22+.

## As a dependency

```json
{
  "dependencies": {
    "ume": "github:fennlee/ume"
  }
}
```

Import `ume` from `ume` (or `ume/src`) in `astro.config`. Put `ume.config.ts` at the site root — the theme reads it as `ume/config`. Write posts in the site's `src/content/blog/`, and put photos in the site's `public/`.

## Project structure

```text
/
├── ume.config.ts        # site, home, about, archive
├── src/
│   ├── content/blog/    # posts
│   ├── pages/
│   ├── layouts/
│   ├── components/
│   └── styles/global.css
└── public/
```

A post needs `title`, `date`, `description`, and `category` (`note` or `travel`). Optional: `tags`, `lang`, `cover`, `images`.

## Configuration

Edit [`ume.config.ts`](ume.config.ts):

| Key | |
|---|---|
| `site` | name, wordmark, motto, url, author, email, github, favicon, years |
| `nav` | primary links |
| `home` | title, lede, hero, streamLabel, pageSize, pin (a slug; empty means the newest) |
| `archive` / `tags` / `categories` | page titles and kind labels |
| `about` | about page |
| `notFound` | 404 copy |
| `ui` | fixed UI strings |
| `social` | footer links; empty by default |

Point `home.hero` and post covers at files in `public/`. Do not patch theme source to change a site.

Colors and type sizes live in `src/styles/global.css`.

## Commands

| Command | |
|---|---|
| `npm run dev` | local server |
| `npm run build` | production build |
| `npm run check` | type check |
| `npm run preview` | preview `dist/` |

## License

[MIT](LICENSE)
