import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => ({

	plugins: [sveltekit()],
	css: {
		postcss: "./postcss.config.js",
	}
}));
