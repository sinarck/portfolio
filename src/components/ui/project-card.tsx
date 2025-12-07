import { ArrowUpRight } from "lucide-react";
import { usePostHog } from "posthog-js/react";

type ProjectCardProps = {
	name: string;
	description: string;
	link?: string;
	date?: Date;
};

export default function ProjectCard({
	name,
	description,
	link,
	date,
}: ProjectCardProps) {
	const posthog = usePostHog();

	const content = (
		<div className="group flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4 py-2 transition-colors duration-200 ease-out cursor-pointer">
			<div className="space-y-1">
				<h3 className="font-medium text-sm text-foreground flex items-center gap-1">
					<span className="underline decoration-transparent group-hover:decoration-muted-foreground underline-offset-4 transition-all duration-300 ease-out">
						{name}
					</span>
					{link && (
						<ArrowUpRight className="size-3 text-muted-foreground opacity-0 -translate-x-1 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0" />
					)}
				</h3>
				<p className="text-sm text-muted-foreground leading-relaxed max-w-md">
					{description}
				</p>
			</div>
			{date && (
				<span className="text-xs text-muted-foreground font-mono shrink-0">
					{date.getFullYear()}
				</span>
			)}
		</div>
	);

	if (link) {
		return (
			<a
				href={link}
				target="_blank"
				rel="noreferrer"
				className="block focus:outline-none"
				onClick={() =>
					posthog.capture(
						"project_click",
						{
							"project.name": name,
							"project.url": link,
						},
						{ send_instantly: true },
					)
				}
			>
				{content}
			</a>
		);
	}

	return content;
}
