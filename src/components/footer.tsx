import SocialLink from "@/components/ui/social-link";
import type { Profile } from "@/lib/profile";

type FooterProps = {
	socials: Profile["socials"];
	email: string;
};

export default function Footer({ socials, email }: FooterProps) {
	return (
		<footer className="enter-group">
			<hr className="border-border origin-left enter-grow-x" />
			<div className="flex items-center justify-between pt-10 lg:pt-8 enter">
				<a href={`mailto:${email}`} className="text-sm link-muted focus-ring">
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
