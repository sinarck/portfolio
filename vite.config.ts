import { fileURLToPath, URL } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import { devtools } from "@tanstack/devtools-vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig } from "vite-plus";

const analyzeBundle = process.env.ANALYZE === "true";
const isProduction = process.env.NODE_ENV === "production";

const toolIgnorePatterns = [
	".output/**",
	".vite-hooks/**",
	".vinxi/**",
	".zed/**",
	"dist/**",
	"studio/**",
	"src/routeTree.gen.ts",
	"src/styles.css",
	"src/types/sanity.ts",
];

const config = defineConfig({
	fmt: {
		ignorePatterns: toolIgnorePatterns,
		printWidth: 80,
		useTabs: true,
	},
	staged: {
		"*": "vp check --fix",
	},
	lint: {
		ignorePatterns: toolIgnorePatterns,
		options: {
			typeAware: true,
			typeCheck: true,
		},
	},
	build: {
		cssMinify: "lightningcss",
		rolldownOptions: {
			output: {
				minify: isProduction
					? {
							compress: {
								dropConsole: true,
								dropDebugger: true,
							},
						}
					: undefined,
			},
		},
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
