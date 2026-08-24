/** Static service catalogue. Presentation-only data, no backend involved. */
export interface ServiceItem {
  slug: string;
  title: string;
  summary: string;
  bullets: readonly string[];
}

export const SERVICES: readonly ServiceItem[] = [
  {
    slug: "consultoria",
    title: "Consultoria em TI",
    summary:
      "Diagnóstico do ambiente, plano de evolução e acompanhamento técnico contínuo da sua operação.",
    bullets: [
      "Levantamento de infraestrutura e riscos",
      "Padronização de ambiente e políticas",
      "Roadmap de investimento em tecnologia",
    ],
  },
  {
    slug: "cloud",
    title: "Cloud Computing",
    summary:
      "Gestão de ambientes públicos e privados nas principais plataformas: AWS, Azure e GCP.",
    bullets: [
      "Migração e dimensionamento de recursos",
      "Servidor de arquivos em nuvem",
      "Governança de custos (FinOps)",
    ],
  },
  {
    slug: "microinformatica",
    title: "Microinformática",
    summary:
      "Suporte ao usuário final, Microsoft 365, Google Workspace e ferramentas de produtividade.",
    bullets: [
      "Licenciamento e administração de contas",
      "Suporte local e remoto",
      "Treinamento de equipes",
    ],
  },
  {
    slug: "infraestrutura",
    title: "Infraestrutura e Redes",
    summary:
      "Projetos de rede cabeada e wireless, servidores locais e monitoramento de disponibilidade.",
    bullets: [
      "Redes locais e Wi-Fi corporativo",
      "Administração de servidores",
      "Backup e continuidade",
    ],
  },
  {
    slug: "manutencao",
    title: "Computadores e Notebooks",
    summary:
      "Manutenção preventiva e corretiva, instalação de sistemas e recuperação de desempenho.",
    bullets: [
      "Windows, Linux e macOS",
      "Instalação de software e hardware",
      "Limpeza e otimização de disco",
    ],
  },
  {
    slug: "suporte",
    title: "Suporte Técnico",
    summary:
      "Atendimento com acesso remoto para resolver incidentes sem deslocamento e sem espera.",
    bullets: [
      "Acesso remoto assistido",
      "Atendimento a Microsoft Office e web",
      "Registro e histórico de chamados",
    ],
  },
];
