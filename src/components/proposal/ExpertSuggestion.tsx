import { useReveal } from "@/hooks/useReveal";

const findings = [
  {
    value: "58/100",
    label: "Leitura atual do site",
    desc: "O site já tem base técnica, mas ainda há espaço claro para ganhar visibilidade, clareza e performance.",
  },
  {
    value: "SEO + UX",
    label: "Performance mobile",
    desc: "Hoje o maior ponto de atenção está em carregamento e estabilidade visual, o que afeta experiência e conversão.",
  },
  {
    value: "Confiança",
    label: "Sinais institucionais",
    desc: "Páginas como Sobre, Privacidade e Termos ajudam o site a transmitir mais confiança para buscadores e usuários.",
  },
  {
    value: "IA",
    label: "Legibilidade digital",
    desc: "Também há oportunidade de melhorar como a Gamefic é lida e citada por buscadores e ferramentas de IA.",
  },
];

export default function ExpertSuggestion() {
  const ref = useReveal();

  return (
    <section id="sugestao-especialista" ref={ref} className="bg-[#f6f8fd] py-24">
      <div className="container">
        <div className="reveal mx-auto max-w-[860px] text-center">
          <div className="inline-flex rounded-full bg-accent px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-primary">
            Sugestão do especialista
          </div>
          <h2 className="mt-5 font-display text-[clamp(34px,4vw,56px)] font-extrabold leading-[1.02] tracking-[-0.05em] text-primary">
            Uma landing page pode fazer sentido, mas o primeiro passo pode ser ainda mais simples.
          </h2>
          <p className="mt-5 text-[17px] leading-[1.9] text-slate-600">
            Como essa não foi uma demanda inicial, minha sugestão aqui não é empurrar uma nova
            página como obrigação. O que faz mais sentido, neste momento, é uma
            <strong className="font-semibold text-slate-900"> auditoria de SEO amigável</strong>
            para entender o que já está funcionando no site atual e o que pode ser melhorado com
            mais impacto.
          </p>
          <p className="mt-4 text-[17px] leading-[1.9] text-slate-600">
            Esse diagnóstico ajuda a enxergar com mais clareza se vale otimizar a estrutura atual,
            reforçar páginas estratégicas ou até evoluir para uma landing page dedicada, caso isso
            realmente aumente o potencial de conversão.
          </p>
        </div>

        <div className="reveal mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {findings.map((item, index) => (
            <article
              key={item.label}
              className="gamefic-surface rounded-[30px] border border-white/80 p-6"
            >
              <div
                className={`inline-flex rounded-full px-4 py-2 text-[12px] font-display font-extrabold ${
                  index === 0
                    ? "bg-primary text-white"
                    : "bg-[linear-gradient(135deg,#2447ff_8%,#2f35f5_38%,#8800e3_100%)] text-white"
                }`}
              >
                {item.value}
              </div>
              <h3 className="mt-5 font-display text-[24px] font-extrabold leading-[1.08] tracking-[-0.04em] text-primary">
                {item.label}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.8] text-slate-600">{item.desc}</p>
            </article>
          ))}
        </div>

        <div className="reveal mt-8 rounded-[34px] border border-white/80 bg-white p-7 shadow-[0_24px_60px_rgba(25,48,130,0.06)]">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="text-[12px] font-semibold uppercase tracking-[0.16em] text-primary">
                Leitura recomendada
              </div>
              <h3 className="mt-3 font-display text-[clamp(28px,3vw,40px)] font-extrabold leading-[1.04] tracking-[-0.04em] text-primary">
                É uma análise consultiva para mostrar onde o site pode performar melhor.
              </h3>
              <p className="mt-4 text-[16px] leading-[1.85] text-slate-600">
                A ideia aqui é abrir uma conversa com tranquilidade: sem transformar isso em mais
                um escopo obrigatório, e sim em uma oportunidade de entender onde a Gamefic pode
                ganhar mais velocidade digital com ajustes de SEO, performance e estrutura.
              </p>
            </div>

            <div className="rounded-[30px] bg-[linear-gradient(135deg,#2447ff_8%,#2f35f5_38%,#8800e3_100%)] p-6 text-white">
              <div className="text-[12px] font-semibold uppercase tracking-[0.16em] text-accent">
                Próximo passo opcional
              </div>
              <p className="mt-4 text-[16px] leading-[1.85] text-white/82">
                Se fizer sentido para o cliente, essa auditoria pode virar um ponto de partida para
                decidir com mais segurança se o site atual já sustenta a estratégia ou se uma
                landing page dedicada pode acelerar o resultado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
