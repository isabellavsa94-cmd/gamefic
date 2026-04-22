import { useReveal } from "@/hooks/useReveal";

export default function PhotoManifesto() {
  const ref = useReveal();

  return (
    <div ref={ref} className="reveal grid md:grid-cols-2 min-h-[520px] overflow-hidden">
      <div className="relative overflow-hidden h-[300px] md:h-auto photo-zoom">
        <img
          src="https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop"
          alt="Cuidado com a pele"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
      </div>
      <div className="bg-dark flex flex-col justify-center p-10 md:p-14">
        <div className="text-[11px] font-medium tracking-[0.14em] uppercase text-gold mb-5">O que acreditamos</div>
        <h2 className="font-display text-[40px] font-light leading-[1.15] text-[#F2EDE4] mb-6 text-balance">
          Toda pele merece uma marca que a <em className="italic text-gold">respeite</em> de verdade
        </h2>
        <p className="text-[15px] text-[rgba(242,237,228,0.85)] leading-[1.8]">
          A Derm'Attive nasce de um lugar de cuidado real. Com fábrica própria e 60 formulações testadas, a marca tem o que a maioria dos concorrentes finge ter.
        </p>
        <p className="text-[15px] text-[rgba(242,237,228,0.85)] leading-[1.8] mt-3.5">
          Nosso trabalho é fazer com que o Brasil inteiro saiba disso — e que cada mulher que cuida da sua pele encontre a Derm'Attive antes de encontrar outra marca.
        </p>
      </div>
    </div>
  );
}
