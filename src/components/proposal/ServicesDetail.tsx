import { useReveal } from "@/hooks/useReveal";

interface SubService {
  id: string;
  num: string;
  category: string;
  title: string;
  descriptions: string[];
  deliverables: string[];
  deliverablesTitle?: string;
  highlight?: string;
}

interface ServiceGroupData {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  badgeColor: string;
  services: SubService[];
}

const groups: ServiceGroupData[] = [
  {
    id: "g1",
    num: "01",
    title: "Social Media (2 canais)",
    subtitle: "Conteúdo recorrente para fortalecer presença, autoridade e relacionamento.",
    badgeColor: "linear-gradient(135deg,#2447ff,#8800e3)",
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
    subtitle: "Google Ads e Meta Ads para acelerar geração de leads com inteligência de mídia.",
    badgeColor: "hsl(var(--primary))",
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
    ],
  },
  {
    id: "g3",
    num: "03",
    title: "Inbound (RD Station)",
    subtitle: "Captação, CRM e relacionamento para aproveitar melhor cada lead gerado.",
    badgeColor: "hsl(var(--purple))",
    services: [
      {
        id: "inbound-1",
        num: "03.1",
        category: "Integração com CRM",
        title: "RD Station para captação comercial",
        descriptions: [
          "A proposta inclui integração da landing page com o <strong>RD Station</strong> para organizar a entrada dos leads e apoiar automações e uso comercial.",
        ],
        deliverables: [
          "Integração da landing page com o RD Station",
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
    subtitle: "Estrutura de conversão para transformar tráfego em oportunidade comercial.",
    badgeColor: "hsl(var(--accent))",
    services: [
      {
        id: "site-1",
        num: "04.1",
        category: "Landing Page",
        title: "Criação de landing page principal",
        descriptions: [
          "A criação de site entra nesta proposta no formato de <strong>1 landing page principal</strong>, pensada para conversão, clareza de oferta e integração com campanhas.",
        ],
        deliverables: [
          "Planejamento da estrutura da página com foco em conversão",
          "Construção de 1 landing page principal",
          "Desenvolvimento da copy estrutural da página",
          "Organização de proposta de valor, benefícios, prova social, formulário e CTA",
          "Versão responsiva para desktop e mobile",
          "Inserção dos formulários e elementos de captura",
          "Publicação da página no ambiente definido",
          "Ajustes iniciais para entrada em operação",
        ],
        highlight:
          "<strong>Não inclui:</strong> criação de múltiplas páginas novas sem reorçamento, reestruturação recorrente e funcionalidades complexas fora do modelo de landing page.",
      },
      {
        id: "site-2",
        num: "04.2",
        category: "Tracking Avançado",
        title: "Tracking server side e mensuração",
        descriptions: [
          "A landing page e as campanhas passam a contar com estrutura de <strong>tracking avançado com apoio server side</strong> para leitura mais confiável das conversões e melhor capacidade de otimização.",
        ],
        deliverables: [
          "Planejamento da mensuração da landing page e campanhas",
          "Configuração dos eventos principais de conversão",
          "Implementação de estrutura de tracking avançado com apoio server side",
          "Configuração de tags e parâmetros necessários",
          "Integração dos eventos com Google Ads e Meta Ads",
          "Validação básica do recebimento dos eventos e conversões",
          "Apoio técnico para melhorar a qualidade de mensuração dos leads",
        ],
        highlight:
          "<strong>Não inclui:</strong> projeto amplo de analytics para todo o ecossistema, múltiplos sites e funis complexos ou infraestrutura técnica fora do combinado.",
      },
    ],
  },
];

export default function ServicesDetail() {
  const ref = useReveal();

  return (
    <section ref={ref} className="bg-white py-24">
      <div className="container">
        <div className="flex flex-col gap-16">
          {groups.map((group) => (
            <div key={group.id} id={group.id} className="reveal">
              <div className="mb-6 rounded-[32px] bg-[linear-gradient(135deg,#2447ff_8%,#2f35f5_38%,#8800e3_100%)] px-8 py-8 text-white shadow-[0_24px_60px_rgba(25,48,130,0.16)]">
                <div className="flex items-center gap-5">
                  <span className="font-numbers text-[clamp(36px,4vw,48px)] font-extrabold leading-none text-accent">
                    {group.num}
                  </span>
                  <div>
                    <h3 className="font-display text-[clamp(24px,2.8vw,34px)] font-extrabold leading-[1.05] tracking-[-0.04em]">
                      {group.title}
                    </h3>
                    <p className="mt-1 text-[14px] text-white/72">{group.subtitle}</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                {group.services.length > 1 && (
                  <div className="pointer-events-none absolute left-[28px] top-0 hidden h-full w-px bg-[linear-gradient(180deg,rgba(36,71,255,0.18),rgba(136,0,227,0.18))] md:block" />
                )}

                <div
                  className={`grid grid-cols-1 gap-4 ${
                    group.services.length > 1 ? "xl:grid-cols-2" : ""
                  }`}
                >
                {group.services.map((service) => (
                  <article
                    key={service.id}
                    className="group relative overflow-hidden rounded-[30px] border border-[#d7defa] bg-[linear-gradient(180deg,#ffffff_0%,#f7f9ff_100%)] p-6 shadow-[0_18px_40px_rgba(28,54,126,0.08)] transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="absolute inset-x-0 top-0 h-1" style={{ background: group.badgeColor }} />

                    <div className="relative flex items-start gap-4">
                      <div className="relative z-10 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-[20px] font-numbers text-[14px] font-extrabold text-white shadow-[0_14px_28px_rgba(36,71,255,0.22)]" style={{ background: group.badgeColor }}>
                        {service.num}
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="inline-flex rounded-full bg-secondary px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-primary">
                          {service.category}
                        </span>
                        <h4 className="mt-3 font-display text-[24px] font-extrabold leading-[1.08] tracking-[-0.04em] text-primary">
                          {service.title}
                        </h4>
                        <div className="mt-3 space-y-3 text-[14px] leading-[1.6] text-slate-600">
                          {service.descriptions.map((description, index) => (
                            <p
                              key={index}
                              dangerouslySetInnerHTML={{ __html: description }}
                              className="[&_strong]:font-semibold [&_strong]:text-slate-900"
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {service.highlight && (
                      <div className="mt-5 rounded-[24px] border border-primary/10 bg-[linear-gradient(135deg,rgba(35,71,255,0.06),rgba(136,0,227,0.08))] p-4">
                        <p
                          className="text-[13px] leading-[1.55] text-slate-700 [&_strong]:font-semibold [&_strong]:text-primary"
                          dangerouslySetInnerHTML={{ __html: service.highlight }}
                        />
                      </div>
                    )}

                    <div className="mt-5">
                      <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                        {service.deliverablesTitle || "O que entra nessa frente"}
                      </div>
                      <div className="grid gap-2 sm:grid-cols-2">
                        {service.deliverables.map((deliverable, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-2 rounded-[18px] border border-[#e5eafe] bg-white px-4 py-3 text-[13px] leading-[1.55] text-slate-700"
                          >
                            <span
                              className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full"
                              style={{ background: group.badgeColor }}
                            />
                            <span
                              dangerouslySetInnerHTML={{ __html: deliverable }}
                              className="[&_strong]:font-semibold [&_strong]:text-slate-900"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
