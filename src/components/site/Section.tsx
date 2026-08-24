import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface SectionProps {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
  align?: "left" | "center";
}

/** Shared section shell so every page keeps identical rhythm and heading scale. */
export function Section({
  eyebrow,
  title,
  description,
  children,
  className,
  align = "left",
}: SectionProps) {
  return (
    <section className={cn("mx-auto max-w-6xl px-5 py-20 md:py-24", className)}>
      <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
        {eyebrow ? (
          <p className="font-display text-xs uppercase tracking-[0.2em] text-primary">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">{title}</h2>
        {description ? (
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {description}
          </p>
        ) : null}
      </div>
      {children ? <div className="mt-12">{children}</div> : null}
    </section>
  );
}
