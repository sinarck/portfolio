import { type SocialItem, socialIcons } from "@/config";

export default function SocialLink({ name, link, icon }: SocialItem) {
	const Icon = socialIcons[icon];

	return (
		<a
			href={link}
			target="_blank"
			rel="noreferrer noopener"
			aria-label={`${name} (opens in new tab)`}
			className="text-muted-foreground hover:text-foreground transition-colors duration-150 ease active:scale-[0.97] active:transition-transform active:duration-150 active:ease-out rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
		>
			<Icon className="size-4" aria-hidden="true" />
		</a>
	);
}
