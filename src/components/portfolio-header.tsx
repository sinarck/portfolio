import { Button } from "./ui/button";

type HeaderProps = {
	name: string;
	headline: string;
};

export default function PortfolioHeader({ name, headline }: HeaderProps) {
	return (
		<div className="space-y-1 animate-in-up" style={{ animationDelay: "0ms" }}>
			<h1 className="text-lg font-medium tracking-tight text-foreground">
				{name}
			</h1>
			<p className="text-sm text-muted-foreground leading-relaxed w-full">
				{headline}
			</p>
			<div className="flex gap-2 pt-2">
				<Button variant="outline" size="sm" className="button-scale">
					work
				</Button>
				<Button variant="outline" size="sm" className="button-scale">
					blog
				</Button>
			</div>
		</div>
	);
}
