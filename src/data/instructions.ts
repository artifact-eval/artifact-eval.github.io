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

/**
 * The best instructions year to link to for a given edition year.
 * Prefers an exact match, else the newest available year not after `preferred`
 * (instructions in effect at the time), else the newest available year overall.
 * Returns null when no instructions exist for the language at all.
 */
export async function resolveInstructionsYear(lang: Lang, preferred: number): Promise<number | null> {
  const years = await instructionYears(lang); // newest first
  if (years.length === 0) return null;
  if (years.includes(preferred)) return preferred;
  return years.find((y) => y < preferred) ?? years[0];
}
