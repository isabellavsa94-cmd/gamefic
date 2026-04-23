const mascotImage = `${import.meta.env.BASE_URL}hero-mascot.png`;

export default function HeroMascot() {
  return (
    <div className="relative ml-auto flex w-full items-start justify-center overflow-visible pt-0">
      <img
        src={mascotImage}
        alt="Mascote 3D da Gamefic"
        className="relative z-0 h-auto w-[170%] max-w-none origin-top-center translate-x-0 translate-y-[-10%] select-none drop-shadow-[0_28px_60px_rgba(8,14,70,0.42)] sm:w-[160%] md:w-[155%] md:origin-top-center md:translate-x-0 md:translate-y-[-12%] lg:w-[136%] lg:origin-top-right lg:translate-x-[18%] lg:translate-y-[-1%] xl:w-[142%] xl:translate-x-[20%] xl:translate-y-[-3%]"
      />
    </div>
  );
}
