import {
	GithubLogoIcon,
	LinkedinLogoIcon,
	XLogoIcon,
} from "@phosphor-icons/react";
import type { SocialItem } from "@/types/portfolio";

const socialIcons = {
	github: GithubLogoIcon,
	linkedin: LinkedinLogoIcon,
	x: XLogoIcon,
} as const;

export default function SocialLink({ name, link, icon }: SocialItem) {
	const Icon = socialIcons[icon];

	return (
		<a
			href={link}
			target="_blank"
			rel="noreferrer noopener"
			aria-label={`${name} (opens in new tab)`}
			className="text-muted-foreground hover:text-foreground interactive rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
		>
			<Icon className="size-[1em]" aria-hidden="true" />
		</a>
	);
}
