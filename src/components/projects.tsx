import type { ProjectItem } from "../types/portfolio";
import Section from "./section";
import ProjectCard from "./ui/project-card";

export default function Projects({ items }: { items: ProjectItem[] }) {
  if (!items?.length) return null;

  return (
    <Section label="projects" withDivider>
      <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2">
        {items.map((project) => (
          <ProjectCard
            key={`${project.name}-${project.link ?? "nolink"}`}
            name={project.name}
            description={project.description}
            link={project.link}
            date={project.date}
          />
        ))}
      </div>
    </Section>
  );
}
