import type { ReactNode } from "react";

export default function Section({
	label,
	children,
	staggerIndex = 0,
}: {
	label: string;
	children: ReactNode;
	staggerIndex?: number;
}) {
	return (
		<section
			className="mb-10 animate-in stagger-in"
			style={{ "--stagger-index": staggerIndex } as React.CSSProperties}
		>
			<h2 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
				{label}
			</h2>
			{children}
		</section>
	);
}
