import { iconMap } from "@/config/social-icons";
import type { SocialItem } from "@/types";

export default function SocialLink({ name, link, iconName }: SocialItem) {
	const Icon = iconMap[iconName];

	return (
		<a
			href={link}
			target="_blank"
			rel="noreferrer noopener"
			aria-label={`${name} (opens in new tab)`}
			className="text-muted-foreground hover:text-foreground transition-colors"
		>
			<Icon className="size-4" aria-hidden="true" />
		</a>
	);
}
