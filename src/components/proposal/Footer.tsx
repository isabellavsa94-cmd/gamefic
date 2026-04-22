function LogoMark() {
  return (
    <div className="relative h-10 w-10 rounded-2xl border-2 border-primary">
      <div className="absolute inset-[7px] rounded-xl border border-primary/80" />
      <div className="absolute inset-[13px] rounded-lg border border-primary/60" />
      <div className="absolute inset-[5px] rotate-45 rounded-xl border border-primary/40" />
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white py-16">
      <div className="container">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[440px]">
            <div className="flex items-center gap-3">
              <LogoMark />
              <div className="font-display text-[34px] font-extrabold tracking-[-0.06em] text-primary">
                gamefic
              </div>
            </div>
            <div className="mt-5 font-display text-[32px] font-extrabold leading-[1.05] tracking-[-0.04em] text-primary">
              Proposta comercial modular para a Gamefic.
            </div>
            <p className="mt-4 text-[15px] leading-[1.8] text-slate-600">
              Esta versao do site consolida o modulo de Social Media e prepara os escopos de
              Trafego Pago, Inbound com RD Station e Criacao de Site.
            </p>
          </div>

          <div className="grid gap-4 text-[14px] text-slate-600 md:grid-cols-3">
            {[
              { label: "Responsavel pela proposta", value: "Isabella Vieira Souto" },
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
