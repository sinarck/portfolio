import { Github, Linkedin } from "lucide-react";
import { usePostHog } from "posthog-js/react";
import XIcon from "./icons/x";

type FooterProps = {
	email?: string;
	socials: {
		name: string;
		link: string;
	}[];
};

export default function Footer({ email, socials }: FooterProps) {
	const posthog = usePostHog();

	return (
		<footer className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-sm text-muted-foreground pt-8 border-t border-dashed border-border">
			<div className="order-1">
				{email && (
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
				)}
			</div>

			<nav aria-label="Social media links">
				<div className="flex items-center gap-4 order-2">
					{socials.map((social) => (
						<a
							key={social.name}
							href={social.link}
							target="_blank"
							rel="noreferrer noopener"
							className="text-muted-foreground hover:text-foreground transition-colors duration-200 ease-out button-scale focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
							aria-label={`Visit my ${social.name} profile (opens in new tab)`}
							onClick={() =>
								posthog.capture(
									"social_click",
									{
										"social.name": social.name,
										"social.url": social.link,
									},
									{ send_instantly: true },
								)
							}
						>
							{social.name === "github" && <Github className="size-4" aria-hidden="true" />}
							{social.name === "linkedin" && <Linkedin className="size-4" aria-hidden="true" />}
							{social.name === "x" && <XIcon className="size-4" aria-hidden="true" />}
						</a>
					))}
				</div>
			</nav>
		</footer>
	);
}
