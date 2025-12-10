import Experiences from "../components/experiences";
import Section from "../components/section";
import { portfolioData } from "../config/portfolio";

export default function Work() {
	return (
		<Section label="work">
			<Experiences items={portfolioData.experience} />
		</Section>
	);
}
