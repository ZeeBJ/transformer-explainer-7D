import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

// Plugin to replace sharp module in SSR
const sharpShimPlugin = () => {
	return {
		name: 'sharp-shim',
		enforce: 'pre',
		resolveId(id: string, importer?: string) {
			// Handle various sharp import patterns
			if (id === 'sharp' || id === 'sharp/' || id.endsWith('/sharp') || id.endsWith('\\sharp')) {
				return resolve(__dirname, 'src/utils/sharp-shim.js');
			}
			// Handle webpack-style imports
			if (importer && importer.includes('@xenova/transformers') && id.includes('sharp')) {
				return resolve(__dirname, 'src/utils/sharp-shim.js');
			}
			return null;
		},
		load(id: string) {
			// If the resolved id is our shim, return the shim content
			if (id === resolve(__dirname, 'src/utils/sharp-shim.js')) {
				return 'export default {}; if (typeof module !== "undefined" && module.exports) { module.exports = {}; }';
			}
			return null;
		}
	};
};

export default defineConfig({
	plugins: [sharpShimPlugin(), sveltekit()],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@use 'src/styles/variables.scss' as *;`
			}
		}
	},
	server: {
		fs: {
			// Allow serving files from one level up to the project root
			allow: ['..']
		}
	},
	resolve: {
		alias: {
			sharp: resolve(__dirname, 'src/utils/sharp-shim.js')
		}
	},
	ssr: {
		noExternal: ['@xenova/transformers', 'flowbite-svelte', 'flowbite-svelte-icons'],
		resolve: {
			conditions: ['svelte', 'import', 'module', 'default']
		}
	},
	optimizeDeps: {
		include: ['flowbite-svelte', 'flowbite-svelte-icons'],
		exclude: ['sharp']
	}
});
