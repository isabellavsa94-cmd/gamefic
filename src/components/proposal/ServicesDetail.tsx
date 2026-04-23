import { useReveal } from "@/hooks/useReveal";
import { proposalGroups } from "@/components/proposal/proposalData";

interface ServicesDetailProps {
  activeId: string | null;
}

export default function ServicesDetail({ activeId }: ServicesDetailProps) {
  const ref = useReveal();
  const activeGroup = proposalGroups.find((group) => group.id === activeId);

  if (!activeGroup) {
    return null;
  }

  return (
    <div id="services-detail" ref={ref} className="reveal mt-8 md:mt-10">
      <div className="mb-5 rounded-[26px] bg-[linear-gradient(135deg,#2447ff_8%,#2f35f5_38%,#8800e3_100%)] px-5 py-5 text-white shadow-[0_24px_60px_rgba(25,48,130,0.16)] md:mb-6 md:rounded-[32px] md:px-8 md:py-8">
        <div className="flex flex-col items-start gap-3 md:flex-row md:items-center md:gap-5">
          <span className="font-numbers text-[34px] font-extrabold leading-none text-accent md:text-[clamp(36px,4vw,48px)]">
            {activeGroup.num}
          </span>
          <div>
            <h3 className="font-display text-[26px] font-extrabold leading-[1.05] tracking-[-0.04em] md:text-[clamp(24px,2.8vw,34px)]">
              {activeGroup.title}
            </h3>
            <p className="mt-1 text-[13px] leading-[1.5] text-white/72 md:text-[14px]">
              {activeGroup.subtitle}
            </p>
          </div>
        </div>
      </div>

      <div className="relative">
        {activeGroup.services.length > 1 && (
          <div className="pointer-events-none absolute left-[28px] top-0 hidden h-full w-px bg-[linear-gradient(180deg,rgba(36,71,255,0.18),rgba(136,0,227,0.18))] md:block" />
        )}

        <div
          className={`grid grid-cols-1 gap-4 ${
            activeGroup.services.length > 1 ? "xl:grid-cols-2" : ""
          }`}
        >
          {activeGroup.services.map((service) => (
            <article
              key={service.id}
              className="group relative overflow-hidden rounded-[24px] border border-[#d7defa] bg-[linear-gradient(180deg,#ffffff_0%,#f7f9ff_100%)] p-4 shadow-[0_18px_40px_rgba(28,54,126,0.08)] transition-all duration-300 hover:-translate-y-1 md:rounded-[30px] md:p-6"
            >
              <div className="absolute inset-x-0 top-0 h-1" style={{ background: activeGroup.badgeColor }} />

              <div className="relative flex items-start gap-4">
                <div className="relative z-10 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-[16px] font-numbers text-[12px] font-extrabold text-white shadow-[0_14px_28px_rgba(36,71,255,0.22)] md:h-14 md:w-14 md:rounded-[20px] md:text-[14px]" style={{ background: activeGroup.badgeColor }}>
                  {service.num}
                </div>
                <div className="min-w-0 flex-1">
                  <span className="inline-flex rounded-full bg-secondary px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-primary md:text-[10px]">
                    {service.category}
                  </span>
                  <h4 className="mt-3 font-display text-[22px] font-extrabold leading-[1.08] tracking-[-0.04em] text-primary md:text-[24px]">
                    {service.title}
                  </h4>
                  <div className="mt-3 space-y-3 text-[13px] leading-[1.56] text-slate-600 md:text-[14px] md:leading-[1.6]">
                    {service.descriptions.map((description, index) => (
                      <p
                        key={index}
                        dangerouslySetInnerHTML={{ __html: description }}
                        className="[&_strong]:font-semibold [&_strong]:text-slate-900"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {service.highlight && (
                <div className="mt-5 rounded-[20px] border border-primary/10 bg-[linear-gradient(135deg,rgba(35,71,255,0.06),rgba(136,0,227,0.08))] p-3.5 md:rounded-[24px] md:p-4">
                  <p
                    className="text-[12px] leading-[1.5] text-slate-700 [&_strong]:font-semibold [&_strong]:text-primary md:text-[13px] md:leading-[1.55]"
                    dangerouslySetInnerHTML={{ __html: service.highlight }}
                  />
                </div>
              )}

              <div className="mt-5">
                <div className="mb-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500 md:text-[11px]">
                  {service.deliverablesTitle || "O que entra nessa frente"}
                </div>
                <div className="grid gap-2 sm:grid-cols-2">
                  {service.deliverables.map((deliverable, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2 rounded-[16px] border border-[#e5eafe] bg-white px-3 py-3 text-[12px] leading-[1.5] text-slate-700 md:rounded-[18px] md:px-4 md:text-[13px] md:leading-[1.55]"
                    >
                      <span
                        className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full"
                        style={{ background: activeGroup.badgeColor }}
                      />
                      <span
                        dangerouslySetInnerHTML={{ __html: deliverable }}
                        className="[&_strong]:font-semibold [&_strong]:text-slate-900"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
