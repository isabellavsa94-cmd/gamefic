import { useReveal } from "@/hooks/useReveal";
import { ReactNode } from "react";

interface ServiceGroupProps {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  children: ReactNode;
}

export default function ServiceGroup({ id, num, title, subtitle, children }: ServiceGroupProps) {
  const ref = useReveal();

  return (
    <div ref={ref} id={id} className="mb-28 last:mb-0">
      {/* Group header — full-width band */}
      <div className="reveal bg-dark rounded-2xl px-8 py-10">
        <div className="flex items-center gap-5">
          <span className="font-numbers text-[clamp(40px,5vw,56px)] font-light text-gold leading-none">{num}</span>
          <div>
            <h3 className="font-display text-[clamp(22px,3vw,32px)] font-light text-[#F2EDE4] leading-[1.2]">{title}</h3>
            <p className="text-[14px] text-[rgba(242,237,228,0.6)] mt-1">{subtitle}</p>
          </div>
        </div>
      </div>

      {/* Sub-services with left accent line showing hierarchy */}
      <div className="ml-6 md:ml-10 border-l-2 border-gold/30 pl-6 md:pl-8 mt-6 flex flex-col gap-6">
        {children}
      </div>
    </div>
  );
}
