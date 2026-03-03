import type { ReactNode } from "react";
import { fadeInUp, motion } from "@/components/ui/animate";

export default function Section({
	label,
	children,
}: {
	label: string;
	children: ReactNode;
}) {
	return (
		<section className="mb-10 lg:mb-8">
			<motion.h2
				variants={fadeInUp}
				className="text-xs uppercase tracking-widest text-muted-foreground mb-4"
			>
				{label}
			</motion.h2>
			{children}
		</section>
	);
}
