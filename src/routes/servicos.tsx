import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Section } from "@/components/site/Section";
import { SERVICES } from "@/data/site";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — SiteClub" },
      { name: "description", content: "Sites institucionais, landing pages e sistemas sob medida por assinatura mensal." },
      { property: "og:title", content: "Serviços — SiteClub" },
      { property: "og:description", content: "Sites, landing pages e sistemas por assinatura." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <Section
      eyebrow="Serviços"
      title="Escolha o projeto ideal para o seu negócio"
      description="Tudo por assinatura: criação, hospedagem, suporte e melhorias contínuas em um só lugar."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {SERVICES.map((s) => (
          <article key={s.slug} className="surface-card flex flex-col p-7">
            <h3 className="font-display text-xl font-bold text-foreground">{s.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.summary}</p>
            <ul className="mt-6 flex flex-1 flex-col gap-2.5">
              {s.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-sm text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary-glow" aria-hidden="true" />
                  {b}
                </li>
              ))}
            </ul>
            <Link
              to="/solicitar"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary-glow hover:text-foreground"
            >
              Solicitar <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </article>
        ))}
      </div>
    </Section>
  );
}
