import { GitHub, Linkedin, X } from "react-feather";
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
  return (
    <footer className="mt-6 flex w-full items-center justify-between text-xs text-neutral-500">
      <p className="truncate">
        {email && (
          <span className="dark:bg-neutral-800/50 bg-neutral-200/50 px-2 py-1 rounded dark:text-neutral-400 text-neutral-900">
            {email}
          </span>
        )}
      </p>
      <div className="flex items-center gap-3 pl-4">
        {socials.map((social) => (
          <Button variant="ghost" size="icon" asChild>
            <a
              href={social.link}
              target="_blank"
              rel="noreferrer"
              aria-label={social.name}
              title={social.name}
            >
              {social.name === "github" && <GitHub className="h-4 w-4" />}
              {social.name === "linkedin" && <Linkedin className="h-4 w-4" />}
              {social.name === "x" && <X className="h-4 w-4" />}
            </a>
          </Button>
        ))}
      </div>
    </footer>
  );
}

