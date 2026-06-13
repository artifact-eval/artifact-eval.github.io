// @ts-check
import { defineConfig } from 'astro/config';

// Organization GitHub Pages site → served from the domain root.
// https://artifact-eval.github.io/
export default defineConfig({
  site: 'https://artifact-eval.github.io',
  base: '/',
  trailingSlash: 'always',
  i18n: {
    locales: ['pt', 'en', 'es'],
    defaultLocale: 'pt',
    routing: {
      // Every language is prefixed: /pt/, /en/, /es/ (the root path redirects).
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
});
