import { Link } from "@tanstack/react-router";

type ErrorPageProps = {
	title: string;
	description: string;
};

export default function ErrorPage({ title, description }: ErrorPageProps) {
	return (
		<main className="mx-auto flex min-h-dvh w-full max-w-2xl flex-col items-center justify-center px-6 pt-12 pb-8 text-center lg:max-w-3xl lg:py-8">
			<div className="enter-group">
				<h1 className="text-base font-semibold tracking-tight enter">
					{title}
				</h1>
				<p className="mt-3 text-muted-foreground enter">{description}</p>
				<div className="mt-6 enter">
					<Link to="/" className="link-muted focus-ring">
						Back home
					</Link>
				</div>
			</div>
		</main>
	);
}
