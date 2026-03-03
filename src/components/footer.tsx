import { useWebHaptics } from "web-haptics/react";
import SocialLink from "@/components/ui/social-link";
import type { SiteSettings } from "@/lib/sanity";

type FooterProps = {
	socials: SiteSettings["socials"];
	email: string;
};

export default function Footer({ socials, email }: FooterProps) {
	const { trigger } = useWebHaptics();

	return (
		<footer>
			<hr className="border-border animate-in origin-left [animation-name:grow-x]" />
			<div className="flex items-center justify-between pt-10 lg:pt-8">
				<a
					href={`mailto:${email}`}
					className="text-sm link-muted focus-ring animate-in"
					onClick={() => trigger("light")}
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
