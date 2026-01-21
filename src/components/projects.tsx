import ProjectCard from "@/components/ui/project-card";
import type { ProjectItem } from "@/types";

type ProjectsProps = {
	items: ProjectItem[];
};

export default function Projects({ items }: ProjectsProps) {
	return (
		<ul className="flex flex-col gap-3 list-none">
			{items.map((project) => (
				<li key={project.name}>
					<ProjectCard {...project} />
				</li>
			))}
		</ul>
	);
}
