import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],

	// scss 전역 사용
	css: {
		preprocessorOptions: {
			scss: { additionalData: '@import "./src/css/colors";' },
		},
	},
});
