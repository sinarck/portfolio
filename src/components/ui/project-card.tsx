import { ArrowUpRightIcon } from "@phosphor-icons/react";
import type { ProjectItem } from "../../types/portfolio";

export default function ProjectCard({
	name,
	description,
	link,
	date,
}: ProjectItem) {
	const year = new Date(date).getFullYear();

	const content = (
		<div className="group flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4 py-2 cursor-pointer">
			<div className="space-y-1">
				<h3 className="font-medium text-sm flex items-center gap-1">
					<span className="text-foreground underline decoration-transparent group-hover:decoration-muted-foreground underline-offset-4 transition-[text-decoration-color] duration-300 ease-out">
						{name}
					</span>
					<ArrowUpRightIcon
						className="size-3 text-muted-foreground opacity-0 -translate-x-1 transition-[opacity,transform] duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0"
						aria-hidden="true"
					/>
				</h3>
				<p className="text-sm text-muted-foreground leading-relaxed">
					{description}
				</p>
			</div>
			<time
				dateTime={date}
				className="text-xs text-muted-foreground font-mono shrink-0"
			>
				{year}
			</time>
		</div>
	);

	return (
		<article>
			<a
				href={link}
				target="_blank"
				rel="noreferrer noopener"
				className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg"
				aria-label={`${name}: ${description}. Opens in new tab`}
			>
				{content}
			</a>
		</article>
	);
}
