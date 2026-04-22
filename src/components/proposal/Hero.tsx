import { useReveal } from "@/hooks/useReveal";

const stats = [
  { num: "4", label: "frentes previstas no escopo" },
  { num: "2", label: "canais de social media" },
  { num: "6", label: "meses minimos de projeto social" },
];

const summaryItems = [
  "Social Media ja detalhado com base na proposta existente",
  "Trafego Pago, Inbound e Site previstos como modulos complementares",
  "Estrutura modular para a proposta crescer sem retrabalho",
];

const scrollTo = (href: string) => {
  const el = document.querySelector(href);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 88;
    window.scrollTo({ top, behavior: "smooth" });
  }
};

export default function Hero() {
  const ref = useReveal();

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[linear-gradient(135deg,#2447ff_8%,#2f35f5_38%,#8800e3_100%)] pt-32 text-white"
    >
      <div className="absolute inset-0 opacity-20 gamefic-pattern" />
      <div className="absolute left-[-10%] top-[10%] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(0,255,141,0.22)_0%,transparent_72%)]" />
      <div className="absolute bottom-[-80px] right-[-60px] h-[340px] w-[340px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.18)_0%,transparent_72%)]" />

      <div className="container relative z-10 pb-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="reveal">
            <div className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-accent">
              Proposta Comercial · Gamefic
            </div>
            <div className="mb-5 font-display text-[clamp(28px,3vw,36px)] font-semibold tracking-[-0.03em] text-white/92">
              Escopo inicial de marketing digital
            </div>
            <h1 className="max-w-[12ch] font-display text-[clamp(42px,6.4vw,76px)] font-extrabold leading-[0.98] tracking-[-0.05em] text-balance">
              Social media, trafego, inbound e site em uma proposta modular.
            </h1>
            <p className="mt-6 max-w-[620px] text-[17px] leading-[1.8] text-white/80 md:text-[19px]">
              Este material foi reorganizado para a Gamefic com quatro frentes previstas:
              <strong className="font-semibold text-white"> Social Media (2 canais)</strong>,
              <strong className="font-semibold text-white"> Trafego Pago</strong>,
              <strong className="font-semibold text-white"> Inbound com RD Station</strong> e
              <strong className="font-semibold text-white"> Criacao de site</strong>. O modulo de
              Social Media ja esta detalhado com base no PDF da proposta anterior.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => scrollTo("#servicos")}
                className="rounded-full bg-accent px-6 py-3 font-display text-[16px] font-extrabold text-primary transition-transform hover:-translate-y-0.5"
              >
                Ver escopo
              </button>
              <button
                type="button"
                onClick={() => scrollTo("#investimento")}
                className="rounded-full border border-white/24 bg-white/10 px-6 py-3 font-display text-[16px] font-extrabold text-white transition-colors hover:bg-white/16"
              >
                Ver investimento
              </button>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-[24px] border border-white/14 bg-white/10 px-4 py-4 backdrop-blur-sm"
                >
                  <div className="font-display text-[34px] font-extrabold tracking-[-0.05em] text-accent">
                    {s.num}
                  </div>
                  <div className="text-[12px] uppercase tracking-[0.12em] text-white/72">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal relative">
            <div className="gamefic-glow relative overflow-hidden rounded-[34px] border border-white/16 bg-[rgba(255,255,255,0.09)] p-6 backdrop-blur-md">
              <div className="text-[13px] font-semibold uppercase tracking-[0.18em] text-accent">
                Resumo do escopo
              </div>
              <div className="mt-4 font-display text-[30px] font-extrabold leading-[1.05] tracking-[-0.04em] text-white">
                O que esta proposta cobre agora?
              </div>

              <div className="mt-6 space-y-3">
                {summaryItems.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-full bg-white px-4 py-3 text-[14px] text-slate-700"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary font-display text-[12px] font-extrabold text-white">
                      {index + 1}
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-7 rounded-[28px] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.05))] p-5">
                <div className="text-[11px] uppercase tracking-[0.18em] text-white/62">
                  Cliente
                </div>
                <div className="mt-2 font-display text-[24px] font-extrabold tracking-[-0.03em] text-white">
                  Gamefic
                </div>
                <div className="mt-4 text-[14px] leading-[1.7] text-white/76">
                  Responsavel mencionado no documento base: Rubens Melo. Esta versao do site
                  consolida o escopo atual e prepara os modulos ainda sem detalhamento final.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-14 overflow-hidden leading-none text-background">
        <svg
          className="absolute bottom-0 left-0 h-full w-full"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,96L80,90.7C160,85,320,75,480,80C640,85,800,107,960,106.7C1120,107,1280,85,1360,74.7L1440,64L1440,160L1360,160C1280,160,1120,160,960,160C800,160,640,160,480,160C320,160,160,160,80,160L0,160Z"
          />
        </svg>
      </div>
    </section>
  );
}
