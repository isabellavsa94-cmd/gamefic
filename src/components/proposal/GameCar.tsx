export default function GameCar() {
  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      <div className="absolute inset-x-[14%] bottom-6 h-16 rounded-full bg-[rgba(2,10,70,0.28)] blur-3xl" />

      <svg
        viewBox="0 0 760 420"
        className="relative w-full h-auto drop-shadow-[0_28px_60px_rgba(10,16,70,0.38)]"
        aria-hidden="true"
      >
        <ellipse cx="380" cy="348" rx="248" ry="24" fill="rgba(6,16,76,0.18)" />

        <g transform="translate(50 36)">
          <path
            d="M132 220L88 192L118 178L178 196L202 176L252 170L236 202L132 220Z"
            fill="#ffc42e"
          />
          <path
            d="M164 198L122 168L146 156L206 176L226 156L266 150L252 182L164 198Z"
            fill="#ff8a1f"
          />

          <path
            d="M462 132L544 154L560 190L510 176L444 150Z"
            fill="#ffc42e"
          />
          <path
            d="M448 144L520 168L528 198L478 184L434 164Z"
            fill="#ff8a1f"
          />

          <path
            d="M154 270C174 224 238 188 314 176H444C480 176 520 192 552 220L612 272L596 300H144L154 270Z"
            fill="#ff3658"
          />

          <path
            d="M228 212C262 180 310 162 346 162H430C462 162 494 174 518 196L548 222H228V212Z"
            fill="#ff5a3f"
          />

          <path
            d="M250 214C284 186 324 172 354 172H424C444 172 468 182 490 198L520 222H250V214Z"
            fill="#8729ff"
            opacity="0.92"
          />

          <path
            d="M268 216C296 194 330 182 358 182H416C434 182 454 190 474 204L496 222H268V216Z"
            fill="#4ae4ff"
          />

          <path
            d="M214 232H548V252H198L214 232Z"
            fill="#ff8a1f"
          />

          <path
            d="M560 232H606L632 252H574L560 232Z"
            fill="#ffc42e"
          />

          <path
            d="M142 292H602L590 316H130L142 292Z"
            fill="#7d0f41"
          />

          <path
            d="M200 252L236 246L256 270L198 272L200 252Z"
            fill="#ffcf42"
          />

          <circle cx="234" cy="306" r="48" fill="#4e1645" />
          <circle cx="234" cy="306" r="28" fill="#ffcb2f" />
          <circle cx="234" cy="306" r="12" fill="#ff5d33" />

          <circle cx="520" cy="306" r="48" fill="#4e1645" />
          <circle cx="520" cy="306" r="28" fill="#ffcb2f" />
          <circle cx="520" cy="306" r="12" fill="#ff5d33" />

          <circle cx="156" cy="286" r="10" fill="#ffcb2f" />
          <circle cx="592" cy="268" r="10" fill="#ffcb2f" />

          <rect x="350" y="200" width="12" height="24" rx="6" fill="#1732ff" />
          <rect x="412" y="200" width="12" height="24" rx="6" fill="#1732ff" />
        </g>
      </svg>
    </div>
  );
}
