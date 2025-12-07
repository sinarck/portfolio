import type { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./footer";
import { ModeToggle } from "./mode-toggle";
import PortfolioHeader from "./portfolio-header";
import { ThemeProvider } from "./theme-provider";
import { portfolioData } from "../config/portfolio";

export default function Layout({ children }: { children?: ReactNode }) {
	return (
		<ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
			<a
				href="#main-content"
				className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-none"
			>
				Skip to main content
			</a>
			<main
				id="main-content"
				className="min-h-dvh w-full flex justify-center font-sans selection:bg-foreground selection:text-background"
			>
				<div className="w-full max-w-3xl mx-auto p-6 sm:p-12 space-y-8 mt-8 sm:mt-12">
					<div className="flex flex-col gap-6 animate-in-up">
						<div className="flex items-start justify-between gap-4">
							<PortfolioHeader
								name={portfolioData.name}
								headline={portfolioData.headline}
							/>
							<ModeToggle />
						</div>
					</div>

					<Outlet />

					<div
						className="pt-4 animate-in-up"
						style={{ animationDelay: "250ms" }}
					>
						<Footer
							email={portfolioData.email}
							socials={portfolioData.socials}
						/>
					</div>
				</div>
			</main>
		</ThemeProvider>
	);
}

