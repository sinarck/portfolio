import type { ProjectItem } from "../types/portfolio";
import ProjectCard from "./ui/project-card";

export default function Projects({ items }: { items: ProjectItem[] }) {
	if (!items.length) return null;

	return (
		<ul className="flex flex-col gap-2 list-none">
			{items.map((project) => (
				<li key={`${project.name}-${project.link ?? "nolink"}`}>
					<ProjectCard
						name={project.name}
						description={project.description}
						link={project.link}
						date={project.date}
					/>
				</li>
			))}
		</ul>
	);
}
