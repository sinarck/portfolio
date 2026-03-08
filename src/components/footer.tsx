import { fadeInUp, growX, motion } from "@/components/ui/animate";
import SocialLink from "@/components/ui/social-link";
import { triggerHaptic } from "@/lib/haptics";
import type { Profile } from "@/lib/profile";

type FooterProps = {
	socials: Profile["socials"];
	email: string;
};

export default function Footer({ socials, email }: FooterProps) {
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
					onClick={() => triggerHaptic()}
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
