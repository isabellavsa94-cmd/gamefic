import { useReveal } from "@/hooks/useReveal";
import { useState, useMemo } from "react";

interface InvestmentItem {
  id: string;
  name: string;
  value: number | null; // null = A DEFINIR
  type: "setup" | "monthly";
}

interface InvestmentGroup {
  group: string;
  type: "setup" | "monthly";
  items: InvestmentItem[];
}

const investmentGroups: InvestmentGroup[] = [
  {
    group: "01 · Produção Visual & Ferramentas",
    type: "setup",
    items: [
      { id: "foto", name: "Ensaio fotográfico (60 produtos)", value: 6000, type: "setup" },
      { id: "catalogo", name: "Catálogo impresso para representantes", value: 4500, type: "setup" },
    ],
  },
  {
    group: "02 · Plataformas de Venda",
    type: "setup",
    items: [
      { id: "ecommerce", name: "Site e-commerce completo", value: 22500, type: "setup" },
      { id: "ml", name: "Setup Mercado Livre", value: 4000, type: "setup" },
    ],
  },
  {
    group: "03 · Conteúdo & Social Media",
    type: "setup",
    items: [
      { id: "planejamento", name: "Planejamento de conteúdo estratégico", value: 7000, type: "setup" },
    ],
  },
  {
    group: "03 · Conteúdo & Social Media",
    type: "monthly",
    items: [
      { id: "dermattive-social", name: "Derm'Attive (Instagram + TikTok)", value: 5000, type: "monthly" },
      { id: "intimo-social", name: "Derm'Attive Íntimo (Instagram)", value: 2500, type: "monthly" },
      { id: "influencer", name: "Gerenciamento de influenciadores", value: 2500, type: "monthly" },
    ],
  },
  {
    group: "04 · Aquisição & Performance",
    type: "monthly",
    items: [
      { id: "trafego", name: "Tráfego pago (Meta + Google)", value: 4500, type: "monthly" },
    ],
  },
  {
    group: "05 · Branding & Embalagem",
    type: "setup",
    items: [
      { id: "rebranding", name: "Rebranding completo + brand book", value: 7000, type: "setup" },
      { id: "rotulos", name: "Redesign de rótulos (60 produtos)", value: 45000, type: "setup" },
    ],
  },
];

const allItems = investmentGroups.flatMap((g) => g.items);
const selectableItems = allItems;

function getDiscount(selectedCount: number): { percent: number; label: string } {
  if (selectedCount >= 5) return { percent: 15, label: "15% — Pacote Completo" };
  if (selectedCount >= 4) return { percent: 10, label: "10% — 4 serviços" };
  if (selectedCount >= 3) return { percent: 5, label: "5% — 3 serviços" };
  return { percent: 0, label: "" };
}

