import { Card, CardContent, CardTitle } from "./card";

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
  const isLink = Boolean(link);
  const inner = (
    <>
      <div className="flex items-baseline justify-between gap-2">
        <CardTitle>{name}</CardTitle>
        {formatDate(date) && (
          <div className="text-xs text-neutral-500 tabular-nums">
            {formatDate(date)}
          </div>
        )}
      </div>
      <p className="mt-2 text-sm leading-relaxed text-neutral-400">
        {description}
      </p>
    </>
  );

  if (isLink) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="block h-full focus:outline-none focus:ring-1 focus:ring-neutral-700"
      >
        <Card className="h-full p-4 transition-colors hover:border-neutral-700">
          <CardContent className="p-0">{inner}</CardContent>
        </Card>
      </a>
    );
  }

  return (
    <Card className="h-full p-4">
      <CardContent className="p-0">{inner}</CardContent>
    </Card>
  );
}

