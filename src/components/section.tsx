import type { ReactNode } from "react";

type SectionProps = {
  label: string;
  children: ReactNode;
  delay?: string;
};

export default function Section({ label, children, delay = "0ms" }: SectionProps) {
  return (
    <section 
      className="space-y-4 animate-in-up"
      style={{ animationDelay: delay }}
    >
      <h2 className="text-sm font-medium text-muted-foreground tracking-tight">
        {label}
      </h2>
      {children}
    </section>
  );
}
