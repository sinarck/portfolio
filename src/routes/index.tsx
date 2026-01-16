import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: HomePage });

function HomePage() {
	return (
		<main className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center p-6">
			<div className="text-center">
				<h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
					Welcome
				</h1>
				<p className="mt-4 text-lg text-muted-foreground">
					Your application is ready.
				</p>
			</div>
		</main>
	);
}
