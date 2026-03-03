import { useWebHaptics } from "web-haptics/react";
import { fadeInUp, growX, motion } from "@/components/ui/animate";
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
			<motion.hr variants={growX} className="border-border origin-left" />
			<motion.div
				variants={fadeInUp}
				className="flex items-center justify-between pt-10 lg:pt-8"
			>
				<a
					href={`mailto:${email}`}
					className="text-sm link-muted focus-ring"
					onClick={() => trigger("light")}
				>
					{email.replace("@", " [at] ").replace(/\./g, " [dot] ")}
				</a>
				<nav aria-label="Social links" className="flex items-center gap-4">
					{socials.map((social) => (
						<SocialLink key={social._key} {...social} />
					))}
				</nav>
			</motion.div>
		</footer>
	);
}
