import { iconMap } from "@/lib/social-icons";
import type { SocialItem } from "@/types/portfolio";

type FooterProps = {
	email: string;
	socials: SocialItem[];
};

export default function Footer({ email, socials }: FooterProps) {
	return (
		<footer className="border-t border-border pt-8 space-y-6">
			{/* Contact section */}
			<div className="space-y-2">
				<span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
					contact
				</span>
				<div>
					<a
						href={`mailto:${email}`}
						className="text-sm font-mono text-foreground hover:text-primary transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-primary"
						aria-label={`Email me at ${email}`}
					>
						{email}
					</a>
				</div>
			</div>

			{/* Social links */}
			<div className="flex items-center gap-1">
				{socials.map((social) => {
					const Icon = iconMap[social.iconName];

					return (
						<a
							key={social.name}
							href={social.link}
							target="_blank"
							rel="noreferrer noopener"
							aria-label={`${social.name} (opens in new tab)`}
							className="group p-2 border border-transparent hover:border-border te-border-glow transition-colors"
						>
							<Icon
								className="size-4 text-muted-foreground group-hover:text-primary transition-colors"
								aria-hidden="true"
							/>
						</a>
					);
				})}
			</div>

			{/* Technical footer */}
			<div className="pt-6 border-t border-border/50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs font-mono text-muted-foreground/50">
				<div className="flex items-center gap-2">
					<span className="size-1.5 bg-primary" />
					<span>built with care</span>
				</div>
				<div className="flex items-center gap-4">
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
