import { SpeedInsights } from "@vercel/speed-insights/react";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";
import "./index.css";

const Home = lazy(() => import("./pages/home"));
const Work = lazy(() => import("./pages/work"));
const Writing = lazy(() => import("./pages/writing"));

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
				element: (
					<Suspense fallback={null}>
						<Home />
					</Suspense>
				),
			},
			{
				path: "work",
				element: (
					<Suspense fallback={null}>
						<Work />
					</Suspense>
				),
			},
			{
				path: "writing",
				element: (
					<Suspense fallback={null}>
						<Writing />
					</Suspense>
				),
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
