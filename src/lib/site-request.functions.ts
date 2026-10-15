import { createServerFn } from "@tanstack/react-start";

/** Allowed project types — mirrors the CHECK constraint on site_requests.tipo. */
export const PROJECT_TYPES = {
  site: "Site institucional",
  landing_page: "Landing page",
  sistema: "Sistema",
} as const;
export type ProjectType = keyof typeof PROJECT_TYPES;

const MAX_FILE_BYTES = 10 * 1024 * 1024;
const MAX_PHOTOS = 8;
const BUCKET = "site-request-files";

export interface SiteRequestResult {
  id: string;
}

function text(fd: FormData, key: string, max: number, required = true): string {
  const raw = fd.get(key);
  const value = typeof raw === "string" ? raw.trim() : "";
  if (required && !value) throw new Error(`Campo obrigatório: ${key}`);
  if (value.length > max) throw new Error(`Campo muito longo: ${key}`);
  return value;
}

function isImage(f: unknown): f is File {
  return f instanceof File && f.size > 0;
}

/**
 * Public submission endpoint. Validates input, stores uploaded images in a
 * private bucket and inserts one row per request (server-side credentials).
 */
export const submitSiteRequest = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => {
    if (!(data instanceof FormData)) throw new Error("Formato inválido");
    return data;
  })
  .handler(async ({ data }): Promise<SiteRequestResult> => {
    const nome = text(data, "nome", 120);
    const email = text(data, "email", 200);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error("E-mail inválido");
    const whatsapp = text(data, "whatsapp", 30).replace(/\D/g, "");
    if (whatsapp.length < 10) throw new Error("WhatsApp inválido");
    const empresa = text(data, "empresa", 160, false) || null;
    const tipo = text(data, "tipo", 20) as ProjectType;
    if (!(tipo in PROJECT_TYPES)) throw new Error("Tipo de projeto inválido");
    const descricao = text(data, "descricao", 4000);

    const logo = data.get("logo");
    const fotos = data.getAll("fotos").filter(isImage).slice(0, MAX_PHOTOS);
    const files = [...(isImage(logo) ? [logo] : []), ...fotos];
    for (const f of files) {
      if (!f.type.startsWith("image/")) throw new Error("Envie apenas imagens");
      if (f.size > MAX_FILE_BYTES) throw new Error("Cada imagem deve ter até 10 MB");
    }

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const folder = crypto.randomUUID();

    async function upload(file: File, name: string): Promise<string> {
      const ext = (file.name.split(".").pop() || "png").toLowerCase().replace(/[^a-z0-9]/g, "");
      const path = `${folder}/${name}.${ext}`;
      const { error } = await supabaseAdmin.storage
        .from(BUCKET)
        .upload(path, file, { contentType: file.type });
      if (error) throw new Error(`Falha ao enviar imagem: ${error.message}`);
      return path;
    }

    const logo_path = isImage(logo) ? await upload(logo, "logo") : null;
    const fotos_paths: string[] = [];
    for (const [i, foto] of fotos.entries()) fotos_paths.push(await upload(foto, `foto-${i + 1}`));

    const { data: row, error } = await supabaseAdmin
      .from("site_requests")
      .insert({ nome, email, whatsapp, empresa, tipo, descricao, logo_path, fotos_paths })
      .select("id")
      .single();
    if (error || !row) throw new Error("Não foi possível salvar sua solicitação");
    return { id: row.id };
  });
