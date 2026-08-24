import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Section } from "@/components/site/Section";
import { SERVICES } from "@/data/services";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços de TI — Eleventi" },
      {
        name: "description",
        content:
          "Consultoria, infraestrutura, redes, microinformática, manutenção de computadores e suporte técnico remoto para empresas.",
      },
      { property: "og:title", content: "Serviços de TI — Eleventi" },
      {
        property: "og:description",
        content:
          "Escopo, entregáveis e prazos definidos em cada frente de tecnologia atendida pela Eleventi.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <Section
      eyebrow="Serviços"
      title="Tudo que sua operação de TI precisa, em uma consultoria só"
      description="Trabalhamos por frentes independentes: você contrata apenas o que faz sentido hoje e amplia conforme a empresa cresce."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {SERVICES.map((service) => (
          <article key={service.slug} className="surface-card flex flex-col p-7">
            <h3 className="font-display text-xl font-semibold text-foreground">
              {service.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {service.summary}
            </p>
            <ul className="mt-6 flex flex-col gap-2.5">
              {service.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2.5 text-sm text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  {bullet}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mt-12 flex flex-wrap items-center gap-4 rounded-2xl border border-border bg-surface p-7">
        <p className="flex-1 text-sm text-muted-foreground">
          Não encontrou a demanda específica da sua empresa? Descreva o cenário e montamos um
          escopo sob medida.
        </p>
        <Link
          to="/contato"
          className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          Pedir orçamento
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </Section>
  );
}
