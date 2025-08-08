import { Github, Linkedin, Twitter } from "lucide-react";

type FooterProps = {
  email?: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
};

export default function Footer({
  email,
  github,
  linkedin,
  twitter,
}: FooterProps) {
  return (
    <footer className="mt-6 flex w-full items-center justify-between text-xs text-neutral-500">
      <p className="truncate">
        {email && (
          <span className="font-mono bg-neutral-800/50 px-2 py-1 rounded text-neutral-400">
            {email}
          </span>
        )}
      </p>
      <div className="flex items-center gap-3 pl-4">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            aria-label="github"
            title="github"
            className="text-neutral-500 hover:text-neutral-300 transition-colors"
          >
            <Github className="h-4 w-4" />
          </a>
        )}
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="linkedin"
            title="linkedin"
            className="text-neutral-500 hover:text-neutral-300 transition-colors"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        )}
        {twitter && (
          <a
            href={twitter}
            target="_blank"
            rel="noreferrer"
            aria-label="x"
            title="x"
            className="text-neutral-500 hover:text-neutral-300 transition-colors"
          >
            <Twitter className="h-4 w-4" />
          </a>
        )}
      </div>
    </footer>
  );
}

