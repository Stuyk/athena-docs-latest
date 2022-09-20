import { defineConfig } from "vite";
import { SearchPlugin } from 'vitepress-plugin-search';

export default defineConfig({
	plugins: [SearchPlugin()],
	server: {
		fs: {
			allow: ["D:/projects/vitepress-plugin-search"]
		}
	}
});