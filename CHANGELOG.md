# Changelog

Format: [Keep a Changelog](https://keepachangelog.com/en/1.1.0/). Versioning: [SemVer](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Night. The page follows the system until a choice is made, then keeps it.
  The switch is a Day / Night pair in the mast: the current one in ume, the
  other in grey, a hairline between them. Paper goes to `#161616` and the ume
  ramp is lifted so it still reads on it.
- `site.icp`: an optional filing line under the copyright. Empty, and the
  footer does not render it.

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

- `.foot-head`: the two-column footer grid. It made desktop and phone two different compositions — a stacked 122px phone brand block and a floating nav row — and the whole footer is now one row-based composition at every width.
- The forced `aspect-ratio: 1/1` on `.gallery-grid a`, superseded by the per-photo measured ratio.
- The poems page and its whole surface: `src/pages/poems.astro`, the `poems` content collection, every `book-*` / `poem-*` style block, the `--f-verse` / `--lh-verse` tokens, the `poems` config block, the `poems` / `emptyPoems` / `ariaYears` / `bookLabel` / `poemCount` UI strings, the robots `Disallow: /poems/`, the poems `noindex` rule, and the sitemap filter. `.book-count` stays — the archive year header uses it.
- Dead UI keys `backToKinds` and `shelfMore` (defined in `ume.config.ts`, consumed nowhere) and the `.page-wide` rule that no markup carried.
- `.prose .footnotes` / `.prose a[data-footnote-backref]`: no footnote plugin ships in this integration, so nothing could ever emit those nodes.

### Changed

- Palette: the ume ramp is re-cut for contrast, not hue. `--ume` `#00865b` → `#00734e` (4.60:1 → 5.90:1), `--ume-hot` → `#00563a`, `--ume-deep` `#006b49` → `#065c43` (8.02:1, AAA). The old `ume` was legal for large type but thin for an 18px link; body-size text now uses `deep`.
- Mast: taller and heavier. `--mast-h` 3.5rem → 4.75rem, nav 13px → 14px, and a dedicated `--mast-rule` (#c8c8c8) for the floor line — 30 grey steps past `--line`, where `--line` → `--dash` is only 9. At 639 the floor steps to `--dash` so a 119px phone header stops reading as a black seam.
- Footer matches the mast: white paper, the same floor rule, wordmark and motto on the left, copyright and theme on the right. The tinted band, the second nav, and the social row are gone — those doors already live in the mast and on About.
- Display role is configurable: `site.displayFont` / `displayWeight` / `displayTracking`. The wordmark and `h1` consume `--display`; `--serif` keeps h2–h4. Unset, the theme looks exactly as before.
- Headings: `--f-h4` 19px → 20px (desktop) and 17px → 19px (phone, where it was *below* the 18px body); `--f-h3` 20px → 21px.
- Reading measure `--read` 40rem → 37rem (71ch → 66ch on the live corpus); Latin leading 1.62, CJK 1.9 with a hair of tracking; Chinese paragraph gap 1.15em → 1.35em; link underline offset 0.18em → 2px.
- Gallery cells drop the forced `aspect-ratio: 1/1`; each cell now carries its measured ratio (clamped 0.66–1.5), so a portrait frame survives instead of being cropped to a square.
- Article table of contents: gothic chrome with a Contents label, so it no longer reads as the start of the body.
- Home browse: By subject first (wide column), By kind on the right.
- Language marks in chrome: `en` / `zh`.
- About: letter, then the quote set by size, then stack rows separated by hairlines. The quote is not boxed, and the stats line does not draw a second rule under the stack.
- Home feature: `home.pin` slug, else the newest. Stream omits that note. Eyebrow is Recommended when pinned. No rule under the hero — the eyebrow and the title mark the note.
- Kind and tag pages keep the wide column (the rows carry thumbs) and get the same bottom air as the reading pages, `--sp-12`.
- Hero and lead titles get `text-wrap: balance`.
- Small labels share one tracking, 0.14em. The hero issue line and the browse heads were the last two at 0.16em.
- The footer wordmark uses the display role, the same face, weight, and tracking as the mast. A site that sets `displayFont` no longer leaves the footer on the old face.
- On a phone the footer's closing rule steps back to `--dash` with the mast's, so the two ends of the page use one line.
- Stack rows use 16px of padding, so each hairline reads as a shelf instead of cutting the row.
- Article cover: back-link and date on one line (`← Notes · 2025.05.09`) with a dot between them; the title keeps its own line.
- Anchor scrolling is smooth, with a reduced-motion guard; heading `scroll-margin-top` 12px → 32px.
- `sharp` is a declared dependency. `src/lib/images.ts` imports it to read intrinsic sizes, and it previously resolved only through Astro's optional-dependency hoisting — one npm layout away from a build failure on a fresh install.
- CI: `.github/workflows/ci.yml` runs `astro check` then `build` on pushes to and PRs against `main`. The branch ruleset allowed no status checks, so a red build was mergeable.

### Fixed

- Footer nav and copyright both advertised RSS: the config-filtered door list was followed by a hand-written `<a href="/rss.xml">`, so the same door appeared twice in one footer.
- `.foot-nav` / `.foot-brand` / `.foot-colophon` declared `gap: var() var()`, which computes to `normal` — zero — in Chrome, leaving the links tight against each other. Rewritten as `row-gap` / `column-gap`. A media-query rule re-declaring the shorthand also erased a valid longhand set by the base rule.
- The phone footer copyright read `site.author || site.name`, so renaming the site left the colophon on the old name. It now follows `site.wordmark`, with the two fields' roles documented in the config.
- Phone mast spacing was four unpatterned values (20/40/12/16) accumulated one patch at a time. Now one system: 24 to the logo, 13 to the rule, 12 under it, 24 to the base — outer distances equal, inner pair descending.
- Phone nav was an 81px-tall box for a single 13px line, because `min-height: var(--hit)` sat on the links inside a stacked flex nav. The tap target moved to a `::before`; the band is 36px and the target is still 44×44.
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
