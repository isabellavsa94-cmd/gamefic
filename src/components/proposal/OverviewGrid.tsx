import { useReveal } from "@/hooks/useReveal";

const groups = [
  {
    num: "01",
    title: "Social Media",
    subtitle: "Instagram e LinkedIn para fortalecer marca, autoridade e relacionamento.",
    href: "#g1",
    image:
      "https://images.pexels.com/photos/6954174/pexels-photo-6954174.jpeg?auto=compress&cs=tinysrgb&w=900&h=700&fit=crop",
    items: ["Instagram", "LinkedIn", "16 + 12/8 conteúdos"],
  },
  {
    num: "02",
    title: "Tráfego Pago",
    subtitle: "Google Ads e Meta Ads para acelerar geração de leads com foco em performance.",
    href: "#g2",
    image:
      "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=900&h=700&fit=crop",
    items: ["Google Ads", "Meta Ads", "Leads"],
  },
  {
    num: "03",
    title: "Inbound (RD Station)",
    subtitle: "Captação, CRM e e-mail marketing para nutrir oportunidades e apoiar o comercial.",
    href: "#g3",
    image:
      "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=900&h=700&fit=crop",
    items: ["RD Station", "Integração", "4 e-mails/mês"],
  },
  {
    num: "04",
    title: "Criação de Site",
    subtitle: "Landing page e tracking para converter melhor e mensurar com mais precisão.",
    href: "#g4",
    disclaimer: "Sugestão da especialista",
    image:
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=900&h=700&fit=crop",
    items: ["Landing page", "Conversão", "Tracking"],
  },
];

const scrollTo = (href: string) => {
  const el = document.querySelector(href);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 88;
    window.scrollTo({ top, behavior: "smooth" });
  }
};

export default function OverviewGrid() {
  const ref = useReveal();

  return (
    <section ref={ref} className="relative overflow-hidden bg-white py-24" id="servicos">
      <div className="absolute inset-x-0 top-0 h-32 bg-[linear-gradient(180deg,rgba(4,64,248,0.03),transparent)]" />
      <div className="container relative">
        <div className="reveal mx-auto max-w-[720px] text-center">
          <div className="text-[12px] font-semibold uppercase tracking-[0.18em] text-primary">
            Frentes da proposta
          </div>
          <h2 className="mt-4 font-display text-[clamp(34px,4vw,56px)] font-extrabold leading-[1.02] tracking-[-0.05em] text-primary">
            Uma estrutura pensada para fortalecer marca, gerar leads e converter melhor.
          </h2>
          <p className="mt-4 text-[16px] leading-[1.64] text-slate-600">
            Cada frente cumpre um papel claro no crescimento: atrair atenção, capturar demanda,
            nutrir oportunidades e transformar interesse em ação comercial.
          </p>
        </div>

        <div className="reveal-stagger mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {groups.map((g) => (
            <button
              key={g.num}
              type="button"
              onClick={() => scrollTo(g.href)}
              className="reveal group gamefic-surface overflow-hidden rounded-[32px] border border-white/80 text-left transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-[220px] overflow-hidden">
                <img
                  src={g.image}
                  alt={g.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,64,248,0.08),rgba(0,0,0,0.35))]" />
                <div className="absolute left-5 top-5 rounded-full bg-accent px-3 py-1 text-[12px] font-display font-extrabold text-primary">
                  Frente {g.num}
                </div>
                {g.disclaimer && (
                  <div className="absolute bottom-5 right-5 z-10 rounded-full border border-white/16 bg-[rgba(10,16,64,0.78)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white shadow-[0_10px_24px_rgba(8,12,50,0.18)]">
                    {g.disclaimer}
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="font-display text-[26px] font-extrabold leading-[1.05] tracking-[-0.04em] text-primary">
                  {g.title}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.62] text-slate-600">{g.subtitle}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-secondary px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-primary"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 font-display text-[14px] font-extrabold text-white">
                  Explorar frente
                  <span>{">"}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
