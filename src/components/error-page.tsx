import { Link } from "@tanstack/react-router";
import { useWebHaptics } from "web-haptics/react";
import { fadeInUp, motion, staggerContainer } from "@/components/ui/animate";

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
	const { trigger } = useWebHaptics();

	return (
		<motion.main
			variants={staggerContainer}
			initial="hidden"
			animate="visible"
			className="mx-auto flex min-h-dvh w-full max-w-2xl flex-col justify-center px-6 pt-12 pb-8 lg:max-w-3xl lg:py-8"
		>
			<section className="max-w-xl">
				<motion.div variants={fadeInUp}>
					<span className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
						{label}
					</span>
				</motion.div>

				<motion.h1
					variants={fadeInUp}
					className="mt-4 max-w-lg text-3xl font-semibold tracking-tight text-pretty sm:text-[2.5rem] sm:leading-none"
				>
					{title}
				</motion.h1>

				<motion.p
					variants={fadeInUp}
					className="mt-6 max-w-md text-base text-muted-foreground"
				>
					{description}
				</motion.p>

				<motion.div variants={fadeInUp} className="mt-10">
					{action.type === "reset" ? (
						<button
							type="button"
							onClick={() => {
								trigger("medium");
								action.reset();
							}}
							className="inline-block text-sm link-muted focus-ring cursor-pointer"
						>
							Try again
						</button>
					) : (
						<Link
							to="/"
							className="inline-block text-sm link-muted focus-ring"
							onClick={() => trigger("light")}
						>
							Return home
						</Link>
					)}
				</motion.div>
			</section>
		</motion.main>
	);
}
