// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://manoel-nohra.fr',
    base : '/',
    trailingSlash : 'ignore',
    i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    routing: {
      prefixDefaultLocale: false // L'anglais sera directement à la racine (/), le français sera dans (/fr)
    }
  }
});
