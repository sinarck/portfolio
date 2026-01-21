import CornerAccents from "@/components/ui/corner-accents";
import { formatDate } from "@/lib/utils";
import type { ExperienceItem } from "@/types";

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
			<div className="flex gap-4 card-interactive">
				{/* Logo */}
				<div className="shrink-0">
					<div className="relative">
						<img
							src={logo}
							alt=""
							className="size-10 object-cover grayscale group-hover:grayscale-0 transition-[filter] duration-slow"
							aria-hidden="true"
						/>
						<CornerAccents size="sm" />
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
								<span className="text-xs text-primary">{role}</span>
							</div>
							<p className="text-xs text-muted-foreground leading-relaxed">
								{description}
							</p>
						</div>
						<time
							dateTime={startDate}
							className="hidden sm:block meta shrink-0"
						>
							{period}
						</time>
					</div>
				</div>
			</div>
		</article>
	);
}
