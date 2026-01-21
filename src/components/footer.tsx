import SocialLink from "@/components/ui/social-link";
import type { SocialItem } from "@/types";

type FooterProps = {
	email: string;
	socials: SocialItem[];
};

export default function Footer({ email, socials }: FooterProps) {
	const year = new Date().getFullYear();

	return (
		<footer className="space-y-8">
			{/* Divider with technical marking */}
			<div className="flex items-center gap-4">
				<div className="h-px flex-1 bg-border" />
				<span className="text-[9px] text-muted-foreground tracking-widest">
					EOF
				</span>
				<div className="h-px flex-1 bg-border" />
			</div>

			{/* Contact row */}
			<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
				<div>
					<a
						href={`mailto:${email}`}
						className="text-sm text-foreground hover:text-primary transition-colors"
					>
						{email}
					</a>
				</div>

				<nav aria-label="Social links" className="flex items-center gap-1">
					{socials.map((social) => (
						<SocialLink key={social.name} {...social} />
					))}
				</nav>
			</div>

			{/* Bottom line */}
			<div className="flex items-center justify-between text-[9px] text-muted-foreground/50 tracking-wide">
				<span>{year}</span>
				<span>48°51'N 2°21'E</span>
			</div>
		</footer>
	);
}
