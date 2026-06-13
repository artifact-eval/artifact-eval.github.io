// @ts-check
import { defineConfig } from 'astro/config';

// Organization GitHub Pages site → served from the domain root.
// https://artifact-eval.github.io/
export default defineConfig({
  site: 'https://artifact-eval.github.io',
  base: '/',
  trailingSlash: 'always',
  // Preserve legacy URLs from the previous static site. These old paths were
  // shared/bookmarked externally; map each to its new language-prefixed route
  // (defaulting to PT) so they don't 404 after the migration.
  redirects: {
    '/sbrc2025/': '/pt/sbrc-2025/',
    '/sbrc25/': '/pt/sbrc-2025/',
    '/sbrc2026/': '/pt/sbrc-2026/',
    '/sbseg2024/': '/pt/sbseg-2024/',
    '/sbseg2024-en/': '/en/sbseg-2024/',
    '/sbseg2025/': '/pt/sbseg-2025/',
    '/sbseg2026/': '/pt/sbseg-2026/',
    '/wgrs2024/': '/pt/wgrs-2024/',
    '/wticg2023/': '/pt/wticg-2023/',
    // No dedicated FAQ route in the new site → send to the PT home.
    '/duvidas/': '/pt/',
  },
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
