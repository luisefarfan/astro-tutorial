import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-tutorial-three-cyan.vercel.app/',
  integrations: [preact()],
});
