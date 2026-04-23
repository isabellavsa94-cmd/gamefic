import { useState } from "react";

const coinIcon = `${import.meta.env.BASE_URL}coin-icon.svg`;

interface BreakdownItem {
  label: string;
  value: string;
}

interface InvestmentBreakdownProps {
  items: BreakdownItem[];
}

export default function InvestmentBreakdown({ items }: InvestmentBreakdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-5 rounded-[20px] border border-white/14 bg-[rgba(3,10,60,0.18)] md:mt-6 md:rounded-[24px]">
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="flex w-full items-center justify-between gap-4 px-4 py-3.5 text-left md:py-4"
        aria-expanded={isOpen}
      >
        <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent md:text-[12px]">
          Entenda os valores dos serviços aqui
        </div>
        <span
          className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-white/14 bg-white/8 text-[16px] text-white transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          ▾
        </span>
      </button>

      {isOpen && (
        <div className="border-t border-white/10 px-4 pb-4 pt-4">
          <div className="grid gap-3 sm:grid-cols-2">
            {items.map((item) => (
              <div
                key={item.label}
                className="relative rounded-[16px] border border-white/12 bg-white/8 px-4 py-4 md:rounded-[18px]"
              >
                <div className="text-[12px] font-semibold uppercase tracking-[0.12em] text-white/70">
                  {item.label}
                </div>
                <img
                  src={coinIcon}
                  alt=""
                  aria-hidden="true"
                  className="absolute right-3 top-[-12px] h-7 w-7 flex-shrink-0 md:right-4"
                />
                <div className="mt-3 flex items-end justify-start">
                  <div className="text-left font-display text-[22px] font-extrabold leading-[0.95] tracking-[-0.04em] text-white md:text-[24px]">
                    {item.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
