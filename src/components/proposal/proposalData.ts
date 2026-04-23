export interface SubService {
  id: string;
  num: string;
  category: string;
  title: string;
  descriptions: string[];
  deliverables: string[];
  deliverablesTitle?: string;
  highlight?: string;
}

export interface ProposalGroupData {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  badgeColor: string;
  image: string;
  items: string[];
  suggested?: boolean;
  disclaimer?: string;
  services: SubService[];
}

export const proposalGroups: ProposalGroupData[] = [
  {
    id: "g1",
    num: "01",
    title: "Social Media",
    subtitle: "Instagram e LinkedIn para fortalecer marca, autoridade e relacionamento.",
    badgeColor: "linear-gradient(135deg,#2447ff,#8800e3)",
    image:
      "https://images.pexels.com/photos/6954174/pexels-photo-6954174.jpeg?auto=compress&cs=tinysrgb&w=900&h=700&fit=crop",
    items: ["Instagram", "LinkedIn", "16 + 12/8 conteúdos"],
    services: [
      {
        id: "sm-1",
        num: "01.1",
        category: "Planejamento e Estratégia",
        title: "Onboarding estratégico do projeto",
        descriptions: [
          "Todo o trabalho começa com <strong>planejamento e estratégia</strong>, briefing aprofundado e alinhamento recorrente para que a operação tenha direção clara desde o início.",
          "O objetivo é construir uma presença digital sólida para a Gamefic, conectando conteúdo, posicionamento e consistência de marca ao longo do contrato.",
        ],
        deliverables: [
          "Briefing detalhado",
          "Planejamento estratégico do módulo social",
          "Assessoria contínua ao longo do projeto",
          "Até 2 reuniões por mês",
          "Cronograma de conteúdo",
          "Tempo mínimo de projeto: 6 meses",
        ],
        highlight:
          "<strong>Ponto de partida:</strong> uma operação editorial organizada para dar constância, direção e mais percepção de valor à marca.",
      },
      {
        id: "sm-2",
        num: "01.2",
        category: "Instagram",
        title: "Operação mensal do Instagram",
        descriptions: [
          "Gestão recorrente do canal com produção de conteúdo, stories, edição visual e acompanhamento da rotina de publicação para manter a marca ativa e relevante.",
        ],
        deliverables: [
          "16 conteúdos por mês",
          "Produção de conteúdo",
          "Criação de roteiros",
          "Gestão de stories",
          "Edição de imagem e vídeo",
          "Agendamento de publicações",
          "Gestão de comentários e directs",
          "Relatório mensal",
        ],
      },
      {
        id: "sm-3",
        num: "01.3",
        category: "LinkedIn",
        title: "Frente de LinkedIn para executivo ou marca",
        descriptions: [
          "O LinkedIn entra como canal de autoridade, com duas possibilidades de operação: ghostwriting no perfil pessoal do Rubens ou atuação no perfil institucional da marca.",
        ],
        deliverables: [
          "Ghostwriting no perfil pessoal (Rubens): 12 conteúdos por mês",
          "Ou perfil institucional da marca: 8 conteúdos por mês",
          "Planejamento e pauta editorial",
          "Redação e adaptação para linguagem de LinkedIn",
          "Agendamento de publicações",
          "Análise mensal de performance",
        ],
        highlight:
          "<strong>Definição necessária:</strong> confirmar se o segundo canal será o perfil pessoal do Rubens ou o perfil oficial da marca.",
      },
      {
        id: "sm-4",
        num: "01.4",
        category: "Fluxo de Execução",
        title: "Etapas do projeto de Social Media",
        descriptions: [
          "A operação foi estruturada em um fluxo claro, do contrato à análise de resultados, para garantir previsibilidade de execução e acompanhamento contínuo.",
        ],
        deliverablesTitle: "Etapas previstas",
        deliverables: [
          "Etapa 1: contrato",
          "Etapa 2: briefing",
          "Etapa 3: criação do planejamento (1º mês)",
          "Etapa 4: criação do cronograma de conteúdo (a partir do 2º mês)",
          "Etapa 5: criação das peças e edições de vídeos",
          "Etapa 6: agendamento",
          "Etapa 7: relatório",
        ],
      },
    ],
  },
  {
    id: "g2",
    num: "02",
    title: "Tráfego Pago",
    subtitle: "Google Ads e Meta Ads para acelerar geração de leads com foco em performance.",
    badgeColor: "hsl(var(--primary))",
    image:
      "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=900&h=700&fit=crop",
    items: ["Google Ads", "Meta Ads", "Leads"],
    services: [
      {
        id: "trafego-1",
        num: "02.1",
        category: "Google Ads e Meta Ads",
        title: "Gestão de tráfego pago",
        descriptions: [
          "Pacote de performance para geração de leads com estrutura de campanhas em <strong>Google Ads</strong> e <strong>Meta Ads</strong>.",
          "O foco está em planejamento inicial, arquitetura de campanhas, monitoramento recorrente e otimização contínua para transformar investimento em resultado comercial.",
        ],
        deliverables: [
          "Planejamento inicial das campanhas com foco em geração de leads",
          "Estruturação das campanhas nas plataformas Google Ads e Meta Ads",
          "Definição de públicos, segmentações, objetivos e jornadas",
          "Criação da arquitetura de campanhas, conjuntos e anúncios",
          "Acompanhamento e otimização contínua das campanhas",
          "Ajustes de orçamento entre campanhas conforme performance",
          "Monitoramento de leads, CPL, CTR, conversão e volume",
          "Reuniões de alinhamento e apresentação de resultados",
          "Recomendações para melhoria de performance",
        ],
        highlight:
          "<strong>Não inclui:</strong> verba de mídia, grande volume de criativos avulsos fora da rotina acordada e produção externa não prevista.",
      },
      {
        id: "trafego-2",
        num: "02.2",
        category: "Tracking Avançado",
        title: "Tracking avançado com apoio server side",
        descriptions: [
          "A frente de tráfego também pode contar com uma estrutura de <strong>tracking avançado com apoio server side</strong> para melhorar a leitura da jornada e dar mais confiabilidade à mensuração das conversões.",
        ],
        deliverables: [
          "Planejamento da mensuração da landing page e campanhas",
          "Configuração de eventos principais de conversão",
          "Implementação de estrutura de tracking avançado com apoio server side",
          "Configuração de tags e parâmetros necessários para leitura correta da jornada",
          "Integração dos eventos com Google Ads e Meta Ads",
          "Validação básica do recebimento dos eventos e conversões",
          "Apoio técnico na melhoria da qualidade de mensuração dos leads",
        ],
        highlight:
          "<strong>Objetivo:</strong> garantir uma leitura mais confiável da origem das conversões e melhorar a capacidade de otimização das campanhas.",
      },
    ],
  },
  {
    id: "g3",
    num: "03",
    title: "Inbound (RD Station)",
    subtitle: "Captação, CRM e e-mail marketing para nutrir oportunidades e apoiar o comercial.",
    badgeColor: "hsl(var(--purple))",
    image:
      "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=900&h=700&fit=crop",
    items: ["RD Station", "Integração", "4 e-mails/mês"],
    services: [
      {
        id: "inbound-1",
        num: "03.1",
        category: "Integração com CRM",
        title: "RD Station para captação comercial",
        descriptions: [
          "A proposta inclui integração dos formulários e pontos de captação digitais com o <strong>RD Station</strong> para organizar a entrada dos leads e apoiar automações e uso comercial.",
        ],
        deliverables: [
          "Integração do ativo de captação com o RD Station",
          "Configuração do formulário para envio correto dos leads",
          "Mapeamento dos campos essenciais de captação",
          "Parametrização básica da origem do lead",
          "Organização da entrada dos leads para uso comercial e automações",
          "Testes de envio e recebimento das informações",
        ],
        highlight:
          "<strong>Não inclui:</strong> estruturação completa de CRM comercial, desenho avançado de pipeline e integrações extras não previstas.",
      },
      {
        id: "inbound-2",
        num: "03.2",
        category: "E-mail Marketing",
        title: "Operação mensal de e-mail marketing",
        descriptions: [
          "O pacote também contempla a operação recorrente de e-mail marketing no RD Station com até <strong>4 disparos mensais</strong> para aquecer relacionamento e ativar oportunidades.",
        ],
        deliverables: [
          "Planejamento mensal dos disparos",
          "Criação, montagem e configuração de até 4 e-mails mensais",
          "Subida dos e-mails no RD Station",
          "Configuração de links e direcionamentos",
          "Segmentação básica da base, conforme estrutura existente no RD",
          "Agendamento e disparo dos e-mails",
          "Acompanhamento de abertura, clique e engajamento",
          "Ajustes táticos de assunto, estrutura ou CTA conforme performance",
        ],
        highlight:
          "<strong>Não inclui:</strong> fluxos complexos de automação sem reorçamento, higienização profunda de base e estratégia completa de CRM lifecycle.",
      },
    ],
  },
  {
    id: "g4",
    num: "04",
    title: "Criação de Site",
    subtitle: "Site completo com blog para SEO, GEO, AEO e LLMO, estruturado para autoridade e crescimento orgânico.",
    badgeColor: "hsl(var(--accent))",
    image: `${import.meta.env.BASE_URL}site-card-photo.jpg`,
    items: ["Site completo", "Blog SEO", "GEO / AEO / LLMO"],
    suggested: true,
    disclaimer: "Sugestão da especialista",
    services: [
      {
        id: "site-1",
        num: "04.1",
        category: "Planejamento Estratégico",
        title: "Planejamento estratégico do projeto",
        descriptions: [
          "A frente de site entra como um projeto completo, com <strong>diagnóstico inicial, definição da arquitetura macro e organização das páginas principais</strong> para sustentar autoridade, conversão e crescimento orgânico.",
          "Nesta etapa, será desenhada a lógica de navegação, o papel de cada área do site e a estrutura editorial do blog para apoiar SEO e posicionamento temático.",
        ],
        deliverables: [
          "Diagnóstico inicial da presença digital",
          "Definição da arquitetura macro do site",
          "Definição do sitemap estratégico",
          "Organização das páginas institucionais, comerciais e editoriais",
          "Direcionamento da estrutura do blog com foco em crescimento orgânico e autoridade temática",
        ],
        highlight:
          "<strong>Prazo estimado:</strong> 3 semanas para estruturação e publicação inicial do projeto dentro deste escopo proposto.",
      },
      {
        id: "site-2",
        num: "04.2",
        category: "Site Institucional",
        title: "Estruturação do site institucional completo",
        descriptions: [
          "O escopo sugerido prevê um <strong>site completo</strong>, com navegação profissional, páginas institucionais e comerciais, estrutura responsiva e suporte a conversão.",
          "A proposta contempla a hierarquia entre páginas, navegação principal e rodapé, distribuição de CTAs e organização da experiência com foco em clareza, performance e leitura comercial.",
        ],
        deliverables: [
          "Home",
          "Sobre / Empresa",
          "Soluções ou Serviços",
          "Página individual por serviço",
          "Cases ou Projetos",
          "Contato",
          "Blog",
          "Política de privacidade",
          "Termos de uso, se aplicável",
        ],
        highlight:
          "<strong>Objetivo:</strong> consolidar a presença digital da marca em uma base mais sólida, preparada para posicionamento, navegação intuitiva e apoio comercial.",
      },
      {
        id: "site-3",
        num: "04.3",
        category: "UX e Interface",
        title: "UX, wireframe e direcionamento de interface",
        descriptions: [
          "A proposta inclui a organização da experiência do usuário para tornar o site mais claro, escaneável e orientado à navegação por intenção de busca.",
          "Isso envolve definição dos blocos por página, hierarquia visual da informação e posicionamento das áreas de prova, autoridade e conversão.",
        ],
        deliverables: [
          "Definição de blocos por página",
          "Organização visual da hierarquia da informação",
          "Estruturação de áreas de prova, autoridade e conversão",
          "Definição de posicionamento de formulários, banners e chamadas",
          "Priorização de leitura simples e entendimento rápido da proposta de valor",
        ],
      },
      {
        id: "site-4",
        num: "04.4",
        category: "Desenvolvimento",
        title: "Desenvolvimento do site e publicação",
        descriptions: [
          "Inclui a implementação técnica do site completo, montagem do layout final, adaptação responsiva e preparação da estrutura para crescimento contínuo.",
          "Também contempla a configuração de cabeçalho, rodapé, templates reutilizáveis quando aplicável, publicação do projeto e acompanhamento inicial após o go live.",
        ],
        deliverables: [
          "Desenvolvimento das páginas previstas no escopo",
          "Montagem do layout final",
          "Adaptação responsiva",
          "Criação de templates reutilizáveis quando aplicável",
          "Configuração de cabeçalho, rodapé e elementos globais",
          "Revisão final, testes básicos e publicação do projeto",
        ],
      },
      {
        id: "site-5",
        num: "04.5",
        category: "Blog e SEO",
        title: "Estrutura completa de blog e base de SEO",
        descriptions: [
          "O blog entra como núcleo de autoridade orgânica e crescimento contínuo, com estrutura preparada para aprofundamento temático, navegação entre conteúdos e expansão editorial.",
          "Além disso, a proposta contempla a base de SEO on-page e SEO técnico, com headings, titles, meta descriptions, links internos, sitemap XML, robots.txt, canonicals e estrutura amigável para rastreamento e indexação.",
        ],
        deliverables: [
          "Página principal do blog",
          "Template de post",
          "Categorias editoriais e navegação entre artigos",
          "Estrutura de headings, titles e meta descriptions",
          "URLs amigáveis, links internos e estratégia semântica",
          "Sitemap XML, robots.txt e preparação para Search Console",
          "Otimização técnica inicial de performance e indexação",
        ],
        highlight:
          "<strong>Objetivo do blog:</strong> servir como base para captura de tráfego orgânico, aprofundamento de temas estratégicos e expansão da presença da marca em buscas tradicionais.",
      },
      {
        id: "site-6",
        num: "04.6",
        category: "GEO, AEO e LLMO",
        title: "Estrutura para GEO, AEO, LLMO e dados estruturados",
        descriptions: [
          "O site e o blog também serão preparados para aumentar a chance de o conteúdo ser melhor compreendido, extraído e citado em respostas de IA e mecanismos de resposta.",
          "Isso inclui construção de conteúdos claros e escaneáveis, reforço de consistência institucional, dados estruturados e uma base inicial de analytics, captação e acompanhamento pós-publicação.",
        ],
        deliverables: [
          "Blocos objetivos com respostas claras, definições, comparações e FAQ quando pertinente",
          "Construção de páginas e artigos mais citáveis, claros e autocontidos",
          "Padronização de informações institucionais e contextuais da empresa",
          "Implementação de dados estruturados compatíveis com páginas e artigos",
          "Formulários, CTAs e áreas estratégicas de captura",
          "Instalação inicial de analytics, Search Console e validação básica do site",
        ],
        highlight:
          "<strong>Não inclui, salvo contratação específica:</strong> produção de artigos, redação completa de todas as páginas do zero, integrações avançadas, multilíngue, e-commerce, manutenção evolutiva contínua, estratégia mensal de conteúdo SEO, link building ou revisões ilimitadas.",
      },
    ],
  },
];
