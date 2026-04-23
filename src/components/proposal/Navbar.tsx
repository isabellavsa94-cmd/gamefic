import { useEffect, useState } from "react";
import BrandLogo from "@/components/proposal/BrandLogo";

const navLinks = [
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

export default function Navbar() {
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const update = () => {
      const hero = document.getElementById("hero");
      if (!hero) return;

      const rect = hero.getBoundingClientRect();
      setPastHero(rect.bottom <= 96);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 px-3 pt-2 md:px-6 md:pt-3">
      <div
        className={`mx-auto flex h-[56px] w-fit min-w-[200px] items-center justify-center rounded-[20px] px-4 shadow-[0_20px_60px_rgba(25,48,130,0.08)] backdrop-blur-xl transition-all duration-300 md:h-[72px] md:max-w-[1120px] md:w-auto md:min-w-0 md:justify-between md:rounded-[28px] md:px-5 ${
          pastHero ? "border border-white/50 bg-white/80" : "border border-white/70 bg-white/90"
        }`}
      >
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center bg-transparent"
        >
          <BrandLogo className="h-8 w-auto md:h-10" />
        </button>

        <ul className="hidden items-center gap-5 md:flex lg:gap-6">
          {navLinks.map((l) => (
            <li key={l.href}>
              <button
                type="button"
                onClick={() => scrollTo(l.href)}
                className="font-display text-[15px] font-bold text-primary transition-colors hover:text-purple"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => scrollTo("#proximos-passos")}
          className="hidden rounded-full bg-accent px-4 py-2.5 font-display text-[13px] font-extrabold text-primary shadow-[0_10px_24px_rgba(0,255,141,0.28)] transition-transform hover:-translate-y-0.5 md:inline-flex md:px-4 md:py-2.5 md:text-[14px]"
        >
          <span>Quero avançar</span>
        </button>
      </div>
    </nav>
  );
}
