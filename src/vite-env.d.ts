/// <reference types="vite/client" />

// biome-ignore lint: handle by Vite internally
interface ViteTypeOptions {
	strictImportMetaEnv: unknown;
}

interface ImportMetaEnv {
	readonly VITE_EMAIL: string;
}

// biome-ignore lint: handle by Vite internally
interface ImportMeta {
	readonly env: ImportMetaEnv;
}
