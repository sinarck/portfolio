import SocialLink from "@/components/ui/social-link";
import type { SocialItem } from "@/types/portfolio";

type FooterProps = {
	socials: SocialItem[];
	email: string;
	staggerIndex?: number;
};

export default function Footer({
	socials,
	email,
	staggerIndex = 0,
}: FooterProps) {
	return (
		<footer
			className="pt-10 lg:pt-8 border-t border-border animate-in stagger-in"
			style={{ "--stagger-index": staggerIndex } as React.CSSProperties}
		>
			<div className="flex items-center justify-between">
				<a
					href={`mailto:${email}`}
					className="text-sm text-muted-foreground hover:text-foreground interactive rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
				>
					{email.replace("@", " [at] ").replace(/\./g, " [dot] ")}
				</a>
				<nav aria-label="Social links" className="flex items-center gap-4">
					{socials.map((social) => (
						<SocialLink key={social._key} {...social} />
					))}
				</nav>
			</div>
		</footer>
	);
}
