import {
	BookIcon,
	HammerIcon,
	HeadphonesIcon,
	TelevisionIcon,
} from "@phosphor-icons/react";
import type { CurrentlyItem } from "@/types";

type CurrentlyProps = {
	items: CurrentlyItem[];
};

const typeIcons: Record<CurrentlyItem["type"], typeof HammerIcon> = {
	building: HammerIcon,
	reading: BookIcon,
	listening: HeadphonesIcon,
	watching: TelevisionIcon,
};

export default function Currently({ items }: CurrentlyProps) {
	if (items.length === 0) return null;

	return (
		<div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
			{items.map((item) => {
				const Icon = typeIcons[item.type];
				return (
					<span
						key={`${item.type}-${item.title}`}
						className="inline-flex items-center gap-1.5 text-muted-foreground"
					>
						<Icon className="size-3.5" aria-hidden="true" />
						{item.link ? (
							<a
								href={item.link}
								target="_blank"
								rel="noreferrer noopener"
								className="text-foreground hover:text-muted-foreground transition-colors duration-150 ease"
							>
								{item.title}
							</a>
						) : (
							<span className="text-foreground">{item.title}</span>
						)}
					</span>
				);
			})}
		</div>
	);
}
