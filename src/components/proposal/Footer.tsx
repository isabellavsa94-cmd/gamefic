import BrandLogo from "@/components/proposal/BrandLogo";

export default function Footer() {
  const contactItems = [
    {
      kind: "name",
      label: "Proposta conduzida por",
      value: "Isabella Vieira Souto",
      href: null,
    },
    {
      kind: "email",
      label: "E-mail para contato",
      value: "isabellavsa94@gmail.com",
      href: "mailto:isabellavsa94@gmail.com",
    },
    {
      kind: "phone",
      label: "WhatsApp",
      value: "(21) 99767-8292",
      href: "https://wa.me/5521997678292",
    },
  ];

  return (
    <footer className="border-t border-border bg-white py-14">
      <div className="container">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
          <div className="max-w-[500px] lg:flex-[0_0_460px]">
            <div className="flex items-center">
              <BrandLogo className="h-10 w-auto md:h-11" />
            </div>
            <div className="mt-4 font-display text-[28px] font-extrabold leading-[1.04] tracking-[-0.04em] text-primary">
              Uma proposta para transformar presença digital em demanda qualificada.
            </div>
            <p className="mt-3 text-[14px] leading-[1.55] text-slate-600">
              Conteúdo, performance, inbound e conversão integrados para apoiar crescimento com
              mais clareza comercial.
            </p>
          </div>

          <div className="grid gap-5 text-[14px] text-slate-600 sm:grid-cols-2 lg:w-full lg:max-w-[760px] lg:grid-cols-3">
            {contactItems.map((item) => (
              <div
                key={item.label}
                className="min-w-0 border-l-2 border-primary/10 pl-4"
              >
                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {item.label}
                </div>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    className={`mt-2 block text-primary transition-colors hover:text-purple ${
                      item.kind === "email"
                        ? "font-body text-[15px] font-semibold leading-[1.3] break-all md:text-[16px]"
                        : item.kind === "phone"
                          ? "font-display whitespace-nowrap text-[clamp(18px,1.45vw,24px)] font-extrabold leading-[1.08] tracking-[-0.03em]"
                          : "font-display text-[clamp(18px,1.5vw,25px)] font-extrabold leading-[1.08] tracking-[-0.03em]"
                    }`}
                  >
                    {item.value}
                  </a>
                ) : (
                  <div className="mt-2 font-display text-[clamp(18px,1.5vw,25px)] font-extrabold leading-[1.08] tracking-[-0.03em] text-primary">
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
