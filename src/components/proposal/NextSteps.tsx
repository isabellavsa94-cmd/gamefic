import { useReveal } from "@/hooks/useReveal";

const steps = [
  { num: "01", title: "Reunião de alinhamento", desc: "Encontro de 60 min para alinhar prioridades, ajustar escopo, definir investimento e tirar todas as dúvidas. Presencial ou remoto." },
  { num: "02", title: "Proposta financeira final", desc: "Com base no alinhamento, apresentamos os valores definitivos, possibilidades de módulos e condições de pagamento." },
  { num: "03", title: "Contrato e kickoff", desc: "Assinatura do contrato e início imediato do Kickoff — reunião interna de onboarding com plano detalhado para os primeiros 60 dias." },
];

export default function NextSteps() {
  const ref = useReveal();

  return (
    <section id="proximos-passos" ref={ref} className="py-20 bg-card">
      <div className="container">
        <div className="reveal">
          <div className="text-[11px] font-medium tracking-[0.14em] uppercase text-secondary-foreground mb-4">Próximos Passos</div>
          <h2 className="font-display text-[clamp(32px,4vw,48px)] font-light leading-[1.15] text-foreground text-balance">
            Como <em className="italic text-primary">avançamos</em>
          </h2>
          <p className="text-muted-foreground max-w-[560px] mt-2">Três passos simples para transformar essa proposta em ação.</p>
        </div>

        <div className="reveal-stagger grid md:grid-cols-3 gap-6 mt-12">
          {steps.map((s) => (
            <div key={s.num} className="reveal bg-card border border-border rounded-xl p-8 relative">
              <div className="font-display text-[52px] font-light text-purple-mid/40 leading-none mb-4">{s.num}</div>
              <div className="text-[15px] font-medium text-foreground mb-2">{s.title}</div>
              <div className="text-[13px] text-muted-foreground leading-relaxed">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
