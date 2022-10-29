const { resolve } = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
	base: "./",
	server: {
		host: "0.0.0.0",
	},
	build: {
		outDir: "../content/css/flexbox-guide/demos/",
		rollupOptions: {
			input: {
				// main: resolve(__dirname, "index.html"),
				flexDirection: resolve(__dirname, "flex_direction.html"),
				flexWrap: resolve(__dirname, "flex_wrap.html"),
				flexFlow: resolve(__dirname, "flex_flow.html"),
				justifyContent: resolve(__dirname, "justify_content.html"),
				alignItems: resolve(__dirname, "align_items.html"),
				order: resolve(__dirname, "order.html"),
			},
		},
	},
});
