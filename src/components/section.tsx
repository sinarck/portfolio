import type { ReactNode } from "react";

export default function Section({
	label,
	children,
}: {
	label: string;
	children: ReactNode;
}) {
	return (
		<section className="mb-10 lg:mb-8 enter-group">
			<h2 className="text-xs uppercase tracking-widest text-muted-foreground mb-4 enter">
				{label}
			</h2>
			{children}
		</section>
	);
}
