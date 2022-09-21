import { defineConfig } from "vite";
import { SimpleSearch } from 'vitepress-plugin-simple-search';

export default defineConfig({
	plugins: [SimpleSearch('/')],
	server: {
		fs: {
			allow: ["D:/projects/vitepress-plugin-search"]
		}
	}
});