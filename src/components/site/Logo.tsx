import { Link } from "@tanstack/react-router";
import icon from "@/assets/siteclub-icone.png.asset.json";
import { cn } from "@/lib/utils";

export interface LogoProps {
  className?: string;
}

/** SiteClub lockup: uploaded icon + two-tone wordmark. */
export function Logo({ className }: LogoProps) {
  return (
    <Link to="/" className={cn("flex items-center gap-2.5", className)} aria-label="SiteClub — início">
      <img src={icon.url} alt="" width={34} height={34} className="h-8.5 w-8.5 rounded-lg" />
      <span className="font-display text-xl font-extrabold tracking-tight text-foreground">
        site<span className="text-primary-glow">club</span>
      </span>
    </Link>
  );
}
