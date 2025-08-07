import Section from "./section";

export default function Skills({ items }: { items: string[] }) {
  if (!items?.length) return null;

  return (
    <Section label="skills" withDivider>
      <p className="text-body">{items.join(", ")}</p>
    </Section>
  );
}

