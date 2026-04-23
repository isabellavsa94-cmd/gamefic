import BrandLogo from "@/components/proposal/BrandLogo";

export default function Footer() {
  const contactItems = [
    {
      label: "Proposta conduzida por",
      value: "Isabella Vieira Souto",
      href: null,
    },
    {
      label: "E-mail para contato",
      value: "isabellavsa94@gmail.com",
      href: "mailto:isabellavsa94@gmail.com",
    },
    {
      label: "WhatsApp",
      value: "(21) 99767-8292",
      href: "https://wa.me/5521997678292",
    },
  ];

  return (
    <footer className="border-t border-border bg-white py-16">
      <div className="container">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[440px]">
            <div className="flex items-center">
              <BrandLogo className="h-10 w-auto md:h-11" />
            </div>
            <div className="mt-5 font-display text-[32px] font-extrabold leading-[1.05] tracking-[-0.04em] text-primary">
              Uma proposta para transformar presença digital em demanda qualificada.
            </div>
            <p className="mt-4 text-[15px] leading-[1.62] text-slate-600">
              Conteúdo, performance, inbound e conversão integrados para apoiar crescimento com
              mais clareza comercial.
            </p>
          </div>

          <div className="grid gap-4 text-[14px] text-slate-600 md:grid-cols-3">
            {contactItems.map((item) => (
              <div key={item.label} className="gamefic-surface rounded-[24px] p-5">
                <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                  {item.label}
                </div>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    className="mt-2 block font-display text-[18px] font-extrabold text-primary transition-colors hover:text-purple"
                  >
                    {item.value}
                  </a>
                ) : (
                  <div className="mt-2 font-display text-[18px] font-extrabold text-primary">
                    {item.value}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-[12px] uppercase tracking-[0.18em] text-slate-500">
          Proposta confidencial · Gamefic · 2026
        </div>
      </div>
    </footer>
  );
}
