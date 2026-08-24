import { Link } from "@tanstack/react-router";
import logo from "@/assets/eleventi-logo.png";
import { cn } from "@/lib/utils";

export interface LogoProps {
  className?: string;
}

/**
 * Brand lockup: generated mark + wordmark.
 * Always links home so it doubles as the primary escape hatch in the header.
 */
export function Logo({ className }: LogoProps) {
  return (
    <Link to="/" className={cn("flex items-center gap-2.5", className)} aria-label="Eleventi — início">
      <img
        src={logo}
        alt=""
        width={32}
        height={32}
        className="h-8 w-8 object-contain"
      />
      <span className="font-display text-lg font-bold tracking-tight text-foreground">
        eleventi
      </span>
    </Link>
  );
}
