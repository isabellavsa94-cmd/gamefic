import { useReveal } from "@/hooks/useReveal";

const coinIcon = `${import.meta.env.BASE_URL}coin-icon.svg`;

const modules = [
  {
    eyebrow: "Pacote 1",
    title: "Social Media (Instagram + LinkedIn)",
    value: "R$ 3.000",
    cadence: "/mês",
    note: "Operação recorrente para fortalecer presença, constância e autoridade em dois canais. Prazo mínimo de 6 meses.",
    status: "definido",
    highlights: ["Instagram + LinkedIn", "Conteúdo recorrente", "Prazo mínimo de 6 meses"],
  },
  {
    eyebrow: "Pacote 2",
    title: "Pacote de performance e automação comercial",
    value: "R$ 5.900",
    cadence: "/mês",
    note: "Inclui tráfego pago, e-mail marketing, landing page, tracking avançado server side e integração com RD Station.",
    status: "sugerido",
    highlights: ["Google + Meta Ads", "Landing page", "RD Station + tracking"],
    breakdown: [
      { label: "Tráfego pago", value: "R$ 2.500" },
      { label: "E-mail marketing", value: "R$ 1.800" },
    ],
    breakdownNote:
      "Landing page, tracking avançado e integração com RD Station seguem incluídos na composição do pacote.",
  },
];

export default function InvestmentSection() {
  const ref = useReveal();

  return (
    <section
      id="investimento"
      ref={ref}
      className="bg-[linear-gradient(135deg,#2447ff_8%,#2f35f5_38%,#8800e3_100%)] py-24 text-white"
    >
      <div className="container">
        <div className="reveal">
          <div className="mb-4 text-[12px] font-semibold uppercase tracking-[0.18em] text-accent">
            Investimento
          </div>
          <h2 className="font-display text-[clamp(34px,4vw,54px)] font-extrabold leading-[1.02] tracking-[-0.05em] text-balance">
            Investimento para colocar a operação em movimento.
          </h2>
          <p className="mt-3 max-w-[700px] text-[16px] leading-[1.8] text-white/80">
            A proposta foi organizada em dois blocos comerciais que podem ser contratados de forma
            independente ou combinada, conforme a prioridade da Gamefic.
          </p>
        </div>

        <div className="reveal mt-12 grid gap-5 lg:grid-cols-2">
          {modules.map((module) => (
            <article
              key={module.title}
              className="rounded-[32px] border border-white/16 bg-white/10 p-6 text-white shadow-[0_24px_60px_rgba(10,18,90,0.16)] backdrop-blur-sm md:p-7"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-white/14 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white">
                  {module.eyebrow}
                </span>
                <span
                  className={`rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] ${
                    module.status === "definido"
                      ? "bg-accent text-primary"
                      : "bg-white/14 text-white"
                  }`}
                >
                  {module.status === "definido" ? "valor definido" : "pacote sugerido"}
                </span>
              </div>

              <h3 className="mt-4 max-w-[18ch] font-display text-[clamp(28px,4vw,34px)] font-extrabold leading-[1.04] tracking-[-0.04em]">
                {module.title}
              </h3>

              <div className="mt-5 flex items-center gap-3">
                <img
                  src={coinIcon}
                  alt=""
                  aria-hidden="true"
                  className="h-10 w-10 flex-shrink-0"
                />
                <div className="flex items-end gap-2">
                  <div className="font-display text-[clamp(38px,6vw,50px)] font-extrabold leading-none tracking-[-0.05em] text-accent">
                    {module.value}
                  </div>
                  <div className="whitespace-nowrap pb-1 text-[15px] font-medium text-white/76">
                    {module.cadence}
                  </div>
                </div>
              </div>

              <p className="mt-4 max-w-[54ch] text-[15px] leading-[1.8] text-white/80">
                {module.note}
              </p>

              <div className="mt-6 grid gap-2 sm:grid-cols-3">
                {module.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="rounded-[18px] bg-white/12 px-4 py-3 text-[13px] font-semibold text-white"
                  >
                    {highlight}
                  </div>
                ))}
              </div>

              {"breakdown" in module && module.breakdown && (
                <div className="mt-6 rounded-[24px] border border-white/14 bg-[rgba(3,10,60,0.18)] p-4">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
                    Desdobramento do escopo proposto
                  </div>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {module.breakdown.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-[18px] border border-white/12 bg-white/8 px-4 py-4"
                      >
                        <div className="text-[12px] font-semibold uppercase tracking-[0.12em] text-white/70">
                          {item.label}
                        </div>
                        <div className="mt-2 flex items-center gap-2">
                          <img
                            src={coinIcon}
                            alt=""
                            aria-hidden="true"
                            className="h-6 w-6 flex-shrink-0"
                          />
                          <div className="font-display text-[24px] font-extrabold leading-none tracking-[-0.04em] text-white">
                            {item.value}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-[13px] leading-[1.7] text-white/72">
                    {module.breakdownNote}
                  </p>
                </div>
              )}
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
