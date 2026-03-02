import {
	BookIcon,
	HammerIcon,
	HeadphonesIcon,
	TelevisionIcon,
} from "@phosphor-icons/react";
import type { CurrentlyItem } from "@/types/portfolio";

const typeIcons: Record<CurrentlyItem["type"], typeof HammerIcon> = {
	building: HammerIcon,
	reading: BookIcon,
	listening: HeadphonesIcon,
	watching: TelevisionIcon,
};

export default function Currently({ items }: { items: CurrentlyItem[] }) {
	if (items.length === 0) return null;

	return (
		<div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
			{items.map((item) => {
				const Icon = typeIcons[item.type];
				return (
					<span key={item._key} className="inline-flex items-center gap-1.5">
						<Icon className="size-3.5" aria-hidden="true" />
						{item.title}
					</span>
				);
			})}
		</div>
	);
}
