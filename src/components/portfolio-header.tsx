import { fadeInUp, motion } from "@/components/ui/animate";

type PortfolioHeaderProps = {
	name: string;
	headline: string;
};

export default function PortfolioHeader({
	name,
	headline,
}: PortfolioHeaderProps) {
	return (
		<header className="mb-10 lg:mb-8">
			<motion.h1
				variants={fadeInUp}
				className="text-base font-semibold tracking-tight text-pretty"
			>
				{name}
			</motion.h1>
			<motion.p variants={fadeInUp} className="mt-3 text-muted-foreground">
				{headline}
			</motion.p>
		</header>
	);
}
