import SocialLink from "@/components/ui/social-link";
import type { SocialItem } from "@/types";

type FooterProps = {
	socials: SocialItem[];
};

export default function Footer({ socials }: FooterProps) {
	return (
		<footer className="pt-16 border-t border-border">
			<nav aria-label="Social links" className="flex items-center gap-4">
				{socials.map((social) => (
					<SocialLink key={social.name} {...social} />
				))}
			</nav>
		</footer>
	);
}
