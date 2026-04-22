import { useReveal } from "@/hooks/useReveal";

const modules = [
  {
    title: "Social Media (Instagram + LinkedIn)",
    type: "recorrente",
    value: "R$ 3.000 / mes",
    note: "Valor extraido do PDF. Projeto minimo de 6 meses.",
    status: "definido",
  },
  {
    title: "Trafego Pago",
    type: "complementar",
    value: "A definir",
    note: "Escopo ainda sera consolidado em documento complementar.",
    status: "pendente",
  },
  {
    title: "Inbound (RD Station)",
    type: "complementar",
    value: "A definir",
    note: "Escopo ainda sera consolidado em documento complementar.",
    status: "pendente",
  },
  {
    title: "Criacao de Site",
    type: "complementar",
    value: "A definir",
    note: "Escopo ainda sera consolidado em documento complementar.",
    status: "pendente",
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
            Status financeiro do escopo atual.
          </h2>
          <p className="mt-3 max-w-[700px] text-[16px] leading-[1.8] text-slate-600">
            Neste momento, apenas o modulo de Social Media ja possui investimento definido no
            material base. Os demais entram no site como frentes previstas, aguardando escopo
            final e precificacao.
          </p>
        </div>

        <div className="reveal mt-12 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-4">
            {modules.map((module) => (
              <article
                key={module.title}
                className="gamefic-surface rounded-[30px] border border-white/80 p-6"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                      {module.type}
                    </div>
                    <h3 className="mt-2 font-display text-[26px] font-extrabold leading-[1.05] tracking-[-0.04em] text-primary">
                      {module.title}
                    </h3>
                    <p className="mt-2 text-[14px] leading-[1.7] text-slate-600">{module.note}</p>
                  </div>

                  <div className="md:text-right">
                    <div
                      className={`inline-flex rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] ${
                        module.status === "definido"
                          ? "bg-accent text-primary"
                          : "bg-secondary text-primary"
                      }`}
                    >
                      {module.status === "definido" ? "valor definido" : "em definicao"}
                    </div>
                    <div className="mt-3 font-display text-[32px] font-extrabold tracking-[-0.04em] text-primary">
                      {module.value}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="reveal rounded-[34px] border border-white/16 bg-[linear-gradient(135deg,#2447ff_8%,#2f35f5_38%,#8800e3_100%)] p-7 text-white shadow-[0_24px_60px_rgba(25,48,130,0.16)]">
            <div className="text-[12px] font-semibold uppercase tracking-[0.16em] text-accent">
              Recorte atual
            </div>
            <h3 className="mt-4 font-display text-[34px] font-extrabold leading-[1.02] tracking-[-0.04em]">
              O modulo de Social Media ja pode ser aprovado isoladamente.
            </h3>
            <p className="mt-4 text-[15px] leading-[1.8] text-white/80">
              Isso permite iniciar a operacao de conteudo enquanto os demais modulos sao refinados
              comercialmente sem travar a proposta.
            </p>

            <div className="mt-7 rounded-[28px] bg-white/12 p-5">
              <div className="text-[11px] uppercase tracking-[0.18em] text-white/60">
                Base do valor atual
              </div>
              <div className="mt-2 font-display text-[22px] font-extrabold tracking-[-0.03em] text-white">
                Gestao de Redes Sociais (2 redes)
              </div>
              <div className="mt-4 font-display text-[42px] font-extrabold tracking-[-0.05em] text-accent">
                R$ 3.000
              </div>
              <div className="text-[14px] text-white/72">por mes · minimo de 6 meses</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
