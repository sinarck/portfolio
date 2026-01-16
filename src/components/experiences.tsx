import ExperienceCard from "@/components/ui/experience-card";
import type { ExperienceItem } from "@/types/portfolio";

export default function Experiences({ items }: { items: ExperienceItem[] }) {
	return (
		<ul className="flex flex-col gap-2 list-none">
			{items.map((experience, index) => (
				<li key={`${experience.company}-${index}`}>
					<ExperienceCard {...experience} />
				</li>
			))}
		</ul>
	);
}
