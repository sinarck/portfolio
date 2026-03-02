import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/icons/ArrowUpRight";
import type { ProjectItem } from "@/types/portfolio";

type ProjectsProps = {
	items: ProjectItem[];
	baseIndex: number;
};

export default function Projects({ items, baseIndex }: ProjectsProps) {
	return (
		<ul className="-mx-3 space-y-1">
			{items.map((project, i) => (
				<li
					key={project._key}
					className="animate-in"
					style={{ "--i": baseIndex + i } as React.CSSProperties}
				>
					<a
						href={project.link}
						target="_blank"
						rel="noreferrer noopener"
						className="group block px-3 py-3 hover-bg interactive focus-ring"
					>
						<div className="flex items-center gap-1.5">
							<span className="text-foreground hover-underline">
								{project.name}
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
