import { useReveal } from "@/hooks/useReveal";

const insights = [
  {
    icon: "01",
    text: "<strong>Fábrica própria e formulações exclusivas:</strong> diferencial competitivo real frente a marcas que terceirizam tudo.",
  },
  {
    icon: "02",
    text: "<strong>Base de clientes fiel no Pará:</strong> pode se tornar um motor de prova social e expansão nacional.",
  },
  {
    icon: "03",
    text: "<strong>Portfólio de 60 produtos prontos para escalar:</strong> amplitude de catálogo que acelera o go-to-market digital sem depender de novos desenvolvimentos.",
  },
  {
    icon: "04",
    text: "<strong>Mercado de R$ 240bi+ em crescimento:</strong> o setor de beleza e cuidados pessoais no Brasil cresce mais de 11% ao ano, e quem não se posicionar digitalmente agora vai ficar para trás.",
  },
  {
    icon: "05",
    text: "<strong>Ausência de identidade visual atualizada:</strong> os rótulos e a comunicação visual não traduzem o nível do produto.",
  },
  {
    icon: "06",
    text: "<strong>Presença digital subaproveitada:</strong> nenhuma estratégia de conteúdo, tráfego pago ou marketplace estruturado.",
  },
  {
    icon: "07",
    text: "<strong>Concorrentes nativos digitais crescendo rápido:</strong> marcas novas, sem fábrica própria, já dominam redes sociais e marketplaces com branding forte e tráfego pago agressivo.",
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
              Diagnóstico
            </div>
            <h2 className="mt-4 font-display text-[clamp(34px,4vw,54px)] font-extrabold leading-[1.02] tracking-[-0.05em] text-balance text-primary">
              O que encontramos e o que muda agora.
            </h2>
            <p className="mt-5 text-[16px] leading-[1.85] text-slate-600">
              A Derm'Attive já tem produto, histórico e operação. O que falta é um sistema de marca
              e crescimento digital que traduza essa força em percepção, alcance e vendas.
            </p>
            <p className="mt-4 text-[16px] leading-[1.85] text-slate-600">
              A estética abaixo usa a lógica visual da Gamefic: comunicação clara, hierarquia forte,
              contraste alto e blocos que organizam decisão.
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
