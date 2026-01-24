import type { ReactNode } from "react";

export default function Section({
	label,
	children,
}: {
	label: string;
	children: ReactNode;
}) {
	return (
		<section className="mb-10 animate-in">
			<h2 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
				{label}
			</h2>
			{children}
		</section>
	);
}
