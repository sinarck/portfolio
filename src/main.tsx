import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./page.tsx";

const POSTHOG_KEY = import.meta.env.VITE_POSTHOG_KEY as string | undefined;
const POSTHOG_HOST =
	(import.meta.env.VITE_POSTHOG_API_HOST as string | undefined) ||
	"https://us.i.posthog.com";

if (POSTHOG_KEY) {
	posthog.init(POSTHOG_KEY, {
		api_host: "/pineapple-lemon/",
		ui_host: POSTHOG_HOST,
	});
}

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<PostHogProvider client={posthog}>
			<App />
		</PostHogProvider>
	</StrictMode>,
);
