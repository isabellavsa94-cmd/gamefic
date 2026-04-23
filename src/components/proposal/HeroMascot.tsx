const mascotImage = `${import.meta.env.BASE_URL}hero-mascot.png`;

export default function HeroMascot() {
  return (
    <div className="relative mx-auto flex w-full max-w-[440px] items-end justify-center overflow-visible">
      <div className="absolute bottom-10 h-24 w-[72%] rounded-full bg-[radial-gradient(circle,rgba(0,255,141,0.28)_0%,rgba(27,40,140,0.14)_48%,transparent_76%)] blur-2xl" />
      <div className="absolute inset-x-[12%] top-[8%] h-[72%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.18)_0%,transparent_72%)] blur-3xl" />
      <img
        src={mascotImage}
        alt="Mascote 3D da Gamefic"
        className="relative z-10 w-full max-w-[360px] select-none drop-shadow-[0_28px_60px_rgba(8,14,70,0.42)] md:max-w-[410px]"
      />
    </div>
  );
}
