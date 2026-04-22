import { useReveal } from "@/hooks/useReveal";
import heroSkinImg from "@/assets/hero-skin.png";

const stats = [
  { num: "11", label: "frentes estratégicas cobertas" },
  { num: "60", label: "produtos para posicionar no digital" },
  { num: "1", label: "marca com potencial nacional inexplorado" },
];

const tags = ["Branding", "Digital", "E-commerce", "Conteúdo", "Performance", "CRM"];

export default function Hero() {
  const ref = useReveal();

  return (
    <section ref={ref} className="relative min-h-screen flex items-center pt-14 overflow-hidden bg-dark">
      {/* Background image */}
      <div className="absolute inset-0 right-0 w-[55%] ml-auto">
        <img src={heroSkinImg} alt="" className="w-full h-full object-cover" style={{ maskImage: 'linear-gradient(to left, rgba(0,0,0,0.7) 30%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,0.7) 30%, transparent 100%)' }} />
      </div>

      {/* Decorative orbs */}
      <div className="absolute -top-[20%] -right-[10%] w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(126,109,168,0.3)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute -bottom-[15%] -left-[5%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(184,137,42,0.14)_0%,transparent_70%)] pointer-events-none" />

      <div className="w-full max-w-[1080px] mx-auto px-5 md:px-10 py-20 grid md:grid-cols-2 gap-10 md:gap-20 items-center">
        <div className="reveal">
          <div className="text-[11px] font-medium tracking-[0.16em] uppercase text-gold mb-6">
            Proposta de Parceria Estratégica · 2026
          </div>
          <h1 className="font-display text-[clamp(40px,5.2vw,80px)] font-light leading-[1.05] text-[#F2EDE4] mb-2" style={{ lineHeight: 1.05 }}>
            Uma nova era<br /><span className="whitespace-nowrap">para a <em className="italic text-gold">Derm'Attive</em></span>
          </h1>
          <div className="w-12 h-px bg-gold my-8" />
          <p className="text-[15px] font-light text-[rgba(242,237,228,0.88)] mb-8 max-w-[420px] leading-[1.8]">
            Quase 30 anos de expertise em dermocosméticos, fábrica própria de 3.000m² em Uberlândia (MG), 60 produtos e força comercial consolidada no Norte e Nordeste. O que falta é estratégia para conquistar o Brasil.
          </p>

          <div className="flex gap-6 mb-10">
            {stats.map((s) => (
              <div key={s.label} className="flex items-baseline gap-2">
                <span className="font-display text-[28px] font-light text-gold leading-none">{s.num}</span>
                <span className="text-[11px] text-[rgba(242,237,228,0.6)] tracking-[0.04em] max-w-[100px] leading-[1.4]">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {tags.map((t) => (
              <span key={t} className="text-[11px] tracking-[0.08em] uppercase text-[rgba(242,237,228,0.82)] border border-[rgba(242,237,228,0.3)] px-3.5 py-1.5 rounded-sm">
                {t}
              </span>
            ))}
        </div>
      </div>
      </div>
    </section>
  );
}
