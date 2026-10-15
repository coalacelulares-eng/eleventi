import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

const YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <Logo />
          <p className="mt-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Sites e sistemas por assinatura
          </p>
        </div>
        <div className="flex gap-5 text-sm">
          <Link to="/servicos" className="text-muted-foreground hover:text-foreground">Serviços</Link>
          <Link to="/solicitar" className="text-primary-glow hover:text-foreground">Solicitar projeto</Link>
        </div>
      </div>
      <p className="border-t border-border px-5 py-5 text-center text-xs text-muted-foreground">
        © {YEAR} SiteClub. Todos os direitos reservados.
      </p>
    </footer>
  );
}
