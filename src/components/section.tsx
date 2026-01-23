import type { ReactNode } from "react";

type SectionProps = {
	label: string;
	children: ReactNode;
};

export default function Section({ label, children }: SectionProps) {
	return (
		<section className="mb-16">
			<h2 className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
				{label}
			</h2>
			{children}
		</section>
	);
}
