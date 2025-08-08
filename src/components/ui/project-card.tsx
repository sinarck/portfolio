type ProjectCardProps = {
  name: string;
  description: string;
  link?: string;
  date?: Date;
};

function formatDate(d?: Date): string | null {
  if (!d || Number.isNaN(d.getTime())) return null;
  try {
    return new Intl.DateTimeFormat(undefined, {
      year: "numeric",
      month: "short",
    }).format(d);
  } catch {
    return d.toISOString().slice(0, 7);
  }
}

export default function ProjectCard({
  name,
  description,
  link,
  date,
}: ProjectCardProps) {
  const Wrapper = (link
    ? "a"
    : "div") as unknown as keyof JSX.IntrinsicElements;
  const wrapperProps = link
    ? { href: link, target: "_blank", rel: "noreferrer" }
    : {};

  return (
    // @ts-expect-error polymorphic wrapper
    <Wrapper
      {...(wrapperProps as any)}
      className="rounded-lg border border-neutral-800/80 bg-neutral-900/30 p-4 transition-colors hover:border-neutral-700 focus:outline-none focus:ring-1 focus:ring-neutral-700"
    >
      <div className="flex items-baseline justify-between gap-2">
        <div className="font-sans font-medium text-neutral-200">{name}</div>
        {formatDate(date) && (
          <div className="text-xs text-neutral-500 tabular-nums">
            {formatDate(date)}
          </div>
        )}
      </div>
      <p className="mt-2 text-sm leading-relaxed text-neutral-400">
        {description}
      </p>
    </Wrapper>
  );
}

