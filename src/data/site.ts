/**
 * Business number that receives the follow-up WhatsApp chat (digits only, with country code).
 * PLACEHOLDER — replace with the real SiteClub number.
 */
export const WHATSAPP_NUMBER = "5511999999999";

export interface ServiceItem {
  slug: string;
  title: string;
  summary: string;
  bullets: readonly string[];
}

export const SERVICES: readonly ServiceItem[] = [
  {
    slug: "site",
    title: "Sites institucionais",
    summary: "Presença profissional para sua empresa, rápida, responsiva e pronta para o Google.",
    bullets: ["Até 6 páginas", "Domínio e hospedagem inclusos", "Atualizações mensais"],
  },
  {
    slug: "landing",
    title: "Landing pages",
    summary: "Páginas focadas em conversão para campanhas, lançamentos e captação de clientes.",
    bullets: ["Copy orientada a vendas", "Integração com WhatsApp", "Pixel e métricas"],
  },
  {
    slug: "sistema",
    title: "Sistemas sob medida",
    summary: "Agendamentos, catálogos, painéis e áreas de cliente para automatizar sua rotina.",
    bullets: ["Login e painel administrativo", "Banco de dados seguro", "Evolução contínua"],
  },
];

export interface Testimonial {
  name: string;
  role: string;
  text: string;
}

export const TESTIMONIALS: readonly Testimonial[] = [
  { name: "Mariana Costa", role: "Clínica Bem Estar", text: "Enviei o logo e as fotos numa tarde e em poucos dias o site estava no ar. Atendimento pelo WhatsApp impecável." },
  { name: "Rafael Lima", role: "Lima Automotiva", text: "A landing page dobrou os pedidos de orçamento. Pagar por assinatura tirou o peso do investimento inicial." },
  { name: "Juliana Prado", role: "Studio JP Fotografia", text: "Design limpo, carrega rápido e sempre que peço uma alteração eles resolvem no mesmo dia." },
  { name: "Carlos Mendes", role: "Mendes Contabilidade", text: "O sistema de agendamento organizou a agenda do escritório inteiro. Recomendo de olhos fechados." },
  { name: "Fernanda Rocha", role: "Doce Fê Confeitaria", text: "Meu catálogo online ficou lindo e os clientes já chegam no WhatsApp sabendo o que querem." },
  { name: "André Souza", role: "AS Engenharia", text: "Profissionais, transparentes e rápidos. Acompanhei cada etapa do projeto pelo celular." },
];
