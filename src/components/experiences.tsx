import { formatDate } from "@/lib/utils";
import type { ExperienceItem } from "@/types";

type ExperiencesProps = {
	items: ExperienceItem[];
};

export default function Experiences({ items }: ExperiencesProps) {
	return (
		<ul className="space-y-6">
			{items.map((exp) => (
				<li key={exp.company} className="flex gap-4">
					<img
						src={exp.logo}
						alt=""
						width={40}
						height={40}
						loading="lazy"
						decoding="async"
						className="size-10 rounded object-contain shrink-0"
					/>
					<div className="min-w-0 flex-1">
						<div className="flex items-baseline justify-between gap-4">
							<div className="min-w-0 flex items-center gap-2">
								<span className="text-foreground">{exp.company}</span>
								<span className="text-xs text-muted-foreground px-2 py-0.5 rounded-full border border-border">
									{exp.role}
								</span>
							</div>
							<time className="text-xs text-muted-foreground shrink-0 tabular-nums hidden sm:block">
								{formatDate(exp.startDate)}
							</time>
						</div>
						<p className="mt-1 text-sm text-muted-foreground line-clamp-2">
							{exp.description}
						</p>
					</div>
				</li>
			))}
		</ul>
	);
}
