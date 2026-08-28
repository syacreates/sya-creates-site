import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://sya-creates.vercel.app',
  // @astrojs/sitemap pinned to 3.2.1 (see package.json) : les versions
  // 3.6+ demandent le hook `astro:routes:resolved`, introduit avec
  // Astro 5 — ce projet est encore sur Astro 4.16, une version plus
  // récente casse le build (`_routes.reduce` sur undefined).
  integrations: [sitemap()],
});
