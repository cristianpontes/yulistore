import { defineConfig } from 'astro/config';

// https://astro.build
export default defineConfig({
  // Update `site` to the final URL once deployed (used for sitemap / Open Graph).
  site: 'https://yulistore.pages.dev',
  build: {
    format: 'directory',
  },
});
