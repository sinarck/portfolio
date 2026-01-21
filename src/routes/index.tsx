import { createFileRoute } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import DeviceFrame from "@/components/device-frame";
import Experiences from "@/components/experiences";
import Footer from "@/components/footer";
import PortfolioHeader from "@/components/portfolio-header";
import Projects from "@/components/projects";
import Section from "@/components/section";
import { portfolioData } from "@/config";

const getYear = createServerFn().handler(async () => {
	return new Date().getFullYear();
});

export const Route = createFileRoute("/")({
	loader: () => getYear(),
	component: HomePage,
});

function HomePage() {
	const year = Route.useLoaderData();

	return (
		<DeviceFrame>
			<main className="w-full max-w-container-md mx-auto px-6 py-12 sm:py-16">
				{/* Header */}
				<header className="mb-12 animate-in-up delay-0">
					<PortfolioHeader
						name={portfolioData.name}
						headline={portfolioData.headline}
					/>
				</header>

				{/* Sections */}
				<div className="space-y-12">
					<div className="animate-in-up delay-1">
						<Section label="work" index={1}>
							<Experiences items={portfolioData.experience} />
						</Section>
					</div>

					<div className="animate-in-up delay-2">
						<Section label="projects" index={2}>
							<Projects items={portfolioData.projects} />
						</Section>
					</div>
				</div>

				{/* Footer */}
				<div className="mt-12 animate-in-up delay-3">
					<Footer
						email={portfolioData.email}
						socials={portfolioData.socials}
						year={year}
					/>
				</div>
			</main>
		</DeviceFrame>
	);
}
