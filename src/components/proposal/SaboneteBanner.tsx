import { useReveal } from "@/hooks/useReveal";

export default function SaboneteBanner() {
  const ref = useReveal();

  return (
    <div ref={ref} className="reveal bg-gradient-to-br from-dark to-[#2A1F3D] rounded-2xl p-8 md:p-12 grid md:grid-cols-[1fr_auto] gap-10 items-center my-12">
      <div>
        <h3 className="font-display text-[28px] font-light text-[#F2EDE4] mb-3">
          O sabonete íntimo não é só um produto. É o coração do negócio.
        </h3>
        <p className="text-sm text-[rgba(242,237,228,0.85)] leading-[1.7] max-w-[480px]">
          Com 50% do faturamento atual vindo de um único produto, é estratégico tratá-lo como uma marca dentro da marca — com voz, comunidade e posicionamento próprios.
        </p>
      </div>
      <div className="text-center">
        <div className="font-display text-[56px] font-light text-gold leading-none">50%</div>
        <div className="text-xs text-[rgba(242,237,228,0.78)] mt-1">do faturamento atual</div>
      </div>
    </div>
  );
}
