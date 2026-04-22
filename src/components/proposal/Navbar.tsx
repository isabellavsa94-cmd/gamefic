const navLinks = [
  { href: "#diagnostico", label: "Diagnóstico" },
  { href: "#servicos", label: "Escopo" },
  { href: "#investimento", label: "Investimento" },
  { href: "#timeline", label: "Cronograma" },
];

const scrollTo = (href: string) => {
  const el = document.querySelector(href);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 88;
    window.scrollTo({ top, behavior: "smooth" });
  }
};

function LogoMark() {
  return (
    <div className="relative h-11 w-11 rounded-2xl border-2 border-primary">
      <div className="absolute inset-[7px] rounded-xl border border-primary/80" />
      <div className="absolute inset-[13px] rounded-lg border border-primary/60" />
      <div className="absolute inset-[5px] rotate-45 rounded-xl border border-primary/40" />
    </div>
  );
}

export default function Navbar() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 px-3 pt-3 md:px-6">
      <div className="mx-auto flex h-[74px] max-w-[1240px] items-center justify-between rounded-[28px] border border-white/70 bg-white/90 px-4 shadow-[0_20px_60px_rgba(25,48,130,0.08)] backdrop-blur-xl md:px-7">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3 bg-transparent"
        >
          <LogoMark />
          <div className="font-display text-[34px] font-extrabold leading-none tracking-[-0.06em] text-primary">
            gamefic
          </div>
        </button>

        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <button
                type="button"
                onClick={() => scrollTo(l.href)}
                className="font-display text-[16px] font-bold text-primary transition-colors hover:text-purple"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => scrollTo("#proximos-passos")}
          className="rounded-full bg-accent px-5 py-3 font-display text-[15px] font-extrabold text-primary shadow-[0_10px_24px_rgba(0,255,141,0.28)] transition-transform hover:-translate-y-0.5"
        >
          Avançar
        </button>
      </div>
    </nav>
  );
}
