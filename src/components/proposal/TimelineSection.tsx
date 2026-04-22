import { useReveal } from "@/hooks/useReveal";

const phases = [
  {
    num: "1",
    phase: "Etapa 1",
    title: "Contrato",
    desc: "Formalizacao da parceria para dar inicio ao projeto e alinhar seguranca, escopo e expectativas.",
    tags: ["Contrato", "Aprovacao", "Inicio"],
  },
  {
    num: "2",
    phase: "Etapa 2",
    title: "Briefing",
    desc: "Coleta aprofundada de informacoes sobre objetivos, publico, marca, concorrentes e expectativas.",
    tags: ["Briefing", "Imersao", "Alinhamento"],
  },
  {
    num: "3",
    phase: "Etapa 3",
    title: "Planejamento (1o mes)",
    desc: "Construcao do planejamento estrategico do Social Media com pilares, diretrizes e linha editorial.",
    tags: ["Planejamento", "Personas", "Tom de voz"],
  },
  {
    num: "4",
    phase: "Etapas 4 a 6",
    title: "Cronograma, pecas e agendamento",
    desc: "A partir do 2o mes, criacao do cronograma, desenvolvimento das pecas, edicao de videos e agendamento das publicacoes.",
    tags: ["Cronograma", "Pecas", "Agendamento"],
  },
  {
    num: "5",
    phase: "Etapa 7",
    title: "Relatorio e otimizacoes",
    desc: "Leitura de resultados, relatorio mensal e ajustes continuos para evoluir a operacao.",
    tags: ["Relatorio", "Insights", "Otimizacao"],
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
            Como o projeto de Social Media acontece.
          </h2>
          <p className="mt-4 text-[16px] leading-[1.8] text-slate-600">
            Este fluxo foi trazido diretamente da proposta anterior e agora organiza a leitura da
            frente de Social Media dentro do site.
          </p>
        </div>

        <div className="relative mt-14">
          <div className="absolute left-[24px] top-8 hidden h-1 w-[calc(100%-48px)] bg-[linear-gradient(90deg,#2447ff,#00ff8d,#8800e3)] md:block" />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
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

                <h3 className="mt-5 font-display text-[26px] font-extrabold leading-[1.05] tracking-[-0.04em] text-primary">
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
