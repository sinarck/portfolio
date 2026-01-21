import { ArrowUpRight } from "lucide-react";
import { parseISODate } from "@/lib/utils";
import type { ProjectItem } from "@/types/portfolio";

export default function ProjectCard({
	name,
	description,
	link,
	date,
}: ProjectItem) {
	const year = parseISODate(date).getFullYear();

	return (
		<article className="group">
			<a
				href={link}
				target="_blank"
				rel="noreferrer noopener"
				className="block focus:outline-none focus-visible:ring-1 focus-visible:ring-primary"
				aria-label={`${name}: ${description}. Opens in new tab`}
			>
				<div className="relative p-4 border border-border bg-card/50 te-border-glow transition-colors">
					{/* Corner accents */}
					<div className="absolute -top-px -left-px w-3 h-3 border-t border-l border-primary opacity-0 group-hover:opacity-100 transition-opacity" />
					<div className="absolute -top-px -right-px w-3 h-3 border-t border-r border-primary opacity-0 group-hover:opacity-100 transition-opacity" />
					<div className="absolute -bottom-px -left-px w-3 h-3 border-b border-l border-primary opacity-0 group-hover:opacity-100 transition-opacity" />
					<div className="absolute -bottom-px -right-px w-3 h-3 border-b border-r border-primary opacity-0 group-hover:opacity-100 transition-opacity" />

					<div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-4">
						<div className="space-y-2 flex-1">
							{/* Project name with arrow */}
							<div className="flex items-center gap-2">
								<h3 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
									{name}
								</h3>
								<ArrowUpRight
									className="size-3 text-muted-foreground opacity-0 -translate-x-1 -translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-200"
									aria-hidden="true"
								/>
							</div>
							<p className="text-xs text-muted-foreground leading-relaxed">
								{description}
							</p>
						</div>

						{/* Year badge */}
						<time
							dateTime={date}
							className="text-xs text-muted-foreground font-mono shrink-0 tabular-nums px-2 py-1 border border-border group-hover:border-primary/50 transition-colors"
						>
							{year}
						</time>
					</div>

					{/* Technical detail */}
					<div className="mt-3 pt-3 border-t border-border/50 flex items-center gap-2 text-xs font-mono text-muted-foreground/50">
						<span className="size-1 bg-primary/50 group-hover:bg-primary transition-colors" />
						<span>external link</span>
					</div>
				</div>
			</a>
		</article>
	);
}
