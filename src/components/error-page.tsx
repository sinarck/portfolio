import { Link } from "@tanstack/react-router";

type ErrorPageProps = {
	label: string;
	title: string;
	description: string;
	action?: { type: "reset"; reset: () => void } | { type: "home" };
};

export default function ErrorPage({
	label,
	title,
	description,
	action = { type: "home" },
}: ErrorPageProps) {
	return (
		<main className="max-w-xl mx-auto px-6 min-h-dvh flex items-center justify-center">
			<div className="text-center space-y-6">
				<div className="space-y-2">
					<span className="text-xs text-muted-foreground tracking-widest uppercase">
						{label}
					</span>
					<h1 className="text-base font-semibold tracking-tight">{title}</h1>
				</div>
				<p className="text-sm text-muted-foreground">{description}</p>
				{action.type === "reset" ? (
					<button
						type="button"
						onClick={action.reset}
						className="inline-block text-sm link-muted focus-ring cursor-pointer"
					>
						Try again
					</button>
				) : (
					<Link to="/" className="inline-block text-sm link-muted focus-ring">
						Return home
					</Link>
				)}
			</div>
		</main>
	);
}
