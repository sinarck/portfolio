import { ArrowUpRightIcon } from "@phosphor-icons/react";
import type { ProjectItem } from "@/types";

type ProjectsProps = {
	items: ProjectItem[];
};

export default function Projects({ items }: ProjectsProps) {
	return (
		<ul className="space-y-6">
			{items.map((project) => (
				<li key={project.name}>
					<a
						href={project.link}
						target="_blank"
						rel="noreferrer noopener"
						className="group block pl-4 border-l-2 border-border hover:border-muted-foreground transition-colors duration-150 ease"
					>
						<div className="flex items-center gap-1.5">
							<span className="text-foreground group-hover:text-muted-foreground transition-colors duration-150 ease">
								{project.name}
							</span>
							<ArrowUpRightIcon
								className="size-3.5 text-muted-foreground hover-slide-in"
								aria-hidden="true"
							/>
						</div>
						<p className="mt-1 text-sm text-muted-foreground line-clamp-2">
							{project.description}
						</p>
					</a>
				</li>
			))}
		</ul>
	);
}
