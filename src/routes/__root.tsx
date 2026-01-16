import { TanStackDevtools } from "@tanstack/react-devtools";
import {
	createRootRoute,
	HeadContent,
	Outlet,
	Scripts,
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { ThemeProvider } from "@/components/theme-provider";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ name: "theme-color", content: "#ffffff" },
			{ title: "Aadi Sanghvi — Portfolio" },
			{
				name: "description",
				content:
					"High school student building Open Attendance. Software engineer and founder.",
			},
			{ property: "og:title", content: "Aadi Sanghvi — Portfolio" },
			{
				property: "og:description",
				content:
					"High school student building Open Attendance. Software engineer and founder.",
			},
			{ property: "og:image", content: "/og-image.png" },
			{ property: "og:type", content: "website" },
			{ name: "twitter:card", content: "summary_large_image" },
			{ name: "twitter:title", content: "Aadi Sanghvi — Portfolio" },
			{
				name: "twitter:description",
				content:
					"High school student building Open Attendance. Software engineer and founder.",
			},
			{ name: "twitter:image", content: "/og-image.png" },
		],
		links: [
			{ rel: "stylesheet", href: appCss },
			{ rel: "manifest", href: "/manifest.json" },
			{ rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
		],
	}),
	component: RootComponent,
	shellComponent: RootDocument,
});

function RootComponent() {
	return <Outlet />;
}

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<HeadContent />
				<script
					dangerouslySetInnerHTML={{
						__html: `
							(function() {
								const theme = localStorage.getItem('portfolio-theme') || 'system';
								const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
								const isDark = theme === 'dark' || (theme === 'system' && systemDark);
								document.documentElement.classList.add(isDark ? 'dark' : 'light');
							})();
						`,
					}}
				/>
			</head>
			<body>
				<ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
					<a
						href="#main-content"
						className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-none"
					>
						Skip to main content
					</a>
					{children}
				</ThemeProvider>
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
