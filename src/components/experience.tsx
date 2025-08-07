import type { ExperienceItem } from "../types/portfolio";
import Section from "./section";

export default function Experience({ items }: { items: ExperienceItem[] }) {
  if (!items?.length) return null;

  return (
    <Section label="experience" withDivider>
      <ul className="list-bullets">
        {items.map((experience, idx) => (
          <li key={idx}>
            <div className="leading-relaxed">
              <span className="font-sans font-medium text-neutral-200">
                {experience.role}
              </span>{" "}
              @ {experience.company}{" "}
              <span className="text-neutral-500">({experience.period})</span>
            </div>
            {experience.highlights?.length > 0 && (
              <ul className="list-subbullets">
                {experience.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}

