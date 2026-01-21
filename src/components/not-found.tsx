import { Link } from "@tanstack/react-router";
import DeviceFrame from "./device-frame";

export default function NotFound() {
	return (
		<DeviceFrame>
			<main className="w-full max-w-container-md mx-auto px-6 py-20 sm:py-28 min-h-[60vh] flex items-center justify-center">
				<div className="text-center space-y-6">
					<div className="space-y-2">
						<span className="text-[10px] text-muted-foreground tracking-widest">
							ERR_404
						</span>
						<h1 className="text-xl font-medium tracking-tight">Not Found</h1>
					</div>
					<p className="text-sm text-muted-foreground">
						The requested resource does not exist.
					</p>
					<Link
						to="/"
						className="inline-block text-sm text-primary hover:underline underline-offset-4"
					>
						Return to index
					</Link>
				</div>
			</main>
		</DeviceFrame>
	);
}
