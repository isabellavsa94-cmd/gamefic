const photos = [
  { src: "https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop", caption: "Cuidado facial" },
  { src: "https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop", caption: "Linha corporal" },
  { src: "https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop", caption: "Dermocosméticos" },
  { src: "https://images.pexels.com/photos/3018845/pexels-photo-3018845.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop", caption: "Beleza real" },
];

export default function PhotoStrip() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 h-[240px] md:h-[340px] overflow-hidden">
      {photos.map((p) => (
        <div key={p.caption} className="relative overflow-hidden photo-zoom group">
          <img src={p.src} alt={p.caption} className="w-full h-full object-cover object-top" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark/55 pointer-events-none" />
          <span className="absolute bottom-4 left-4 text-[11px] font-medium tracking-[0.1em] uppercase text-[rgba(255,255,255,0.8)] z-[2]">
            {p.caption}
          </span>
        </div>
      ))}
    </div>
  );
}
