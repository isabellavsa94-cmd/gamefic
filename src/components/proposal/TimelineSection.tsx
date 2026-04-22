import { useReveal } from "@/hooks/useReveal";

const phases = [
  {
    num: "1", phase: "Mês 1–2 · Fundação", title: "Bases visuais e estratégicas",
    desc: "Rebranding, planejamento de conteúdo estratégico e ensaio fotográfico. Tudo que vem depois depende disso estar pronto.",
    tags: [
      { name: "Rebranding", deadline: "30 dias" },
      { name: "Planejamento de conteúdo", deadline: "20 dias" },
      { name: "Ensaio fotográfico", deadline: "15 dias" },
    ],
  },
  {
    num: "2", phase: "Mês 2–3 · Infraestrutura Digital", title: "Site, catálogo e marketplaces no ar",
    desc: "Desenvolvimento do site com e-commerce, catálogo para representantes e setup completo no Mercado Livre. Redesign dos rótulos inicia em paralelo.",
    tags: [
      { name: "Site e-commerce", deadline: "45 dias" },
      { name: "Catálogo impresso", deadline: "30 dias" },
      { name: "Mercado Livre", deadline: "15 dias" },
      { name: "Redesign de rótulos", deadline: "A definir" },
    ],
  },
  {
    num: "3", phase: "Mês 3 · Ativação", title: "Redes sociais e tráfego pago ativos",
    desc: "Início da gestão de Instagram, TikTok e canal dedicado do sabonete íntimo. Campanhas de tráfego pago no ar. Primeiros influenciadores ativados.",
    tags: [
      { name: "Social media", deadline: "Recorrente" },
      { name: "Tráfego pago", deadline: "Recorrente" },
      { name: "Influenciadores", deadline: "Recorrente" },
    ],
  },
];

export default function TimelineSection() {
  const ref = useReveal();

  return (
    <section id="timeline" ref={ref} className="py-20 bg-background">
      <div className="container">
        <div className="reveal">
          <div className="text-[11px] font-medium tracking-[0.14em] uppercase text-secondary-foreground mb-4">Cronograma</div>
          <h2 className="font-display text-[clamp(32px,4vw,48px)] font-light leading-[1.15] text-foreground text-balance">
            Como acontece <em className="italic text-primary">na prática</em>
          </h2>
          <p className="text-muted-foreground mt-2 max-w-[540px]">
            A implementação é faseada. Começamos pelo que viabiliza todo o resto — e cada fase adiciona uma camada nova ao ecossistema da marca.
          </p>
        </div>

        <div className="relative mt-12 pl-6 md:pl-0">
          {/* Vertical line */}
          <div className="absolute left-[23px] md:left-[23px] top-0 bottom-0 w-0.5 bg-border" />

          {phases.map((p, i) => (
            <div key={i} className="reveal flex gap-8 mb-10 relative">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-card border-2 border-primary flex items-center justify-center text-sm font-medium text-primary relative z-[1]">
                {p.num}
              </div>
              <div>
                <div className="text-[11px] font-medium tracking-[0.12em] uppercase text-gold-on mb-1">{p.phase}</div>
                <div className="font-display text-[22px] font-normal text-foreground mb-2">{p.title}</div>
                <div className="text-sm text-muted-foreground leading-relaxed">{p.desc}</div>
                <div className="flex flex-wrap gap-2 mt-2.5">
                  {p.tags.map((t) => (
                    <span key={t.name} className="inline-flex items-center gap-1.5 text-[11px] text-secondary-foreground bg-purple-light rounded px-2.5 py-1">
                      {t.name}
                      <span className="text-[10px] text-muted-foreground opacity-70">· {t.deadline}</span>
                    </span>
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
