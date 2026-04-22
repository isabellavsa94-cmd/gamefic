import { useReveal } from "@/hooks/useReveal";

interface ServiceSectionProps {
  id: string;
  num: string;
  category: string;
  title: string;
  descriptions: string[];
  deliverables: string[];
  deliverablesTitle?: string;
  highlight?: string;
  badgeColor?: string;
  badge?: string;
  image?: string;
  imageAlt?: string;
}

export default function ServiceSection({
  id, num, category, title, descriptions, deliverables,
  deliverablesTitle = "Entregas", highlight, badgeColor, badge,
  image, imageAlt,
}: ServiceSectionProps) {
  const ref = useReveal();

  return (
    <div
      ref={ref}
      id={id}
      className="reveal bg-background border border-border rounded-2xl overflow-hidden"
    >
      {/* Service header strip */}
      <div className="flex items-center gap-4 px-7 py-5 border-b border-border bg-card">
        <div
          className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center font-numbers text-[15px] font-medium text-primary-foreground"
          style={{ background: badgeColor || "hsl(var(--primary))" }}
        >
          {num}
        </div>
        <div className="min-w-0">
          <div className="text-[10px] font-medium tracking-[0.14em] uppercase text-muted-foreground">{category}</div>
          <div className="font-display text-[clamp(18px,2.2vw,24px)] font-normal text-foreground leading-[1.25]">{title}</div>
        </div>
        {badge && (
          <span className="ml-auto flex-shrink-0 inline-flex items-center gap-1.5 bg-rose-light border border-rose/25 rounded-full px-3 py-1 text-[10px] font-medium tracking-[0.08em] uppercase text-rose whitespace-nowrap">
            {badge}
          </span>
        )}
      </div>

      {/* Body: image left + content right */}
      <div className={`flex flex-col ${image ? 'md:flex-row items-stretch' : ''}`}>
        {/* Vertical image on the left */}
        {image && (
          <div className="w-full md:w-[320px] lg:w-[360px] flex-shrink-0 h-[240px] md:h-auto relative overflow-hidden">
            <img
              src={image}
              alt={imageAlt || title}
              className="absolute inset-0 w-full h-full object-cover object-[60%_center]"
              loading="lazy"
            />
          </div>
        )}

        {/* Text content */}
        <div className="flex-1 px-7 py-7 min-w-0">
          <div className="flex flex-col gap-8">
            {/* Descriptions */}
            <div className="text-[15px] text-dark-muted leading-[1.8] space-y-3.5">
              {descriptions.map((d, i) => (
                <p key={i} dangerouslySetInnerHTML={{ __html: d }} className="[&_strong]:text-foreground [&_strong]:font-medium" />
              ))}
              {highlight && (
                <div className="bg-gold-light border border-gold/20 rounded-lg p-5 mt-5">
                  <p className="text-[13px] text-dark-muted leading-relaxed [&_strong]:text-foreground" dangerouslySetInnerHTML={{ __html: highlight }} />
                </div>
              )}
            </div>

            {/* Deliverables */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h4 className="text-[11px] font-medium tracking-[0.12em] uppercase text-secondary-foreground mb-4">{deliverablesTitle}</h4>
              <ul className="flex flex-col gap-2">
                {deliverables.map((d, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-dark-muted leading-snug">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-[7px]" />
                    <span dangerouslySetInnerHTML={{ __html: d }} className="[&_strong]:text-foreground [&_.pendente]:text-destructive [&_.pendente]:italic [&_.pendente]:text-xs" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
