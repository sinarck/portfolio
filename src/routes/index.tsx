import { createFileRoute, getRouteApi } from "@tanstack/react-router";
import Currently from "@/components/currently";
import Experiences from "@/components/experiences";
import Footer from "@/components/footer";
import PortfolioHeader from "@/components/portfolio-header";
import Projects from "@/components/projects";
import Section from "@/components/section";
import { motion, staggerContainer } from "@/components/ui/animate";

const rootRoute = getRouteApi("__root__");

export const Route = createFileRoute("/")({
	component: HomePage,
});

function HomePage() {
	const s = rootRoute.useLoaderData();

	return (
		// biome-ignore lint/correctness/useUniqueElementIds: intentional static ID for skip-link accessibility
		<motion.main
			id="main-content"
			variants={staggerContainer}
			initial="hidden"
			animate="visible"
			className="max-w-2xl lg:max-w-3xl mx-auto px-6 min-h-dvh flex flex-col justify-center pt-12 pb-8 lg:py-8"
		>
			<PortfolioHeader name={`Hey, I'm ${s.name}`} headline={s.headline} />

			<Section label="currently">
				<Currently items={s.currently} />
			</Section>

			<Section label="work">
				<Experiences items={s.experience} />
			</Section>

			<Section label="projects">
				<Projects items={s.projects} />
			</Section>

			<Footer socials={s.socials} email={s.email} />
		</motion.main>
	);
}
