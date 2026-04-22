export default function Footer() {
  return (
    <section className="bg-dark py-16 text-center">
      <div className="container">
        <div className="text-[11px] font-medium tracking-[0.18em] uppercase text-gold mb-6">Isabella Vieira Souto</div>
        <div className="font-display text-4xl font-light italic text-[rgba(242,237,228,0.85)] mb-8">
          "Marketing, tecnologia e resultado — juntos."
        </div>
        <div className="flex justify-center gap-10 flex-wrap">
          {[
            { label: "Head de Marketing e Conteúdo", value: "Isabella Vieira Souto" },
            { label: "E-mail", value: "isabellavieirasouto.mkt@gmail.com" },
            { label: "WhatsApp", value: "+55 21 99767-8292" },
          ].map((c) => (
            <div key={c.label} className="text-[13px] text-[rgba(242,237,228,0.75)]">
              <strong className="text-[rgba(242,237,228,0.85)] block mb-0.5">{c.value}</strong>
              {c.label}
            </div>
          ))}
        </div>
        <div className="mt-10 text-xs text-[rgba(242,237,228,0.5)]">Proposta confidencial · Derm'Attive · 2026</div>
      </div>
    </section>
  );
}
