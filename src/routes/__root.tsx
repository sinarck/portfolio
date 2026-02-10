import { TanStackDevtools } from "@tanstack/react-devtools";
import type { ErrorComponentProps } from "@tanstack/react-router";
import {
	createRootRoute,
	HeadContent,
	Outlet,
	Scripts,
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import NotFound from "@/components/not-found";
import { site } from "@/config";
import appCss from "../styles.css?url";

function RootErrorComponent({ error, reset }: ErrorComponentProps) {
	return (
		<main className="max-w-xl mx-auto px-6 min-h-dvh flex items-center justify-center">
			<div className="text-center space-y-6">
				<div className="space-y-2">
					<span className="text-xs text-muted-foreground tracking-widest">
						Error
					</span>
					<h1 className="text-lg font-medium tracking-tight">
						Something went wrong
					</h1>
				</div>
				<p className="text-sm text-muted-foreground">
					{error.message || "An unexpected error occurred."}
				</p>
				<button
					type="button"
					onClick={reset}
					className="inline-block text-sm text-muted-foreground hover:text-foreground transition-colors duration-150 ease cursor-pointer rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
				>
					Try again
				</button>
			</div>
		</main>
	);
}

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ name: "theme-color", content: site.themeColor },
			{ title: site.title },
			{ name: "description", content: site.description },
			{ property: "og:title", content: site.title },
			{ property: "og:description", content: site.description },
			{ property: "og:image", content: site.ogImage },
			{ property: "og:type", content: "website" },
			{ name: "twitter:card", content: "summary_large_image" },
			{ name: "twitter:title", content: site.title },
			{ name: "twitter:description", content: site.description },
			{ name: "twitter:image", content: site.ogImage },
			{ name: "color-scheme", content: "dark" },
		],
		links: [
			{ rel: "stylesheet", href: appCss },
			{ rel: "manifest", href: "/manifest.json" },
			{ rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
		],
	}),
	errorComponent: RootErrorComponent,
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
