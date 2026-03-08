import { fileURLToPath, URL } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import { devtools } from "@tanstack/devtools-vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig } from "vite";

const analyzeBundle = process.env.ANALYZE === "true";

const config = defineConfig({
	build: {
		cssMinify: "lightningcss",
	},
	esbuild: {
		drop: process.env.NODE_ENV === "production" ? ["console", "debugger"] : [],
	},
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
	plugins: [
		devtools(),
		nitro(),
		tailwindcss(),
		tanstackStart({
			sitemap: {
				enabled: true,
				host: "https://www.aadisanghvi.com",
			},
		}),
		viteReact({
			babel: {
				plugins: ["babel-plugin-react-compiler"],
			},
		}),
		analyzeBundle &&
			visualizer({
				filename: ".output/bundle-analysis.html",
				gzipSize: true,
				brotliSize: true,
				open: false,
			}),
	],
});

export default config;
