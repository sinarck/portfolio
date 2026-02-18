import { ArrowUpRightIcon } from "@phosphor-icons/react";
import type { ProjectItem } from "@/types";

type ProjectsProps = {
	items: ProjectItem[];
};

export default function Projects({ items }: ProjectsProps) {
	return (
		<ul className="-mx-3 space-y-1">
			{items.map((project) => (
				<li key={project.name}>
					<a
						href={project.link}
						target="_blank"
						rel="noreferrer noopener"
						className="group block px-3 py-3 -outline-offset-2 rounded-md hover-bg transition-colors duration-150 ease focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
					>
						<div className="flex items-center gap-1.5">
							<span className="relative text-foreground">
								{project.name}
								<span className="absolute left-0 -bottom-px h-px w-full bg-current hover-underline" />
							</span>
							<ArrowUpRightIcon
								className="size-3.5 text-muted-foreground hover-slide-in"
								aria-hidden="true"
							/>
						</div>
						<p className="mt-1 text-sm text-muted-foreground sm:line-clamp-2">
							{project.description}
						</p>
					</a>
				</li>
			))}
		</ul>
	);
}
