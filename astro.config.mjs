
import { defineConfig } from 'astro/config';

const isDev = process.env.NODE_ENV !== 'production';

export default defineConfig({
  site: 'https://flowsoftlabs.github.io',
  base: isDev ? '/' : '/dispure/',
  output: 'static',
  trailingSlash: 'always',
});
