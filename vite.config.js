const { resolve } = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
	base: "./",
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
				flexDirection: resolve(__dirname, "pages/flex_direction/index.html"),
				flexWrap: resolve(__dirname, "pages/flex_wrap/index.html"),
				flexFlow: resolve(__dirname, "pages/flex_flow/index.html"),
				justifyContent: resolve(__dirname, "pages/justify_content/index.html"),
				alignItems: resolve(__dirname, "pages/align_items/index.html"),
			},
		},
	},
});
