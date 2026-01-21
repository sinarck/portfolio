import type { ReactNode } from "react";

type SectionProps = {
	label: string;
	index: number;
	children: ReactNode;
};

export default function Section({ label, index, children }: SectionProps) {
	const idx = index.toString().padStart(2, "0");

	return (
		<section aria-labelledby={`section-${label}`}>
			<div className="flex items-baseline gap-4 mb-6">
				<h2
					id={`section-${label}`}
					className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
				>
					{label}
				</h2>
				<div className="h-px flex-1 bg-border/50" />
				<span className="text-[10px] tabular-nums text-muted-foreground/50">
					{idx}
				</span>
			</div>
			{children}
		</section>
	);
}
