import type { ReactNode } from "react";
import { cn } from "../lib/utils";

type SectionProps = {
  label: string;
  children: ReactNode;
  withDivider?: boolean;
};

export default function Section({
  label,
  children,
  withDivider = false,
}: SectionProps) {
  return (
    <section
      className={cn(
        "space-y-3",
        withDivider && "pt-4 border-t border-neutral-800/70"
      )}
    >
      <h3 className="text-section-label">{label}</h3>
      {children}
    </section>
  );
}

