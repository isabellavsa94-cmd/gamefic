const mascotImage = `${import.meta.env.BASE_URL}hero-mascot.png`;

export default function HeroMascot() {
  return (
    <div className="relative mx-auto flex w-full max-w-[920px] items-end justify-center overflow-visible lg:-mb-32 xl:-mb-36">
      <img
        src={mascotImage}
        alt="Mascote 3D da Gamefic"
        className="relative z-0 w-full max-w-[620px] select-none drop-shadow-[0_28px_60px_rgba(8,14,70,0.42)] md:max-w-[720px] lg:max-w-[860px] xl:max-w-[920px]"
      />
    </div>
  );
}
