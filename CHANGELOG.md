# Changelog

Format: [Keep a Changelog](https://keepachangelog.com/en/1.1.0/). Versioning: [SemVer](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Renamed

- The theme is `ume`, not `plum`. `plum` reads as the fruit and `green plum` in
  the motto compounded the ambiguity; `ume green` is the actual colour name and
  what the page is painted in. Presentation layer only — `site.name`,
  `wordmark`, `home.title`, `ui.footTheme`, and the motto
  `Paper, ume green, and code.`.
- Engineering identifiers are now `ume` as well, so the name is consistent end
  to end: npm package `ume`, the `ume` integration and `umeSrc()`, the
  `ume.config.ts` filename, and the `ume/config` import path. The upstream repo
  was already renamed to `fennlee/ume`, so the pin now resolves to a matching
  name. Downstream consumers import `ume/config` and pin
  `github:fennlee/ume`; the one existing consumer is updated in the same pass,
  so nothing is left on the old identifier.

### Removed

- The poems page and its whole surface: `src/pages/poems.astro`, the `poems` content collection, every `book-*` / `poem-*` style block, the `--f-verse` / `--lh-verse` tokens, the `poems` config block, the `poems` / `emptyPoems` / `ariaYears` / `bookLabel` / `poemCount` UI strings, the robots `Disallow: /poems/`, the poems `noindex` rule, and the sitemap filter. `.book-count` stays — the archive year header uses it.
- Dead UI keys `backToKinds` and `shelfMore` (defined in `ume.config.ts`, consumed nowhere) and the `.page-wide` rule that no markup carried.
- `.prose .footnotes` / `.prose a[data-footnote-backref]`: no footnote plugin ships in this integration, so nothing could ever emit those nodes.

### Changed

- Article table of contents: gothic chrome with a Contents label, so it no longer reads as the start of the body.
- Home browse: By subject first (wide column), By kind on the right.
- Language marks in chrome: `en` / `zh`.
- About: letter, pull-quote, and stack rows instead of one undifferentiated dump.
- Home feature: `home.pin` slug, else the newest. Stream omits that note. Eyebrow is Recommended when pinned.
- Footer: colophon — brand and motto, then a hairline, then copyright and theme credit.
- Hero and lead titles get `text-wrap: balance`.
- Kicker tracking tightened from 0.2em to 0.16em (2.4px reads as scattered at 12px).
- About pull-quote gets a bottom rule and real air below, so it stops colliding with the stack. Stack rows 12px → 16px padding, so the hairline works as a shelf. Stats gets its own rule.
- Article cover: back-link and date on one line (`← Notes · 2025.05.09`) with a dot between them; the title keeps its own line.
- Anchor scrolling is smooth, with a reduced-motion guard; heading `scroll-margin-top` 12px → 32px.
- `sharp` is a declared dependency. `src/lib/images.ts` imports it to read intrinsic sizes, and it previously resolved only through Astro's optional-dependency hoisting — one npm layout away from a build failure on a fresh install.
- CI: `.github/workflows/ci.yml` runs `astro check` then `build` on pushes to and PRs against `main`. The branch ruleset allowed no status checks, so a red build was mergeable.

### Fixed

- `/page/2/` and deeper repeated the whole hero and the featured note, so page two opened on ~500px of content identical to the front page. Deep pages now open on a quiet masthead (`Latest` left, `Page N` right) and go straight to the stream.
- Home feature rule was a 136px ume bar over the date rail only, reading as a truncated fragment. One rule now spans the row above the eyebrow.
- Hero scrim: the kicker now sits on a dark ground. `2026 · 20 notes` lands at ~61% of the frame where the blossom is still bright (region average 146, peaks 236) — a 0.14→0.22 wash measured 2.7:1 for 12px white. Hold 0.48 through the kicker, deepen into the lede.
- Phone date rail 3.5rem → 4rem. `2026/01` measures 42px; at 56px the month ran 1px past the 2px rule. 64px leaves a full gutter.
- Phone nav gap 12px → 16px. Four links at 11–13px apart read as one word.
- Phone fenced blocks gave no cue that code continued past the fold. On the live corpus one block measured 1700px of content inside a 348px column with `overflow-x: auto` and nothing saying so; the trailing edge now carries an inset shadow. Desktop is untouched.

### Added

- First public cut: Astro blog theme. Mincho titles, gothic body, ume green (`#00865b`), light only.
- Home: one full-bleed landscape, lead note, date-rail stream (thumb only with a cover).
- Notes at `/notes/<slug>/`. Archive by year, kinds, tags, pagination.
- About, RSS, 404, sitemap.
- One config file (`ume.config.ts`) and a `ume` integration so another repo can depend on this theme.
