/// <reference types="astro/client" />

declare module 'ume/config' {
  export const site: {
    name: string;
    wordmark: string;
    motto: string;
    /**
     * Face for the wordmark and h1 — the display role. A family name, or a
     * full comma-separated stack. Omit and it stays on the theme's mincho.
     */
    displayFont?: string;
    /** Weight and tracking for that face; both default to the theme's. */
    displayWeight?: number;
    displayTracking?: string;
    description: string;
    url: string;
    lang: string;
    author: string;
    email: string;
    github: string;
    ogImage: string;
    favicon: string;
    rssTitle: string;
    years: string;
    /** Filing record. Leave href and text empty to hide it. */
    icp?: { href: string; text: string };
  };

  export const nav: { href: string; label: string }[];

  export const social: { href: string; label: string }[];

  export const home: {
    title: string;
    lede: string;
    hero: string;
    streamLabel: string;
    pageSize: number;
    tagPreview: number;
    /** Note slug for the home feature. Empty = newest. */
    pin?: string;
  };

  export const archive: { title: string; lede: string };
  export const tags: { title: string; lede: string };
  export const categories: {
    title: string;
    lede: string;
    labels: Record<string, string>;
  };
  export const about: {
    title: string;
    lede: string;
    body: string[];
    quote?: string;
    stack?: { label: string; items: string[] }[];
  };
  export const notFound: { title: string; lede: string };

  export const ui: {
    skipToContent: string;
    emptyStream: string;
    emptyTags: string;
    backToNotes: string;
    backToTags: string;
    allNotes: string;
    allTagsCount: (n: number) => string;
    leadLabel: string;
    pinLabel: string;
    leadRead: string;
    issueMeta: (year: number, count: number) => string;
    pagerPage: (n: number) => string;
    byKind: string;
    bySubject: string;
    langEn: string;
    langZh: string;
    readMin: (n: number) => string;
    photoCount: (n: number) => string;
    aboutStats: (notes: number, tags: number, years: string) => string;
    noteCount: (n: number) => string;
    pagerPrev: string;
    pagerNext: string;
    galleryLabel: string;
    /** Visible TOC heading. Falls back to ariaContents. */
    tocLabel?: string;
    morePhotos: (n: number) => string;
    postNavOlder: string;
    postNavNewer: string;
    postNavAll: string;
    linkEmail: string;
    linkGithub: string;
    linkRss: string;
    ariaNav: string;
    ariaFoot: string;
    ariaPager: string;
    ariaContents: string;
    ariaAdjacent: string;
    footCopyright: (years: string, name: string) => string;
    footThemeLabel: string;
    footTheme: string;
    footThemeHref: string;
  };
}
