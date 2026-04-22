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
    subtitle: "Frente prevista, ainda sem documento detalhado final.",
    badgeColor: "hsl(var(--primary))",
    services: [
      {
        id: "trafego-1",
        num: "02.1",
        category: "Escopo em construcao",
        title: "Modulo de aquisicao e performance",
        descriptions: [
          "Esta frente ja faz parte da proposta consolidada, mas ainda nao possui o mesmo nivel de detalhamento do Social Media.",
          "A ideia e complementar o plano com estrategia de midia, operacao de campanhas e acompanhamento de resultados.",
        ],
        deliverables: [
          "Definicao de canais prioritarios",
          "Objetivos de campanha e funil",
          "KPIs e modelo de mensuracao",
          "Rotina de otimizacao",
          "Investimento de midia e fee a definir",
        ],
      },
    ],
  },
  {
    id: "g3",
    num: "03",
    title: "Inbound (RD Station)",
    subtitle: "Frente prevista para automacoes, nutricao e relacionamento.",
    badgeColor: "hsl(var(--purple))",
    services: [
      {
        id: "inbound-1",
        num: "03.1",
        category: "Escopo em construcao",
        title: "Inbound marketing com RD Station",
        descriptions: [
          "O modulo de Inbound entra nesta versao como frente prevista para estruturar captacao, nutricao e automacoes.",
          "O detalhamento final ainda depende do documento complementar do projeto.",
        ],
        deliverables: [
          "Mapeamento de jornada e funil",
          "Fluxos de automacao",
          "Nutrica o de leads",
          "RD Station como ferramenta-base",
          "Escopo operacional e investimento a definir",
        ],
      },
    ],
  },
  {
    id: "g4",
    num: "04",
    title: "Criacao de Site",
    subtitle: "Frente prevista para consolidar presenca institucional e conversao.",
    badgeColor: "hsl(var(--accent))",
    services: [
      {
        id: "site-1",
        num: "04.1",
        category: "Escopo em construcao",
        title: "Site institucional/comercial",
        descriptions: [
          "A criacao de site ja esta prevista como modulo da proposta, mas ainda sem escopo fechado nesta fase.",
          "Este modulo deve concentrar apresentacao da marca, captacao e suporte a conversao.",
        ],
        deliverables: [
          "Arquitetura inicial do site",
          "Definicao de paginas e objetivos",
          "Conteudo e UX voltados para conversao",
          "Possiveis integracoes com formularios e RD Station",
          "Escopo tecnico e investimento a definir",
        ],
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
