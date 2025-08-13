import { usePostHog } from "posthog-js/react";
import { GitHub, Linkedin } from "react-feather";
import XIcon from "./icons/x";
import { Button } from "./ui/button";

type FooterProps = {
  email?: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
  socials: {
    name: string;
    link: string;
  }[];
};

export default function Footer({ email, socials }: FooterProps) {
  const posthog = usePostHog();

  return (
    <footer className="mt-4 sm:mt-6 flex flex-col sm:flex-row w-full items-center justify-between gap-3 sm:gap-0 text-xs text-neutral-500">
      <p className="truncate order-2 sm:order-1">
        {email && (
          <span className="dark:bg-neutral-800/50 bg-neutral-200/50 px-2 py-1 rounded dark:text-neutral-400 text-neutral-900">
            {email}
          </span>
        )}
      </p>
      <div className="flex items-center gap-3 order-1 sm:order-2 sm:pl-4">
        {socials.map((social) => (
          <Button
            variant="ghost"
            size="icon"
            asChild
            key={social.name}
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
            <a
              href={social.link}
              target="_blank"
              rel="noreferrer"
              aria-label={social.name}
              title={social.name}
            >
              {social.name === "github" && <GitHub className="size-4" />}
              {social.name === "linkedin" && <Linkedin className="size-4" />}
              {social.name === "x" && <XIcon className="size-4" />}
            </a>
          </Button>
        ))}
      </div>
    </footer>
  );
}
