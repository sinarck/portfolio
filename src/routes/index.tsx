import { createFileRoute } from "@tanstack/react-router";
import Currently from "@/components/currently";
import Experiences from "@/components/experiences";
import Footer from "@/components/footer";
import PortfolioHeader from "@/components/portfolio-header";
import Projects from "@/components/projects";
import Section from "@/components/section";
import { portfolio } from "@/config";

export const Route = createFileRoute("/")({
	component: HomePage,
});

function HomePage() {
	return (
		// biome-ignore lint/correctness/useUniqueElementIds: intentional static ID for skip-link accessibility
		<main
			id="main-content"
			className="max-w-2xl lg:max-w-3xl mx-auto px-6 min-h-dvh flex flex-col justify-center py-12"
		>
			<PortfolioHeader
				name={portfolio.name}
				headline={portfolio.headline}
				availability={portfolio.availability}
			/>

			{portfolio.currently && portfolio.currently.length > 0 && (
				<Section label="currently">
					<Currently items={portfolio.currently} />
				</Section>
			)}

			<Section label="work">
				<Experiences items={portfolio.experience} />
			</Section>

			<Section label="projects">
				<Projects items={portfolio.projects} />
			</Section>

			<Footer socials={portfolio.socials} email={portfolio.email} />
		</main>
	);
}
