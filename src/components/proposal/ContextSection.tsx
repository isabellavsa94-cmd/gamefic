import { useReveal } from "@/hooks/useReveal";

const insights = [
  {
    icon: "01",
    text: "<strong>Social Media ja documentado:</strong> o PDF anterior foi incorporado como base oficial do modulo de Instagram + LinkedIn.",
  },
  {
    icon: "02",
    text: "<strong>Escopo inicial com 4 frentes:</strong> Social Media, Trafego Pago, Inbound com RD Station e Criacao de Site.",
  },
  {
    icon: "03",
    text: "<strong>Modelo modular:</strong> a proposta pode evoluir sem precisar refazer toda a apresentacao a cada novo escopo definido.",
  },
  {
    icon: "04",
    text: "<strong>Detalhamento atual mais maduro:</strong> Social Media ja contem volumetria, etapas, prazo minimo e valor mensal.",
  },
  {
    icon: "05",
    text: "<strong>Trafego, Inbound e Site:</strong> entram nesta versao como frentes previstas, com descricao orientadora e espaco para detalhamento posterior.",
  },
  {
    icon: "06",
    text: "<strong>Objetivo desta adaptacao:</strong> sair do formato antigo e deixar o site-proposta pronto para receber os proximos modulos sem perder coerencia visual.",
  },
];

export default function ContextSection() {
  const ref = useReveal();

  return (
    <section id="diagnostico" ref={ref} className="relative overflow-hidden py-24">
      <div className="absolute inset-y-0 right-0 hidden w-[28%] gamefic-pattern opacity-60 lg:block" />
      <div className="container relative">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="reveal lg:sticky lg:top-28 lg:self-start">
            <div className="text-[12px] font-semibold uppercase tracking-[0.18em] text-primary">
              Diagnostico da proposta
            </div>
            <h2 className="mt-4 font-display text-[clamp(34px,4vw,54px)] font-extrabold leading-[1.02] tracking-[-0.05em] text-balance text-primary">
              O que esta versao do site ja entrega.
            </h2>
            <p className="mt-5 text-[16px] leading-[1.85] text-slate-600">
              A proposta agora deixa de ser um layout genérico e passa a refletir o escopo real em
              construcao para a Gamefic. O ponto de partida mais concreto e o documento de Social
              Media, que agora vira a primeira frente formal da apresentacao.
            </p>
            <p className="mt-4 text-[16px] leading-[1.85] text-slate-600">
              As demais frentes entram como modulos previstos para complementar o plano comercial,
              mantendo consistencia visual e narrativa enquanto os outros escopos sao finalizados.
            </p>
          </div>

          <div className="reveal grid gap-4">
            {insights.map((item, index) => (
              <article
                key={item.icon}
                className="gamefic-surface rounded-[28px] border border-white/70 p-5 md:p-6"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl font-display text-[14px] font-extrabold ${
                      index < 3
                        ? "bg-accent text-primary"
                        : "bg-[linear-gradient(135deg,#2246ff,#8800e3)] text-white"
                    }`}
                  >
                    {item.icon}
                  </div>
                  <div
                    className="text-[15px] leading-[1.85] text-slate-600 [&_strong]:font-semibold [&_strong]:text-slate-900"
                    dangerouslySetInnerHTML={{ __html: item.text }}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
