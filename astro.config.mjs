import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://streamauth.dev',
  integrations: [sitemap()],
  output: 'static',
  compressHTML: true,
});
