import type { ExperienceItem } from "@/types";

type ExperiencesProps = {
	items: ExperienceItem[];
};

function formatDate(dateString: string): string {
	const date = new Date(dateString);
	return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

export default function Experiences({ items }: ExperiencesProps) {
	return (
		<ul className="space-y-6">
			{items.map((exp) => (
				<li key={exp.company} className="flex gap-4">
					<img
						src={exp.logo}
						alt=""
						className="size-10 rounded object-contain bg-neutral-900 p-1.5 shrink-0"
					/>
					<div className="min-w-0 flex-1">
						<div className="flex items-baseline justify-between gap-4">
							<div className="min-w-0">
								<span className="text-foreground">{exp.company}</span>
								<span className="text-muted-foreground"> — {exp.role}</span>
							</div>
							<time className="text-xs text-muted-foreground shrink-0 tabular-nums hidden sm:block">
								{formatDate(exp.startDate)}
							</time>
						</div>
						<p className="mt-1 text-sm text-muted-foreground">
							{exp.description}
						</p>
					</div>
				</li>
			))}
		</ul>
	);
}
