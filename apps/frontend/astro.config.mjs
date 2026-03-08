import { defineConfig } from 'astro/config';
import { visualizer } from "rollup-plugin-visualizer";

import svelte from "@astrojs/svelte";
import vercel from "@astrojs/vercel";
import markdoc from "@astrojs/markdoc";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://designward.io',
  integrations: [svelte(), markdoc(), sitemap()],
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
  prefetch: true,
  vite: {
    plugins: [visualizer({
        emitFile: true,
        filename: "stats.html",
    })]
  }
});