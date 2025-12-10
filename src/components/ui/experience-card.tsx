import { formatDate } from "../../lib/utils";
import type { ExperienceItem } from "../../types/portfolio";

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
		: `${formatDate(startDate)} — present`;

	return (
		<article className="flex gap-4 py-2">
			<div className="shrink-0">
				<img
					src={logo}
					alt={`${company} logo`}
					className="size-12 rounded-lg object-cover"
					aria-hidden="true"
				/>
			</div>
			<div className="flex-1 min-w-0">
				<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
					<div className="flex flex-col gap-1 min-w-0">
						<div className="flex flex-wrap items-baseline gap-1.5">
							<h3 className="font-medium text-sm text-foreground">{company}</h3>
							<span className="text-sm text-muted-foreground font-normal">
								({role})
							</span>
						</div>
						<p className="text-sm text-muted-foreground leading-relaxed">
							{description}
						</p>
					</div>
					<time
						dateTime={startDate}
						className="hidden sm:block text-xs text-muted-foreground font-mono shrink-0"
					>
						{period}
					</time>
				</div>
			</div>
		</article>
	);
}
