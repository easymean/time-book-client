import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],

	// scss 전역 사용
	css: {
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
