import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import * as path from 'path';
// @ts-ignore - I think this is safe to ignore. it builds. types are just missing
import routify from '@roxi/routify/vite-plugin';
import { mdsvex } from 'mdsvex';
import sveltePreprocess from 'svelte-preprocess';

const production = process.env.NODE_ENV === 'production'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    routify({
      devHelper: !production,
    }),
    svelte({
      emitCss: false,
      compilerOptions: {
          dev: !production,
      },
      extensions: ['.md', '.svelte'],
      preprocess: [mdsvex({ extension: 'md' }), sveltePreprocess({ typescript: true })],
    }),
  ],
  resolve: {
    alias: {
      $lib: path.resolve('./src/lib'),
      $modules: path.resolve('./src/modules'),
      $assets: path.resolve('./src/assets'),
      $store: path.resolve('./src/store')
    }
  }
})
