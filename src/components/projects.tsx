import type { ProjectItem } from "../types/portfolio";
import Section from "./section";

export default function Projects({ items }: { items: ProjectItem[] }) {
  if (!items?.length) return null;

  return (
    <Section label="projects" withDivider>
      <ul className="list-bullets">
        {items.map((project, idx) => (
          <li key={idx}>
            <div className="flex flex-wrap items-baseline gap-2 leading-relaxed">
              <span className="font-sans font-medium text-neutral-200">
                {project.name}
              </span>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-neutral-700 hover:decoration-neutral-400 text-neutral-400"
                >
                  {project.link}
                </a>
              )}
            </div>
            <ul className="list-subbullets">
              <li>{project.description}</li>
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  );
}

