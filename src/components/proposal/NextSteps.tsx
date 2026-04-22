import { useReveal } from "@/hooks/useReveal";

const steps = [
  {
    num: "01",
    title: "Aprovar o modulo de Social Media",
    desc: "Validar o escopo ja detalhado para Instagram + LinkedIn e confirmar a opcao de LinkedIn escolhida.",
  },
  {
    num: "02",
    title: "Fechar os escopos complementares",
    desc: "Definir o detalhamento comercial de Trafego Pago, Inbound com RD Station e Criacao de Site.",
  },
  {
    num: "03",
    title: "Kickoff e inicio da operacao",
    desc: "Assinatura, briefing e inicio oficial do projeto conforme a frente ou pacote aprovado.",
  },
];

export default function NextSteps() {
  const ref = useReveal();

  return (
    <section
      id="proximos-passos"
      ref={ref}
      className="relative overflow-hidden bg-[linear-gradient(135deg,#2447ff_8%,#2f35f5_38%,#8800e3_100%)] py-24 text-white"
    >
      <div className="absolute inset-0 opacity-20 gamefic-pattern" />
      <div className="container relative">
        <div className="reveal mx-auto max-w-[760px] text-center">
          <div className="text-[12px] font-semibold uppercase tracking-[0.18em] text-accent">
            Proximos passos
          </div>
          <h2 className="mt-4 font-display text-[clamp(34px,4vw,56px)] font-extrabold leading-[1.02] tracking-[-0.05em]">
            Como avancamos a partir daqui.
          </h2>
          <p className="mt-4 text-[16px] leading-[1.8] text-white/78">
            A proposta ja pode destravar o modulo de Social Media e, em paralelo, receber os
            detalhamentos dos outros tres escopos.
          </p>
        </div>

        <div className="reveal-stagger mt-14 grid gap-5 md:grid-cols-3">
          {steps.map((step, index) => (
            <article
              key={step.num}
              className="reveal rounded-[32px] border border-white/14 bg-white/10 p-7 backdrop-blur-sm"
            >
              <div
                className={`inline-flex rounded-full px-4 py-2 font-display text-[14px] font-extrabold ${
                  index === 1 ? "bg-accent text-primary" : "bg-white/16 text-white"
                }`}
              >
                {step.num}
              </div>
              <h3 className="mt-5 font-display text-[28px] font-extrabold leading-[1.05] tracking-[-0.04em]">
                {step.title}
              </h3>
              <p className="mt-4 text-[15px] leading-[1.8] text-white/78">{step.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
