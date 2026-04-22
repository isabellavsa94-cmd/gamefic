import { useReveal } from "@/hooks/useReveal";

const insights = [
  {
    icon: "01",
    text: "<strong>Presença mais forte:</strong> Instagram e LinkedIn passam a trabalhar posicionamento, autoridade e relacionamento com consistência.",
  },
  {
    icon: "02",
    text: "<strong>Mídia com foco em resultado:</strong> Google Ads e Meta Ads entram para acelerar geração de leads e reduzir a dependência de crescimento orgânico.",
  },
  {
    icon: "03",
    text: "<strong>Captação estruturada:</strong> landing page, formulários e CRM criam um fluxo mais organizado entre marketing e comercial.",
  },
  {
    icon: "04",
    text: "<strong>Inbound em operação:</strong> RD Station e e-mail marketing ajudam a manter relacionamento e aproveitar melhor cada lead captado.",
  },
  {
    icon: "05",
    text: "<strong>Mensuração mais confiável:</strong> tracking avançado melhora a leitura da origem das conversões e apoia otimizações com mais segurança.",
  },
  {
    icon: "06",
    text: "<strong>Modelo escalável:</strong> a proposta permite começar com prioridade clara e ampliar a operação sem perder coerência estratégica.",
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
              Oportunidade
            </div>
            <h2 className="mt-4 font-display text-[clamp(34px,4vw,54px)] font-extrabold leading-[1.02] tracking-[-0.05em] text-balance text-primary">
              Por que este escopo faz sentido agora.
            </h2>
            <p className="mt-5 text-[16px] leading-[1.85] text-slate-600">
              A Gamefic já tem espaço para crescer com mais força no digital. O ponto aqui não é
              apenas publicar ou anunciar, mas criar uma operação que conecte presença, geração de
              demanda, captação e relacionamento em uma lógica comercial mais madura.
            </p>
            <p className="mt-4 text-[16px] leading-[1.85] text-slate-600">
              Este escopo foi desenhado para atacar os pontos que mais impactam resultado:
              posicionamento, tráfego qualificado, conversão e organização do funil.
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
