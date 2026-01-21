import { formatDate } from "@/lib/utils";
import type { ExperienceItem } from "@/types/portfolio";

export default function ExperienceCard({
	company,
	role,
	startDate,
	endDate,
	description,
	logo,
}: ExperienceItem) {
	const period = endDate
		? `${formatDate(startDate)} — ${formatDate(endDate)}`
		: `${formatDate(startDate)} — now`;

	return (
		<article className="group relative">
			<div className="flex gap-4 p-4 border border-border bg-card/50 te-border-glow transition-colors">
				{/* Logo with industrial frame */}
				<div className="shrink-0">
					<div className="relative">
						<img
							src={logo}
							alt=""
							className="size-10 object-cover grayscale group-hover:grayscale-0 transition-[filter] duration-300"
							aria-hidden="true"
						/>
						{/* Corner accents */}
						<div className="absolute -top-px -left-px w-2 h-2 border-t border-l border-primary opacity-0 group-hover:opacity-100 transition-opacity" />
						<div className="absolute -bottom-px -right-px w-2 h-2 border-b border-r border-primary opacity-0 group-hover:opacity-100 transition-opacity" />
					</div>
				</div>

				{/* Content */}
				<div className="flex-1 min-w-0 space-y-1">
					<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
						<div className="space-y-1">
							<div className="flex flex-wrap items-center gap-2">
								<h3 className="text-sm font-medium text-foreground">
									{company}
								</h3>
								<span className="text-xs text-primary font-mono">{role}</span>
							</div>
							<p className="text-xs text-muted-foreground leading-relaxed">
								{description}
							</p>
						</div>
						<time
							dateTime={startDate}
							className="hidden sm:block text-xs text-muted-foreground font-mono shrink-0 tabular-nums"
						>
							{period}
						</time>
					</div>
				</div>
			</div>
		</article>
	);
}
