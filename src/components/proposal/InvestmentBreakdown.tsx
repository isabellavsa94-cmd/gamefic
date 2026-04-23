import { useState } from "react";

const coinIcon = `${import.meta.env.BASE_URL}coin-icon.svg`;

interface BreakdownItem {
  label: string;
  value: string;
}

interface InvestmentBreakdownProps {
  items: BreakdownItem[];
  note: string;
}

export default function InvestmentBreakdown({ items, note }: InvestmentBreakdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-6 rounded-[24px] border border-white/14 bg-[rgba(3,10,60,0.18)]">
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left"
        aria-expanded={isOpen}
      >
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
            Entenda os valores dos serviços
          </div>
          <div className="mt-1 text-[13px] leading-[1.52] text-white/68">
            Toque para ver a divisão sugerida dentro do pacote.
          </div>
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
                className="rounded-[18px] border border-white/12 bg-white/8 px-4 py-4"
              >
                <div className="text-[12px] font-semibold uppercase tracking-[0.12em] text-white/70">
                  {item.label}
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <img
                    src={coinIcon}
                    alt=""
                    aria-hidden="true"
                    className="h-6 w-6 flex-shrink-0"
                  />
                  <div className="font-display text-[24px] font-extrabold leading-none tracking-[-0.04em] text-white">
                    {item.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[13px] leading-[1.56] text-white/72">{note}</p>
        </div>
      )}
    </div>
  );
}
