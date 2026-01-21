import { TanStackDevtools } from "@tanstack/react-devtools";
import {
	createRootRoute,
	HeadContent,
	Outlet,
	Scripts,
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import NotFound from "@/components/not-found";
import { siteConfig } from "@/config";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ name: "theme-color", content: siteConfig.themeColor },
			{ title: siteConfig.title },
			{ name: "description", content: siteConfig.description },
			{ property: "og:title", content: siteConfig.title },
			{ property: "og:description", content: siteConfig.description },
			{ property: "og:image", content: siteConfig.ogImage },
			{ property: "og:type", content: "website" },
			{ name: "twitter:card", content: "summary_large_image" },
			{ name: "twitter:title", content: siteConfig.title },
			{ name: "twitter:description", content: siteConfig.description },
			{ name: "twitter:image", content: siteConfig.ogImage },
			{ name: "color-scheme", content: "dark" },
		],
		links: [
			{ rel: "stylesheet", href: appCss },
			{ rel: "manifest", href: "/manifest.json" },
			{ rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
		],
	}),
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
					className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-overlay focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-none"
				>
					Skip to main content
				</a>
				{children}
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
