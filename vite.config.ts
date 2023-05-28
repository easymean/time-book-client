import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

type ViteConfig = {
	mode: string;
	command: string;
};

// https://vitejs.dev/config/
export default (args: ViteConfig) => {
	const generateScopedName =
		args.mode === 'production' ? '[hash:base64:2]' : '[name]_[local]__[hash:base64:2]';
	return defineConfig({
		plugins: [react()],

		// scss 전역 사용
		css: {
			modules: {
				localsConvention: 'camelCase',
				generateScopedName,
			},
			preprocessorOptions: {
				scss: { additionalData: '@import "./src/styles/colors";' },
			},
		},
		build: {
			emptyOutDir: true,
			lib: {
				name: 'TimeBook',
				entry: path.resolve(__dirname, 'src/main.tsx'),
			},
		},
	});
};
