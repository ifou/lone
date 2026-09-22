/**
 * ume — site identity and copy.
 * Posts live in src/content/blog/. Colors live in src/styles/global.css.
 * Chrome is English. Article bodies keep their own lang.
 */
export const site = {
  /** Long-form site name for <title>, feeds and the About page. */
  name: 'ume',
  /** The short mark in the mast and the footer. Changing it re-brands the
      whole chrome; `name` above is the formal name and can stay long. */
  wordmark: 'ume',
  motto: 'Paper, ume green, and code.',
  description: 'Notes on software and travel. English and Chinese.',
  url: 'https://example.com',
  lang: 'en',
  author: 'your name',
  email: 'you@example.com',
  github: 'https://github.com/fennlee/ume',
  ogImage: '/images/hero.jpg',
  favicon: '/favicon.svg',
  rssTitle: '',
  years: '2016–2026',
  /** Filing record in the footer. Omit and the line is not rendered. */
  icp: { href: '', text: '' },
};

/** Footer social row. Empty by default; override per site. */
export const social: { href: string; label: string }[] = [];

export const nav = [
  { href: '/', label: 'Notes' },
  { href: '/archive/', label: 'Archive' },
  { href: '/about/', label: 'About' },
  { href: '/rss.xml', label: 'RSS' },
];

export const home = {
  title: 'ume',
  lede: 'A blank page, a touch of ume. Code, and walks.',
  hero: '/images/hero.jpg',
  streamLabel: 'Latest',
  pageSize: 10,
  tagPreview: 12,
  /** Featured note slug. Empty = newest. */
  pin: '',
};

export const archive = {
  title: 'Archive',
  lede: 'Every note, by year.',
};

export const tags = {
  title: 'Tags',
  lede: 'Browse by tag.',
};

export const categories = {
  title: 'Kinds',
  lede: 'Journal and walks.',
  labels: {
    note: 'Journal',
    travel: 'Travel',
  } as Record<string, string>,
};

export const about = {
  title: 'About',
  lede: 'Software and travel. English and Chinese.',
  body: [
    'I keep notes here in English and Chinese: software, a few walks, and the odd page that still wants paper.',
    'The home is one landscape, then writing you can actually read. Older years sit in the archive.',
    'The feed is RSS if you want it in a reader.',
  ],
};

export const notFound = {
  title: 'No such page',
  lede: 'That note is not here.',
};

/** UI copy. The one place every fixed string lives; keep it in site lang. */
export const ui = {
  skipToContent: 'Skip to content',
  emptyStream: 'Nothing here yet.',
  emptyTags: 'No tags yet.',
  backToNotes: '← Notes',
  backToTags: '← Tags',
  allNotes: 'Archive →',
  /** The teaser shows `home.tagPreview`; this names what is behind the door. */
  allTagsCount: (n: number) => `All ${n} tags →`,
  leadLabel: 'Latest note',
  pinLabel: 'Recommended',
  leadRead: 'Read →',
  issueMeta: (year: number, count: number) => `${year} · ${count} notes`,
  pagerPage: (n: number) => `Page ${n}`,
  byKind: 'By kind',
  bySubject: 'By subject',
  langEn: 'en',
  langZh: 'zh',
  readMin: (n: number) => (n === 1 ? '1 min' : `${n} min`),
  photoCount: (n: number) => (n === 1 ? '1 photo' : `${n} photos`),
  aboutStats: (notes: number, tags: number, years: string) =>
    `${notes} notes · ${tags} tags · ${years}`,
  noteCount: (n: number) => (n === 1 ? '1 note' : `${n} notes`),
  pagerPrev: 'Previous page',
  pagerNext: 'Next page',
  galleryLabel: 'Photos',
  tocLabel: 'Contents',
  morePhotos: (n: number) => `+${n}`,
  postNavOlder: 'Older',
  postNavNewer: 'Newer',
  postNavAll: 'All notes',
  linkEmail: 'Email',
  linkGithub: 'GitHub',
  linkRss: 'RSS',
  ariaNav: 'Primary',
  ariaFoot: 'Footer',
  ariaPager: 'Pagination',
  ariaContents: 'Contents',
  ariaAdjacent: 'Adjacent notes',
  footCopyright: (years: string, name: string) => `© ${years} ${name}`,
  footThemeLabel: 'Theme',
  footTheme: 'ume',
  footThemeHref: 'https://github.com/fennlee/ume',
};
