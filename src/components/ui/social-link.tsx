import { iconMap } from "@/config/social-icons";
import type { SocialItem } from "@/types";

type SocialLinkProps = SocialItem;

export default function SocialLink({ name, link, iconName }: SocialLinkProps) {
	const Icon = iconMap[iconName];

	return (
		<a
			href={link}
			target="_blank"
			rel="noreferrer noopener"
			aria-label={`${name} (opens in new tab)`}
			className="group p-2 border border-transparent hover:border-border card-interactive"
		>
			<Icon
				className="size-4 text-muted-foreground group-hover:text-primary transition-colors"
				aria-hidden="true"
			/>
		</a>
	);
}
