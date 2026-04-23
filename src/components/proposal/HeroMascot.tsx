const mascotImage = `${import.meta.env.BASE_URL}hero-mascot.png`;

export default function HeroMascot() {
  return (
    <div className="relative ml-auto flex w-full max-w-[1080px] items-end justify-end overflow-visible lg:-mb-44 lg:-mr-8 lg:-mt-24 xl:-mb-48 xl:-mr-10 xl:-mt-28">
      <img
        src={mascotImage}
        alt="Mascote 3D da Gamefic"
        className="relative z-0 w-full max-w-[720px] origin-bottom select-none drop-shadow-[0_28px_60px_rgba(8,14,70,0.42)] md:max-w-[840px] lg:max-w-[980px] lg:scale-[1.34] xl:max-w-[1080px] xl:scale-[1.42]"
      />
    </div>
  );
}
