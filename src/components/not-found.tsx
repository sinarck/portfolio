import { Link } from "@tanstack/react-router";

export default function NotFound() {
	return (
		<main className="max-w-xl mx-auto px-6 min-h-dvh flex items-center justify-center">
			<div className="text-center space-y-6">
				<div className="space-y-2">
					<span className="text-xs text-muted-foreground tracking-widest">
						404
					</span>
					<h1 className="text-base font-semibold tracking-tight">Not Found</h1>
				</div>
				<p className="text-sm text-muted-foreground">
					The requested page does not exist.
				</p>
				<Link
					to="/"
					className="inline-block text-sm text-muted-foreground hover:text-foreground interactive rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
				>
					Return home
				</Link>
			</div>
		</main>
	);
}
