import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/icons/ArrowUpRight";
import { fadeInUp, motion } from "@/components/ui/animate";
import { triggerHaptic } from "@/lib/haptics";
import type { Profile } from "@/lib/profile";

type ProjectsProps = {
	items: Profile["projects"];
};

export default function Projects({ items }: ProjectsProps) {
	return (
		<ul className="-mx-3 space-y-1">
			{items.map((project) => (
				<motion.li key={project._key} variants={fadeInUp}>
					<a
						href={project.link}
						target="_blank"
						rel="noreferrer noopener"
						className="group block px-3 py-3 transition-colors duration-200 ease-out pointer-fine:hover:bg-(--hover-overlay) focus-ring"
						onClick={() => triggerHaptic()}
					>
						<div className="flex items-center gap-1.5">
							<span className="text-foreground hover-underline">
								{project.name}
							</span>
							<ArrowUpRightIcon
								className="size-3.5 text-muted-foreground hover-slide-in"
								aria-hidden="true"
							/>
						</div>
						<p className="mt-1 text-sm text-muted-foreground sm:line-clamp-2">
							{project.description}
						</p>
					</a>
				</motion.li>
			))}
		</ul>
	);
}
