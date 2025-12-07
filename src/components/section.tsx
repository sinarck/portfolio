import type { ReactNode } from "react";

type SectionProps = {
	label: string;
	children: ReactNode;
	delay?: string;
};

export default function Section({
	label,
	children,
	delay = "0ms",
}: SectionProps) {
	const capitalizedLabel = label.charAt(0).toUpperCase() + label.slice(1);

	return (
		<section
			className="space-y-4 animate-in-up"
			style={{ animationDelay: delay }}
			aria-labelledby={`section-${label}`}
		>
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
