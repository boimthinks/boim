// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://boim.web.id',
  integrations: [sitemap()],
  vite: {
    plugins: [
      tailwindcss({
        // Tailwinds v4 plugin system is handled automatically if the package is installed
        // but we ensure it's loaded in the CSS context.
      }),
    ],
  },
});
