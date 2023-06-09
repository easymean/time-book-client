import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

type ViteConfig = {
	mode: string;
	command: string;
};

// https://vitejs.dev/config/
export default (args: ViteConfig) => {
	const generateScopedName =
		args.mode === 'production' ? '[hash:base64:2]' : '[local]__[hash:base64:2]';
	return defineConfig({
		plugins: [react(), cssInjectedByJsPlugin()],
		resolve: {
			alias: [
				{ find: '@', replacement: path.resolve(__dirname, './src') },
				{ find: '@page', replacement: path.resolve(__dirname, './src/page') },
				{ find: '@component', replacement: path.resolve(__dirname, './src/component') },
			],
		},
		css: {
			modules: {
				localsConvention: 'camelCase',
				generateScopedName,
			},
			// scss 전역 사용
			preprocessorOptions: {
				scss: { additionalData: '@import "./src/styles/colors";' },
			},
		},
		build: {
			emptyOutDir: true,
			sourcemap: 'inline',
			minify: 'esbuild',
			lib: {
				entry: path.resolve(__dirname, './src/main.tsx'),
				name: 'TimeBook',
				formats: ['es', 'umd'],
				fileName: format => `index.${format}.js`,
			},
		},
	});
};
