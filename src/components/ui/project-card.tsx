import { ArrowUpRight } from "lucide-react";
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
				className="block py-5 border-b border-border/30 last:border-b-0 focus:outline-none focus-visible:bg-primary/5"
				aria-label={`${name}: ${description}. Opens in new tab`}
			>
				<div className="flex items-baseline justify-between gap-4">
					<div className="flex items-baseline gap-2 min-w-0">
						<h3 className="text-sm text-foreground group-hover:text-primary transition-colors truncate">
							{name}
						</h3>
						<ArrowUpRight
							className="size-3 text-muted-foreground/40 group-hover:text-primary transition-colors shrink-0"
							aria-hidden="true"
						/>
					</div>
					<span className="text-[10px] tabular-nums text-muted-foreground/40 shrink-0">
						{year}
					</span>
				</div>
				<p className="mt-1 text-xs text-muted-foreground/70 leading-relaxed">
					{description}
				</p>
			</a>
		</article>
	);
}
