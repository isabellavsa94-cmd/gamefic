import { useReveal } from "@/hooks/useReveal";

const products = [
  "https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
  "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
  "https://images.pexels.com/photos/3018845/pexels-photo-3018845.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
  "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
  "https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
  "https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
];

export default function ProductShowcase() {
  const ref = useReveal();

  return (
    <section ref={ref} className="py-14 bg-dark overflow-hidden">
      <div className="container">
        <div className="reveal text-center mb-10">
          <div className="text-[11px] font-medium tracking-[0.14em] uppercase text-gold mb-4">Portfólio Real</div>
          <h2 className="font-display text-[32px] font-light text-[#F2EDE4] leading-[1.2]">
            60 produtos. Uma fábrica própria. <em className="italic text-gold">Potencial nacional.</em>
          </h2>
        </div>
        <div className="reveal grid grid-cols-3 md:grid-cols-6 gap-[3px] rounded-xl overflow-hidden">
          {products.map((src, i) => (
            <div key={i} className="overflow-hidden aspect-[3/4] relative photo-zoom">
              <img src={src} alt={`Produto ${i + 1}`} className="w-full h-full object-cover object-top" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
