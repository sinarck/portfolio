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
		<main className="mx-auto flex min-h-dvh w-full max-w-2xl flex-col justify-center px-6 pt-12 pb-8 lg:max-w-3xl lg:py-8">
			<section className="max-w-xl enter-group">
				<div className="enter">
					<span className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
						{label}
					</span>
				</div>

				<h1 className="mt-4 max-w-lg text-3xl font-semibold tracking-tight text-pretty sm:text-[2.5rem] sm:leading-none enter">
					{title}
				</h1>

				<p className="mt-6 max-w-md text-base text-muted-foreground enter">
					{description}
				</p>

				<div className="mt-10 enter">
					{action.type === "reset" ? (
						<button
							type="button"
							onClick={() => {
								action.reset();
							}}
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
			</section>
		</main>
	);
}
