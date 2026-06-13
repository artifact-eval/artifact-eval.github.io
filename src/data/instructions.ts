import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';

export type InstructionEntry = CollectionEntry<'instructions'>;

/** All instruction entries for a language, sorted by year (desc) then order. */
export async function getInstructions(lang: Lang): Promise<InstructionEntry[]> {
  const all = await getCollection('instructions', (e) => e.data.lang === lang);
  return all.sort((a, b) => b.data.year - a.data.year || a.data.order - b.data.order);
}

/** Entries for a single (lang, year), in display order. */
export async function getYearSections(lang: Lang, year: number): Promise<InstructionEntry[]> {
  const entries = await getInstructions(lang);
  return entries.filter((e) => e.data.year === year).sort((a, b) => a.data.order - b.data.order);
}

/** The most recent year that has instructions for a language. */
export async function latestYear(lang: Lang): Promise<number> {
  const entries = await getInstructions(lang);
  return entries.length ? Math.max(...entries.map((e) => e.data.year)) : new Date().getFullYear();
}

/** All distinct years with instructions for a language, newest first. */
export async function instructionYears(lang: Lang): Promise<number[]> {
  const entries = await getInstructions(lang);
  return [...new Set(entries.map((e) => e.data.year))].sort((a, b) => b - a);
}
