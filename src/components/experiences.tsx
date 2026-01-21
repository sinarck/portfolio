import ExperienceCard from "@/components/ui/experience-card";
import type { ExperienceItem } from "@/types";

type ExperiencesProps = {
	items: ExperienceItem[];
};

export default function Experiences({ items }: ExperiencesProps) {
	return (
		<ul className="flex flex-col gap-3 list-none">
			{items.map((experience) => (
				<li key={experience.company}>
					<ExperienceCard {...experience} />
				</li>
			))}
		</ul>
	);
}
