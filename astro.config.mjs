// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://saruearcano.com.br',
  base: 'https://saruearcano.com.br',
  vite: {
    plugins: [tailwindcss()]
  }
});
