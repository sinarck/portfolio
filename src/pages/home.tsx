import Projects from "../components/projects";
import Section from "../components/section";
import Skills from "../components/skills";
import { portfolioData } from "../config/portfolio";

export default function Home() {
	return (
		<>
			<Section label="projects" delay="100ms">
				<Projects items={portfolioData.projects} />
			</Section>

			<Section label="skills" delay="150ms">
				<Skills items={portfolioData.skills} />
			</Section>
		</>
	);
}
