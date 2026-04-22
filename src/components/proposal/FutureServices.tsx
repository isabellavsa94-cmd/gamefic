import { useReveal } from "@/hooks/useReveal";
import {
  Mail,
  MessageCircle,
  RefreshCw,
  Award,
  FlaskConical,
  Star,
  Package,
  ClipboardCheck,
} from "lucide-react";
import unboxingImg from "@/assets/unboxing-reference.jpg";
import whatsappRecompraImg from "@/assets/whatsapp-recompra.png";

const futureServices = [
  {
    title: "Email Marketing com Automações de Ciclo de Vida",
    description:
      "Fluxos automáticos de boas-vindas, abandono de carrinho, pós-compra e reativação. O canal de maior ROI no e-commerce, rodando 24h sem intervenção.",
    icon: Mail,
  },
  {
    title: "Régua de Recompra Inteligente via WhatsApp",
    description:
      "Mensagens automáticas baseadas no tempo de uso de cada produto, lembrando o cliente de reabastecer. Tom consultivo e alta conversão.",
    icon: MessageCircle,
    hoverImage: whatsappRecompraImg,
  },
  {
    title: "Clube de Assinatura / Compra Recorrente",
    description:
      "Plano mensal com desconto para produtos consumíveis. Receita previsível e redução de custo de aquisição.",
    icon: RefreshCw,
  },
  {
    title: "Programa de Fidelidade e Pontos",
    description:
      "Sistema de recompensas por compra, indicação e engajamento. Transforma clientes em promotores da marca.",
    icon: Award,
  },
  {
    title: "Quiz de Pele Personalizado",
    description:
      "Diagnóstico interativo no site que recomenda produtos com base no tipo de pele e necessidades do consumidor.",
    icon: FlaskConical,
  },
  {
    title: "Gestão de Reviews e Reputação Online",
    description:
      "Monitoramento ativo em Reclame Aqui, Google Reviews e Mercado Livre. Respostas estratégicas e coleta proativa de avaliações positivas.",
    icon: Star,
  },
  {
    title: "Unboxing Experience",
    description:
      "Embalagem de envio pensada como experiência de marca para estimular encantamento e conteúdo orgânico.",
    icon: Package,
    hoverImage: unboxingImg,
  },
  {
    title: "NPS e Pesquisa de Satisfação",
    description:
      "Pesquisas automatizadas pós-compra para medir satisfação, identificar promotores e coletar insights de melhoria.",
    icon: ClipboardCheck,
  },
  {
    title: "SAC Estratégico — WhatsApp + Chat",
    description:
      "Atendimento pós-venda estruturado com scripts, SLA definido e relatório de satisfação como extensão da experiência.",
    icon: MessageCircle,
  },
];

export default function FutureServices() {
  const ref = useReveal();

  return (
    <section ref={ref} className="relative overflow-visible bg-[#eff2f8] py-24" id="futuro">
      <div className="container max-w-[1120px] overflow-visible">
        <div className="reveal mx-auto max-w-[760px] text-center">
          <div className="text-[12px] font-semibold uppercase tracking-[0.18em] text-primary">
            Roadmap futuro
          </div>
          <h2 className="mt-4 font-display text-[clamp(34px,4vw,54px)] font-extrabold leading-[1.02] tracking-[-0.05em] text-primary">
            Serviços para as próximas fases da operação.
          </h2>
          <p className="mt-4 text-[16px] leading-[1.8] text-slate-600">
            A lógica visual aqui segue o site da Gamefic: cards claros, ícones fortes, acentos em
            azul e verde para deixar o roadmap fácil de explorar.
          </p>
        </div>

        <div className="reveal mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-3 overflow-visible">
          {futureServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="group gamefic-surface relative overflow-visible rounded-[30px] border border-white/70 p-6 transition-all duration-300 hover:-translate-y-1"
              >
                {service.hoverImage && (
                  <div className="pointer-events-none absolute bottom-6 left-full z-30 ml-5 hidden h-[240px] w-[210px] overflow-hidden rounded-[28px] border border-white/80 shadow-[0_25px_50px_rgba(25,48,130,0.16)] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100 xl:block">
                    <img
                      src={service.hoverImage}
                      alt={service.title}
                      loading="lazy"
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                )}

                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl text-white ${
                      index % 3 === 0
                        ? "bg-primary"
                        : index % 3 === 1
                          ? "bg-accent text-primary"
                          : "bg-purple"
                    }`}
                  >
                    <Icon size={24} />
                  </div>
                  <div className="font-display text-[24px] font-extrabold leading-[1.05] tracking-[-0.04em] text-primary">
                    {service.title}
                  </div>
                </div>
                <p className="mt-4 text-[15px] leading-[1.8] text-slate-600">{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
