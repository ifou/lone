import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import plum from './src/integration';
import { site } from './plum.config';

export default defineConfig({
  site: site.url,
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => !/\/page\/1\/?$/.test(page) && !/\/poems\/?$/.test(page),
    }),
    plum(),
  ],
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
});
