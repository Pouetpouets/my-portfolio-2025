// svelte.config.js
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
export default {
  preprocess: [vitePreprocess({ script: true })]
};