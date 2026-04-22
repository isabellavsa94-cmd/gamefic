import { useReveal } from "@/hooks/useReveal";
import { useState, useRef, useCallback } from "react";
import producaoVisualImg from "@/assets/producao-visual-card.png";
import brandingPackagingImg from "@/assets/branding-packaging.jpg";

const groups = [
  {
    num: "01",
    title: "Produção Visual",
    tag: "& Ferramentas",
    href: "#g1",
    image: producaoVisualImg,
    items: ["Ensaio Fotográfico — 60 produtos", "Catálogo Impresso"],
  },
  {
    num: "02",
    title: "Plataformas",
    tag: "de Venda",
    href: "#g2",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop",
    items: ["Site E-commerce", "Setup Mercado Livre"],
  },
  {
    num: "03",
    title: "Conteúdo",
    tag: "& Social Media",
    href: "#g3",
    image: "https://images.pexels.com/photos/5081930/pexels-photo-5081930.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop",
    items: ["Planejamento de Conteúdo", "Instagram + TikTok", "Canal Sabonete Íntimo", "Influenciadores"],
  },
  {
    num: "04",
    title: "Aquisição",
    tag: "& Performance",
    href: "#g4",
    image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop",
    items: ["Tráfego Pago (2 plataformas)"],
  },
  {
    num: "05",
    title: "Branding",
    tag: "& Embalagem",
    href: "#g5",
    image: brandingPackagingImg,
    items: ["Rebranding Completo", "Redesign de Rótulos (60 Produtos)"],
  },
];

const scrollTo = (href: string) => {
  const el = document.querySelector(href);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 64;
    window.scrollTo({ top, behavior: "smooth" });
  }
};

export default function OverviewGrid() {
  const ref = useReveal();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [parallaxOffsets, setParallaxOffsets] = useState<number[]>(groups.map(() => 0));

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const containerWidth = rect.width;
    const normalizedX = (mouseX / containerWidth - 0.5) * 2; // -1 to 1

    setParallaxOffsets(groups.map((_, i) => {
      const cardCenter = (i + 0.5) / groups.length;
      const distance = (cardCenter - 0.5) * 2 - normalizedX;
      return distance * -15;
    }));
  }, []);

  return (
    <section ref={ref} className="relative py-24 bg-dark overflow-hidden" id="servicos">
      {/* Decorative spot lights */}
      <div className="absolute -top-[20%] -right-[10%] w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(126,109,168,0.3)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute -bottom-[15%] -left-[5%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(184,137,42,0.14)_0%,transparent_70%)] pointer-events-none" />
      <div className="container">
        <div className="reveal text-center max-w-[640px] mx-auto mb-16">
          <div className="text-[11px] font-medium tracking-[0.14em] uppercase text-gold mb-4">Escopo Completo</div>
          <h2 className="font-display text-[clamp(32px,4vw,48px)] font-light leading-[1.15] text-[#F2EDE4] text-balance">
            5 frentes, <em className="italic text-gold">uma estratégia</em>
          </h2>
          <p className="text-[15px] text-[rgba(242,237,228,0.65)] mt-4">
            Cada grupo de serviços funciona em conjunto. Não entregamos peças soltas — entregamos um ecossistema.
          </p>
        </div>

        <div
          ref={containerRef}
          className="reveal flex gap-3 lg:gap-4 justify-center items-center"
          onMouseMove={handleMouseMove}
          onMouseLeave={() => {
            setHoveredIndex(null);
            setParallaxOffsets(groups.map(() => 0));
          }}
          style={{ minHeight: "480px" }}
        >
          {groups.map((g, i) => {
            const isHovered = hoveredIndex === i;
            const hasHover = hoveredIndex !== null;

            return (
              <button
                key={g.num}
                onClick={() => scrollTo(g.href)}
                onMouseEnter={() => setHoveredIndex(i)}
                className="relative overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex-shrink-0"
                style={{
                  width: isHovered ? "320px" : hasHover ? "120px" : "180px",
                  height: isHovered ? "480px" : hasHover ? "420px" : "440px",
                  borderRadius: "32px",
                }}
              >
                {/* Image with parallax */}
                <div
                  className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{
                    transform: `translateY(${parallaxOffsets[i]}px) scale(${isHovered ? 1.05 : 1.12})`,
                  }}
                >
                  <img
                    src={g.image}
                    alt={g.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Overlay gradient */}
                <div
                  className="absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{
                    background: isHovered
                      ? "rgba(0,0,0,0.88)"
                      : "linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.25) 100%)",
                  }}
                />

                {/* Content */}
                <div className="absolute inset-0 z-10 p-6 flex flex-col">

                  <div className="relative flex-1 min-h-0">
                    {/* Default state */}
                    <div
                      className="absolute inset-x-0 bottom-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                      style={{
                        opacity: isHovered ? 0 : 1,
                        transform: isHovered ? "translateY(24px)" : "translateY(0)",
                        pointerEvents: isHovered ? "none" : "auto",
                      }}
                    >
                      <h3
                        className="font-display leading-[1.1] text-white tracking-[-0.01em]"
                        style={{ fontSize: "18px" }}
                      >
                        {g.title}
                        <br />
                        <span className="text-gold/80">{g.tag}</span>
                      </h3>
                    </div>

                    {/* Hover state */}
                    <div
                      className="absolute inset-0 flex flex-col justify-center items-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                      style={{
                        opacity: isHovered ? 1 : 0,
                        transform: isHovered ? "translateY(0) scale(1)" : "translateY(12px) scale(0.98)",
                        pointerEvents: isHovered ? "auto" : "none",
                      }}
                    >
                      <h3
                        className="font-display leading-[1.1] text-white tracking-[-0.01em] text-center"
                        style={{ fontSize: "28px" }}
                      >
                        {g.title}
                        <br />
                        <span className="text-gold/80">{g.tag}</span>
                      </h3>

                      <div className="mt-4">
                        <ul className="flex flex-col gap-2 items-center">
                          {g.items.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2 text-[13px] leading-snug text-white/70"
                            >
                              <span className="flex-shrink-0 w-1 h-1 rounded-full bg-gold/50 mt-[7px]" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Ver detalhes - fixed at bottom */}
                  <div
                    className="transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    style={{
                      opacity: isHovered ? 1 : 0,
                      transform: isHovered ? "translateY(0)" : "translateY(8px)",
                    }}
                  >
                    <div className="text-[11px] font-medium uppercase tracking-[0.12em] text-gold/60 text-center">
                      Ver detalhes ↓
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
