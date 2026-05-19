import { defineConfig } from 'vite';
import vituum from 'vituum';
import nunjucks from '@vituum/vite-plugin-nunjucks';

export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist'
  },
  plugins: [
    vituum(),
    nunjucks({
      root: './src'
    })
  ]
});
