import { createFileRoute, getRouteApi } from "@tanstack/react-router";
import Currently from "@/components/currently";
import Experiences from "@/components/experiences";
import Footer from "@/components/footer";
import PortfolioHeader from "@/components/portfolio-header";
import Projects from "@/components/projects";
import Section from "@/components/section";

const rootRoute = getRouteApi("__root__");

export const Route = createFileRoute("/")({
	component: HomePage,
});

function HomePage() {
	const s = rootRoute.useLoaderData();
	let sectionIndex = 0;

	return (
		// biome-ignore lint/correctness/useUniqueElementIds: intentional static ID for skip-link accessibility
		<main
			id="main-content"
			className="max-w-2xl lg:max-w-3xl mx-auto px-6 min-h-dvh flex flex-col justify-center pt-12 pb-8 lg:py-8"
		>
			<PortfolioHeader
				name={`Hey, I'm ${s.name}`}
				headline={s.headline}
				availability={s.availability}
			/>

			{s.currently?.length > 0 && (
				<Section label="currently" staggerIndex={sectionIndex++}>
					<Currently items={s.currently} />
				</Section>
			)}

			<Section label="work" staggerIndex={sectionIndex++}>
				<Experiences items={s.experience} />
			</Section>

			<Section label="projects" staggerIndex={sectionIndex++}>
				<Projects items={s.projects} />
			</Section>

			<Footer
				socials={s.socials}
				email={s.email}
				staggerIndex={sectionIndex++}
			/>
		</main>
	);
}
