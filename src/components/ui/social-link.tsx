import { GithubLogoIcon } from "@phosphor-icons/react/dist/icons/GithubLogo";
import { LinkedinLogoIcon } from "@phosphor-icons/react/dist/icons/LinkedinLogo";
import { XLogoIcon } from "@phosphor-icons/react/dist/icons/XLogo";
import type { SocialItem } from "@/types/portfolio";

const socialIcons = {
	github: GithubLogoIcon,
	linkedin: LinkedinLogoIcon,
	x: XLogoIcon,
} as const;

export default function SocialLink({
	name,
	link,
	icon,
	staggerIndex,
}: SocialItem & { staggerIndex: number }) {
	const Icon = socialIcons[icon];

	return (
		<a
			href={link}
			target="_blank"
			rel="noreferrer noopener"
			aria-label={`${name} (opens in new tab)`}
			className="text-muted-foreground hover:text-foreground interactive rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background animate-in"
			style={{ "--i": staggerIndex } as React.CSSProperties}
		>
			<Icon className="size-[1em]" aria-hidden="true" />
		</a>
	);
}
