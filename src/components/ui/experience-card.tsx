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
	const start = formatDate(startDate);
	const end = endDate ? formatDate(endDate) : "—";

	return (
		<article className="group py-4 border-b border-border/30 last:border-b-0">
			<div className="flex gap-4">
				{/* Logo */}
				<div className="shrink-0 pt-0.5">
					<img
						src={logo}
						alt=""
						className="size-8 object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
					/>
				</div>

				{/* Content */}
				<div className="flex-1 min-w-0">
					<div className="flex items-baseline justify-between gap-4">
						<div className="flex items-baseline gap-2 min-w-0">
							<h3 className="text-sm text-foreground truncate">{company}</h3>
							<span className="text-[10px] text-primary shrink-0">{role}</span>
						</div>
						<time className="text-[10px] tabular-nums text-muted-foreground/60 shrink-0 hidden sm:block">
							{start} → {end}
						</time>
					</div>
					<p className="mt-1 text-xs text-muted-foreground/80 leading-relaxed">
						{description}
					</p>
				</div>
			</div>
		</article>
	);
}
