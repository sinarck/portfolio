import type { ProjectItem } from "../types/portfolio";
import ProjectCard from "./ui/project-card";

export default function Projects({ items }: { items: ProjectItem[] }) {
	return (
		<ul className="flex flex-col gap-2 list-none">
			{items.map((project) => (
				<li key={`${project.name}-${project.link}`}>
					<ProjectCard {...project} />
				</li>
			))}
		</ul>
	);
}
