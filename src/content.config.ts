/**
 * Content Collections — SeguridadPrivadaMX (Astro 6 + Markdown).
 * El blog editorial vive en Markdown con schema Zod strict.
 */
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z
    .object({
      title: z.string().max(95),
      description: z.string().max(170),
      category: z
        .enum(['Guías', 'Costos', 'Legal', 'Tecnología', 'Operación'])
        .default('Guías'),
      publishDate: z.coerce.date().optional(),
      author: z.string().default('SeguridadPrivadaMX'),
      readingMinutes: z.number().int().positive().optional(),
      draft: z.boolean().default(false),
    })
    .strict(),
});

export const collections = { blog };
