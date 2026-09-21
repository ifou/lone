import type { AstroIntegration } from 'astro';
import tailwindcss from '@tailwindcss/vite';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const themeSrc = fileURLToPath(new URL('./', import.meta.url));

/** Theme `src/` as a path relative to the site root. Pass to `srcDir`. */
export function plumSrc(root: string = process.cwd()): string {
  const rel = path.relative(root, themeSrc);
  return rel || './src';
}

export default function plum(): AstroIntegration {
  return {
    name: 'plum',
    hooks: {
      'astro:config:setup': ({ updateConfig, config }) => {
        const root = fileURLToPath(config.root);
        const configFile = path.join(root, 'plum.config.ts');
        updateConfig({
          markdown: {
            shikiConfig: {
              themes: {
                light: 'min-light',
              },
              defaultColor: false,
              wrap: false,
            },
          },
          vite: {
            plugins: [
              {
                name: 'plum-config',
                enforce: 'pre',
                resolveId(id) {
                  if (id === 'plum/config') return configFile;
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
