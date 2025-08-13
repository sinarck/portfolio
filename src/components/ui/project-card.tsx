import { usePostHog } from "posthog-js/react";
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
  const posthog = usePostHog();
  const content = (
    <Card className="h-full p-3 sm:p-4 hover:border-muted-foreground/50 dark:hover:border-muted-foreground/50">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-2">
        <CardTitle className="text-sm sm:text-base leading-tight">
          {name}
        </CardTitle>
        {formatDate(date) && (
          <div className="text-xs text-muted-foreground tabular-nums self-start sm:self-auto">
            {formatDate(date)}
          </div>
        )}
      </div>
      <p className="mt-2 text-sm sm:text-sm leading-relaxed text-muted-foreground">
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
        onClick={() =>
          posthog.capture(
            "project_click",
            {
              "project.name": name,
              "project.url": link,
            },
            { send_instantly: true },
          )
        }
      >
        {content}
      </a>
    );
  }

  return content;
}
