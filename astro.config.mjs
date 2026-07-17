import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Lift-and-shift de sitio estático a Astro 6 (SeguridadPrivadaMX).
// build.format 'file' conserva las URLs .html originales (/nosotros.html, etc.).
export default defineConfig({
  site: 'https://seguridadprivadamx.com',
  build: { format: 'file' },
  integrations: [sitemap()],
});
