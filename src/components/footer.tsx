import AsciiPattern from "@/components/ui/ascii-pattern";
import SocialLink from "@/components/ui/social-link";
import type { SocialItem } from "@/types";

type FooterProps = {
	email: string;
	socials: SocialItem[];
	year: number;
};

export default function Footer({ email, socials, year }: FooterProps) {
	return (
		<footer className="space-y-2">
			{/* ASCII noise texture */}
			<AsciiPattern />

			{/* EOF divider */}
			<div className="flex items-center gap-3">
				<div className="h-px flex-1 bg-border" />
				<span className="text-[9px] text-muted-foreground tracking-widest">
					EOF
				</span>
				<div className="h-px flex-1 bg-border" />
			</div>

			{/* Contact + year in one row */}
			<div className="flex items-center justify-between text-[10px]">
				<div className="flex items-center gap-3">
					<a
						href={`mailto:${email}`}
						className="text-muted-foreground hover:text-primary transition-colors"
					>
						{email}
					</a>
					<span className="text-muted-foreground/40">{year}</span>
				</div>
				<nav aria-label="Social links" className="flex items-center">
					{socials.map((social) => (
						<SocialLink key={social.name} {...social} />
					))}
				</nav>
			</div>
		</footer>
	);
}
