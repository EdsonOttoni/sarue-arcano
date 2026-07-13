// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://edsonottoni.github.io',
  base: '/astro-game/',
  vite: {
    plugins: [tailwindcss()]
  }
});
