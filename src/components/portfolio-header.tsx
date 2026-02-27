type PortfolioHeaderProps = {
	name: string;
	headline: string;
	availability?: { status: string; message?: string };
};

export default function PortfolioHeader({
	name,
	headline,
	availability,
}: PortfolioHeaderProps) {
	return (
		<header className="mb-10 lg:mb-8">
			{availability && (
				<span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground mb-3 animate-in">
					<span
						className="size-1.5 rounded-full bg-emerald-500 animate-subtle-pulse"
						aria-hidden="true"
					/>
					{availability.message}
				</span>
			)}
			<h1 className="text-xl font-semibold tracking-tight text-pretty animate-in delay-1">
				{name}
			</h1>
			<p className="mt-3 text-muted-foreground text-pretty animate-in delay-2">
				{headline}
			</p>
		</header>
	);
}
