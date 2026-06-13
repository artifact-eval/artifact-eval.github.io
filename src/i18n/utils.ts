import { ui, defaultLang, languages, type Lang, type UIKey } from './ui';

export { languages, defaultLang, type Lang };

/** Extract the language from a URL like /en/events/ → 'en'. */
export function getLangFromUrl(url: URL): Lang {
  const [, seg] = url.pathname.split('/');
  if (seg in ui) return seg as Lang;
  return defaultLang;
}

/** Returns a translator bound to a language, falling back to the default. */
export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/** Build a localized, base-aware path. localizePath('en', 'events') → '/en/events/'. */
export function localizePath(lang: Lang, ...segments: string[]): string {
  const parts = [lang, ...segments].filter(Boolean).join('/');
  return `/${parts}/`.replace(/\/{2,}/g, '/');
}

/** Same page in another language: swaps the leading locale segment. */
export function switchLangPath(url: URL, target: Lang): string {
  const segments = url.pathname.split('/').filter(Boolean);
  if (segments[0] in ui) segments[0] = target;
  else segments.unshift(target);
  return `/${segments.join('/')}/`.replace(/\/{2,}/g, '/');
}

export const langOrder: Lang[] = ['pt', 'en', 'es'];
