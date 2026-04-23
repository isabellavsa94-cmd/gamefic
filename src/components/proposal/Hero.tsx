import { useReveal } from "@/hooks/useReveal";
import HeroMascot from "@/components/proposal/HeroMascot";

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
      id="hero"
      ref={ref}
      className="relative overflow-hidden bg-[linear-gradient(135deg,#2447ff_8%,#2f35f5_38%,#8800e3_100%)] pt-20 text-white md:pt-24"
    >
      <div className="absolute inset-0 opacity-20 gamefic-pattern" />
      <div className="absolute left-[-10%] top-[10%] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(0,255,141,0.22)_0%,transparent_72%)]" />
      <div className="absolute bottom-[-80px] right-[-60px] h-[340px] w-[340px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.18)_0%,transparent_72%)]" />

      <div className="container relative z-10 pb-0">
        <div className="grid items-start gap-5 pt-8 md:gap-8 md:pt-10 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:items-start xl:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]">
          <div className="reveal relative z-10 mr-[-6.75rem] w-[calc(100%+6.75rem)] pb-4 pr-20 md:mr-0 md:w-auto md:pb-12 md:pr-0">
            <div className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent md:mb-5 md:px-4 md:text-[12px] md:tracking-[0.18em]">
              Proposta Comercial · Gamefic
            </div>
            <h1 className="max-w-none font-display text-[clamp(26px,5.9vw,64px)] font-extrabold leading-[0.98] tracking-[-0.045em] md:text-[clamp(31px,6.8vw,64px)]">
              <span className="block whitespace-nowrap">Vamos levar a</span>
              <span className="block whitespace-nowrap">Gamefic ao</span>
              <span className="block whitespace-nowrap">próximo level?</span>
            </h1>
            <p className="mt-4 max-w-[620px] text-[15px] leading-[1.54] text-white/80 md:mt-6 md:text-[19px] md:leading-[1.62]">
              <strong className="font-semibold text-white">Social Media</strong>,
              <strong className="font-semibold text-white"> Tráfego Pago</strong>,
              <strong className="font-semibold text-white"> Inbound</strong> e
              <strong className="font-semibold text-white"> conversão</strong> em uma operação
              para atrair demanda e apoiar o comercial com mais previsibilidade.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row md:mt-8">
              <button
                type="button"
                onClick={() => scrollTo("#servicos")}
                className="w-full rounded-full bg-accent px-6 py-3 font-display text-[16px] font-extrabold text-primary transition-transform hover:-translate-y-0.5 sm:w-auto"
              >
                Ver proposta
              </button>
              <button
                type="button"
                onClick={() => scrollTo("#investimento")}
                className="hero-slide-button w-full sm:w-auto"
              >
                <span className="hero-slide-button__track" />
                <span className="hero-slide-button__label-wrap">
                  <span className="hero-slide-button__label hero-slide-button__label--base">
                    Analisar investimento
                  </span>
                  <span className="hero-slide-button__label hero-slide-button__label--hover">
                    Analisar investimento
                  </span>
                </span>
              </button>
            </div>
          </div>

          <div className="reveal relative z-0 flex min-h-[220px] items-start justify-center overflow-visible sm:min-h-[320px] lg:min-h-[620px] lg:justify-end lg:self-start lg:pt-4">
            <HeroMascot />
          </div>
        </div>
      </div>

      <div className="relative z-20 -mt-3 h-12 overflow-hidden leading-none text-background md:-mt-3 md:h-16">
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
