import { GithubLogoIcon } from "@phosphor-icons/react/dist/icons/GithubLogo";
import { LinkedinLogoIcon } from "@phosphor-icons/react/dist/icons/LinkedinLogo";
import { XLogoIcon } from "@phosphor-icons/react/dist/icons/XLogo";
import type { SiteSettings } from "@/lib/sanity";

type SocialItem = SiteSettings["socials"][number];

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
			className="link-muted focus-ring press-scale animate-in"
		>
			<Icon className="size-18px" aria-hidden="true" />
		</a>
	);
}
