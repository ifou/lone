import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import path from 'node:path';

const blog = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: path.join(process.cwd(), 'src/content/blog'),
  }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional().default(''),
    category: z.enum(['note', 'travel']).optional().default('note'),
    tags: z.array(z.string()).optional().default([]),
    draft: z.boolean().optional().default(false),
    slug: z.string().optional(),
    lang: z.string().optional(),
    cover: z.string().optional().default(''),
    images: z.array(z.string()).optional().default([]),
    /** Set false to hide the table of contents on a note that has headings. */
    toc: z.boolean().optional().default(true),
  }),
});

export const collections = { blog };
