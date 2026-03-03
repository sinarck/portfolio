import { TanStackDevtools } from "@tanstack/react-devtools";
import {
	createRootRoute,
	HeadContent,
	Outlet,
	Scripts,
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { lazy, Suspense } from "react";

const Analytics = lazy(() =>
	import("@vercel/analytics/react").then((m) => ({ default: m.Analytics })),
);

import { MotionConfig } from "motion/react";
import ErrorPage from "@/components/error-page";
import NotFound from "@/components/not-found";
import { getSiteSettings } from "@/lib/sanity";

const SITE_URL = "https://www.aadisanghvi.com";

import appCss from "../styles.css?url";

export const Route = createRootRoute({
	loader: () => getSiteSettings(),
	staleTime: 5 * 60_000, // 5 min — reuse cached data on client nav
	gcTime: 30 * 60_000, // 30 min — keep in memory
	headers: () => ({
		"Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
	}),
	head: ({ loaderData: s }) => ({
		meta: [
			{ charSet: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ name: "theme-color", content: "#0a0a0a" },
			{ title: s?.name ?? "" },
			{ name: "description", content: s?.headline ?? "" },
			{ property: "og:title", content: s?.name ?? "" },
			{ property: "og:description", content: s?.headline ?? "" },
			{ property: "og:url", content: SITE_URL },
			{ property: "og:image", content: `${SITE_URL}/og-image.png` },
			{ property: "og:type", content: "website" },
			{ name: "twitter:url", content: SITE_URL },
			{ name: "twitter:card", content: "summary_large_image" },
			{ name: "twitter:title", content: s?.name ?? "" },
			{ name: "twitter:description", content: s?.headline ?? "" },
			{
				name: "twitter:image",
				content: `${SITE_URL}/og-image.png`,
			},
			{ name: "color-scheme", content: "dark" },
		],
		links: [
			{ rel: "stylesheet", href: appCss },
			{ rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
		],
	}),
	errorComponent: ({ error, reset }) => (
		<ErrorPage
			label="Error"
			title="Something went wrong"
			description={error.message || "An unexpected error occurred."}
			action={{ type: "reset", reset }}
		/>
	),
	notFoundComponent: () => <NotFound />,
	component: RootComponent,
	shellComponent: RootDocument,
});

function RootComponent() {
	return <Outlet />;
}

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<HeadContent />
			</head>
			<body>
				<a
					href="#main-content"
					className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-foreground focus:text-background focus:rounded-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
				>
					Skip to main content
				</a>
				<MotionConfig reducedMotion="user">{children}</MotionConfig>
				<Suspense fallback={null}>
					<Analytics />
				</Suspense>
				<TanStackDevtools
					config={{ position: "bottom-right" }}
					plugins={[
						{
							name: "Tanstack Router",
							render: <TanStackRouterDevtoolsPanel />,
						},
					]}
				/>
				<Scripts />
			</body>
		</html>
	);
}
