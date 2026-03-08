type HeaderProps = {
	name: string;
	headline: string;
};

export default function Header({
	name,
	headline,
}: HeaderProps) {
	return (
		<header className="mb-10 lg:mb-8 enter-group">
			<h1 className="text-base font-semibold tracking-tight text-pretty enter">
				{name}
			</h1>
			<p className="mt-3 text-muted-foreground enter">{headline}</p>
		</header>
	);
}
