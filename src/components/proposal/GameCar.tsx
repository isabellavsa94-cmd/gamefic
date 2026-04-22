import { useEffect, useRef } from "react";

const carImage = `${import.meta.env.BASE_URL}hero-car.png`;

export default function GameCar() {
  const frameRef = useRef<HTMLDivElement>(null);
  const carRef = useRef<HTMLImageElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const update = () => {
      raf = 0;

      const frame = frameRef.current;
      const car = carRef.current;
      const trail = trailRef.current;
      const glow = glowRef.current;

      if (!frame || !car || !trail || !glow) return;

      const hero = frame.closest("section");
      if (!hero) return;

      const rect = hero.getBoundingClientRect();
      const distanceScrolled = Math.max(0, -rect.top);
      const totalDistance = Math.max(rect.height * 0.72, 1);
      const progress = Math.min(1, distanceScrolled / totalDistance);
      const eased = reduceMotion ? 0 : Math.pow(progress, 2.4);

      const x = eased * window.innerWidth * 0.72;
      const y = eased * 28;
      const rotate = eased * 7;
      const scale = 1 - eased * 0.08;
      const trailWidth = 28 + eased * 210;
      const trailOpacity = 0.18 + eased * 0.5;
      const glowScale = 1 + eased * 0.55;

      car.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${rotate}deg) scale(${scale})`;
      trail.style.width = `${trailWidth}px`;
      trail.style.opacity = `${trailOpacity}`;
      trail.style.transform = `translate3d(${x * 0.32}px, ${8 + eased * 18}px, 0) scaleX(${1 + eased * 0.9})`;
      glow.style.transform = `translate3d(${x * 0.2}px, 0, 0) scale(${glowScale})`;
      glow.style.opacity = `${0.32 - eased * 0.18}`;
    };

    const requestTick = () => {
      if (!raf) raf = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestTick, { passive: true });
    window.addEventListener("resize", requestTick);

    return () => {
      window.removeEventListener("scroll", requestTick);
      window.removeEventListener("resize", requestTick);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={frameRef} className="relative mx-auto w-full max-w-[820px] overflow-visible">
      <div
        ref={trailRef}
        className="absolute left-[10%] top-[50%] h-10 -translate-y-1/2 rounded-full bg-[linear-gradient(90deg,rgba(255,214,66,0),rgba(255,214,66,0.95))] blur-[10px]"
        style={{ width: 28, opacity: 0.18, willChange: "transform, width, opacity" }}
      />
      <div
        ref={glowRef}
        className="absolute inset-x-[16%] bottom-10 h-14 rounded-full bg-[rgba(11,19,83,0.26)] blur-3xl"
        style={{ willChange: "transform, opacity" }}
      />
      <img
        ref={carRef}
        src={carImage}
        alt="Carrinho pixel art da Gamefic"
        className="relative w-full h-auto select-none drop-shadow-[0_28px_65px_rgba(12,18,78,0.42)]"
        style={{ imageRendering: "pixelated", willChange: "transform" }}
      />
    </div>
  );
}
