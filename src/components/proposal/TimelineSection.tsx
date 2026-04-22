import { useReveal } from "@/hooks/useReveal";

const phases = [
  {
    num: "1",
    phase: "Mês 1–2 · Fundação",
    title: "Bases visuais e estratégicas",
    desc: "Rebranding, planejamento de conteúdo estratégico e ensaio fotográfico. Tudo que vem depois depende disso estar pronto.",
    tags: ["Rebranding", "Planejamento", "Ensaio"],
  },
  {
    num: "2",
    phase: "Mês 2–3 · Infraestrutura Digital",
    title: "Site, catálogo e marketplaces no ar",
    desc: "Desenvolvimento do site com e-commerce, catálogo para representantes e setup completo no Mercado Livre.",
    tags: ["E-commerce", "Catálogo", "Marketplace"],
  },
  {
    num: "3",
    phase: "Mês 3 · Ativação",
    title: "Social media e tráfego ativos",
    desc: "Início da gestão de Instagram, TikTok, canal dedicado e campanhas de mídia com os primeiros influenciadores ativados.",
    tags: ["Social", "Tráfego", "Influência"],
  },
];

export default function TimelineSection() {
  const ref = useReveal();

  return (
    <section id="timeline" ref={ref} className="relative overflow-hidden bg-white py-24">
      <div className="container">
        <div className="reveal mx-auto max-w-[760px] text-center">
          <div className="text-[12px] font-semibold uppercase tracking-[0.18em] text-primary">
            Cronograma
          </div>
          <h2 className="mt-4 font-display text-[clamp(34px,4vw,54px)] font-extrabold leading-[1.02] tracking-[-0.05em] text-primary">
            Como a implementação acontece na prática.
          </h2>
          <p className="mt-4 text-[16px] leading-[1.8] text-slate-600">
            Assim como no site da Gamefic, a leitura foi organizada em blocos muito claros para
            facilitar decisão e priorização.
          </p>
        </div>

        <div className="relative mt-14">
          <div className="absolute left-[24px] top-8 hidden h-1 w-[calc(100%-48px)] bg-[linear-gradient(90deg,#2447ff,#00ff8d,#8800e3)] md:block" />

          <div className="grid gap-6 md:grid-cols-3">
            {phases.map((phase) => (
              <article
                key={phase.num}
                className="reveal gamefic-surface relative rounded-[30px] border border-white/80 p-6"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary font-display text-[20px] font-extrabold text-white">
                    {phase.num}
                  </div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    {phase.phase}
                  </div>
                </div>

                <h3 className="mt-5 font-display text-[28px] font-extrabold leading-[1.05] tracking-[-0.04em] text-primary">
                  {phase.title}
                </h3>
                <p className="mt-4 text-[15px] leading-[1.8] text-slate-600">{phase.desc}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {phase.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-secondary px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
