import { Link } from "@tanstack/react-router";

export default function NotFound() {
	return (
		<main className="max-w-xl mx-auto px-6 py-20 sm:py-28 min-h-[60vh] flex items-center justify-center">
			<div className="text-center space-y-6">
				<div className="space-y-2">
					<span className="text-xs text-muted-foreground tracking-widest">
						404
					</span>
					<h1 className="text-lg font-medium tracking-tight">Not Found</h1>
				</div>
				<p className="text-sm text-muted-foreground">
					The requested page does not exist.
				</p>
				<Link
					to="/"
					className="inline-block text-sm text-muted-foreground hover:text-foreground transition-colors duration-150 ease active:scale-[0.97] active:transition-transform active:duration-150 active:ease-out"
				>
					Return home
				</Link>
			</div>
		</main>
	);
}
