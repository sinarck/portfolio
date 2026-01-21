import { createFileRoute } from "@tanstack/react-router";
import Experiences from "@/components/experiences";
import Footer from "@/components/footer";
import PortfolioHeader from "@/components/portfolio-header";
import Projects from "@/components/projects";
import Section from "@/components/section";
import { portfolioData } from "@/config/portfolio";

export const Route = createFileRoute("/")({ component: HomePage });

function HomePage() {
	return (
		<main className="min-h-dvh w-full font-mono">
			{/* Subtle grid background */}
			<div className="fixed inset-0 te-grid opacity-30 pointer-events-none" />

			<div className="relative z-10 w-full max-w-2xl mx-auto px-6 py-16 sm:py-24">
				{/* Header section */}
				<header
					className="mb-16 animate-in-up"
					style={{ animationDelay: "0ms" }}
				>
					<PortfolioHeader
						name={portfolioData.name}
						headline={portfolioData.headline}
					/>
				</header>

				{/* Main content */}
				<div className="space-y-16">
					<div className="animate-in-up" style={{ animationDelay: "100ms" }}>
						<Section label="work" index={1}>
							<Experiences items={portfolioData.experience} />
						</Section>
					</div>

					<div className="animate-in-up" style={{ animationDelay: "200ms" }}>
						<Section label="projects" index={2}>
							<Projects items={portfolioData.projects} />
						</Section>
					</div>
				</div>

				{/* Footer */}
				<div
					className="mt-16 pt-8 animate-in-up"
					style={{ animationDelay: "300ms" }}
				>
					<Footer email={portfolioData.email} socials={portfolioData.socials} />
				</div>
			</div>
		</main>
	);
}
