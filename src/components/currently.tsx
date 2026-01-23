import { Book, Hammer, Headphones, Tv } from "lucide-react";
import type { CurrentlyItem } from "@/types";

type CurrentlyProps = {
	items: CurrentlyItem[];
};

const typeIcons: Record<CurrentlyItem["type"], typeof Hammer> = {
	building: Hammer,
	reading: Book,
	listening: Headphones,
	watching: Tv,
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
								className="text-foreground hover:text-muted-foreground transition-colors duration-150 ease-out"
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
