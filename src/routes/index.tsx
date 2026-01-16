import { createFileRoute } from "@tanstack/react-router";
import Experiences from "@/components/experiences";
import Footer from "@/components/footer";
import { ModeToggle } from "@/components/mode-toggle";
import PortfolioHeader from "@/components/portfolio-header";
import Projects from "@/components/projects";
import Section from "@/components/section";
import { portfolioData } from "@/config/portfolio";

export const Route = createFileRoute("/")({ component: HomePage });

function HomePage() {
	return (
		<main
			id="main-content"
			className="min-h-dvh w-full flex justify-center font-sans selection:bg-foreground selection:text-background"
		>
			<div className="w-full max-w-3xl mx-auto p-6 sm:p-12 space-y-8 mt-8 sm:mt-12">
				<div className="flex flex-col gap-6">
					<div className="flex items-start justify-between gap-4">
						<PortfolioHeader
							name={portfolioData.name}
							headline={portfolioData.headline}
						/>
						<ModeToggle />
					</div>
				</div>

				<Section label="work">
					<Experiences items={portfolioData.experience} />
				</Section>

				<Section label="projects">
					<Projects items={portfolioData.projects} />
				</Section>

				<div className="pt-4">
					<Footer email={portfolioData.email} socials={portfolioData.socials} />
				</div>
			</div>
		</main>
	);
}
