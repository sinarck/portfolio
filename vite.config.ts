import { fileURLToPath, URL } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import { devtools } from "@tanstack/devtools-vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite-plus";

const toolingIgnorePatterns = [
	".output/**",
	".vite-hooks/**",
	".vinxi/**",
	".zed/**",
	"dist/**",
	"src/routeTree.gen.ts",
	"src/styles.css",
];

const config = defineConfig({
	fmt: {
		ignorePatterns: toolingIgnorePatterns,
		printWidth: 80,
		useTabs: true,
	},
	staged: {
		"*": "vp check --fix",
	},
	lint: {
		ignorePatterns: toolingIgnorePatterns,
		options: {
			typeAware: true,
			typeCheck: true,
		},
	},
	build: {
		cssMinify: "lightningcss",
		rolldownOptions: {
			output: {
				minify: process.env.NODE_ENV === "production" && {
					compress: {
						dropConsole: true,
						dropDebugger: true,
					},
				},
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
			prerender: {
				enabled: true,
				autoSubfolderIndex: true,
				autoStaticPathsDiscovery: true,
				concurrency: 8,
				crawlLinks: true,
				failOnError: true,
				retryCount: 1,
				retryDelay: 250,
			},
			sitemap: {
				enabled: true,
				host: process.env.VITE_SITE_URL!,
			},
		}),
		viteReact({
			babel: {
				plugins: ["babel-plugin-react-compiler"],
			},
		}),
	],
});

export default config;
