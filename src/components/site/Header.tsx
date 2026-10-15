import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

/** Sticky header — two links only, fits mobile without a menu. */
export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-5">
        <Logo />
        <nav className="flex items-center gap-1" aria-label="Navegação principal">
          <Link
            to="/servicos"
            className="hidden rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground sm:inline-block"
            activeProps={{ className: "text-foreground bg-secondary" }}
          >
            Serviços
          </Link>
          <Link
            to="/solicitar"
            className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90"
          >
            Criar meu site
          </Link>
        </nav>
      </div>
    </header>
  );
}
