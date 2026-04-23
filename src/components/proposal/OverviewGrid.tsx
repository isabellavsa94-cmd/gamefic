import { useReveal } from "@/hooks/useReveal";
import { proposalGroups } from "@/components/proposal/proposalData";
import ServicesDetail from "@/components/proposal/ServicesDetail";

interface OverviewGridProps {
  activeId: string | null;
  onSelect: (id: string) => void;
}

export default function OverviewGrid({ activeId, onSelect }: OverviewGridProps) {
  const ref = useReveal();

  return (
    <section ref={ref} className="relative overflow-hidden bg-white py-16 md:py-24" id="servicos">
      <div className="absolute inset-x-0 top-0 h-32 bg-[linear-gradient(180deg,rgba(4,64,248,0.03),transparent)]" />
      <div className="container relative">
        <div className="reveal mx-auto max-w-[720px] text-center">
          <div className="text-[12px] font-semibold uppercase tracking-[0.18em] text-primary">
            Frentes da proposta
          </div>
          <h2 className="mt-4 font-display text-[clamp(34px,4vw,56px)] font-extrabold leading-[1.02] tracking-[-0.05em] text-primary">
            Uma estrutura pensada para fortalecer marca, gerar leads e converter melhor.
          </h2>
          <p className="mt-4 text-[15px] leading-[1.58] text-slate-600 md:text-[16px] md:leading-[1.64]">
            Cada frente cumpre um papel claro no crescimento: atrair atenção, capturar demanda,
            nutrir oportunidades e transformar interesse em ação comercial.
          </p>
        </div>

        <div className="reveal mt-10 grid gap-4 md:mt-14 md:gap-6 md:grid-cols-2 xl:grid-cols-4">
          {proposalGroups.map((g) => {
            const isActive = activeId === g.id;

            return (
              <button
                key={g.num}
                type="button"
                onClick={() => onSelect(g.id)}
                className={`group flex h-full flex-col overflow-hidden rounded-[26px] text-left transition-all duration-300 hover:-translate-y-1 md:rounded-[32px] ${
                  g.suggested
                    ? "border border-[#f6c624] bg-[linear-gradient(180deg,#fff8e6_0%,#ffedb9_100%)] shadow-[0_24px_60px_rgba(232,182,5,0.14)]"
                    : "gamefic-surface border border-white/80"
                } ${isActive ? "ring-2 ring-primary/30" : ""}`}
                aria-expanded={isActive}
                aria-controls="services-detail"
              >
                <div className="relative h-[220px] overflow-hidden md:h-[260px]">
                  <img
                    src={g.image}
                    alt={g.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,64,248,0.08),rgba(0,0,0,0.35))]" />
                  <div className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-[11px] font-display font-extrabold text-primary md:left-5 md:top-5 md:text-[12px]">
                    Frente {g.num}
                  </div>
                  {g.disclaimer && (
                    <div className="absolute bottom-4 right-4 z-10 rounded-full border border-[#edbe19] bg-[rgba(255,212,57,0.94)] px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#7a5a00] shadow-[0_10px_24px_rgba(232,182,5,0.2)] md:bottom-5 md:right-5 md:text-[10px]">
                      {g.disclaimer}
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-5 md:p-6">
                  <h3
                    className={`min-h-0 font-display text-[24px] font-extrabold leading-[1.05] tracking-[-0.04em] md:min-h-[2.2em] md:text-[26px] ${
                      g.suggested ? "text-[#8e6505]" : "text-primary"
                    }`}
                  >
                    {g.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-[1.56] text-slate-600 md:text-[15px] md:leading-[1.62]">
                    {g.subtitle}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {g.items.map((item) => (
                      <span
                        key={item}
                        className={`rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] ${
                          g.suggested
                            ? "bg-[#ffe8a0] text-[#8e6505]"
                            : "bg-secondary text-primary"
                        }`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div
                    className={`mt-5 inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 font-display text-[14px] font-extrabold md:mt-6 ${
                      isActive
                        ? "bg-primary text-white"
                        : g.suggested
                          ? "bg-[#edbe19] text-[#6e5200]"
                          : "bg-primary text-white"
                    }`}
                  >
                    {isActive ? "Recolher escopo" : "Abrir escopo"}
                    <span>{isActive ? "−" : ">"}</span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <ServicesDetail activeId={activeId} />
      </div>
    </section>
  );
}
