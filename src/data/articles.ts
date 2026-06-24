import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';

export type ArticleEntry = CollectionEntry<'articles'>;

/** The single article entry for a (slug, lang), or undefined if missing. */
export async function getArticle(slug: string, lang: Lang): Promise<ArticleEntry | undefined> {
  const all = await getCollection(
    'articles',
    (e) => e.data.articleSlug === slug && e.data.lang === lang,
  );
  return all[0];
}

/** All (slug, lang) pairs available, for static path generation. */
export async function getArticlePaths(): Promise<{ slug: string; lang: Lang }[]> {
  const all = await getCollection('articles');
  return all.map((e) => ({ slug: e.data.articleSlug, lang: e.data.lang }));
}
