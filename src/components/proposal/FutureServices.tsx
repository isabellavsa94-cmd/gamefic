import { useReveal } from "@/hooks/useReveal";
import { Mail, MessageCircle, RefreshCw, Award, FlaskConical, Star, Package, ClipboardCheck } from "lucide-react";
import unboxingImg from "@/assets/unboxing-reference.jpg";
import whatsappRecompraImg from "@/assets/whatsapp-recompra.png";

const futureServices = [
  {
    title: "Email Marketing com Automações de Ciclo de Vida",
    description: "Fluxos automáticos de boas-vindas, abandono de carrinho, pós-compra e reativação. O canal de maior ROI no e-commerce, rodando 24h sem intervenção.",
    icon: Mail,
  },
  {
    title: "Régua de Recompra Inteligente via WhatsApp",
    description: "Mensagens automáticas baseadas no tempo de uso de cada produto, lembrando o cliente de reabastecer. Tom consultivo e alta conversão.",
    icon: MessageCircle,
    hoverImage: whatsappRecompraImg,
  },
  {
    title: "Clube de Assinatura / Compra Recorrente",
    description: "Plano mensal com desconto para produtos consumíveis. Receita previsível e redução de custo de aquisição.",
    icon: RefreshCw,
  },
  {
    title: "Programa de Fidelidade e Pontos",
    description: "Sistema de recompensas por compra, indicação e engajamento. Transforma clientes em promotores da marca.",
    icon: Award,
  },
  {
    title: "Quiz de Pele Personalizado",
    description: "Diagnóstico interativo no site que recomenda produtos com base no tipo de pele e necessidades do consumidor. Aumenta conversão e reduz devolução.",
    icon: FlaskConical,
  },
  {
    title: "Gestão de Reviews e Reputação Online",
    description: "Monitoramento ativo em Reclame Aqui, Google Reviews e Mercado Livre. Respostas estratégicas e coleta proativa de avaliações positivas.",
    icon: Star,
  },
  {
    title: "Unboxing Experience",
    description: "Embalagem de envio pensada como experiência de marca — cartão personalizado, amostra grátis do próximo produto e QR code para tutorial. Gera UGC espontâneo nas redes sociais.",
    icon: Package,
    hoverImage: unboxingImg,
  },
  {
    title: "NPS e Pesquisa de Satisfação",
    description: "Pesquisas automatizadas pós-compra para medir satisfação, identificar promotores e coletar insights para melhoria contínua.",
    icon: ClipboardCheck,
  },
  {
    title: "SAC Estratégico — WhatsApp + Chat",
    description: "Atendimento pós-venda estruturado com scripts, SLA definido e relatório de satisfação. Extensão da experiência de marca.",
    icon: MessageCircle,
  },
];

export default function FutureServices() {
  const ref = useReveal();

  return (
    <section ref={ref} className="py-20 bg-background overflow-visible" id="futuro">
      <div className="container max-w-[960px] overflow-visible">
        <div className="reveal text-center mb-12">
          <div className="text-[11px] font-medium tracking-[0.14em] uppercase text-muted-foreground mb-4">Roadmap Futuro</div>
          <h2 className="font-display text-[clamp(28px,3.5vw,40px)] font-light leading-[1.15] text-foreground text-balance">
            Serviços para <em className="italic text-primary">fases seguintes</em>
          </h2>
          <p className="text-[15px] text-muted-foreground mt-3 max-w-[520px] mx-auto">
            Estes serviços não fazem parte do escopo inicial, mas são evoluções naturais da estratégia. Ficam aqui para que você já conheça as possibilidades.
          </p>
        </div>

        <div className="reveal grid sm:grid-cols-2 lg:grid-cols-3 gap-5 overflow-visible">
          {futureServices.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="relative bg-card border border-border rounded-xl p-6 flex flex-col gap-4 hover:bg-primary hover:border-primary hover:shadow-lg transition-all duration-300 group"
              >
                {s.hoverImage && (
                  <div className="absolute bottom-0 left-full ml-4 w-[320px] h-[420px] rounded-xl overflow-hidden shadow-2xl opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 transition-all duration-400 z-50">
                    <img src={s.hoverImage} alt={s.title} loading="lazy" className="w-full h-full object-cover object-top" />
                  </div>
                )}
              <div className="flex flex-col items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary-foreground/20 transition-colors">
                  <Icon size={20} className="text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div className="text-[13px] font-bold uppercase tracking-wide text-foreground group-hover:text-primary-foreground text-center">{s.title}</div>
                <div className="text-[13px] text-muted-foreground leading-relaxed group-hover:text-primary-foreground/80 text-left w-full">{s.description}</div>
              </div>
              </div>
            );
          })}
        </div>

        <div className="reveal text-center mt-8">
          <p className="text-[13px] text-muted-foreground italic">
            Estes serviços podem ser ativados a qualquer momento, conforme a maturidade da operação digital.
          </p>
        </div>
      </div>
    </section>
  );
}
