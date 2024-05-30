import { defineConfig } from "astro/config";
import path from 'path'

export default defineConfig({
    integrations: [],
    markdown: {
        syntaxHighlight: "shiki",
        shikiConfig: {
            theme: "dark-plus",
        },
    },
    site: "https://www.michael-b.com",
    vite: {
        resolve: {
            alias: {
                '@': path.resolve('./src'),
            },
        },
    },
})