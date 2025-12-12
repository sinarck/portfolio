import { Button } from "./button";

type ErrorFallbackProps = {
	resetErrorBoundary: () => void;
};

export function ErrorFallback({ resetErrorBoundary }: ErrorFallbackProps) {
	return (
		<main className="min-h-dvh w-full flex items-center justify-center font-sans selection:bg-foreground selection:text-background p-6">
			<div role="alert" className="flex flex-col items-center gap-4 text-center">
				<div className="space-y-2">
					<h1 className="text-lg font-medium">something went wrong</h1>
					<p className="text-sm text-muted-foreground">
						an unexpected error occurred while loading the page
					</p>
				</div>
				<Button variant="outline" size="sm" onClick={resetErrorBoundary}>
					try again
				</Button>
			</div>
		</main>
	);
}
