import StatusIndicator from "@/components/ui/status-indicator";
import type { PortfolioData } from "@/types";

type PortfolioHeaderProps = Pick<PortfolioData, "name" | "headline">;

export default function PortfolioHeader({
	name,
	headline,
}: PortfolioHeaderProps) {
	return (
		<div className="space-y-6">
			<StatusIndicator />

			<div className="space-y-2">
				<h1 className="text-xl font-medium tracking-tight text-foreground">
					{name}
				</h1>
				<p className="text-sm text-muted-foreground leading-relaxed max-w-md">
					{headline}
				</p>
			</div>

			<div className="flex items-center gap-2 meta opacity-50">
				<span>sys.version</span>
				<span className="text-primary">{"/"}</span>
				<span>2025.01</span>
			</div>
		</div>
	);
}
