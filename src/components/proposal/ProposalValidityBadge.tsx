import { useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "gamefic_proposal_opened_at";
const VALIDITY_MS = 15 * 24 * 60 * 60 * 1000;

const getOpenedAt = () => {
  if (typeof window === "undefined") return Date.now();

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored) {
    const parsed = Number(stored);
    if (Number.isFinite(parsed) && parsed > 0) return parsed;
  }

  const now = Date.now();
  window.localStorage.setItem(STORAGE_KEY, String(now));
  return now;
};

const formatRemaining = (remainingMs: number) => {
  if (remainingMs <= 0) {
    return { days: "00", hours: "00", minutes: "00" };
  }

  const totalMinutes = Math.floor(remainingMs / (1000 * 60));
  const days = Math.floor(totalMinutes / (60 * 24));
  const hours = Math.floor((totalMinutes % (60 * 24)) / 60);
  const minutes = totalMinutes % 60;

  return {
    days: String(days).padStart(2, "0"),
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
  };
};

export default function ProposalValidityBadge() {
  const [remaining, setRemaining] = useState(VALIDITY_MS);
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const openedAt = getOpenedAt();
    const expiresAt = openedAt + VALIDITY_MS;

    const update = () => {
      const nextRemaining = Math.max(0, expiresAt - Date.now());
      setRemaining(nextRemaining);
      setIsExpired(nextRemaining <= 0);
    };

    update();
    const interval = window.setInterval(update, 1000 * 30);

    return () => window.clearInterval(interval);
  }, []);

  const formatted = useMemo(() => formatRemaining(remaining), [remaining]);

  return (
    <div className="mt-6 flex w-full justify-center">
      <div className="flex min-w-[240px] max-w-[320px] items-center justify-center gap-3 rounded-[20px] border border-white/16 bg-[rgba(3,10,60,0.24)] px-4 py-3 text-center">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#ffbe17] text-[28px] font-black leading-none text-white shadow-[0_8px_20px_rgba(255,190,23,0.24)]">
          !
        </div>
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/62">
            Validade da proposta
          </div>
          <div className="mt-1 font-display text-[20px] font-extrabold leading-none tracking-[-0.04em] text-white">
            {isExpired
              ? "Encerrada"
              : `${formatted.days}d ${formatted.hours}h ${formatted.minutes}m`}
          </div>
        </div>
      </div>
    </div>
  );
}
