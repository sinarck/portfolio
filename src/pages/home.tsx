import Projects from "../components/projects";
import Section from "../components/section";
import Skills from "../components/skills";
import { portfolioData } from "../config/portfolio";

export default function Home() {
	return (
		<>
			<Section label="projects">
				<Projects items={portfolioData.projects} />
			</Section>

			<Section label="skills">
				<Skills items={portfolioData.skills} />
			</Section>
		</>
	);
}
