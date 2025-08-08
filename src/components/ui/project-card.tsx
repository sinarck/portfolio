import { Card, CardTitle } from "./card";

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
      timeZone: "UTC",
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
  const content = (
    <Card className="h-full p-4 hover:border-muted-foreground/50 dark:hover:border-muted-foreground/50">
      <div className="flex items-baseline justify-between gap-2">
        <CardTitle>{name}</CardTitle>
        {formatDate(date) && (
          <div className="text-xs text-muted-foreground tabular-nums">
            {formatDate(date)}
          </div>
        )}
      </div>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </Card>
  );

  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="block h-full focus:outline-none focus:ring-1 focus:ring-ring"
      >
        {content}
      </a>
    );
  }

  return content;
}

