import { BookIcon } from "@phosphor-icons/react/dist/icons/Book";
import { HammerIcon } from "@phosphor-icons/react/dist/icons/Hammer";
import { HeadphonesIcon } from "@phosphor-icons/react/dist/icons/Headphones";
import { TelevisionIcon } from "@phosphor-icons/react/dist/icons/Television";
import type { SiteSettings } from "@/lib/sanity";

type CurrentlyItem = SiteSettings["currently"][number];

const typeIcons: Record<CurrentlyItem["type"], typeof HammerIcon> = {
	building: HammerIcon,
	reading: BookIcon,
	listening: HeadphonesIcon,
	watching: TelevisionIcon,
};

export default function Currently({
	items,
	baseIndex,
}: {
	items: CurrentlyItem[];
	baseIndex: number;
}) {
	if (items.length === 0) return null;

	return (
		<div
			className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground animate-in"
			style={{ "--i": baseIndex } as React.CSSProperties}
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
		</div>
	);
}
