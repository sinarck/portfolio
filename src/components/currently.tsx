import { BookIcon } from "@phosphor-icons/react/dist/icons/Book";
import { HeadphonesIcon } from "@phosphor-icons/react/dist/icons/Headphones";
import { TelevisionIcon } from "@phosphor-icons/react/dist/icons/Television";
import { fadeInUp, motion } from "@/components/ui/animate";
import type { Profile } from "@/lib/profile";

type CurrentlyItem = Profile["currently"][number];

const typeIcons: Record<CurrentlyItem["type"], typeof BookIcon> = {
	reading: BookIcon,
	listening: HeadphonesIcon,
	watching: TelevisionIcon,
};

type CurrentlyProps = {
	items: CurrentlyItem[];
};

export default function Currently({ items }: CurrentlyProps) {
	return (
		<motion.div
			variants={fadeInUp}
			className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground"
		>
			{items.map((item) => {
				const Icon = typeIcons[item.type];

				return (
					<span key={item._key} className="inline-flex items-center gap-1.5">
						<Icon className="size-3.5" aria-hidden="true" />
						{item.title}
					</span>
				);
			})}
		</motion.div>
	);
}
