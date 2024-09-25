import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	base: './',
	build: {
		outDir: 'docs'  // Change the output directory to docs
	  }
});
