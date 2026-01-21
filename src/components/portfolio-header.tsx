import type { PortfolioData } from "@/types/portfolio";

type HeaderProps = Pick<PortfolioData, "name" | "headline">;

export default function PortfolioHeader({ name, headline }: HeaderProps) {
	return (
		<div className="space-y-6">
			{/* Status indicator */}
			<div className="flex items-center gap-2">
				<span className="relative flex h-2 w-2">
					<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
					<span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
				</span>
				<span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
					available for work
				</span>
			</div>

			{/* Name with TE-style treatment */}
			<div className="space-y-2">
				<h1 className="text-2xl sm:text-3xl font-medium tracking-tight text-foreground">
					{name}
				</h1>
				<p className="text-sm text-muted-foreground leading-relaxed max-w-md font-mono">
					{headline}
				</p>
			</div>

			{/* Technical decorative element */}
			<div className="flex items-center gap-2 text-xs font-mono text-muted-foreground/50">
				<span>sys.version</span>
				<span className="text-primary">{"/"}</span>
				<span>2025.01</span>
			</div>
		</div>
	);
}
