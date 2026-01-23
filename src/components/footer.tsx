import { useState } from "react";
import SocialLink from "@/components/ui/social-link";
import type { SocialItem } from "@/types";

type FooterProps = {
	socials: SocialItem[];
	email: string;
};

function formatEmail(email: string): string {
	return email.replace("@", " [at] ").replace(/\./g, " [dot] ");
}

export default function Footer({ socials, email }: FooterProps) {
	const [copied, setCopied] = useState(false);
	const [animationKey, setAnimationKey] = useState(0);

	const handleCopyEmail = async () => {
		try {
			await navigator.clipboard.writeText(email);
			setCopied(true);
			setAnimationKey((k) => k + 1);
			setTimeout(() => {
				setCopied(false);
				setAnimationKey((k) => k + 1);
			}, 2000);
		} catch {
			// Clipboard API not available or permission denied - fail silently
		}
	};

	return (
		<footer className="pt-10 border-t border-border animate-in delay-4">
			<div className="flex items-center justify-between">
				<button
					type="button"
					onClick={handleCopyEmail}
					className="text-sm text-muted-foreground hover:text-foreground transition-all duration-150 ease-out active:scale-[0.97]"
				>
					<span key={animationKey} className="inline-block animate-blur-in">
						{copied ? "Copied!" : formatEmail(email)}
					</span>
				</button>
				<nav aria-label="Social links" className="flex items-center gap-4">
					{socials.map((social) => (
						<SocialLink key={social.name} {...social} />
					))}
				</nav>
			</div>
		</footer>
	);
}
