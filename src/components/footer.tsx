import SocialLink from "@/components/ui/social-link";
import type { SiteSettings } from "@/lib/sanity";

type FooterProps = {
	socials: SiteSettings["socials"];
	email: string;
	baseIndex: number;
};

export default function Footer({ socials, email, baseIndex }: FooterProps) {
	return (
		<footer>
			<hr
				className="border-border animate-in origin-left [animation-name:grow-x]"
				style={{ "--i": baseIndex } as React.CSSProperties}
			/>
			<div className="flex items-center justify-between pt-10 lg:pt-8">
				<a
					href={`mailto:${email}`}
					className="text-sm link-muted focus-ring animate-in"
					style={{ "--i": baseIndex + 1 } as React.CSSProperties}
				>
					{email.replace("@", " [at] ").replace(/\./g, " [dot] ")}
				</a>
				<nav aria-label="Social links" className="flex items-center gap-4">
					{socials.map((social, i) => (
						<SocialLink
							key={social._key}
							{...social}
							staggerIndex={baseIndex + 2 + i}
						/>
					))}
				</nav>
			</div>
		</footer>
	);
}
