import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";

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
  const [selectedService, setSelectedService] = useState<SubService | null>(null);

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

              <div className={`grid grid-cols-1 gap-3 ${group.services.length > 1 ? "sm:grid-cols-2" : ""}`}>
                {group.services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setSelectedService(service)}
                    className="group gamefic-surface relative rounded-[30px] border border-white/80 p-6 text-left transition-all duration-300 ease-out hover:-translate-y-1 active:scale-[0.99]"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl font-numbers text-[13px] font-extrabold text-white"
                        style={{ background: group.badgeColor }}
                      >
                        {service.num}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="mb-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                          {service.category}
                        </div>
                        <h4 className="mb-2 font-display text-[24px] font-extrabold leading-[1.08] tracking-[-0.04em] text-primary">
                          {service.title}
                        </h4>
                        <p className="line-clamp-3 text-[14px] leading-[1.7] text-slate-600">
                          {service.descriptions[0]}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-primary transition-colors duration-300 group-hover:text-purple">
                      <span>{service.deliverables.length} itens</span>
                      <span className="rounded-full bg-accent px-2 py-0.5 text-primary transition-transform duration-300 group-hover:translate-x-1">
                        {">"}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Sheet open={!!selectedService} onOpenChange={(open) => !open && setSelectedService(null)}>
        <SheetContent className="w-full overflow-y-auto border-l border-border bg-white sm:max-w-[560px]">
          {selectedService && (
            <>
              <SheetHeader className="border-b border-border pb-6">
                <div className="mb-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                  {selectedService.category}
                </div>
                <SheetTitle className="font-display text-[clamp(28px,3vw,34px)] font-extrabold leading-[1.05] tracking-[-0.04em] text-primary">
                  {selectedService.title}
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-6 pt-6">
                <div className="space-y-3 text-[15px] leading-[1.85] text-slate-600">
                  {selectedService.descriptions.map((d, i) => (
                    <p
                      key={i}
                      dangerouslySetInnerHTML={{ __html: d }}
                      className="[&_strong]:font-semibold [&_strong]:text-slate-900"
                    />
                  ))}
                </div>

                {selectedService.highlight && (
                  <div className="rounded-[24px] border border-accent/30 bg-accent/10 p-5">
                    <p
                      className="text-[14px] leading-relaxed text-slate-700 [&_strong]:font-semibold [&_strong]:text-slate-900"
                      dangerouslySetInnerHTML={{ __html: selectedService.highlight }}
                    />
                  </div>
                )}

                <div className="rounded-[28px] border border-border bg-secondary/50 p-5">
                  <h4 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
                    {selectedService.deliverablesTitle || "Entregas"}
                  </h4>
                  <ul className="flex flex-col gap-2.5">
                    {selectedService.deliverables.map((d, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-[14px] leading-snug text-slate-600">
                        <span className="mt-[6px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                        <span dangerouslySetInnerHTML={{ __html: d }} className="[&_strong]:font-semibold [&_strong]:text-slate-900" />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </section>
  );
}
