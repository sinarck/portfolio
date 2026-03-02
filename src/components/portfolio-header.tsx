type PortfolioHeaderProps = {
	name: string;
	headline: string;
	baseIndex: number;
};

export default function PortfolioHeader({
	name,
	headline,
	baseIndex,
}: PortfolioHeaderProps) {
	return (
		<header className="mb-10 lg:mb-8">
			<h1
				className="text-base font-semibold tracking-tight text-pretty animate-in"
				style={{ "--i": baseIndex } as React.CSSProperties}
			>
				{name}
			</h1>
			<p
				className="mt-3 text-muted-foreground animate-in"
				style={{ "--i": baseIndex + 1 } as React.CSSProperties}
			>
				{headline}
			</p>
		</header>
	);
}
