// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://guidance-ai.github.io',
  integrations: [tailwind(), react()],
  vite: {
    ssr: {
      noExternal: ['@fluentui/react-icons']
    }
  }
});