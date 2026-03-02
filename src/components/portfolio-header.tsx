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
			<h1 className="text-base font-semibold tracking-tight text-pretty animate-in">
				{name}
			</h1>
			<p className="mt-3 text-muted-foreground animate-in">{headline}</p>
		</header>
	);
}
