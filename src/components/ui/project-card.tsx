import { ArrowUpRight } from "lucide-react";
import CornerAccents from "@/components/ui/corner-accents";
import { parseISODate } from "@/lib/utils";
import type { ProjectItem } from "@/types";

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
				<div className="relative card-interactive">
					<CornerAccents />

					<div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-4">
						<div className="space-y-2 flex-1">
							{/* Project name */}
							<div className="flex items-center gap-2">
								<h3 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
									{name}
								</h3>
								<ArrowUpRight
									className="size-3 text-muted-foreground arrow-reveal"
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
							className="meta shrink-0 px-2 py-1 border border-border group-hover:border-primary/50 transition-colors"
						>
							{year}
						</time>
					</div>

					{/* Link indicator */}
					<div className="mt-3 pt-3 border-t border-border/50 flex items-center gap-2 meta opacity-50">
						<span className="size-1 bg-primary/50 group-hover:bg-primary transition-colors" />
						<span>external link</span>
					</div>
				</div>
			</a>
		</article>
	);
}
