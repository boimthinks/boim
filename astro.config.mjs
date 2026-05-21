// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      tailwindcss({
        // Tailwinds v4 plugin system is handled automatically if the package is installed
        // but we ensure it's loaded in the CSS context.
      }),
    ],
  },
});
