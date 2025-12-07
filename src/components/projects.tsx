import type { ProjectItem } from "../types/portfolio";
import ProjectCard from "./ui/project-card";

export default function Projects({ items }: { items: ProjectItem[] }) {
	if (!items.length) return null;

	return (
		<div className="flex flex-col gap-2">
			{items.map((project) => (
				<ProjectCard
					key={`${project.name}-${project.link ?? "nolink"}`}
					name={project.name}
					description={project.description}
					link={project.link}
					date={project.date}
				/>
			))}
		</div>
	);
}
