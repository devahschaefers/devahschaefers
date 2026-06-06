import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const work = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    blurb: z.string(),
    categories: z.array(z.enum(['ml', 'swe', 'agents', 'data'])),
context: z.string().optional(),
    order: z.number(),
    draft: z.boolean().optional(),
  }),
});

export const collections = { work };
