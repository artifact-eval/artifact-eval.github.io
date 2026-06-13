import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Versioned, shared instructions. The same year's instructions apply to every
// edition of that year (e.g. all 2026 editions point at the 2026 set).
// Files live at src/content/instructions/<year>/<lang>/<section>.md
const instructions = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/instructions' }),
  schema: z.object({
    title: z.string(),
    /** Stable URL slug, shared across languages: submissao | revisao | exemplos-readme */
    section: z.enum(['submissao', 'revisao', 'exemplos-readme']),
    year: z.number(),
    lang: z.enum(['pt', 'en', 'es']),
    /** Display order within a year. */
    order: z.number(),
    summary: z.string(),
  }),
});

export const collections = { instructions };