function formatCurrency(value: number): string {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

export default function InvestmentSection() {
  const ref = useReveal();
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const selectAll = () => {
    if (selected.size === selectableItems.length) {
      setSelected(new Set());
    } else {
      setSelected(new Set(selectableItems.map((i) => i.id)));
    }
  };

  const { monthlyTotal, monthlyDiscount, setupTotal, selectedPricedCount, selectedSetupUndefined } = useMemo(() => {
    let monthly = 0;
    let setup = 0;
    let pricedCount = 0;
    let setupUndefined = 0;

    for (const item of allItems) {
      if (!selected.has(item.id)) continue;
      if (item.value !== null) {
        pricedCount++;
        if (item.type === "monthly") monthly += item.value;
        else setup += item.value;
      } else {
        pricedCount++; // counts for discount tiers
        setupUndefined++;
      }
    }

    const discount = getDiscount(pricedCount);
    const monthlyWithDiscount = monthly * (1 - discount.percent / 100);

    return {
      monthlyTotal: monthly,
      monthlyDiscount: { ...discount, finalValue: monthlyWithDiscount },
      setupTotal: setup,
      selectedPricedCount: pricedCount,
      selectedSetupUndefined: setupUndefined,
    };
  }, [selected]);

  const setupGroups = investmentGroups.filter((g) => g.type === "setup");
  const monthlyGroups = investmentGroups.filter((g) => g.type === "monthly");

  const renderItem = (item: InvestmentItem) => {
    const isSelected = selected.has(item.id);

    return (
      <button
        key={item.id}
        onClick={() => toggle(item.id)}
        className={`flex justify-between items-center px-6 py-3.5 border-b border-[rgba(255,255,255,0.05)] last:border-b-0 w-full text-left transition-colors duration-300 cursor-pointer hover:bg-[rgba(255,255,255,0.04)] ${isSelected ? "bg-primary/10" : ""}`}
      >
        <div className="flex items-center gap-3">
          {/* Checkbox */}
          <div
            className={`w-[18px] h-[18px] rounded border-2 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
              isSelected
                ? "bg-gold border-gold"
                : "border-[rgba(255,255,255,0.25)] hover:border-[rgba(255,255,255,0.4)]"
            }`}
          >
            {isSelected && (
              <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                <path d="M1 4L3.5 6.5L9 1" stroke="#1C1A27" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </div>
          <span className={`text-[13px] transition-colors duration-300 ${isSelected ? "text-[rgba(242,237,228,0.95)]" : "text-[rgba(242,237,228,0.7)]"}`}>
            {item.name}
          </span>
        </div>
        <span
          className={`text-[13px] font-medium whitespace-nowrap ml-4 transition-colors duration-300 ${
            item.value === null ? "text-destructive/60 italic text-[12px]" : isSelected ? "text-gold" : "text-[rgba(242,237,228,0.5)]"
          }`}
        >
          {item.value !== null ? formatCurrency(item.value) + (item.type === "monthly" ? "/mês" : "") : "A DEFINIR"}
        </span>
      </button>
    );
  };

  return (
    <section id="investimento" ref={ref} className="py-20 bg-dark">
      <div className="container">
        <div className="reveal">
          <div className="text-[11px] font-medium tracking-[0.14em] uppercase text-gold mb-4">Investimento</div>
          <h2 className="font-display text-[clamp(32px,4vw,48px)] font-light leading-[1.15] text-[#F2EDE4] text-balance">
            Monte seu <em className="italic text-gold">plano ideal</em>
          </h2>
          <p className="text-[15px] text-[rgba(242,237,228,0.78)] mt-2 max-w-[560px]">
            Selecione os serviços que deseja contratar. Quanto mais serviços, maior o desconto progressivo.
          </p>

          {/* Discount tiers indicator */}
          <div className="flex flex-wrap gap-3 mt-5">
            {[
              { min: 3, label: "3 serviços", discount: "5% off" },
              { min: 4, label: "4 serviços", discount: "10% off" },
              { min: 5, label: "5+ serviços", discount: "15% off" },
            ].map((tier) => (
              <div
                key={tier.min}
                className={`text-[11px] tracking-[0.06em] uppercase px-3 py-1.5 rounded-full border transition-all duration-500 ${
                  selectedPricedCount >= tier.min
                    ? "border-gold/50 bg-gold/10 text-gold"
                    : "border-[rgba(255,255,255,0.1)] text-[rgba(242,237,228,0.35)]"
                }`}
              >
                {tier.label} → {tier.discount}
              </div>
            ))}
          </div>
        </div>

        {/* Select all */}
        <div className="reveal mt-10 mb-4 flex justify-end">
          <button
            onClick={selectAll}
            className="text-[12px] font-medium tracking-[0.06em] uppercase text-gold/70 hover:text-gold transition-colors duration-300"
          >
            {selected.size === selectableItems.length ? "Desmarcar todos" : "Selecionar todos"}
          </button>
        </div>

        <div className="reveal grid md:grid-cols-2 gap-8">
          {/* Setup */}
          <div className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-xl overflow-hidden">
            <div className="px-6 py-4 bg-[rgba(255,255,255,0.06)] border-b border-[rgba(255,255,255,0.08)] text-[11px] font-medium tracking-[0.12em] uppercase text-gold">
              Entregáveis Únicos (Setup / Projeto)
            </div>
            {setupGroups.map((g) => (
              <div key={g.group}>
                <div className="px-6 py-3 bg-[rgba(255,255,255,0.02)] border-b border-[rgba(255,255,255,0.05)]">
                  <span className="text-[11px] font-medium tracking-[0.08em] uppercase text-primary/80">{g.group}</span>
                </div>
                {g.items.map(renderItem)}
              </div>
            ))}
            <div className="text-xs text-[rgba(242,237,228,0.68)] italic px-6 py-4 border-t border-[rgba(255,255,255,0.05)]">
              * Valores de projeto único, pagamento conforme cronograma.
            </div>
          </div>

          {/* Monthly */}
          <div className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-xl overflow-hidden">
            <div className="px-6 py-4 bg-[rgba(255,255,255,0.06)] border-b border-[rgba(255,255,255,0.08)] text-[11px] font-medium tracking-[0.12em] uppercase text-gold">
              Serviços Recorrentes (por mês)
            </div>
            {monthlyGroups.map((g) => (
              <div key={g.group}>
                <div className="px-6 py-3 bg-[rgba(255,255,255,0.02)] border-b border-[rgba(255,255,255,0.05)]">
                  <span className="text-[11px] font-medium tracking-[0.08em] uppercase text-primary/80">{g.group}</span>
                </div>
                {g.items.map(renderItem)}
              </div>
            ))}
            <div className="text-xs text-[rgba(242,237,228,0.68)] italic px-6 py-4 border-t border-[rgba(255,255,255,0.05)]">
              * Verba de mídia não inclusa no fee. Definida pelo cliente separadamente. Esse valor está contemplado para até R$ 10.000 de investimento.
            </div>
          </div>
        </div>

        {/* Summary */}
        <div
          className="reveal rounded-xl p-7 mt-8 transition-all duration-500"
          style={{
            background: selected.size > 0
              ? "linear-gradient(135deg, hsl(258 30% 20%), hsl(258 30% 16%))"
              : "rgba(255,255,255,0.04)",
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: selected.size > 0 ? "hsl(258 30% 35%)" : "rgba(255,255,255,0.08)",
          }}
        >
          {selected.size === 0 ? (
            <div className="text-center py-4">
              <div className="text-[15px] text-[rgba(242,237,228,0.5)]">
                Selecione os serviços acima para ver o investimento estimado
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-end gap-4">
                <div className="text-right">
                  <div className="text-[11px] font-medium tracking-[0.12em] uppercase text-[rgba(242,237,228,0.5)] mb-1">
                    {selected.size} {selected.size === 1 ? "serviço selecionado" : "serviços selecionados"}
                  </div>

                  {monthlyTotal > 0 && (
                    <div className="mt-3">
                      <div className="text-[12px] text-[rgba(242,237,228,0.55)] mb-1">Recorrente mensal</div>
                      <div className="flex items-baseline justify-end gap-3">
                        {monthlyDiscount.percent > 0 && (
                          <span className="text-[20px] font-display text-[rgba(242,237,228,0.35)] line-through">
                            {formatCurrency(monthlyTotal)}
                          </span>
                        )}
                        <span className="font-display text-[40px] font-light text-gold leading-tight">
                          {formatCurrency(monthlyDiscount.finalValue)}
                        </span>
                        <span className="text-[15px] text-[rgba(242,237,228,0.45)]">/mês</span>
                      </div>
                    </div>
                  )}

                  {setupTotal > 0 && (
                    <div className="mt-3">
                      <div className="text-[12px] text-[rgba(242,237,228,0.55)] mb-1">Entregáveis únicos</div>
                      <div className="flex items-baseline justify-end gap-3">
                        <span className="font-display text-[40px] font-light text-gold leading-tight">
                          {formatCurrency(setupTotal)}
                        </span>
                      </div>
                    </div>
                  )}
                  {selectedSetupUndefined > 0 && (
                    <div className="mt-2">
                      <div className="text-[12px] text-[rgba(242,237,228,0.45)] italic">
                        + {selectedSetupUndefined} {selectedSetupUndefined === 1 ? "serviço" : "serviços"} sob consulta
                      </div>
                    </div>
                  )}
                </div>

                {monthlyDiscount.percent > 0 && (
                  <div className="inline-flex items-center gap-2 bg-gold/15 border border-gold/30 rounded-full px-4 py-2">
                    <span className="text-[12px] font-medium text-gold">
                      🎉 Desconto {monthlyDiscount.label} aplicado
                    </span>
                  </div>
                )}
                {selectedPricedCount > 0 && selectedPricedCount < 3 && monthlyDiscount.percent === 0 && (
                  <div className="text-[13px] text-[rgba(242,237,228,0.5)] text-right">
                    Selecione {3 - selectedPricedCount} {3 - selectedPricedCount === 1 ? "serviço" : "serviços"} a mais para desbloquear 5% de desconto
                  </div>
                )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
