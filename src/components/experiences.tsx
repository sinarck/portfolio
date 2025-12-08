import type { ExperienceItem } from "../types/portfolio";
import ExperienceCard from "./ui/experience-card";

export default function Experiences({ items }: { items: ExperienceItem[] }) {
	if (!items.length) return null;

	return (
		<ul className="flex flex-col gap-2 list-none">
			{items.map((experience, index) => (
				<li key={`${experience.company}-${index}`}>
					<ExperienceCard
						company={experience.company}
						role={experience.role}
						startDate={experience.startDate}
						endDate={experience.endDate}
						description={experience.description}
						logo={experience.logo}
					/>
				</li>
			))}
		</ul>
	);
}


