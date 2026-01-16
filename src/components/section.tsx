import type { ReactNode } from "react";

type SectionProps = {
	label: string;
	children: ReactNode;
};

export default function Section({ label, children }: SectionProps) {
	const capitalizedLabel = label.charAt(0).toUpperCase() + label.slice(1);

	return (
		<section className="space-y-4" aria-labelledby={`section-${label}`}>
			<h2
				id={`section-${label}`}
				className="text-sm font-medium text-muted-foreground tracking-tight"
			>
				{capitalizedLabel}
			</h2>
			{children}
		</section>
	);
}
