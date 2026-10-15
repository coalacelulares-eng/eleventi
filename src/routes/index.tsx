import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Upload, MessageCircle, Rocket } from "lucide-react";
import icon from "@/assets/siteclub-icone.png.asset.json";
import { Section } from "@/components/site/Section";
import { Testimonials } from "@/components/site/Testimonials";
import { SERVICES } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SiteClub — Sites e Sistemas por Assinatura" },
      { name: "description", content: "Crie seu site, landing page ou sistema por assinatura. Envie seu logo e fotos e acompanhe tudo pelo WhatsApp." },
      { property: "og:title", content: "SiteClub — Sites e Sistemas por Assinatura" },
      { property: "og:description", content: "Envie seus dados, anexe logo e fotos e acompanhe a criação pelo WhatsApp." },
    ],
  }),
  component: HomePage,
});

const STEPS = [
  { icon: Upload, title: "Envie seus dados", text: "Preencha o formulário e anexe logo e fotos dos seus serviços." },
  { icon: MessageCircle, title: "Acompanhe no WhatsApp", text: "Abrimos a conversa para alinhar detalhes e mostrar cada etapa." },
  { icon: Rocket, title: "Seu projeto no ar", text: "Publicamos com domínio, hospedagem e suporte inclusos." },
] as const;

function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-hero">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-[1.2fr_0.8fr] md:py-28">
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-primary-glow">
              Sites e sistemas por assinatura
            </p>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] text-foreground md:text-6xl">
              Seu negócio online, <span className="text-gradient-accent">sem complicação.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Sites, landing pages e sistemas feitos sob medida. Você envia as informações, nós
              criamos — e você acompanha tudo pelo WhatsApp.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/solicitar" className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] hover:opacity-90">
                Começar meu projeto <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link to="/servicos" className="inline-flex items-center rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary">
                Ver serviços
              </Link>
            </div>
          </div>
          <div className="hidden justify-center md:flex">
            <img src={icon.url} alt="Ícone SiteClub" width={280} height={280} className="w-64 rounded-[2.5rem] shadow-[var(--shadow-glow)]" />
          </div>
        </div>
      </section>

      <Section eyebrow="Como funciona" title="Três passos até o seu site no ar">
        <ol className="grid gap-5 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <li key={s.title} className="surface-card p-6">
              <span className="font-display text-sm font-bold text-primary-glow">0{i + 1}</span>
              <s.icon className="mt-4 h-7 w-7 text-primary" aria-hidden="true" />
              <h3 className="mt-4 font-display text-lg font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-6xl gap-5 px-5 py-16 md:grid-cols-3">
          {SERVICES.map((s) => (
            <div key={s.slug}>
              <h3 className="font-display text-lg font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.summary}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-5">
          <p className="font-display text-xs uppercase tracking-[0.2em] text-primary-glow">Depoimentos</p>
          <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">Quem já faz parte do clube</h2>
        </div>
        <div className="mt-10"><Testimonials /></div>
      </section>

      <section className="border-t border-border grid-lines">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 py-16 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-xl text-2xl font-bold text-foreground md:text-3xl">Pronto para tirar sua ideia do papel?</h2>
          <Link to="/solicitar" className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90">
            Enviar meus dados <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
