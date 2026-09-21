/**
 * plum — site identity and copy.
 * Posts live in src/content/blog/. Colors live in src/styles/global.css.
 * Chrome is English. Article bodies keep their own lang.
 */
export const site = {
  name: 'plum',
  wordmark: 'plum',
  motto: 'Paper, green plum, and code.',
  description: 'Notes on software and travel. English and Chinese.',
  url: 'https://example.com',
  lang: 'en',
  author: 'your name',
  email: 'you@example.com',
  github: 'https://github.com/hareai/plum',
  ogImage: '/images/hero.jpg',
  favicon: '/favicon.svg',
  rssTitle: '',
  years: '2016–2026',
};

export const nav = [
  { href: '/', label: 'Notes' },
  { href: '/archive/', label: 'Archive' },
  { href: '/about/', label: 'About' },
  { href: '/rss.xml', label: 'RSS' },
];

export const home = {
  title: 'plum',
  lede: 'A blank page, a touch of ume. Code, and walks.',
  hero: '/images/hero.jpg',
  streamLabel: 'Latest',
  pageSize: 10,
  tagPreview: 12,
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

export const poems = {
  title: 'Poems',
  lede: 'One page. Books by year, read top to bottom.',
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
  emptyPoems: 'No poems yet.',
  backToNotes: '← Notes',
  backToTags: '← Tags',
  backToKinds: '← Kinds',
  allNotes: 'Archive →',
  /** The teaser shows `home.tagPreview`; this names what is behind the door. */
  allTagsCount: (n: number) => `All ${n} tags →`,
  leadLabel: 'Latest note',
  leadRead: 'Read →',
  issueMeta: (year: number, count: number) => `${year} · ${count} notes`,
  pagerPage: (n: number) => `Page ${n}`,
  byKind: 'By kind',
  bySubject: 'By subject',
  langEn: 'EN',
  langZh: '中',
  readMin: (n: number) => (n === 1 ? '1 min' : `${n} min`),
  photoCount: (n: number) => (n === 1 ? '1 photo' : `${n} photos`),
  aboutStats: (notes: number, tags: number, years: string) =>
    `${notes} notes · ${tags} tags · ${years}`,
  noteCount: (n: number) => (n === 1 ? '1 note' : `${n} notes`),
  shelfMore: (n: number) => `All ${n} →`,
  pagerPrev: 'Previous page',
  pagerNext: 'Next page',
  galleryLabel: 'Photos',
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
  ariaYears: 'Years',
  bookLabel: (n: string) => `Vol. ${n}`,
  poemCount: (n: number) => (n === 1 ? '1 poem' : `${n} poems`),
};
