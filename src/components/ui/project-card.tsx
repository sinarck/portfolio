type ProjectCardProps = {
  name: string;
  description: string;
  link?: string;
};

export default function ProjectCard({
  name,
  description,
  link,
}: ProjectCardProps) {
  return (
    <div className="rounded-lg border border-neutral-800/80 bg-neutral-900/30 p-4 transition-colors hover:border-neutral-700">
      <div className="flex items-baseline justify-between gap-2">
        <div className="font-sans font-medium text-neutral-200">{name}</div>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="text-xs underline decoration-neutral-700 hover:decoration-neutral-400 text-neutral-400 break-all"
          >
            {link}
          </a>
        )}
      </div>
      <p className="mt-2 text-sm leading-relaxed text-neutral-400">
        {description}
      </p>
    </div>
  );
}

