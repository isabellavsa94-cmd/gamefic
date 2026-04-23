const mascotImage = `${import.meta.env.BASE_URL}hero-mascot.png`;

export default function HeroMascot() {
  return (
    <div className="relative ml-auto flex w-full items-start justify-center overflow-visible pt-0 lg:justify-end lg:pr-2 xl:pr-4">
      <img
        src={mascotImage}
        alt="Mascote 3D da Gamefic"
        className="relative z-0 h-auto w-full max-w-[24000px] origin-top-center select-none drop-shadow-[0_28px_60px_rgba(8,14,70,0.42)] md:max-w-[48000px] md:origin-top-right lg:max-w-[51000px] xl:max-w-[55500px]"
      />
    </div>
  );
}
