import SocialLink from "@/components/ui/social-link";
import type { SocialItem } from "@/types";

type FooterProps = {
	email: string;
	socials: SocialItem[];
};

export default function Footer({ email, socials }: FooterProps) {
	return (
		<footer className="border-t border-border pt-8 space-y-6">
			{/* Contact */}
			<div className="space-y-2">
				<span className="label">contact</span>
				<div>
					<a
						href={`mailto:${email}`}
						className="text-sm link"
						aria-label={`Email me at ${email}`}
					>
						{email}
					</a>
				</div>
			</div>

			{/* Social links */}
			<nav aria-label="Social links" className="flex items-center gap-1">
				{socials.map((social) => (
					<SocialLink key={social.name} {...social} />
				))}
			</nav>

			{/* Tech stack */}
			<div className="pt-6 border-t border-border/50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
				<div className="flex items-center gap-2 meta opacity-50">
					<span className="size-1.5 bg-primary" />
					<span>built with care</span>
				</div>
				<div className="flex items-center gap-4 meta opacity-50">
					<span>react</span>
					<span className="text-primary/50">+</span>
					<span>tanstack</span>
					<span className="text-primary/50">+</span>
					<span>tailwind</span>
				</div>
			</div>
		</footer>
	);
}
