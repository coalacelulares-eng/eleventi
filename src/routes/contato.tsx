import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, Send } from "lucide-react";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Eleventi" },
      {
        name: "description",
        content:
          "Fale com a equipe da Eleventi para diagnóstico de infraestrutura, suporte técnico ou orçamento de projetos de TI e nuvem.",
      },
      { property: "og:title", content: "Contato — Eleventi" },
      {
        property: "og:description",
        content: "Descreva seu cenário de TI e receba um escopo com prazo e responsável técnico.",
      },
    ],
  }),
  component: ContactPage,
});

const CONTACT_EMAIL = "comercial@greenit-consulting.com.br";

interface ContactForm {
  nome: string;
  email: string;
  telefone: string;
  assunto: string;
  mensagem: string;
}

const EMPTY: ContactForm = { nome: "", email: "", telefone: "", assunto: "", mensagem: "" };

/**
 * Front-end only contact form: composes a pre-filled email in the visitor's
 * client. No data is stored or transmitted by the site itself.
 */
function ContactPage() {
  const [form, setForm] = useState<ContactForm>(EMPTY);

  const isValid =
    form.nome.trim().length > 1 && form.email.includes("@") && form.mensagem.trim().length > 4;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!isValid) return;

    const subject = form.assunto.trim() || `Contato pelo site — ${form.nome.trim()}`;
    const body = [
      `Nome: ${form.nome.trim()}`,
      `E-mail: ${form.email.trim()}`,
      form.telefone.trim() ? `Telefone: ${form.telefone.trim()}` : null,
      "",
      form.mensagem.trim(),
    ]
      .filter((line): line is string => line !== null)
      .join("\n");

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }

  const field =
    "w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground outline-hidden transition-colors placeholder:text-muted-foreground focus:border-primary focus-visible:ring-2 focus-visible:ring-ring";

  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-[0.9fr_1.1fr] md:py-24">
      <div>
        <p className="font-display text-xs uppercase tracking-[0.2em] text-primary">Contato</p>
        <h1 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
          Nossa equipe está à sua disposição
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Conte o cenário atual da sua empresa — quantidade de usuários, servidores, uso de nuvem
          e principais dores. Respondemos com as prioridades e um escopo objetivo.
        </p>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="mt-8 inline-flex items-center gap-2.5 rounded-md border border-border bg-surface px-5 py-3 text-sm text-foreground transition-colors hover:bg-secondary"
        >
          <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
          {CONTACT_EMAIL}
        </a>
      </div>

      <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-7">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="flex flex-col gap-2 text-sm text-muted-foreground">
            Nome
            <input
              required
              value={form.nome}
              onChange={(e) => setForm({ ...form, nome: e.target.value })}
              className={field}
              placeholder="Seu nome"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-muted-foreground">
            E-mail
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={field}
              placeholder="voce@empresa.com.br"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-muted-foreground">
            Telefone
            <input
              value={form.telefone}
              onChange={(e) => setForm({ ...form, telefone: e.target.value })}
              className={field}
              placeholder="(00) 00000-0000"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-muted-foreground">
            Assunto
            <input
              value={form.assunto}
              onChange={(e) => setForm({ ...form, assunto: e.target.value })}
              className={field}
              placeholder="Cloud, suporte, infraestrutura…"
            />
          </label>
        </div>

        <label className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground">
          Mensagem
          <textarea
            required
            rows={5}
            value={form.mensagem}
            onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
            className={field}
            placeholder="Descreva sua necessidade"
          />
        </label>

        <button
          type="submit"
          disabled={!isValid}
          className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Enviar mensagem
          <Send className="h-4 w-4" aria-hidden="true" />
        </button>
        <p className="mt-3 text-xs text-muted-foreground">
          O envio abre seu aplicativo de e-mail com a mensagem já preenchida.
        </p>
      </form>
    </section>
  );
}
