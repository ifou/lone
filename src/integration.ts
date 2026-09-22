import type { AstroIntegration } from 'astro';
import tailwindcss from '@tailwindcss/vite';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const themeSrc = fileURLToPath(new URL('./', import.meta.url));

/** Theme `src/` as a path relative to the site root. Pass to `srcDir`. */
export function umeSrc(root: string = process.cwd()): string {
  const rel = path.relative(root, themeSrc);
  return rel || './src';
}

export default function ume(): AstroIntegration {
  return {
    name: 'ume',
    hooks: {
      'astro:config:setup': ({ updateConfig, config }) => {
        const root = fileURLToPath(config.root);
        const configFile = path.join(root, 'ume.config.ts');
        updateConfig({
          markdown: {
            shikiConfig: {
              themes: {
                light: 'min-light',
                dark: 'min-dark',
              },
              defaultColor: false,
              wrap: false,
            },
          },
          vite: {
            plugins: [
              {
                name: 'ume-config',
                enforce: 'pre',
                resolveId(id) {
                  if (id === 'ume/config') return configFile;
                },
              },
              tailwindcss(),
            ],
          },
        });
      },
    },
  };
}
