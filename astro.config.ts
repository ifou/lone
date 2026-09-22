import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import ume from './src/integration';
import { site } from './ume.config';

export default defineConfig({
  site: site.url,
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) =>
        !/\/page\/1\/?$/.test(page) &&
        !/\/categories\/?$/.test(page),
    }),
    ume(),
  ],
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
});
