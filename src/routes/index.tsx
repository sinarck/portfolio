import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import Currently from "@/components/currently";
import Experiences from "@/components/experiences";
import Footer from "@/components/footer";
import PortfolioHeader from "@/components/portfolio-header";
import Projects from "@/components/projects";
import Section from "@/components/section";
import { portfolioData } from "@/config";

const EasterEgg = lazy(() => import("@/components/easter-egg"));

export const Route = createFileRoute("/")({
	component: HomePage,
});

function HomePage() {
	return (
		<>
			<Suspense fallback={null}>
				<EasterEgg />
			</Suspense>
			{/* biome-ignore lint/correctness/useUniqueElementIds: intentional static ID for skip-link accessibility */}
			<main
				id="main-content"
				className="max-w-2xl mx-auto px-6 min-h-dvh flex flex-col justify-center py-12"
			>
				<PortfolioHeader
					name={portfolioData.name}
					headline={portfolioData.headline}
					availability={portfolioData.availability}
				/>

				{portfolioData.currently && portfolioData.currently.length > 0 && (
					<Section label="currently" delay="delay-2">
						<Currently items={portfolioData.currently} />
					</Section>
				)}

				<Section label="work" delay="delay-2">
					<Experiences items={portfolioData.experience} />
				</Section>

				<Section label="projects" delay="delay-3">
					<Projects items={portfolioData.projects} />
				</Section>

				<Footer socials={portfolioData.socials} email={portfolioData.email} />
			</main>
		</>
	);
}
