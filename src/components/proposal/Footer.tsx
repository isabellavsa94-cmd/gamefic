import BrandLogo from "@/components/proposal/BrandLogo";

export default function Footer() {
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
            {[
              { label: "Responsável pela proposta", value: "Isabella Vieira Souto" },
              { label: "E-mail", value: "isabellavsa94@gmail.com" },
              { label: "WhatsApp", value: "+55 21 99767-8292" },
            ].map((item) => (
              <div key={item.label} className="gamefic-surface rounded-[24px] p-5">
                <div className="font-display text-[18px] font-extrabold text-primary">{item.value}</div>
                <div className="mt-1 text-[12px] uppercase tracking-[0.16em] text-slate-500">
                  {item.label}
                </div>
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
