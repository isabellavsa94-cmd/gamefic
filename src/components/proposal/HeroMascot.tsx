const mascotImage = `${import.meta.env.BASE_URL}hero-mascot.png`;

export default function HeroMascot() {
  return (
    <div className="relative ml-auto flex w-full items-start justify-end overflow-visible lg:pr-2 xl:pr-4">
      <img
        src={mascotImage}
        alt="Mascote 3D da Gamefic"
        className="relative z-0 h-auto w-full max-w-[560px] origin-top-right select-none drop-shadow-[0_28px_60px_rgba(8,14,70,0.42)] md:max-w-[640px] lg:max-w-[680px] xl:max-w-[740px]"
      />
    </div>
  );
}
