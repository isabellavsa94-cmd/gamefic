import { useReveal } from "@/hooks/useReveal";

const steps = [
  { icon: "🛒", title: "Compra realizada", desc: "Cliente compra produto X no site" },
  { icon: "⏱", title: "Timer ativado", desc: "Contagem do tempo médio de uso do produto" },
  { icon: "💬", title: "Mensagem enviada", desc: "WhatsApp consultivo com link de recompra" },
  { icon: "✅", title: "Recompra + upsell", desc: "Sugestão de produto complementar inclusa" },
  { icon: "🔄", title: "Ciclo reinicia", desc: "LTV do cliente aumenta a cada ciclo" },
];

export default function RecompraFlow() {
  const ref = useReveal();

  return (
    <div ref={ref} className="mt-10 mb-6">
      <p className="reveal text-xs tracking-[0.1em] uppercase text-muted-foreground mb-4">Como a régua funciona</p>
      <div className="reveal flex items-center gap-0 overflow-x-auto pb-2">
        {steps.map((s, i) => (
          <div key={i} className="contents">
            <div className="flex-1 min-w-[140px] bg-card border border-border rounded-lg p-4 text-center">
              <div className="text-xl mb-2">{s.icon}</div>
              <div className="text-xs font-medium text-foreground mb-1 leading-snug">{s.title}</div>
              <div className="text-[11px] text-muted-foreground leading-snug">{s.desc}</div>
            </div>
            {i < steps.length - 1 && (
              <div className="flex-shrink-0 w-6 text-center text-primary font-medium">→</div>
            )}
          </div>
        ))}
      </div>

      <div className="reveal mt-6 bg-[#ECF5E9] rounded-xl p-6 max-w-[360px]">
        <div className="bg-card rounded-xl rounded-bl-sm p-3.5 text-[13px] text-foreground leading-relaxed shadow-sm">
          Oi, <strong className="text-primary">Ana!</strong> Tudo bem? 🌿<br /><br />
          Seu <strong className="text-primary">Sabonete Íntimo Derm'Attive</strong> já deve estar na metade. Que tal garantir o próximo antes de acabar? Você pode pedir direto pelo nosso site com frete grátis pra você 🎁
        </div>
        <div className="text-[11px] text-muted-foreground text-right mt-1.5">mensagem automática · exemplo ilustrativo</div>
      </div>
    </div>
  );
}
