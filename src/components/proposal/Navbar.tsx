const navLinks = [
  { href: "#diagnostico", label: "Diagnóstico" },
  { href: "#servicos", label: "Serviços" },
  { href: "#investimento", label: "Investimento" },
  { href: "#timeline", label: "Timeline" },
  { href: "#proximos-passos", label: "Próximos Passos" },
];

const scrollTo = (href: string) => {
  const el = document.querySelector(href);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 64;
    window.scrollTo({ top, behavior: "smooth" });
  }
};

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-14 flex items-center justify-between px-5 md:px-10 bg-background/92 backdrop-blur-md border-b border-border">
      <div className="text-xs font-medium tracking-[0.12em] uppercase text-white/70">
        <span className="text-white/70">Isabella</span> × Derm'Attive
      </div>
      <ul className="hidden md:flex gap-7 list-none">
        {navLinks.map((l) => (
          <li key={l.href}>
            <button
              onClick={() => scrollTo(l.href)}
              className="text-xs tracking-[0.06em] text-white/70 hover:text-white transition-colors bg-transparent border-none cursor-pointer"
            >
              {l.label}
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={() => scrollTo("#proximos-passos")}
        className="text-xs font-medium tracking-[0.08em] text-primary-foreground bg-primary px-5 py-2 rounded cursor-pointer hover:bg-purple-mid transition-colors active:scale-[0.97]"
      >
        Avançar
      </button>
    </nav>
  );
}
