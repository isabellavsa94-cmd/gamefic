export default function LevelUpBadge() {
  return (
    <div className="relative mx-auto w-full max-w-[280px]">
      <div className="absolute left-3 top-16 text-white/90">
        <Sparkle className="h-5 w-5" />
      </div>
      <div className="absolute right-5 top-12 text-white/90">
        <Sparkle className="h-7 w-7" />
      </div>
      <div className="absolute left-10 top-3 text-white/80">
        <Sparkle className="h-4 w-4" />
      </div>

      <div className="mx-auto flex h-28 w-24 items-end justify-center rounded-t-[28px] bg-[linear-gradient(180deg,#bf98ff_0%,#7f63ff_52%,#5746d8_100%)] shadow-[0_20px_50px_rgba(84,70,216,0.28)]">
        <div className="mb-[-18px] h-0 w-0 border-l-[74px] border-r-[74px] border-t-[92px] border-l-transparent border-r-transparent border-t-[#6d56ea]" />
      </div>

      <div className="relative -mt-5 flex items-end justify-center">
        <Star className="relative z-[2] -mr-2 h-28 w-28 text-[#ffd54d] drop-shadow-[0_8px_20px_rgba(255,185,36,0.38)]" />
        <Star className="relative z-[3] h-40 w-40 text-[#ffcf42] drop-shadow-[0_12px_30px_rgba(255,185,36,0.4)]" />
        <Star className="relative z-[2] -ml-2 h-28 w-28 text-[#ffd54d] drop-shadow-[0_8px_20px_rgba(255,185,36,0.38)]" />
      </div>

      <div className="relative z-[4] -mt-7 text-center">
        <div className="font-display text-[34px] font-extrabold uppercase leading-none tracking-[-0.05em] text-white [text-shadow:_0_4px_0_#5c43d5,_0_8px_18px_rgba(49,32,136,0.32)]">
          Level
        </div>
        <div className="mt-1 font-display text-[42px] font-extrabold uppercase leading-none tracking-[-0.06em] text-white [text-shadow:_0_4px_0_#5c43d5,_0_8px_18px_rgba(49,32,136,0.32)]">
          Up!
        </div>
      </div>
    </div>
  );
}

function Star({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        stroke="#efb22b"
        strokeWidth="4"
        d="M60 8L74 42L110 45L82 68L90 104L60 84L30 104L38 68L10 45L46 42L60 8Z"
      />
      <path
        fill="rgba(255,255,255,0.25)"
        d="M60 20L69 43L93 45L74 61L79 84L60 72L41 84L46 61L27 45L51 43L60 20Z"
      />
    </svg>
  );
}

function Sparkle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={className} aria-hidden="true" fill="currentColor">
      <path d="M10 0L12.4 7.6L20 10L12.4 12.4L10 20L7.6 12.4L0 10L7.6 7.6L10 0Z" />
    </svg>
  );
}
