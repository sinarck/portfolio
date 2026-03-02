import type { ReactNode } from "react";

export default function Section({
	label,
	children,
}: {
	label: string;
	children: ReactNode;
}) {
	return (
		<section className="mb-10 lg:mb-8">
			<h2 className="text-xs uppercase tracking-widest text-muted-foreground mb-4 animate-in">
				{label}
			</h2>
			{children}
		</section>
	);
}
