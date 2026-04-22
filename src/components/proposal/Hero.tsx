import { useReveal } from "@/hooks/useReveal";
import heroSkinImg from "@/assets/hero-skin.png";

const stats = [
  { num: "11", label: "frentes estratégicas cobertas" },
  { num: "60", label: "produtos para posicionar no digital" },
  { num: "1", label: "marca com potencial nacional inexplorado" },
];

const summaryItems = [
  "Rebranding, conteúdo, e-commerce e tráfego em um plano integrado",
  "Estrutura pensada para escalar a marca nacionalmente",
  "Execução faseada para reduzir atrito e acelerar resultado",
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
              Proposta Derm'Attive 2026
            </div>
            <div className="mb-5 font-display text-[clamp(28px,3vw,36px)] font-semibold tracking-[-0.03em] text-white/92">
              Plataforma de crescimento da marca
            </div>
            <h1 className="max-w-[11ch] font-display text-[clamp(42px,6.4vw,76px)] font-extrabold leading-[0.98] tracking-[-0.05em] text-balance">
              Uma nova era para a Derm'Attive.
            </h1>
            <p className="mt-6 max-w-[620px] text-[17px] leading-[1.8] text-white/80 md:text-[19px]">
              Quase 30 anos de expertise em dermocosméticos, fábrica própria de 3.000m² em
              Uberlândia e um portfólio pronto para escalar. A proposta abaixo organiza branding,
              conteúdo, canais de venda e performance com a linguagem visual da Gamefic.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => scrollTo("#servicos")}
                className="rounded-full bg-accent px-6 py-3 font-display text-[16px] font-extrabold text-primary transition-transform hover:-translate-y-0.5"
              >
                Ver escopo completo
              </button>
              <button
                type="button"
                onClick={() => scrollTo("#investimento")}
                className="rounded-full border border-white/24 bg-white/10 px-6 py-3 font-display text-[16px] font-extrabold text-white transition-colors hover:bg-white/16"
              >
                Explorar investimento
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
                Resumo da proposta
              </div>
              <div className="mt-4 font-display text-[30px] font-extrabold leading-[1.05] tracking-[-0.04em] text-white">
                O que muda com esta nova fase?
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

              <div className="mt-7 rounded-[28px] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.05))] p-4">
                <div className="text-[11px] uppercase tracking-[0.18em] text-white/62">
                  Próximo passo recomendado
                </div>
                <div className="mt-2 font-display text-[21px] font-extrabold tracking-[-0.03em] text-white">
                  Validar prioridades, módulos e cronograma.
                </div>
                <div className="mt-3 flex items-center justify-between rounded-full bg-accent px-5 py-3">
                  <span className="font-display text-[15px] font-extrabold text-primary">
                    Avançar para a próxima etapa
                  </span>
                  <span className="font-display text-[22px] font-extrabold text-primary">{">"}</span>
                </div>
              </div>
            </div>

            <div className="pointer-events-none relative mx-auto mt-[-22px] max-w-[420px] lg:absolute lg:-bottom-20 lg:-left-10 lg:mt-0 lg:max-w-[360px]">
              <div className="rounded-[30px] border border-white/20 bg-[#1739e8] p-4 shadow-[0_26px_60px_rgba(0,0,0,0.2)]">
                <img
                  src={heroSkinImg}
                  alt="Produto Derm'Attive"
                  className="h-[250px] w-full rounded-[24px] object-cover object-center"
                />
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
