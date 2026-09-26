# lone

An Astro blog theme. Mincho titles, gothic body, ume green. Light and dark.

[简体中文](README.zh-CN.md)

Clone this repo as a starter, or add it as a dependency and keep your own `lone.config.ts` at the site root.

## Features

- Markdown posts in `src/content/blog/`
- Home: one landscape, then a lead note and a date-rail stream
- Notes at `/notes/<slug>/`, with photos, a contents list, and older/newer links
- Archive by year, kinds (`/categories/`), tags, and pagination
- About, RSS, 404, sitemap
- One config file: `lone.config.ts`
- Light and dark mode

## Quick start

```bash
git clone https://github.com/llsi/lone.git
cd lone
npm install
npm run dev
```

Node 22+.

## As a dependency

```json
{
  "dependencies": {
    "lone": "github:llsi/lone"
  }
}
```

Import `lone` from `lone` (or `lone/src`) in `astro.config`. Put `lone.config.ts` at the site root — the theme reads it as `lone/config`. Write posts in the site's `src/content/blog/`. Put photos in the site's `public/`.

## Project structure

```text
/
├── lone.config.ts
├── src/
│   ├── content/blog/
│   ├── pages/
│   ├── layouts/
│   ├── components/
│   ├── lib/
│   └── styles/
│       ├── fonts.css
│       └── global.css
└── public/
    ├── fonts/
    └── images/
```

A post needs `title`, `date`, `description`, and `category` (`note` or `travel`). Optional: `tags`, `lang`, `cover`, `images`, `toc`.

## Configuration

Edit [`lone.config.ts`](lone.config.ts):

| Key | |
|---|---|
| `site` | name, wordmark, motto, url, author, email, github, favicon, years |
| `nav` | primary links |
| `home` | title, lede, hero, streamLabel, pageSize, pin |
| `archive` / `tags` / `categories` | page titles and kind labels |
| `about` | about page |
| `notFound` | 404 copy |
| `ui` | chrome strings |

Point `home.hero` and post covers at files in `public/`. Do not edit theme source to restyle a site.

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
