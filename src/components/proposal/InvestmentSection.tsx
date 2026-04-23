import { useReveal } from "@/hooks/useReveal";

const coinIcon = `${import.meta.env.BASE_URL}coin-icon.svg`;

const modules = [
  {
    eyebrow: "Pacote 1",
    title: "Social Media (Instagram + LinkedIn)",
    value: "R$ 3.000",
    cadence: "/ mês",
    note: "Operação recorrente para fortalecer presença, constância e autoridade em dois canais. Prazo mínimo de 6 meses.",
    status: "definido",
    highlights: ["Instagram + LinkedIn", "Conteúdo recorrente", "Prazo mínimo de 6 meses"],
  },
  {
    eyebrow: "Pacote 2",
    title: "Pacote de performance e automação comercial",
    value: "R$ 5.900",
    cadence: "/ mês",
    note: "Inclui tráfego pago, e-mail marketing, landing page, tracking avançado server side e integração com RD Station.",
    status: "sugerido",
    highlights: ["Google + Meta Ads", "Landing page", "RD Station + tracking"],
  },
];

export default function InvestmentSection() {
  const ref = useReveal();

  return (
    <section id="investimento" ref={ref} className="bg-[#eff2f8] py-24">
      <div className="container">
        <div className="reveal">
          <div className="mb-4 text-[12px] font-semibold uppercase tracking-[0.18em] text-primary">
            Investimento
          </div>
          <h2 className="font-display text-[clamp(34px,4vw,54px)] font-extrabold leading-[1.02] tracking-[-0.05em] text-primary text-balance">
            Investimento para colocar a operação em movimento.
          </h2>
          <p className="mt-3 max-w-[700px] text-[16px] leading-[1.8] text-slate-600">
            A proposta foi organizada em dois blocos comerciais que podem ser contratados de forma
            independente ou combinada, conforme a prioridade da Gamefic.
          </p>
        </div>

        <div className="reveal mt-12 grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
          <div className="grid gap-5">
            {modules.map((module) => (
              <article
                key={module.title}
                className="gamefic-surface rounded-[32px] border border-white/80 p-6 md:p-7"
              >
                <div className="grid gap-6">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-secondary px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-primary">
                        {module.eyebrow}
                      </span>
                      <span
                        className={`rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] ${
                          module.status === "definido"
                            ? "bg-accent text-primary"
                            : "bg-secondary text-primary"
                        }`}
                      >
                        {module.status === "definido" ? "valor definido" : "pacote sugerido"}
                      </span>
                    </div>

                    <h3 className="mt-4 max-w-[20ch] font-display text-[clamp(28px,4vw,34px)] font-extrabold leading-[1.04] tracking-[-0.04em] text-primary">
                      {module.title}
                    </h3>

                    <div className="mt-5 flex items-end gap-3">
                      <img
                        src={coinIcon}
                        alt=""
                        aria-hidden="true"
                        className="mb-1 h-10 w-10 flex-shrink-0"
                      />
                      <div className="min-w-0">
                        <div className="font-display text-[clamp(36px,6vw,48px)] font-extrabold leading-none tracking-[-0.05em] text-primary">
                          {module.value}
                        </div>
                        <div className="mt-1 text-[14px] font-medium text-slate-500">
                          {module.cadence}
                        </div>
                      </div>
                    </div>

                    <p className="mt-4 max-w-[58ch] text-[15px] leading-[1.8] text-slate-600">
                      {module.note}
                    </p>

                    <div className="mt-6 grid gap-2 sm:grid-cols-3">
                      {module.highlights.map((highlight) => (
                        <div
                          key={highlight}
                          className="rounded-[18px] bg-secondary px-4 py-3 text-[13px] font-semibold text-primary"
                        >
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="reveal rounded-[36px] border border-white/16 bg-[linear-gradient(135deg,#2447ff_8%,#2f35f5_38%,#8800e3_100%)] p-7 text-white shadow-[0_24px_60px_rgba(25,48,130,0.16)] md:p-8">
            <div className="text-[12px] font-semibold uppercase tracking-[0.16em] text-accent">
              Leitura rápida
            </div>
            <h3 className="mt-4 max-w-[12ch] font-display text-[34px] font-extrabold leading-[1.02] tracking-[-0.04em] text-balance">
              Dois caminhos claros para começar.
            </h3>
            <p className="mt-4 max-w-[48ch] text-[15px] leading-[1.85] text-white/82">
              A Gamefic pode contratar um bloco específico ou combinar os dois para ganhar presença,
              geração de demanda e estrutura comercial ao mesmo tempo.
            </p>

            <div className="mt-7 grid gap-4">
              <div className="rounded-[28px] border border-white/14 bg-white/12 p-5 backdrop-blur-sm">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.18em] text-white/60">
                      Pacote 1
                    </div>
                    <div className="mt-2 font-display text-[22px] font-extrabold tracking-[-0.03em] text-white">
                      Gestão de Redes Sociais
                    </div>
                  </div>
                  <div className="rounded-full bg-white/14 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white">
                    2 redes
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-3">
                  <img src={coinIcon} alt="" aria-hidden="true" className="h-11 w-11 flex-shrink-0" />
                  <div className="font-display text-[40px] font-extrabold tracking-[-0.05em] text-accent">
                    R$ 3.000
                  </div>
                </div>
                <div className="mt-2 text-[14px] text-white/72">por mês · mínimo de 6 meses</div>
              </div>

              <div className="rounded-[28px] border border-white/14 bg-white/12 p-5 backdrop-blur-sm">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.18em] text-white/60">
                      Pacote 2
                    </div>
                    <div className="mt-2 max-w-[18ch] font-display text-[22px] font-extrabold tracking-[-0.03em] text-white">
                      Performance e automação comercial
                    </div>
                  </div>
                  <div className="rounded-full bg-white/14 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white">
                    tráfego + inbound
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-3">
                  <img src={coinIcon} alt="" aria-hidden="true" className="h-11 w-11 flex-shrink-0" />
                  <div className="font-display text-[40px] font-extrabold tracking-[-0.05em] text-accent">
                    R$ 5.900
                  </div>
                </div>
                <div className="mt-2 text-[14px] text-white/72">
                  por mês · mínimo recomendado de 6 meses
                </div>
              </div>

              <div className="rounded-[26px] bg-[rgba(3,10,60,0.24)] p-5">
                <div className="text-[11px] uppercase tracking-[0.18em] text-accent">
                  Verba de mídia
                </div>
                <div className="mt-2 font-display text-[28px] font-extrabold tracking-[-0.04em] text-white">
                  Até R$ 10.000/mês
                </div>
                <div className="mt-2 text-[14px] leading-[1.8] text-white/72">
                  Valor pago diretamente pelo cliente às plataformas, separado da operação.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
