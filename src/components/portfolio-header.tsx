import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";

type HeaderProps = {
	name: string;
	headline: string;
};

export default function PortfolioHeader({ name, headline }: HeaderProps) {
	const location = useLocation();
	const isActive = (path: string) => location.pathname === path;

	return (
		<div className="space-y-1 animate-in-up">
			<Link to="/" className="block">
				<h1 className="text-lg font-medium tracking-tight text-foreground hover:opacity-80 transition-opacity">
					{name}
				</h1>
			</Link>
			<p className="text-sm text-muted-foreground leading-relaxed w-full">
				{headline}
			</p>
			<nav aria-label="Portfolio navigation">
				<div className="flex gap-2 pt-2">
					<Button
						variant={isActive("/") ? "default" : "outline"}
						size="sm"
						className="button-scale min-h-8 px-3.5"
						aria-label="View home"
						render={(props) => (
							<Link to="/" {...props}>
								home
							</Link>
						)}
					/>
					<Button
						variant={isActive("/work") ? "default" : "outline"}
						size="sm"
						className="button-scale min-h-8 px-3.5"
						aria-label="View work projects"
						render={(props) => (
							<Link to="/work" {...props}>
								work
							</Link>
						)}
					/>
					<Button
						variant={isActive("/writing") ? "default" : "outline"}
						size="sm"
						className="button-scale min-h-8 px-3.5"
						aria-label="View writing"
						render={(props) => (
							<Link to="/writing" {...props}>
								writing
							</Link>
						)}
					/>
				</div>
			</nav>
		</div>
	);
}
