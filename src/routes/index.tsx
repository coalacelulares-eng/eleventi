import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Cloud, Headphones } from "lucide-react";
import heroImage from "@/assets/hero-infra.jpg";
import { Section } from "@/components/site/Section";
import { SERVICES } from "@/data/services";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eleventi — Consultoria em TI, Infraestrutura e Cloud" },
      {
        name: "description",
        content:
          "Consultoria de tecnologia da informação desde 2021: infraestrutura, suporte técnico, microinformática e gestão de nuvem AWS, Azure e GCP.",
      },
      { property: "og:title", content: "Eleventi — Consultoria em TI, Infraestrutura e Cloud" },
      {
        property: "og:description",
        content:
          "Infraestrutura, suporte e nuvem para empresas que precisam de operação estável e previsível.",
      },
    ],
  }),
  component: HomePage,
});

const PILLARS = [
  {
    icon: ShieldCheck,
    title: "Ambiente sob controle",
    text: "Padronização, backup e monitoramento para reduzir incidentes antes que eles cheguem ao usuário.",
  },
  {
    icon: Cloud,
    title: "Nuvem dimensionada",
    text: "Recursos ajustados ao consumo real, com controle de custo mensal e sem surpresa na fatura.",
  },
  {
    icon: Headphones,
    title: "Suporte que responde",
    text: "Atendimento local e remoto com histórico de chamados e prazos acordados por escrito.",
  },
] as const;

function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-hero">
        <img
          src={heroImage}
          alt="Corredor de datacenter com racks de servidores"
          width={1600}
          height={1104}
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-24 md:py-32">
          <div className="max-w-3xl">
            <p className="font-display text-xs uppercase tracking-[0.25em] text-primary">
              Tecnologia da informação · desde 2021
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-[1.05] text-foreground md:text-6xl">
              Infraestrutura de TI que <span className="text-gradient-accent">não para</span> a sua
              empresa.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              A Eleventi cuida da consultoria, do suporte e da nuvem — do inventário de
              equipamentos ao ambiente em AWS, Azure e GCP — para que a tecnologia deixe de ser
              um problema recorrente.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/contato"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Solicitar diagnóstico
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                to="/servicos"
                className="inline-flex items-center rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                Ver serviços
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="border-b border-border bg-surface">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-3">
          {PILLARS.map((pillar) => (
            <div key={pillar.title} className="flex gap-4">
              <pillar.icon className="h-6 w-6 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <h2 className="font-display text-base font-semibold text-foreground">
                  {pillar.title}
                </h2>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {pillar.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Section
        eyebrow="Nossos serviços"
        title="Serviços de tecnologia com escopo claro"
        description="Cada frente tem entregáveis definidos, responsável técnico e prazo acordado. Nada de contrato genérico."
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <article key={service.slug} className="surface-card p-6">
              <h3 className="font-display text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.summary}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-10">
          <Link
            to="/servicos"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-glow"
          >
            Conheça todos os serviços
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </Section>

      <section className="border-t border-border grid-lines">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 py-16 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              Quer saber onde sua TI está travando?
            </h2>
            <p className="mt-3 text-muted-foreground">
              Fazemos um diagnóstico inicial do ambiente e apresentamos as prioridades por
              impacto e custo.
            </p>
          </div>
          <Link
            to="/contato"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Falar com um especialista
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
