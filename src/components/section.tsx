import type { ReactNode } from "react";

export default function Section({
	label,
	children,
	baseIndex,
}: {
	label: string;
	children: ReactNode;
	baseIndex: number;
}) {
	return (
		<section className="mb-10 lg:mb-8">
			<h2
				className="text-xs uppercase tracking-widest text-muted-foreground mb-4 animate-in"
				style={{ "--i": baseIndex } as React.CSSProperties}
			>
				{label}
			</h2>
			{children}
		</section>
	);
}
