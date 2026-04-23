const mascotImage = `${import.meta.env.BASE_URL}hero-mascot.png`;

export default function HeroMascot() {
  return (
    <div className="relative mx-auto flex w-full max-w-[440px] items-end justify-center overflow-visible">
      <img
        src={mascotImage}
        alt="Mascote 3D da Gamefic"
        className="relative z-10 w-full max-w-[360px] select-none drop-shadow-[0_28px_60px_rgba(8,14,70,0.42)] md:max-w-[410px]"
      />
    </div>
  );
}
