import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Target, Eye, Heart } from "lucide-react";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Quem somos — Eleventi" },
      {
        name: "description",
        content:
          "Desde 2021 a Eleventi presta serviços de TI com foco em qualidade, prazo e satisfação do cliente. Conheça missão, visão e valores.",
      },
      { property: "og:title", content: "Quem somos — Eleventi" },
      {
        property: "og:description",
        content:
          "Uma consultoria de tecnologia da informação construída sobre qualidade de serviço e compromisso com prazos.",
      },
    ],
  }),
  component: AboutPage,
});

const PRINCIPLES = [
  {
    icon: Target,
    label: "Missão",
    text: "Ser reconhecida como especialista na prestação de serviços de tecnologia da informação, através de uma consultoria que entregue resultados de qualidade à demanda do cliente.",
  },
  {
    icon: Eye,
    label: "Visão",
    text: "Tornar-se uma das consultorias de tecnologia mais consolidadas do Brasil, comprometida com valores e princípios éticos, gerando lucratividade e responsabilidade social.",
  },
  {
    icon: Heart,
    label: "Valores",
    text: "Respeito ao cliente final, compromisso com a qualidade, cumprimento de prazos e acordos, ética, empatia, cordialidade e paixão pelo que fazemos.",
  },
] as const;

function AboutPage() {
  return (
    <>
      <Section
        eyebrow="Quem somos"
        title="Uma consultoria de TI construída sobre qualidade de serviço"
        description="Nascemos em 2021 comprometidos com a qualidade da prestação de serviços de tecnologia da informação e com foco total na satisfação de quem confia na nossa operação."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {PRINCIPLES.map((item) => (
            <article key={item.label} className="surface-card p-7">
              <item.icon className="h-6 w-6 text-primary" aria-hidden="true" />
              <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                {item.label}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <section className="border-t border-border grid-lines">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 py-16 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-xl text-2xl font-bold text-foreground md:text-3xl">
            Vamos conversar sobre o ambiente da sua empresa
          </h2>
          <Link
            to="/contato"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Entrar em contato
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
