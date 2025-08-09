import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig, loadEnv } from "vite";
import { vitePostHog } from "vite-plugin-posthog";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  process.env = { ...process.env, ...env };

  if (!process.env.VITE_POSTHOG_KEY || !process.env.VITE_POSTHOG_API_HOST) {
    throw new Error("VITE_POSTHOG_KEY or VITE_POSTHOG_API_HOST is not set");
  }

  return {
    plugins: [
      react(),
      tailwindcss(),
      vitePostHog({
        apiKey: process.env.VITE_POSTHOG_KEY,
        hostUrl: process.env.VITE_POSTHOG_API_HOST,
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
