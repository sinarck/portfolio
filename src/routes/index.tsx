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
	const hasCurrently = s.currently?.length > 0;

	let i = 0;
	const header = i;
	i += 2; // name + headline
	const currently = hasCurrently ? i++ : -1;
	const currentlyItems = i++;
	const work = i++;
	const workItems = i;
	i += s.experience.length;
	const projects = i++;
	const projectItems = i;
	i += s.projects.length;
	const footer = i;

	return (
		// biome-ignore lint/correctness/useUniqueElementIds: intentional static ID for skip-link accessibility
		<main
			id="main-content"
			className="max-w-2xl lg:max-w-3xl mx-auto px-6 min-h-dvh flex flex-col justify-center pt-12 pb-8 lg:py-8"
		>
			<PortfolioHeader
				name={`Hey, I'm ${s.name}`}
				headline={s.headline}
				baseIndex={header}
			/>

			{hasCurrently && (
				<Section label="currently" baseIndex={currently}>
					<Currently items={s.currently} baseIndex={currentlyItems} />
				</Section>
			)}

			<Section label="work" baseIndex={work}>
				<Experiences items={s.experience} baseIndex={workItems} />
			</Section>

			<Section label="projects" baseIndex={projects}>
				<Projects items={s.projects} baseIndex={projectItems} />
			</Section>

			<Footer socials={s.socials} email={s.email} baseIndex={footer} />
		</main>
	);
}
