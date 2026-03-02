import { createFileRoute, getRouteApi } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
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
	const ref = useRef<HTMLElement>(null);

	// TODO: Find some way to get rid of this `useEffect` and replace w/ plain CSS
	useEffect(() => {
		ref.current
			?.querySelectorAll<HTMLElement>(".animate-in")
			.forEach((el, i) => {
				el.style.setProperty("--i", String(i));
			});
	}, []);

	return (
		// biome-ignore lint/correctness/useUniqueElementIds: intentional static ID for skip-link accessibility
		<main
			ref={ref}
			id="main-content"
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
		</main>
	);
}
