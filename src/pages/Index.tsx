export default function Index() {
  return (
    <main className="min-h-screen bg-dark text-[rgba(242,237,228,0.92)]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(184,137,42,0.24),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(126,109,168,0.18),transparent_35%)]" />
        <div className="relative mx-auto flex min-h-screen w-full max-w-[1120px] flex-col justify-center px-6 py-20 md:px-10">
          <div className="mb-6 text-[11px] font-medium uppercase tracking-[0.24em] text-gold">
            Base clonada da Dermative · Abril 2026
          </div>
          <h1 className="max-w-4xl font-display text-[clamp(48px,8vw,110px)] font-light leading-[0.96] text-[#F2EDE4]">
            Gamefic
          </h1>
          <p className="mt-6 max-w-2xl text-[16px] leading-[1.8] text-[rgba(242,237,228,0.72)] md:text-[18px]">
            Esta instancia ja esta separada do projeto original e pronta para evoluir como o novo site da
            Gamefic, com deploy estatico via GitHub Pages.
          </p>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Estrutura pronta",
                text: "React, Vite e Tailwind mantidos para acelerar o desenvolvimento do novo site.",
              },
              {
                title: "Deploy preparado",
                text: "Configuracao ajustada para publicacao automatica no GitHub Pages com base /gamefic/.",
              },
              {
                title: "Proximo passo",
                text: "Substituir esta landing provisoria pela identidade, copy e secoes finais da Gamefic.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <h2 className="text-lg font-medium text-[#F2EDE4]">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-[rgba(242,237,228,0.66)]">{item.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-3 text-[11px] uppercase tracking-[0.18em] text-[rgba(242,237,228,0.62)]">
            <span className="rounded-full border border-white/15 px-4 py-2">React 18</span>
            <span className="rounded-full border border-white/15 px-4 py-2">Vite</span>
            <span className="rounded-full border border-white/15 px-4 py-2">Tailwind</span>
            <span className="rounded-full border border-white/15 px-4 py-2">GitHub Pages</span>
          </div>
        </div>
      </section>
    </main>
  );
}
