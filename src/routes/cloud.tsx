import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/cloud")({
  head: () => ({
    meta: [
      { title: "Cloud Computing e gestão de nuvem — Eleventi" },
      {
        name: "description",
        content:
          "Gestão de ambientes AWS, Azure e GCP: migração, dimensionamento de recursos, servidor de arquivos em nuvem e controle de custos.",
      },
      { property: "og:title", content: "Cloud Computing e gestão de nuvem — Eleventi" },
      {
        property: "og:description",
        content:
          "Migração, operação e governança financeira de nuvem pública e privada com especialistas dedicados.",
      },
    ],
  }),
  component: CloudPage,
});

const CAPABILITIES = [
  {
    title: "Plataformas que administramos",
    text: "AWS, Microsoft Azure e Google Cloud Platform, com operação de ambientes públicos e privados.",
  },
  {
    title: "Dimensionamento correto",
    text: "Recursos e componentes computacionais ajustados à necessidade real, sem capacidade ociosa.",
  },
  {
    title: "Gestão financeira da nuvem",
    text: "Acompanhamento de consumo e recomendações para que o investimento tenha retorno controlado.",
  },
  {
    title: "Servidor de arquivos em nuvem",
    text: "Substituição do servidor físico local, eliminando custos de energia, refrigeração e manutenção.",
  },
] as const;

function CloudPage() {
  return (
    <>
      <Section
        eyebrow="Gestão de nuvem"
        title="Cloud Computing sem infraestrutura parada no seu escritório"
        description="A nuvem permite acessar computação, armazenamento, rede e aplicações pela internet, sob demanda, pagando pelo que é realmente utilizado — e sem se preocupar com manutenção de equipamento próprio."
      >
        <div className="grid gap-5 md:grid-cols-2">
          {CAPABILITIES.map((item) => (
            <article key={item.title} className="surface-card p-7">
              <h3 className="font-display text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Ainda usa servidor de arquivos local?
          </h2>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Migrar o servidor de arquivos para a nuvem reduz custo mensal com hardware,
              energia, ar-condicionado, backup e segurança física. O ambiente passa a ser
              acessível de qualquer lugar, com colaboração em tempo real e recuperação de
              versões.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Recomendamos Microsoft 365 ou Google Workspace conforme o perfil da equipe. Os
              valores de assinatura e licenciamento variam com as taxas vigentes no período —
              nossos consultores apuram os planos antes da proposta.
            </p>
          </div>
          <Link
            to="/contato"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Avaliar migração para nuvem
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
