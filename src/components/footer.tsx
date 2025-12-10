import { SiGithub, SiX } from "@icons-pack/react-simple-icons";
import type { SocialItem } from "../types/portfolio";
import { Button } from "./ui/button";

type FooterProps = {
	email: string;
	socials: SocialItem[];
};

const iconMap = {
	github: SiGithub,
	x: SiX,
};

export default function Footer({ email, socials }: FooterProps) {
	return (
		<footer className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-sm text-muted-foreground pt-8 border-t border-dashed border-border">
			<div className="order-1">
				<a
					href={`mailto:${email}`}
					className="hover:text-foreground transition-colors duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
					aria-label={`Email me at ${email}`}
				>
					you can reach me at{" "}
					<span aria-hidden="true">
						{email.replaceAll("@", " [at] ").replaceAll(".", " [dot] ")}
					</span>
					<span className="sr-only">{email}</span>
				</a>
			</div>

			<nav aria-label="Social media links" className="order-2">
				<div className="flex items-center gap-1">
					{socials.map((social) => {
						const Icon = iconMap[social.iconName];

						return (
							<Button
								key={social.name}
								variant="ghost"
								size="icon"
								render={(props) => (
									<a
										{...props}
										href={social.link}
										target="_blank"
										rel="noreferrer noopener"
										aria-label={`Visit my ${social.name} profile (opens in new tab)`}
									/>
								)}
							>
								<Icon className="size-4" aria-hidden="true" />
							</Button>
						);
					})}
				</div>
			</nav>
		</footer>
	);
}
