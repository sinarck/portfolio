import { type HTMLAttributes } from "react";
import { cn } from "../../lib/utils";

export default function Separator({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      role="separator"
      aria-hidden
      className={cn("h-[1px] w-full bg-border/50", className)}
      {...props}
    />
  );
}
