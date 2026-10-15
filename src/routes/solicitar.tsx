import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Loader2, MessageCircle, ImagePlus } from "lucide-react";
import { submitSiteRequest, PROJECT_TYPES, type ProjectType } from "@/lib/site-request.functions";
import { WHATSAPP_NUMBER } from "@/data/site";

export const Route = createFileRoute("/solicitar")({
  head: () => ({
    meta: [
      { title: "Solicitar projeto — SiteClub" },
      { name: "description", content: "Envie seus dados, logo e fotos para criarmos seu site, landing page ou sistema." },
      { property: "og:title", content: "Solicitar projeto — SiteClub" },
      { property: "og:description", content: "Formulário para criar seu site, landing page ou sistema com a SiteClub." },
    ],
  }),
  component: RequestPage,
});

const field =
  "w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

function RequestPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [error, setError] = useState("");
  const [logoName, setLogoName] = useState("");
  const [photoCount, setPhotoCount] = useState(0);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    // Open the tab synchronously so popup blockers allow it.
    const win = window.open("", "_blank");
    setStatus("sending");
    setError("");
    try {
      const { id } = await submitSiteRequest({ data: fd });
      const tipo = PROJECT_TYPES[fd.get("tipo") as ProjectType];
      const msg = `Olá! Sou ${fd.get("nome")} e acabei de enviar uma solicitação de ${tipo} pelo site (protocolo ${id.slice(0, 8)}). Quero acompanhar o projeto.`;
      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
      if (win) win.location.href = url;
      else window.location.href = url;
      e.currentTarget?.reset();
      setLogoName("");
      setPhotoCount(0);
      setStatus("idle");
    } catch (err) {
      win?.close();
      setError(err instanceof Error ? err.message : "Erro ao enviar");
      setStatus("error");
    }
  }

  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[0.8fr_1.2fr] md:py-24">
      <div>
        <p className="font-display text-xs uppercase tracking-[0.2em] text-primary-glow">Novo projeto</p>
        <h1 className="mt-3 text-3xl font-extrabold text-foreground md:text-4xl">Conte sobre o seu negócio</h1>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Preencha os dados e anexe seu logo e fotos dos serviços. Ao enviar, o WhatsApp abre
          para você acompanhar cada etapa com nossa equipe.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-6 md:p-8">
        <fieldset className="mb-5">
          <legend className="mb-2 text-sm text-muted-foreground">O que você precisa?</legend>
          <div className="grid gap-2 sm:grid-cols-3">
            {(Object.keys(PROJECT_TYPES) as ProjectType[]).map((k, i) => (
              <label key={k} className="cursor-pointer">
                <input type="radio" name="tipo" value={k} defaultChecked={i === 0} className="peer sr-only" />
                <span className="block rounded-md border border-input px-3 py-3 text-center text-sm text-muted-foreground peer-checked:border-primary peer-checked:bg-accent peer-checked:text-foreground peer-focus-visible:ring-2 peer-focus-visible:ring-ring">
                  {PROJECT_TYPES[k]}
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="flex flex-col gap-2 text-sm text-muted-foreground">Nome
            <input name="nome" required maxLength={120} className={field} placeholder="Seu nome" />
          </label>
          <label className="flex flex-col gap-2 text-sm text-muted-foreground">Empresa
            <input name="empresa" maxLength={160} className={field} placeholder="Nome do negócio" />
          </label>
          <label className="flex flex-col gap-2 text-sm text-muted-foreground">E-mail
            <input name="email" type="email" required maxLength={200} className={field} placeholder="voce@email.com" />
          </label>
          <label className="flex flex-col gap-2 text-sm text-muted-foreground">WhatsApp
            <input name="whatsapp" type="tel" required maxLength={30} className={field} placeholder="(00) 00000-0000" />
          </label>
        </div>

        <label className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground">Descreva seu projeto
          <textarea name="descricao" required rows={4} maxLength={4000} className={field} placeholder="Serviços que oferece, cores preferidas, sites de referência…" />
        </label>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <label className="flex cursor-pointer flex-col items-center gap-2 rounded-md border border-dashed border-input p-5 text-center text-sm text-muted-foreground hover:border-primary">
            <ImagePlus className="h-6 w-6 text-primary" aria-hidden="true" />
            {logoName || "Anexar logo"}
            <input name="logo" type="file" accept="image/*" className="sr-only" onChange={(e) => setLogoName(e.target.files?.[0]?.name ?? "")} />
          </label>
          <label className="flex cursor-pointer flex-col items-center gap-2 rounded-md border border-dashed border-input p-5 text-center text-sm text-muted-foreground hover:border-primary">
            <ImagePlus className="h-6 w-6 text-primary" aria-hidden="true" />
            {photoCount ? `${photoCount} foto(s) selecionada(s)` : "Fotos dos serviços (até 8)"}
            <input name="fotos" type="file" accept="image/*" multiple className="sr-only" onChange={(e) => setPhotoCount(e.target.files?.length ?? 0)} />
          </label>
        </div>

        {status === "error" ? <p role="alert" className="mt-4 text-sm text-destructive">{error}</p> : null}

        <button type="submit" disabled={status === "sending"} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:opacity-90 disabled:opacity-50">
          {status === "sending" ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : <MessageCircle className="h-4 w-4" aria-hidden="true" />}
          {status === "sending" ? "Enviando…" : "Enviar e abrir WhatsApp"}
        </button>
      </form>
    </section>
  );
}
