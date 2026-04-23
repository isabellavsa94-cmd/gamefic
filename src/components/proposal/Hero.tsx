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
      ref={ref}
      className="relative overflow-hidden bg-[linear-gradient(135deg,#2447ff_8%,#2f35f5_38%,#8800e3_100%)] pt-28 text-white"
    >
      <div className="absolute inset-0 opacity-20 gamefic-pattern" />
      <div className="absolute left-[-10%] top-[10%] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(0,255,141,0.22)_0%,transparent_72%)]" />
      <div className="absolute bottom-[-80px] right-[-60px] h-[340px] w-[340px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.18)_0%,transparent_72%)]" />

      <div className="container relative z-10 pb-14 md:pb-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.95fr]">
          <div className="reveal">
            <div className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-accent">
              Proposta Comercial · Gamefic
            </div>
            <h1 className="max-w-[12ch] font-display text-[clamp(38px,5.8vw,68px)] font-extrabold leading-[0.98] tracking-[-0.05em] text-balance">
              A estratégia para colocar a Gamefic no próximo level.
            </h1>
            <p className="mt-6 max-w-[620px] text-[17px] leading-[1.62] text-white/80 md:text-[19px]">
              <strong className="font-semibold text-white">Social Media</strong>,
              <strong className="font-semibold text-white"> Tráfego Pago</strong>,
              <strong className="font-semibold text-white"> Inbound</strong> e
              <strong className="font-semibold text-white"> conversão</strong> em uma operação
              para atrair demanda e apoiar o comercial com mais previsibilidade.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => scrollTo("#servicos")}
                className="rounded-full bg-accent px-6 py-3 font-display text-[16px] font-extrabold text-primary transition-transform hover:-translate-y-0.5"
              >
                Ver proposta
              </button>
              <button
                type="button"
                onClick={() => scrollTo("#investimento")}
                className="rounded-full border border-white/24 bg-white/10 px-6 py-3 font-display text-[16px] font-extrabold text-white transition-colors hover:bg-white/16"
              >
                Analisar investimento
              </button>
            </div>
          </div>

          <div className="reveal relative flex items-center justify-center overflow-visible">
            <HeroMascot />
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
