import { useReveal } from "@/hooks/useReveal";

const phases = [
  {
    num: "1",
    phase: "Etapa 1",
    title: "Contrato",
    desc: "Formalização da parceria para dar início ao projeto e alinhar segurança, escopo e expectativas.",
    tags: ["Contrato", "Aprovação", "Início"],
  },
  {
    num: "2",
    phase: "Etapa 2",
    title: "Briefing",
    desc: "Coleta aprofundada de informações sobre objetivos, público, marca, concorrentes e expectativas.",
    tags: ["Briefing", "Imersão", "Alinhamento"],
  },
  {
    num: "3",
    phase: "Etapa 3",
    title: "Planejamento (1º mês)",
    desc: "Construção do planejamento estratégico do Social Media com pilares, diretrizes e linha editorial.",
    tags: ["Planejamento", "Personas", "Tom de voz"],
  },
  {
    num: "4",
    phase: "Etapas 4 a 6",
    title: "Cronograma, peças e agendamento",
    desc: "A partir do 2º mês, criação do cronograma, desenvolvimento das peças, edição de vídeos e agendamento das publicações.",
    tags: ["Cronograma", "Peças", "Agendamento"],
  },
  {
    num: "5",
    phase: "Etapa 7",
    title: "Relatório e otimizações",
    desc: "Leitura de resultados, relatório mensal e ajustes contínuos para evoluir a operação.",
    tags: ["Relatório", "Insights", "Otimização"],
  },
];

export default function TimelineSection() {
  const ref = useReveal();

  return (
    <section id="timeline" ref={ref} className="relative overflow-hidden bg-white py-16 md:py-24">
      <div className="container">
        <div className="reveal mx-auto max-w-[760px] text-center">
          <div className="text-[12px] font-semibold uppercase tracking-[0.18em] text-primary">
            Cronograma
          </div>
          <h2 className="mt-4 font-display text-[clamp(34px,4vw,54px)] font-extrabold leading-[1.02] tracking-[-0.05em] text-primary">
            Como colocamos a operação em prática.
          </h2>
          <p className="mt-4 text-[15px] leading-[1.58] text-slate-600 md:text-[16px] md:leading-[1.64]">
            Um fluxo claro de execução reduz ruído, acelera alinhamento e ajuda a Gamefic a ganhar
            consistência logo nos primeiros meses.
          </p>
        </div>

        <div className="relative mt-10 md:mt-14">
          <div className="absolute left-[24px] top-8 hidden h-1 w-[calc(100%-48px)] bg-[linear-gradient(90deg,#2447ff,#00ff8d,#8800e3)] md:block" />

          <div className="grid gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-5">
            {phases.map((phase) => (
              <article
                key={phase.num}
                className="reveal gamefic-surface relative rounded-[24px] border border-white/80 p-5 md:rounded-[30px] md:p-6"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-display text-[18px] font-extrabold text-white md:h-12 md:w-12 md:text-[20px]">
                    {phase.num}
                  </div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    {phase.phase}
                  </div>
                </div>

                <h3 className="mt-4 font-display text-[22px] font-extrabold leading-[1.05] tracking-[-0.04em] text-primary md:mt-5 md:text-[26px]">
                  {phase.title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.56] text-slate-600 md:mt-4 md:text-[15px] md:leading-[1.62]">
                  {phase.desc}
                </p>

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
