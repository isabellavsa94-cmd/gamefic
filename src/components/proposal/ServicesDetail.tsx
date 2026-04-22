import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import ensaioImg from "@/assets/ensaio-fotografico.png";

interface SubService {
  id: string;
  num: string;
  category: string;
  title: string;
  descriptions: string[];
  deliverables: string[];
  deliverablesTitle?: string;
  highlight?: string;
  image?: string;
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
    id: "g1", num: "01", title: "Produção Visual & Ferramentas",
    subtitle: "A base visual de toda a comunicação da marca.",
    badgeColor: "hsl(var(--purple))",
    services: [
      {
        id: "s1", num: "01.1", category: "Produção Visual",
        title: "Ensaio Fotográfico — 60 Produtos",
        image: ensaioImg,
        descriptions: [
          "Ensaio profissional para todos os 60 produtos em fundo branco técnico (Key Light). Base visual para site, catálogo, Mercado Livre, materiais gráficos e redes sociais.",
        ],
        deliverables: [
          "Fotografia still técnica de todos os 60 produtos",
          "Mínimo de 4 ângulos por produto: frente, verso, superior, textura",
          "Fundo branco técnico (Key Light) + ambientações selecionadas",
          "Pós-produção profissional com corte e tratamento de cor",
          "Entrega em alta resolução (TIFF) + web (JPEG/PNG otimizado)",
          "Organização por linha e SKU para uso em catálogo e e-commerce",
        ],
        highlight: "<strong>Mínimo de 4 ângulos por produto:</strong> frente, verso, vista superior e shot do sample/textura.",
      },
      {
        id: "s2", num: "01.2", category: "Ferramenta Comercial",
        title: "Catálogo Impresso para Representantes",
        descriptions: [
          "Catálogo impresso premium para representantes, organizado por linha de produto com ficha técnica e fotos profissionais.",
        ],
        deliverables: [
          "Design editorial completo do catálogo de até 50 páginas",
          "Organização por linha de produto e indicação",
          "Ficha técnica por produto com fotos profissionais",
          "Diagramação para impressão (CMYK, sangria, marcas de corte)",
          "Arquivo final em PDF para gráfica",
          
        ],
      },
    ],
  },
  {
    id: "g2", num: "02", title: "Plataformas de Venda",
    subtitle: "Os canais onde os produtos são encontrados e comprados.",
    badgeColor: "hsl(var(--gold))",
    services: [
      {
        id: "s3", num: "02.1", category: "E-commerce",
        title: "E-commerce Integrado",
        descriptions: [
          "E-commerce com design premium, checkout otimizado e integração com ERP.",
        ],
        deliverables: [
          "E-commerce completo",
          "Design responsivo (mobile-first)",
          "Cadastro dos 60 produtos com fotos e ficha técnica",
          "Checkout otimizado para conversão",
          "Integração com gateway de pagamento e logística",
          "Blog para estratégia de SEO",
          "Setup de analytics e tracking de conversão",
        ],
      },
      {
        id: "s4", num: "02.2", category: "Marketplace",
        title: "Setup Mercado Livre",
        descriptions: [
          "Loja oficial no Mercado Livre com cadastro otimizado de todos os 60 produtos e estratégia de posicionamento.",
        ],
        deliverables: [
          "Criação e configuração da loja oficial no Mercado Livre",
          "Cadastro de 60 produtos com títulos otimizados para SEO",
          "Fotos profissionais aplicadas a cada anúncio",
          "Integração com ERP",
          "Setup de Mercado Ads (campanhas iniciais)",
        ],
      },
    ],
  },
  {
    id: "g3", num: "03", title: "Conteúdo & Social Media",
    subtitle: "Planejamento, produção e gestão de toda a presença social.",
    badgeColor: "hsl(var(--rose))",
    services: [
      {
        id: "s5", num: "03.1", category: "Estratégia",
        title: "Planejamento de Conteúdo",
        descriptions: [
          "Definição de personas, jornada de compra, pilares editoriais, calendário trimestral e guidelines de tom de voz.",
        ],
        deliverables: [
          "Pesquisa e definição de personas",
          "Mapeamento da jornada de compra",
          "Definição de pilares editoriais e território de marca",
          "Guidelines de tom de voz e linguagem",
          "Calendário editorial",
          "Linguagem fotográfica",
          "Setup do perfil",
          "Acesso a Kontent (Plataforma de aprovação de conteúdo)",
        ],
      },
      {
        id: "s6", num: "03.2", category: "Social Media",
        title: "Derm'Attive (Instagram e TikTok)",
        descriptions: [
          "Gestão completa dos perfis: criação de conteúdo, design, copywriting, publicação, comunidade e relatório mensal.",
        ],
        deliverables: [
          "Gestão completa de Instagram e TikTok",
          "Criação de conteúdo (design + copy + edição de vídeo)",
          "Calendário mensal de publicações",
          "Gestão de comunidade (comentários e DMs)",
          "Estratégia de Reels e TikToks nativos",
          "Relatório mensal de performance",
        ],
      },
      {
        id: "s7", num: "03.3", category: "Produto Foco",
        title: "Derm'Attive Íntimo (Instagram)",
        descriptions: [
          "Canal de rede social exclusivo para o sabonete íntimo, com posicionamento centrado em saúde íntima e autocuidado.",
        ],
        deliverables: [
          "Criação e setup do perfil dedicado",
          "Posicionamento e identidade específicos",
          "Calendário editorial exclusivo",
          "Gestão mensal completa (publicação e engajamento)",
          "Estratégia de crescimento de base",
          "Relatório mensal separado do canal principal",
          "Responder comentários por IA",
        ],
      },
      {
        id: "s8", num: "03.4", category: "Influência",
        title: "Influenciadores e Creators",
        descriptions: [
          "Gerenciamento completo: mapeamento, abordagem, contrato, briefing, acompanhamento e relatório por ação.",
        ],
        deliverables: [
          "Mapeamento e curadoria mensal de influenciadores",
          "Mix estratégico: micro, midi e macro influenciadores",
          "Identificação e contratação de creators para UGC",
          "Elaboração de briefings e contrato de uso de imagem",
          "Acompanhamento de entregas e aprovações",
          "Relatório por ação: alcance, engajamento, conversões",
        ],
      },
    ],
  },
  {
    id: "g4", num: "04", title: "Aquisição & Performance",
    subtitle: "Tráfego qualificado e presença orgânica de longo prazo.",
    badgeColor: "hsl(var(--purple-mid))",
    services: [
      {
        id: "s9", num: "04.1", category: "Mídia Paga",
        title: "Tráfego Pago (2 Plataformas)",
        descriptions: [
          "Gestão de campanhas em Meta e Google com funil completo do topo à conversão.",
        ],
        deliverables: [
          "Estrutura de conta e campanhas (setup inicial incluso)",
          "Funil completo: topo, meio e fundo",
          "Meta Ads: prospecting, lookalike, retargeting, catálogo dinâmico",
          "Google Ads: search, shopping, display, Performance Max",
          "Conceituação de campanha e criação de criativos",
          "Otimização contínua e testes A/B de criativos",
          "Tracking avançado",
          "Dashboard em tempo real",
          "Gestão de até R$10 mil reais por mês em mídia",
        ],
        deliverablesTitle: "Entregas mensais",
      },
    ],
  },
  {
    id: "g5", num: "05", title: "Branding & Embalagem",
    subtitle: "A identidade que sustenta tudo, da marca ao rótulo.",
    badgeColor: "hsl(var(--gold-on-light))",
    services: [
      {
        id: "s11", num: "05.1", category: "Identidade",
        title: "Rebranding Completo",
        descriptions: [
          "Construção de um sistema de marca completo: posicionamento, identidade visual, Brand Book e aplicações.",
        ],
        deliverables: [
          "Diagnóstico e auditoria da marca atual",
          "Pesquisa de mercado e benchmarking competitivo",
          "Posicionamento estratégico",
          "Arquitetura de marca (guarda-chuva + sub-linhas)",
          "Identidade visual completa: logo, paleta, tipografia, iconografia",
          "Brand Book com guidelines de aplicação",
          "Aplicações: PDV, embalagem, uniforme, papelaria",
          "Templates de apresentação e proposta comercial",
        ],
      },
      {
        id: "s12", num: "05.2", category: "Embalagem",
        title: "Redesign de Rótulos (60 Produtos)",
        descriptions: [
          "\n",
        ],
        deliverables: [
          "Briefing criativo baseado no novo Brand Book",
          "Estudo de tendências do setor dermocosméticos",
          "Conceito criativo para cada linha de produtos",
          "Design de rótulos para todos os 60 produtos",
          "Adequação às exigências da ANVISA",
          "Arquivos em formato de produção gráfica",
          "Manual de aplicação para fornecedores",
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
              {/* Group header */}
              <div className="mb-6 rounded-[32px] bg-[linear-gradient(135deg,#2447ff_8%,#2f35f5_38%,#8800e3_100%)] px-8 py-8 text-white shadow-[0_24px_60px_rgba(25,48,130,0.16)]">
                <div className="flex items-center gap-5">
                  <span className="font-numbers text-[clamp(36px,4vw,48px)] font-extrabold leading-none text-accent">{group.num}</span>
                  <div>
                    <h3 className="font-display text-[clamp(24px,2.8vw,34px)] font-extrabold leading-[1.05] tracking-[-0.04em]">{group.title}</h3>
                    <p className="mt-1 text-[14px] text-white/72">{group.subtitle}</p>
                  </div>
                </div>
              </div>

              {/* Service cards grid */}
              <div className={`grid grid-cols-1 gap-3 ${group.services.length > 1 ? 'sm:grid-cols-2' : ''}`}>
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
                        <div className="mb-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">{service.category}</div>
                        <h4 className="mb-2 font-display text-[24px] font-extrabold leading-[1.08] tracking-[-0.04em] text-primary">{service.title}</h4>
                        <p className="line-clamp-3 text-[14px] leading-[1.7] text-slate-600">{service.descriptions[0]}</p>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-primary transition-colors duration-300 group-hover:text-purple">
                      <span>{service.deliverables.length} entregas</span>
                      <span className="rounded-full bg-accent px-2 py-0.5 text-primary transition-transform duration-300 group-hover:translate-x-1">{">"}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail drawer */}
      <Sheet open={!!selectedService} onOpenChange={(open) => !open && setSelectedService(null)}>
        <SheetContent className="w-full overflow-y-auto border-l border-border bg-white sm:max-w-[560px]">
          {selectedService && (
            <>
              <SheetHeader className="border-b border-border pb-6">
                <div className="mb-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">{selectedService.category}</div>
                <SheetTitle className="font-display text-[clamp(28px,3vw,34px)] font-extrabold leading-[1.05] tracking-[-0.04em] text-primary">
                  {selectedService.title}
                </SheetTitle>
              </SheetHeader>

              <div className="pt-6 flex flex-col gap-6">
                {/* Descriptions */}
                <div className="space-y-3 text-[15px] leading-[1.85] text-slate-600">
                  {selectedService.descriptions.map((d, i) => (
                    <p key={i} dangerouslySetInnerHTML={{ __html: d }} className="[&_strong]:font-semibold [&_strong]:text-slate-900" />
                  ))}
                </div>

                {selectedService.highlight && (
                  <div className="rounded-[24px] border border-accent/30 bg-accent/10 p-5">
                    <p className="text-[14px] leading-relaxed text-slate-700 [&_strong]:font-semibold [&_strong]:text-slate-900" dangerouslySetInnerHTML={{ __html: selectedService.highlight }} />
                  </div>
                )}

                {/* Deliverables */}
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
