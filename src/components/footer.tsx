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
			<div className="order-2 sm:order-1">
				{email && (
					<a
						href={`mailto:${email}`}
						className="hover:text-foreground transition-colors duration-200 ease-out"
					>
						you can reach me at{" "}
						{email.replace("@", " [at] ").replace(".", " [dot] ")}
					</a>
				)}
			</div>

			<div className="flex items-center gap-4 order-1 sm:order-2">
				{socials.map((social) => (
					<a
						key={social.name}
						href={social.link}
						target="_blank"
						rel="noreferrer"
						className="text-muted-foreground hover:text-foreground transition-colors duration-200 ease-out button-scale"
						aria-label={social.name}
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
						{social.name === "github" && <Github className="size-4" />}
						{social.name === "linkedin" && <Linkedin className="size-4" />}
						{social.name === "x" && <XIcon className="size-4" />}
					</a>
				))}
			</div>
		</footer>
	);
}
