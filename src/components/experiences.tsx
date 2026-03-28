import type { WorkExperience } from "@/types/profile";

type ExperiencesProps = {
	items: WorkExperience[];
};

export default function Experiences({ items }: ExperiencesProps) {
	return (
		<ul className="space-y-6 enter-list">
			{items.map((experience) => (
				<li
					key={`${experience.company}:${experience.startDate}`}
					className="grid grid-cols-[2.5rem_1fr] gap-x-4 enter"
				>
					<img
						src={experience.logoUrl}
						alt={`${experience.company} logo`}
						width={40}
						height={40}
						loading="lazy"
						decoding="async"
						className="size-10 rounded object-contain row-span-2"
					/>
					<div className="min-w-0 flex items-center justify-between gap-4 self-end">
						<div className="min-w-0 flex items-center gap-2">
							<span className="text-foreground leading-none">
								{experience.company}
							</span>
							<span className="text-xs text-muted-foreground px-2 py-0.5 rounded-full border border-border leading-none select-none">
								{experience.role}
							</span>
						</div>
						<time className="text-sm text-muted-foreground shrink-0 tabular-nums hidden sm:block leading-none">
							{experience.startDate} - {experience.endDate}
						</time>
					</div>
					<p className="self-start mt-1 text-sm text-muted-foreground sm:line-clamp-2">
						{experience.description}
					</p>
				</li>
			))}
		</ul>
	);
}
