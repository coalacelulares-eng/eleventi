import { Link } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import { Logo } from "./Logo";

const YEAR = new Date().getFullYear();

/** Minimal footer: brand, three links, one contact channel. */
export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Consultoria de tecnologia da informação, infraestrutura e nuvem para
            empresas que precisam de operação estável e previsível.
          </p>
        </div>

        <div className="flex flex-col gap-3 text-sm">
          <span className="font-display text-xs uppercase tracking-widest text-muted-foreground">
            Navegação
          </span>
          <Link to="/servicos" className="text-muted-foreground hover:text-foreground">
            Serviços
          </Link>
          <Link to="/cloud" className="text-muted-foreground hover:text-foreground">
            Cloud
          </Link>
          <Link to="/sobre" className="text-muted-foreground hover:text-foreground">
            Quem somos
          </Link>
        </div>

        <div className="flex flex-col gap-3 text-sm">
          <span className="font-display text-xs uppercase tracking-widest text-muted-foreground">
            Contato
          </span>
          <a
            href="mailto:comercial@greenit-consulting.com.br"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            comercial@greenit-consulting.com.br
          </a>
          <Link to="/contato" className="text-primary hover:text-primary-glow">
            Solicitar orçamento
          </Link>
        </div>
      </div>

      <div className="border-t border-border px-5 py-5">
        <p className="mx-auto max-w-6xl text-xs text-muted-foreground">
          © {YEAR} Eleventi. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
