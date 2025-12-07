import Experiences from "../components/experiences";
import Section from "../components/section";
import { portfolioData } from "../config/portfolio";

export default function Work() {
	return (
		<Section label="work" delay="100ms">
			<Experiences items={portfolioData.experience} />
		</Section>
	);
}

