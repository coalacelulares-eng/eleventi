CREATE TABLE public.site_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nome TEXT NOT NULL,
  email TEXT NOT NULL,
  whatsapp TEXT NOT NULL,
  empresa TEXT,
  tipo TEXT NOT NULL CHECK (tipo IN ('site','landing_page','sistema')),
  descricao TEXT NOT NULL,
  logo_path TEXT,
  fotos_paths TEXT[] NOT NULL DEFAULT '{}',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT ALL ON public.site_requests TO service_role;
ALTER TABLE public.site_requests ENABLE ROW LEVEL SECURITY;