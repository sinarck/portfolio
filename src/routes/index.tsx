import { createFileRoute } from "@tanstack/react-router";
import Experiences from "@/components/experiences";
import Footer from "@/components/footer";
import PortfolioHeader from "@/components/portfolio-header";
import Projects from "@/components/projects";
import Section from "@/components/section";
import { portfolioData } from "@/config";

export const Route = createFileRoute("/")({
	component: HomePage,
});

function HomePage() {
	return (
		<main className="max-w-2xl mx-auto px-6 py-16 sm:py-24">
			<PortfolioHeader
				name={portfolioData.name}
				headline={portfolioData.headline}
				email={portfolioData.email}
			/>

			<Section label="work">
				<Experiences items={portfolioData.experience} />
			</Section>

			<Section label="projects">
				<Projects items={portfolioData.projects} />
			</Section>

			<Footer socials={portfolioData.socials} />
		</main>
	);
}
