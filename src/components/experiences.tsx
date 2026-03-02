import type { SiteSettings } from "@/lib/sanity";
import { formatDate } from "@/lib/utils";

type ExperiencesProps = {
	items: SiteSettings["experience"];
	baseIndex: number;
};

export default function Experiences({ items, baseIndex }: ExperiencesProps) {
	return (
		<ul className="space-y-6">
			{items.map((exp, i) => (
				<li
					key={exp._key}
					className="grid grid-cols-[2.5rem_1fr] gap-x-4 animate-in"
					style={{ "--i": baseIndex + i } as React.CSSProperties}
				>
					<img
						src={exp.logo ?? undefined}
						alt={`${exp.company} logo`}
						width={40}
						height={40}
						loading="lazy"
						decoding="async"
						className="size-10 rounded object-contain row-span-2"
					/>
					<div className="min-w-0 flex items-center justify-between gap-4 self-end">
						<div className="min-w-0 flex items-center gap-2">
							<span className="text-foreground leading-none">
								{exp.company}
							</span>
							<span className="text-xs text-muted-foreground px-2 py-0.5 rounded-full border border-border leading-none">
								{exp.role}
							</span>
						</div>
						<time className="text-sm text-muted-foreground shrink-0 tabular-nums hidden sm:block leading-none">
							{formatDate(exp.startDate)}
						</time>
					</div>
					<p className="self-start mt-1 text-sm text-muted-foreground sm:line-clamp-2">
						{exp.description}
					</p>
				</li>
			))}
		</ul>
	);
}
