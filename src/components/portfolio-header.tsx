import type { PortfolioData } from "@/types";

type PortfolioHeaderProps = Pick<PortfolioData, "name" | "headline" | "email">;

export default function PortfolioHeader({
	name,
	headline,
	email,
}: PortfolioHeaderProps) {
	return (
		<header className="mb-16">
			<h1 className="text-xl font-semibold tracking-tight">{name}</h1>
			<p className="mt-3 text-muted-foreground leading-relaxed">{headline}</p>
			<a
				href={`mailto:${email}`}
				className="inline-block mt-4 text-sm text-muted-foreground hover:text-foreground transition-colors"
			>
				{email}
			</a>
		</header>
	);
}
