import type { PortfolioData } from "../types/portfolio";

type HeaderProps = Pick<PortfolioData, "name" | "headline">;

export default function PortfolioHeader({ name, headline }: HeaderProps) {
	return (
		<div className="space-y-1">
			<h1 className="text-lg font-medium tracking-tight text-foreground">
				{name}
			</h1>
			<p className="text-sm text-muted-foreground leading-relaxed w-full">
				{headline}
			</p>
		</div>
	);
}
