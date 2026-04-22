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
    subtitle: "Modulo ja detalhado a partir da proposta anterior em PDF.",
    badgeColor: "linear-gradient(135deg,#2447ff,#8800e3)",
    services: [
      {
        id: "sm-1",
        num: "01.1",
        category: "Planejamento e Estrategia",
        title: "Onboarding estrategico do projeto",
        descriptions: [
          "O documento-base define que todo o trabalho parte de <strong>planejamento e estrategia</strong>, com apoio de briefing detalhado, assessoria continua e alinhamento recorrente.",
          "O objetivo e construir uma presenca digital solida e representativa para a Gamefic, conectando operacao de conteudo com direcionamento de marca.",
        ],
        deliverables: [
          "Briefing detalhado",
          "Planejamento estrategico do modulo social",
          "Assessoria continua ao longo do projeto",
          "Ate 2 reunioes por mes",
          "Cronograma de conteudo",
          "Tempo minimo de projeto: 6 meses",
        ],
        highlight:
          "<strong>Base oficial do escopo:</strong> proposta de Social Media para Gamefic datada de 24/01/2026, convertida agora para este site.",
      },
      {
        id: "sm-2",
        num: "01.2",
        category: "Instagram",
        title: "Operacao mensal do Instagram",
        descriptions: [
          "Gestao recorrente do canal com producao de conteudo, stories, edicao visual e acompanhamento da rotina de publicacao.",
        ],
        deliverables: [
          "16 conteudos por mes",
          "Producao de conteudo",
          "Criacao de roteiros",
          "Gestao de stories",
          "Edicao de imagem e video",
          "Agendamento de publicacoes",
          "Gestao de comentarios e directs",
          "Relatorio mensal",
        ],
      },
      {
        id: "sm-3",
        num: "01.3",
        category: "LinkedIn",
        title: "Frente de LinkedIn para executivo ou marca",
        descriptions: [
          "O PDF deixa duas opcoes abertas para este segundo canal: ghostwriting no perfil pessoal do Rubens ou operacao no perfil institucional da marca.",
        ],
        deliverables: [
          "Ghostwriting no perfil pessoal (Rubens): 12 conteudos por mes",
          "Ou perfil institucional da marca: 8 conteudos por mes",
          "Planejamento e pauta editorial",
          "Redacao e adaptacao para linguagem de LinkedIn",
          "Agendamento de publicacoes",
          "Analise mensal de performance",
        ],
        highlight:
          "<strong>Decisao pendente:</strong> confirmar se o segundo canal sera o perfil pessoal do Rubens ou o perfil oficial da marca.",
      },
      {
        id: "sm-4",
        num: "01.4",
        category: "Fluxo de Execucao",
        title: "Etapas do projeto de Social Media",
        descriptions: [
          "A proposta original organiza o modulo de Social Media em um fluxo claro de sete etapas, do contrato ao relatorio.",
        ],
        deliverablesTitle: "Etapas previstas",
        deliverables: [
          "Etapa 1: contrato",
          "Etapa 2: briefing",
          "Etapa 3: criacao do planejamento (1o mes)",
          "Etapa 4: criacao do cronograma de conteudo (a partir do 2o mes)",
          "Etapa 5: criacao das pecas e edicoes de videos",
          "Etapa 6: agendamento",
          "Etapa 7: relatorio",
        ],
      },
    ],
  },
  {
    id: "g2",
    num: "02",
    title: "Trafego Pago",
    subtitle: "Pacote mensal com Google Ads e Meta Ads focado em geracao de leads.",
    badgeColor: "hsl(var(--primary))",
    services: [
      {
        id: "trafego-1",
        num: "02.1",
        category: "Google Ads e Meta Ads",
        title: "Gestao de trafego pago",
        descriptions: [
          "Pacote de performance para geracao de leads com estrutura de campanhas em <strong>Google Ads</strong> e <strong>Meta Ads</strong>.",
          "O foco esta em planejamento inicial, arquitetura de campanhas, monitoramento recorrente e otimizacao de resultado ao longo do contrato.",
        ],
        deliverables: [
          "Planejamento inicial das campanhas com foco em geracao de leads",
          "Estruturacao das campanhas nas plataformas Google Ads e Meta Ads",
          "Definicao de publicos, segmentacoes, objetivos e jornadas",
          "Criacao da arquitetura de campanhas, conjuntos e anuncios",
          "Acompanhamento e otimizacao continua das campanhas",
          "Ajustes de orcamento entre campanhas conforme performance",
          "Monitoramento de leads, CPL, CTR, conversao e volume",
          "Reunioes de alinhamento e apresentacao de resultados",
          "Recomendacoes para melhoria de performance",
        ],
        highlight:
          "<strong>Nao inclui:</strong> verba de midia, grande volume de criativos avulsos fora da rotina acordada e producao externa nao prevista.",
      },
    ],
  },
  {
    id: "g3",
    num: "03",
    title: "Inbound (RD Station)",
    subtitle: "CRM, integracao de leads e operacao mensal de e-mail marketing.",
    badgeColor: "hsl(var(--purple))",
    services: [
      {
        id: "inbound-1",
        num: "03.1",
        category: "Integracao com CRM",
        title: "RD Station para captacao comercial",
        descriptions: [
          "A proposta passa a incluir integracao da landing page com o <strong>RD Station</strong> para organizar a entrada dos leads e apoiar automacoes e uso comercial.",
        ],
        deliverables: [
          "Integracao da landing page com o RD Station",
          "Configuracao do formulario para envio correto dos leads",
          "Mapeamento dos campos essenciais de captacao",
          "Parametrizacao basica da origem do lead",
          "Organizacao da entrada dos leads para uso comercial e automacoes",
          "Testes de envio e recebimento das informacoes",
        ],
        highlight:
          "<strong>Nao inclui:</strong> estruturacao completa de CRM comercial, desenho avancado de pipeline e integracoes extras nao previstas.",
      },
      {
        id: "inbound-2",
        num: "03.2",
        category: "E-mail Marketing",
        title: "Operacao mensal de e-mail marketing",
        descriptions: [
          "O pacote tambem contempla a operacao recorrente de e-mail marketing no RD Station com ate <strong>4 disparos mensais</strong>.",
        ],
        deliverables: [
          "Planejamento mensal dos disparos",
          "Criacao, montagem e configuracao de ate 4 e-mails mensais",
          "Subida dos e-mails no RD Station",
          "Configuracao de links e direcionamentos",
          "Segmentacao basica da base, conforme estrutura existente no RD",
          "Agendamento e disparo dos e-mails",
          "Acompanhamento de abertura, clique e engajamento",
          "Ajustes taticos de assunto, estrutura ou CTA conforme performance",
        ],
        highlight:
          "<strong>Nao inclui:</strong> fluxos complexos de automacao sem reorcamento, higienizacao profunda de base e estrategia completa de CRM lifecycle.",
      },
    ],
  },
  {
    id: "g4",
    num: "04",
    title: "Criacao de Site",
    subtitle: "Landing page principal de conversao com tracking avancado.",
    badgeColor: "hsl(var(--accent))",
    services: [
      {
        id: "site-1",
        num: "04.1",
        category: "Landing Page",
        title: "Criacao de landing page principal",
        descriptions: [
          "A criacao de site entra nesta proposta no formato de <strong>1 landing page principal</strong>, pensada para conversao e integracao com campanhas.",
        ],
        deliverables: [
          "Planejamento da estrutura da pagina com foco em conversao",
          "Construcao de 1 landing page principal",
          "Desenvolvimento da copy estrutural da pagina",
          "Organizacao de proposta de valor, beneficios, prova social, formulario e CTA",
          "Versao responsiva para desktop e mobile",
          "Insercao dos formularios e elementos de captura",
          "Publicacao da pagina no ambiente definido",
          "Ajustes iniciais para entrada em operacao",
        ],
        highlight:
          "<strong>Nao inclui:</strong> criacao de multiplas paginas novas sem reorcamento, reestruturacao recorrente e funcionalidades complexas fora do modelo de landing page.",
      },
      {
        id: "site-2",
        num: "04.2",
        category: "Tracking Avancado",
        title: "Tracking server side e mensuracao",
        descriptions: [
          "A landing page e as campanhas passam a contar com estrutura de <strong>tracking avancado com apoio server side</strong> para leitura mais confiavel das conversoes.",
        ],
        deliverables: [
          "Planejamento da mensuracao da landing page e campanhas",
          "Configuracao dos eventos principais de conversao",
          "Implementacao de estrutura de tracking avancado com apoio server side",
          "Configuracao de tags e parametros necessarios",
          "Integracao dos eventos com Google Ads e Meta Ads",
          "Validacao basica do recebimento dos eventos e conversoes",
          "Apoio tecnico para melhorar a qualidade de mensuracao dos leads",
        ],
        highlight:
          "<strong>Nao inclui:</strong> projeto amplo de analytics para todo o ecossistema, multiplos sites e funis complexos ou infraestrutura tecnica fora do combinado.",
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
