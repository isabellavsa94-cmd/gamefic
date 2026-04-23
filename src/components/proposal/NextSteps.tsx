import { useReveal } from "@/hooks/useReveal";

const steps = [
  {
    num: "01",
    title: "Definir o pacote de entrada",
    desc: "Escolher se a prioridade inicial será Social Media, Performance e Automação ou a combinação dos dois blocos.",
  },
  {
    num: "02",
    title: "Realizar o kickoff estratégico",
    desc: "Alinhar objetivos, prioridades, mensagens, ofertas e critérios de acompanhamento para começar com direção clara.",
  },
  {
    num: "03",
    title: "Entrar em onboarding e operação",
    desc: "Começar com 1 mês de onboarding para estratégia, estruturação e alinhamentos. Depois disso, a operação segue em formato ongoing.",
  },
];

export default function NextSteps() {
  const ref = useReveal();

  return (
    <section
      id="proximos-passos"
      ref={ref}
      className="relative overflow-hidden bg-white py-16 md:py-24"
    >
      <div className="absolute inset-y-0 left-0 hidden w-[28%] gamefic-pattern opacity-55 lg:block" />
      <div className="container relative">
        <div className="reveal mx-auto max-w-[760px] text-center">
          <div className="text-[12px] font-semibold uppercase tracking-[0.18em] text-primary">
            Próximo passo
          </div>
          <h2 className="mt-4 font-display text-[clamp(34px,4vw,56px)] font-extrabold leading-[1.02] tracking-[-0.05em] text-primary">
            Se fizer sentido para a Gamefic, o próximo movimento é começar.
          </h2>
          <p className="mt-4 text-[15px] leading-[1.58] text-slate-600 md:text-[16px] md:leading-[1.64]">
            A aprovação destrava uma operação pensada para dar consistência à presença digital e
            mais estrutura para geração de oportunidades.
          </p>
        </div>

        <div className="reveal-stagger mt-10 grid gap-4 md:mt-14 md:gap-5 md:grid-cols-3">
          {steps.map((step, index) => (
            <article
              key={step.num}
              className="reveal gamefic-surface rounded-[24px] border border-white/80 p-5 md:rounded-[32px] md:p-7"
            >
              <div
                className={`inline-flex rounded-full px-4 py-2 font-display text-[13px] font-extrabold md:text-[14px] ${
                  index === 1 ? "bg-accent text-primary" : "bg-secondary text-primary"
                }`}
              >
                {step.num}
              </div>
              <h3 className="mt-4 font-display text-[24px] font-extrabold leading-[1.05] tracking-[-0.04em] text-primary md:mt-5 md:text-[28px]">
                {step.title}
              </h3>
              <p className="mt-3 text-[14px] leading-[1.56] text-slate-600 md:mt-4 md:text-[15px] md:leading-[1.62]">
                {step.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
