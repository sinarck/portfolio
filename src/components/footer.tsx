import { Github, Linkedin, Twitter } from "lucide-react";

type FooterProps = {
  email?: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
};

function obfuscateEmail(email?: string): string {
  if (!email) return "";
  const [user, domain] = email.split("@");
  if (!domain) return email;
  return `${user} [at] ${domain}`;
}

function IconLink({
  href,
  label,
  children,
}: {
  href?: string;
  label: string;
  children: React.ReactNode;
}) {
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      title={label}
      className="text-neutral-500 hover:text-neutral-300 transition-colors"
    >
      {children}
    </a>
  );
}

export default function Footer({
  email,
  github,
  linkedin,
  twitter,
}: FooterProps) {
  const text = email ? `you can reach me at ${obfuscateEmail(email)}` : "";

  return (
    <footer className="mt-6 flex w-full items-center justify-between text-xs text-neutral-500">
      <p className="truncate">{text}</p>
      <div className="flex items-center gap-3 pl-4">
        <IconLink href={github} label="github">
          <Github className="h-4 w-4" />
        </IconLink>
        <IconLink href={linkedin} label="linkedin">
          <Linkedin className="h-4 w-4" />
        </IconLink>
        <IconLink href={twitter} label="x">
          <Twitter className="h-4 w-4" />
        </IconLink>
      </div>
    </footer>
  );
}

