import type { ReactNode } from "react";

type SectionProps = {
	label: string;
	children: ReactNode;
	delay?: string;
};

export default function Section({ label, children, delay }: SectionProps) {
	return (
		<section className={`mb-10 animate-in ${delay ?? ""}`}>
			<h2 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
				{label}
			</h2>
			{children}
		</section>
	);
}
