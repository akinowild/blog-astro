import { defineConfig } from "astro/config";
import remarkToc from 'remark-toc';
import markdoc from '@astrojs/markdoc';
import path from 'path';
import node from '@astrojs/node';
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [markdoc(), react()],
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),
  markdown: {
    remarkPlugins: [remarkToc],
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "dark-plus"
    }
  },
  site: "https://www.michael-b.com",
  vite: {
    resolve: {
      alias: {
        '@': path.resolve('./src')
      }
    }
  }
});