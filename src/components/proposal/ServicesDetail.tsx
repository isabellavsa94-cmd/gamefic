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
    <section ref={ref} className="py-20 bg-card">
      <div className="container">
        <div className="flex flex-col gap-16">
          {groups.map((group) => (
            <div key={group.id} id={group.id} className="reveal">
              {/* Group header */}
              <div className="bg-dark rounded-2xl px-8 py-8 mb-6">
                <div className="flex items-center gap-5">
                  <span className="font-numbers text-[clamp(36px,4vw,48px)] font-light text-gold leading-none">{group.num}</span>
                  <div>
                    <h3 className="font-display text-[clamp(20px,2.5vw,28px)] font-light text-[#F2EDE4] leading-[1.2]">{group.title}</h3>
                    <p className="text-[13px] text-[rgba(242,237,228,0.55)] mt-0.5">{group.subtitle}</p>
                  </div>
                </div>
              </div>

              {/* Service cards grid */}
              <div className={`grid grid-cols-1 gap-3 ${group.services.length > 1 ? 'sm:grid-cols-2' : ''}`}>
                {group.services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setSelectedService(service)}
                    className="group relative bg-background border border-border rounded-xl p-5 text-left transition-all duration-300 ease-out hover:border-gold/40 hover:shadow-[0_4px_24px_rgba(184,137,42,0.08)] active:scale-[0.98]"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center font-numbers text-[13px] font-medium text-primary-foreground"
                        style={{ background: group.badgeColor }}
                      >
                        {service.num}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-[10px] font-medium tracking-[0.12em] uppercase text-muted-foreground mb-1">{service.category}</div>
                        <h4 className="font-display text-[17px] font-normal text-foreground leading-[1.3] mb-2">{service.title}</h4>
                        <p className="text-[13px] text-muted-foreground leading-[1.6] line-clamp-2">{service.descriptions[0]}</p>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center gap-1.5 text-[11px] font-medium tracking-[0.08em] uppercase text-gold/70 group-hover:text-gold transition-colors duration-300">
                      <span>{service.deliverables.length} entregas</span>
                      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
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
        <SheetContent className="w-full sm:max-w-[520px] overflow-y-auto bg-background border-l border-border">
          {selectedService && (
            <>
              <SheetHeader className="pb-6 border-b border-border">
                <div className="text-[10px] font-medium tracking-[0.14em] uppercase text-muted-foreground mb-1">{selectedService.category}</div>
                <SheetTitle className="font-display text-[clamp(22px,3vw,28px)] font-normal text-foreground leading-[1.2]">
                  {selectedService.title}
                </SheetTitle>
              </SheetHeader>

              <div className="pt-6 flex flex-col gap-6">
                {/* Descriptions */}
                <div className="text-[14px] text-muted-foreground leading-[1.8] space-y-3">
                  {selectedService.descriptions.map((d, i) => (
                    <p key={i} dangerouslySetInnerHTML={{ __html: d }} className="[&_strong]:text-foreground [&_strong]:font-medium" />
                  ))}
                </div>

                {selectedService.highlight && (
                  <div className="bg-gold-light border border-gold/20 rounded-lg p-4">
                    <p className="text-[13px] text-muted-foreground leading-relaxed [&_strong]:text-foreground" dangerouslySetInnerHTML={{ __html: selectedService.highlight }} />
                  </div>
                )}

                {/* Deliverables */}
                <div className="bg-card border border-border rounded-xl p-5">
                  <h4 className="text-[11px] font-medium tracking-[0.12em] uppercase text-secondary-foreground mb-4">
                    {selectedService.deliverablesTitle || "Entregas"}
                  </h4>
                  <ul className="flex flex-col gap-2.5">
                    {selectedService.deliverables.map((d, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-[13px] text-muted-foreground leading-snug">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gold mt-[6px]" />
                        <span dangerouslySetInnerHTML={{ __html: d }} className="[&_strong]:text-foreground" />
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
