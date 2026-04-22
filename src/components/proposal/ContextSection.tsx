import { useReveal } from "@/hooks/useReveal";

const insights = [
{ icon: "✓", text: "<strong>Fábrica própria e formulações exclusivas:</strong> diferencial competitivo real frente a marcas que terceirizam tudo." },
{ icon: "✓", text: "<strong>Base de clientes fiel no Pará:</strong> pode se tornar um motor de prova social e expansão nacional." },
{ icon: "✓", text: "<strong>Portfólio de 60 produtos prontos para escalar:</strong> amplitude de catálogo que acelera o go-to-market digital sem depender de novos desenvolvimentos." },
{ icon: "!", text: "<strong>Mercado de R$ 240bi+ em crescimento:</strong> o setor de beleza e cuidados pessoais no Brasil cresce mais de 11% ao ano, e quem não se posicionar digitalmente agora vai ficar para trás." },
{ icon: "!", text: "<strong>Ausência de identidade visual atualizada:</strong> os rótulos e a comunicação visual não traduzem o nível do produto." },
{ icon: "!", text: "<strong>Presença digital subaproveitada:</strong> nenhuma estratégia de conteúdo, tráfego pago ou marketplace estruturado." },
{ icon: "!", text: "<strong>Concorrentes nativos digitais crescendo rápido:</strong> marcas novas, sem fábrica própria, já dominam redes sociais e marketplaces com branding forte e tráfego pago agressivo." }];


export default function ContextSection() {
  const ref = useReveal();

  return (
    <section id="diagnostico" ref={ref} className="py-20 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 items-start">
          <div className="reveal md:sticky md:top-24">
            <div className="text-[11px] font-medium tracking-[0.14em] uppercase text-secondary-foreground mb-4">Diagnóstico</div>
            <h2 className="font-display text-[clamp(32px,4vw,48px)] font-light leading-[1.15] text-foreground mb-6 text-balance">
              O que encontramos e o que <strong className="font-semibold text-primary">muda agora</strong>
            </h2>
            <div className="text-[15px] text-dark-muted leading-[1.8] space-y-4">
              <p>A Derm'Attive tem algo que a maioria das marcas de cosméticos no Brasil não tem: fábrica própria, quase 30 anos de experiência em formulação e um portfólio extenso de 60 produtos. O problema nunca foi o produto, é que o mundo ainda não sabe disso.</p>
              <p>A marca cresceu organicamente pela força do produto no PDV. Mas num mercado que se decide cada vez mais no digital, depender de presença física é limitar o alcance e o valuation do negócio.</p>
            </div>
          </div>
          <div className="reveal flex flex-col gap-4">
            {insights.map((item, i) => {
              const isWarning = i >= 3;
              return (
              <div key={i} className={`flex gap-4 p-5 bg-purple-light rounded-lg border-l-[3px] ${isWarning ? 'border-destructive' : 'border-primary'}`}>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full ${isWarning ? 'bg-destructive' : 'bg-primary'} flex items-center justify-center text-sm text-primary-foreground font-medium`}>
                  {item.icon}
                </div>
                <div className="text-sm text-dark-muted leading-relaxed [&_strong]:text-foreground [&_strong]:font-medium" dangerouslySetInnerHTML={{ __html: item.text }} />
              </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>);

}
