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

// Standalone articles / press pieces. Each piece has one file per language.
// PT files are usually "bridges" (a short abstract + a link to the canonical
// source on SBC Horizontes); EN/ES files carry the full translated text.
// Files live at src/content/articles/<slug>.<lang>.md
const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    /**
     * Stable URL slug, shared across languages. Named `articleSlug` (not `slug`)
     * because the glob loader treats a frontmatter `slug` as the entry id, which
     * would collapse the per-language files into one.
     */
    articleSlug: z.string(),
    title: z.string(),
    lang: z.enum(['pt', 'en', 'es']),
    /** Author line as displayed, e.g. "Diego Kreutz e Tiago Heinrich". */
    authors: z.string(),
    /** Human-readable publication date. */
    date: z.string(),
    /** ISO date for the <time> element. */
    dateISO: z.string(),
    /** Short lead, used on the page and as the meta description. */
    abstract: z.string(),
    /** When true, the page is a pointer to the canonical source (no full body). */
    isBridge: z.boolean().default(false),
    /** Canonical/original source URL (SBC Horizontes). */
    originalUrl: z.string(),
  }),
});

export const collections = { instructions, articles };
