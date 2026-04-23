import InvestmentBreakdown from "@/components/proposal/InvestmentBreakdown";
import ProposalValidityBadge from "@/components/proposal/ProposalValidityBadge";
import { useReveal } from "@/hooks/useReveal";

const coinIcon = `${import.meta.env.BASE_URL}coin-icon.svg`;

const modules = [
  {
    eyebrow: "Pacote 1",
    title: "Social Media",
    titleNote: "Instagram e LinkedIn",
    value: "R$ 3.000",
    cadence: "/mês",
    note: "Operação recorrente para fortalecer presença, constância e autoridade em dois canais. Tempo mínimo de projeto: 6 meses.",
    highlights: ["Instagram + LinkedIn", "Conteúdo recorrente", "Tempo mínimo de projeto: 6 meses"],
  },
  {
    eyebrow: "Pacote 2",
    title: "Performance e automação comercial",
    value: "R$ 4.300",
    cadence: "/mês",
    note: "Inclui tráfego pago, e-mail marketing e integração com RD Station para apoiar geração e aproveitamento comercial dos leads.",
    highlights: ["Google + Meta Ads", "E-mail marketing", "RD Station"],
    breakdown: [
      { label: "Tráfego pago", value: "R$ 2.500" },
      { label: "E-mail marketing", value: "R$ 1.800" },
    ],
    breakdownNote:
      "Landing page, tracking avançado e integração com RD Station seguem incluídos na composição do pacote.",
  },
  {
    eyebrow: "Pacote 3",
    title: "Criação de Site",
    titleNote: "Site completo com blog",
    value: "R$ 6.000",
    cadence: "(pontual)",
    note: "Projeto pontual para estruturar um site completo com blog, base de SEO, GEO, AEO e LLMO, com prazo estimado de 3 semanas.",
    highlights: ["Site completo + blog", "SEO / GEO / AEO / LLMO", "Prazo estimado: 3 semanas"],
  },
];

export default function InvestmentSection() {
  const ref = useReveal();

  return (
    <section
      id="investimento"
      ref={ref}
      className="bg-[linear-gradient(135deg,#2447ff_8%,#2f35f5_38%,#8800e3_100%)] py-16 text-white md:py-24"
    >
      <div className="container">
        <div className="reveal">
          <div className="mb-4 text-[12px] font-semibold uppercase tracking-[0.18em] text-accent">
            Investimento
          </div>
          <h2 className="font-display text-[clamp(34px,4vw,54px)] font-extrabold leading-[1.02] tracking-[-0.05em] text-balance">
            Investimento para colocar a operação em movimento.
          </h2>
          <p className="mt-3 max-w-[700px] text-[15px] leading-[1.56] text-white/80 md:text-[16px] md:leading-[1.64]">
            A proposta foi organizada em três blocos comerciais que podem ser contratados de forma
            independente ou combinada, conforme a prioridade da Gamefic.
          </p>
        </div>

        <div className="reveal mt-10 grid gap-3 md:mt-12 md:gap-4 lg:grid-cols-3">
          {modules.map((module) => {
            const isSiteModule = module.eyebrow === "Pacote 3";
            const [currency, amount] = module.value.split(" ");

            return (
              <article
                key={module.title}
                className="rounded-[24px] border border-white/16 bg-white/10 p-4 text-white shadow-[0_24px_60px_rgba(10,18,90,0.16)] backdrop-blur-sm md:rounded-[30px] md:p-6"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-accent px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-primary">
                    {module.eyebrow}
                  </span>
                </div>

                <h3 className="mt-4 max-w-[16ch] font-display text-[24px] font-extrabold leading-[1.04] tracking-[-0.04em] md:text-[clamp(24px,3.2vw,31px)]">
                  {module.title}
                </h3>
                {"titleNote" in module && module.titleNote && (
                  <div className="mt-2 text-[13px] font-medium leading-[1.28] text-white/68 md:text-[14px]">
                    {module.titleNote}
                  </div>
                )}

                <div className="mt-5 flex items-center gap-3">
                  <img
                    src={coinIcon}
                    alt=""
                    aria-hidden="true"
                    className="h-8 w-8 flex-shrink-0 md:h-9 md:w-9"
                  />
                  <div className="flex items-baseline gap-2 whitespace-nowrap">
                    <div className="font-display font-extrabold leading-none tracking-[-0.05em] text-accent">
                      <span className="inline-flex items-baseline gap-1.5">
                        <span className="text-[22px] md:text-[24px]">{currency}</span>
                        <span className="text-[30px] md:text-[clamp(28px,4.2vw,42px)]">{amount}</span>
                      </span>
                    </div>
                    <div
                      className={`whitespace-nowrap text-[13px] font-medium tracking-[0.04em] text-white/76 md:text-[14px] ${
                        isSiteModule ? "" : "pb-1 uppercase"
                      }`}
                    >
                      {module.cadence}
                    </div>
                  </div>
                </div>

                <p className="mt-4 max-w-[42ch] text-[13px] leading-[1.5] text-white/80 md:text-[14px] md:leading-[1.58]">
                  {module.note}
                </p>

                <div className="mt-5 grid gap-2 sm:grid-cols-3 md:mt-6">
                  {module.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="rounded-[14px] border border-white/10 bg-[rgba(3,10,60,0.18)] px-3 py-2.5 text-center text-[11px] font-medium leading-[1.4] text-white/82 md:rounded-[16px]"
                    >
                      {highlight}
                    </div>
                  ))}
                </div>

                {"breakdown" in module && module.breakdown && (
                  <InvestmentBreakdown items={module.breakdown} />
                )}
              </article>
            );
          })}
        </div>

        <div className="reveal flex w-full justify-center">
          <ProposalValidityBadge />
        </div>

      </div>
    </section>
  );
}
