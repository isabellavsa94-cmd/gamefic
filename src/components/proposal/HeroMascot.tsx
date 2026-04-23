const mascotImage = `${import.meta.env.BASE_URL}hero-mascot.png`;

export default function HeroMascot() {
  return (
    <div className="relative mx-auto flex w-full max-w-[980px] items-end justify-center overflow-visible lg:-mb-40 xl:-mb-44">
      <img
        src={mascotImage}
        alt="Mascote 3D da Gamefic"
        className="relative z-0 w-full max-w-[680px] origin-bottom select-none drop-shadow-[0_28px_60px_rgba(8,14,70,0.42)] md:max-w-[780px] lg:max-w-[920px] lg:scale-[1.22] xl:max-w-[980px] xl:scale-[1.3]"
      />
    </div>
  );
}
