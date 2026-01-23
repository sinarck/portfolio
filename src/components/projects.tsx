import { ArrowUpRight } from "lucide-react";
import type { ProjectItem } from "@/types";

type ProjectsProps = {
	items: ProjectItem[];
};

export default function Projects({ items }: ProjectsProps) {
	return (
		<ul className="space-y-4">
			{items.map((project) => (
				<li key={project.name}>
					<a
						href={project.link}
						target="_blank"
						rel="noreferrer noopener"
						className="group block"
					>
						<div className="flex items-center gap-1.5">
							<span className="text-foreground group-hover:text-muted-foreground transition-colors">
								{project.name}
							</span>
							<ArrowUpRight className="size-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
						</div>
						<p className="mt-1 text-sm text-muted-foreground">
							{project.description}
						</p>
					</a>
				</li>
			))}
		</ul>
	);
}
