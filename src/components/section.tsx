import type { ReactNode } from "react";

type SectionProps = {
	label: string;
	index: number;
	children: ReactNode;
};

export default function Section({ label, index, children }: SectionProps) {
	const formattedIndex = index.toString().padStart(2, "0");

	return (
		<section className="space-y-6" aria-labelledby={`section-${label}`}>
			<div className="flex items-center gap-3">
				<span className="text-primary text-xs font-mono">{formattedIndex}</span>
				<div className="h-px flex-1 bg-border" />
				<h2
					id={`section-${label}`}
					className="text-xs font-mono uppercase tracking-widest text-muted-foreground"
				>
					{label}
				</h2>
			</div>
			{children}
		</section>
	);
}
