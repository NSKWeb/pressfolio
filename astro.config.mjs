import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  site: 'https://pressfolio.vercel.app',
  output: 'server',
  adapter: vercel({
    runtime: 'nodejs20.x',
  }),
});
