import { SpeedInsights } from "@vercel/speed-insights/react";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./page.tsx";

// Initialize PostHog with weird Vite env variable magic
if (import.meta.env.VITE_POSTHOG_KEY && import.meta.env.PROD) {
	posthog.init(import.meta.env.VITE_POSTHOG_KEY, {
		api_host: "/pineapple-lemon/",
		ui_host: import.meta.env.VITE_POSTHOG_API_HOST,
	});
}

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<PostHogProvider client={posthog}>
			<App />
			<SpeedInsights />
		</PostHogProvider>
	</StrictMode>,
);
