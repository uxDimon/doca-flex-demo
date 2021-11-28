const { resolve } = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
				flexDirection: resolve(__dirname, "flex_direction/index.html"),
				flexWrap: resolve(__dirname, "flex_wrap/index.html"),
			},
		},
	},
});
