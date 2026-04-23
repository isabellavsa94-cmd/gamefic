const mascotImage = `${import.meta.env.BASE_URL}hero-mascot.png`;

export default function HeroMascot() {
  return (
    <div className="relative mx-auto flex w-full max-w-[820px] items-end justify-center overflow-visible lg:-mb-28 xl:-mb-32">
      <img
        src={mascotImage}
        alt="Mascote 3D da Gamefic"
        className="relative z-0 w-full max-w-[560px] select-none drop-shadow-[0_28px_60px_rgba(8,14,70,0.42)] md:max-w-[640px] lg:max-w-[760px] xl:max-w-[820px]"
      />
    </div>
  );
}
