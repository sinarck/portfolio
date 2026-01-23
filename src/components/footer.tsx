import SocialLink from "@/components/ui/social-link";
import type { SocialItem } from "@/types";

type FooterProps = {
	socials: SocialItem[];
	email: string;
};

function formatEmail(email: string): string {
	return email.replace("@", " [at] ").replace(/\./g, " [dot] ");
}

export default function Footer({ socials, email }: FooterProps) {
	return (
		<footer className="pt-10 border-t border-border animate-in delay-4">
			<div className="flex items-center justify-between">
				<a
					href={`mailto:${email}`}
					className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-150 ease"
				>
					{formatEmail(email)}
				</a>
				<nav aria-label="Social links" className="flex items-center gap-4">
					{socials.map((social) => (
						<SocialLink key={social.name} {...social} />
					))}
				</nav>
			</div>
		</footer>
	);
}
