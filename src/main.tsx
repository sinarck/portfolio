import { SpeedInsights } from "@vercel/speed-insights/react";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";
import "./index.css";
import Home from "./pages/home";
import Work from "./pages/work";
import Writing from "./pages/writing";

// Initialize PostHog with weird Vite env variable magic
if (import.meta.env.VITE_POSTHOG_KEY && import.meta.env.PROD) {
	posthog.init(import.meta.env.VITE_POSTHOG_KEY, {
		api_host: "/pineapple-lemon/",
		ui_host: import.meta.env.VITE_POSTHOG_API_HOST,
	});
}

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "work",
				element: <Work />,
			},
			{
				path: "writing",
				element: <Writing />,
			},
		],
	},
]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<PostHogProvider client={posthog}>
			<RouterProvider router={router} />
			<SpeedInsights />
		</PostHogProvider>
	</StrictMode>,
);
