import { useEffect, useMemo, useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const diagnostics = [
  {
    title: "Estrutura técnica",
    detail: "Lendo metadados, indexação e comportamento de render.",
  },
  {
    title: "Performance mobile",
    detail: "Validando velocidade, estabilidade visual e experiência.",
  },
  {
    title: "Confiança pública",
    detail: "Checando sinais institucionais que reforçam credibilidade.",
  },
  {
    title: "Visibilidade orgânica",
    detail: "Consolidando os pontos com maior impacto para crescimento.",
  },
];

const results = [
  {
    value: "58/100",
    label: "Status atual do site",
    desc: "O site já tem base boa para indexar, mas ainda deixa resultado na mesa em SEO, performance e clareza técnica.",
  },
  {
    value: "30/100",
    label: "Performance mobile",
    desc: "Hoje esse é o ponto mais crítico. O site demora para parecer pronto e ainda sofre com instabilidade visual.",
  },
  {
    value: "10.35s",
    label: "LCP atual",
    desc: "O conteúdo principal aparece muito depois do ideal, o que impacta experiência, conversão e leitura do Google.",
  },
  {
    value: "0.473",
    label: "CLS atual",
    desc: "Há muito deslocamento de layout durante o carregamento. Isso piora a sensação de qualidade e confiança.",
  },
];

const quickWins = [
  "Publicar páginas institucionais como Sobre, Privacidade e Termos de Uso.",
  "Reduzir peso de JavaScript e CSS desnecessários na versão mobile.",
  "Corrigir causas de instabilidade visual e priorizar o conteúdo principal do topo.",
  "Refinar schema, metadados e sinais que ajudam Google e ferramentas de IA a entenderem melhor o site.",
];

export default function ExpertSuggestion() {
  const ref = useReveal();
  const [started, setStarted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [runKey, setRunKey] = useState(0);

  useEffect(() => {
    if (!started) return;

    let current = 0;
    const timer = window.setInterval(() => {
      current += 4;
      setProgress(Math.min(current, 100));

      if (current >= 100) {
        window.clearInterval(timer);
      }
    }, 70);

    return () => window.clearInterval(timer);
  }, [started, runKey]);

  const currentStep = useMemo(() => {
    const index = Math.min(
      diagnostics.length - 1,
      Math.floor((progress / 100) * diagnostics.length),
    );
    return diagnostics[index];
  }, [progress]);

  const finished = progress >= 100;

  return (
    <section id="sugestao-especialista" ref={ref} className="bg-[#f6f8fd] py-24">
      <div className="container">
        <div className="reveal mx-auto max-w-[860px] text-center">
          <div className="inline-flex rounded-full bg-accent px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-primary">
            Sugestão do especialista
          </div>
          <h2 className="mt-5 font-display text-[clamp(34px,4vw,56px)] font-extrabold leading-[1.02] tracking-[-0.05em] text-primary">
            Antes de falar em landing page, vale fazer um teste rápido no site atual.
          </h2>
          <p className="mt-5 text-[17px] leading-[1.9] text-slate-600">
            A ideia aqui é simples e amigável: rodar uma
            <strong className="font-semibold text-slate-900"> auditoria de SEO</strong> para
            entender o que já está funcionando bem e o que pode ficar melhor no site da Gamefic.
          </p>
          <p className="mt-4 text-[17px] leading-[1.9] text-slate-600">
            Isso ajuda a tomar decisão com mais segurança, sem forçar um novo escopo antes da
            hora. Se depois fizer sentido, aí sim a conversa sobre uma landing page dedicada fica
            mais clara.
          </p>
        </div>

        <div className="reveal mt-12 rounded-[36px] border border-white/80 bg-white p-7 shadow-[0_24px_60px_rgba(25,48,130,0.06)] md:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <div className="text-[12px] font-semibold uppercase tracking-[0.16em] text-primary">
                Diagnóstico guiado
              </div>
              <h3 className="mt-3 font-display text-[clamp(28px,3vw,40px)] font-extrabold leading-[1.04] tracking-[-0.04em] text-primary">
                Clique para simular a leitura do site e visualizar os principais achados.
              </h3>
              <p className="mt-4 text-[16px] leading-[1.85] text-slate-600">
                O objetivo não é transformar isso em problema. É só mostrar, de forma clara, onde
                existem oportunidades reais de melhoria em SEO, performance e confiança digital.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Button
                  type="button"
                  onClick={() => {
                    setStarted(true);
                    setProgress(0);
                    setRunKey((value) => value + 1);
                  }}
                  className="rounded-full bg-primary px-6 py-6 font-display text-[15px] font-extrabold text-white hover:bg-primary/95"
                >
                  {started && !finished
                    ? "Rodando diagnóstico..."
                    : finished
                      ? "Rodar diagnóstico novamente"
                      : "Rodar diagnóstico do site"}
                </Button>
              </div>

              <div className="mt-8 rounded-[28px] bg-[linear-gradient(135deg,#2447ff_8%,#2f35f5_38%,#8800e3_100%)] p-6 text-white">
                <div className="text-[12px] font-semibold uppercase tracking-[0.16em] text-accent">
                  Leitura consultiva
                </div>
                <p className="mt-4 text-[16px] leading-[1.85] text-white/82">
                  Esse diagnóstico serve para orientar a conversa. Ele mostra com mais objetividade
                  se a prioridade deveria ser otimizar o site atual, reforçar páginas estratégicas
                  ou pensar, mais adiante, em uma landing page dedicada.
                </p>
              </div>
            </div>

            <div className="gamefic-surface rounded-[32px] border border-white/80 p-6 md:p-7">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Status do teste
                  </div>
                  <div className="mt-2 font-display text-[26px] font-extrabold leading-[1.05] tracking-[-0.04em] text-primary">
                    {finished ? "Diagnóstico concluído" : "Aguardando leitura"}
                  </div>
                </div>
                <div className="rounded-full bg-secondary px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-primary">
                  {progress}%
                </div>
              </div>

              <div className="mt-6">
                <Progress value={progress} className="h-3 bg-secondary/80 [&>div]:bg-accent" />
              </div>

              <div className="mt-6 rounded-[24px] border border-border bg-secondary/40 p-5">
                <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Etapa atual
                </div>
                <div className="mt-2 font-display text-[22px] font-extrabold tracking-[-0.03em] text-primary">
                  {started ? currentStep.title : "Pronto para iniciar"}
                </div>
                <p className="mt-3 text-[15px] leading-[1.8] text-slate-600">
                  {started
                    ? currentStep.detail
                    : "Clique no botão para abrir uma visão rápida do que hoje pode estar limitando a evolução orgânica do site."}
                </p>
              </div>

              {finished && (
                <div className="mt-6 space-y-5">
                  <div className="grid gap-4 md:grid-cols-2">
                    {results.map((item, index) => (
                      <article
                        key={item.label}
                        className="rounded-[26px] border border-white/80 bg-white p-5 shadow-[0_12px_30px_rgba(25,48,130,0.04)]"
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
                        <h4 className="mt-4 font-display text-[22px] font-extrabold leading-[1.08] tracking-[-0.04em] text-primary">
                          {item.label}
                        </h4>
                        <p className="mt-3 text-[14px] leading-[1.8] text-slate-600">{item.desc}</p>
                      </article>
                    ))}
                  </div>

                  <div className="rounded-[28px] border border-border bg-white p-6">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                      O que esse teste sugere
                    </div>
                    <h4 className="mt-3 font-display text-[24px] font-extrabold leading-[1.08] tracking-[-0.04em] text-primary">
                      Já existe base boa no site, mas alguns ajustes simples podem liberar mais resultado.
                    </h4>
                    <ul className="mt-5 flex flex-col gap-3">
                      {quickWins.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-[15px] leading-[1.8] text-slate-600">
                          <span className="mt-[10px] h-2 w-2 flex-shrink-0 rounded-full bg-accent" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
