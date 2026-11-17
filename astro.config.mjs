// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()]
  },
  site: "https://devahschaefers.fyi",
  // Astro 7 defaults to JSX whitespace rules, which drop the spaces between
  // text and inline tags at line breaks. Keep the Astro 6 lossless behavior.
  compressHTML: true,
  // Honor an externally assigned port (e.g. tooling that sets PORT) so
  // multiple dev servers can coexist; falls back to Astro's default 4321.
  server: process.env.PORT ? { port: Number(process.env.PORT) } : {},
});
