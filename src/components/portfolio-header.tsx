import StatusIndicator from "@/components/ui/status-indicator";
import type { PortfolioData } from "@/types";

type PortfolioHeaderProps = Pick<PortfolioData, "name" | "headline">;

export default function PortfolioHeader({
	name,
	headline,
}: PortfolioHeaderProps) {
	return (
		<div className="space-y-8">
			<div className="flex items-start justify-between">
				<div className="space-y-1">
					<h1 className="text-lg font-medium tracking-tight">{name}</h1>
					<p className="text-sm text-muted-foreground max-w-sm">{headline}</p>
				</div>
				<StatusIndicator />
			</div>
		</div>
	);
}
