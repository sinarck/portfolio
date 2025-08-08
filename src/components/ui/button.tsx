import type { ButtonHTMLAttributes } from "react";
import { cn } from "../../lib/utils";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "ghost" | "default" };

export default function Button({ className, variant = "default", ...props }: Props) {
  const base = "inline-flex items-center justify-center rounded-lg border border-transparent px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-1 focus:ring-neutral-700";
  const styles =
    variant === "ghost"
      ? "bg-transparent text-neutral-300 hover:text-neutral-100"
      : "bg-neutral-900 text-neutral-200 hover:border-neutral-700";
  return <button className={cn(base, styles, className)} {...props} />;
}



