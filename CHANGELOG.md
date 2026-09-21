# Changelog

Format: [Keep a Changelog](https://keepachangelog.com/en/1.1.0/). Versioning: [SemVer](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

- Home browse: By subject first (wide column), By kind on the right.
- Language marks in chrome: `en` / `zh`.
- About: letter, pull-quote, and stack rows instead of one undifferentiated dump.
- Home feature: `home.pin` slug, else the newest. Stream omits that note. Eyebrow is Recommended when pinned.
- Footer: colophon — brand and motto, then a hairline, then copyright and theme credit.

### Added

- First public cut: Astro blog theme. Mincho titles, gothic body, ume green (`#00865b`), light only.
- Home: one full-bleed landscape, lead note, date-rail stream (thumb only with a cover).
- Notes at `/notes/<slug>/`. Archive by year, kinds, tags, pagination.
- About, RSS, 404, sitemap. Optional poems page, unlinked from the mast.
- One config file (`plum.config.ts`) and a `plum` integration so another repo can depend on this theme.
