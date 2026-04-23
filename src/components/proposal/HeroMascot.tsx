const mascotImage = `${import.meta.env.BASE_URL}hero-mascot.png`;

export default function HeroMascot() {
  return (
    <div className="relative ml-auto flex w-full items-start justify-center overflow-visible pt-0 lg:justify-end lg:pr-2 xl:pr-4">
      <img
        src={mascotImage}
        alt="Mascote 3D da Gamefic"
        className="relative z-0 h-auto w-full max-w-[4800px] origin-top-center select-none drop-shadow-[0_28px_60px_rgba(8,14,70,0.42)] md:max-w-[9600px] md:origin-top-right lg:max-w-[10200px] xl:max-w-[11100px]"
      />
    </div>
  );
}
