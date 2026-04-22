export default function PhotoCollage() {
  return (
    <div className="my-12 rounded-xl overflow-hidden">
      <div className="grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr] md:grid-rows-2 gap-[3px] h-auto md:h-[480px]">
        <div className="overflow-hidden relative md:row-span-2 h-[240px] md:h-auto photo-zoom">
          <img src="https://images.pexels.com/photos/4937645/pexels-photo-4937645.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop" alt="Retrato" className="w-full h-full object-cover object-top" loading="lazy" />
        </div>
        <div className="overflow-hidden h-[160px] md:h-auto photo-zoom">
          <img src="https://images.pexels.com/photos/12585853/pexels-photo-12585853.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop" alt="Aplicando produto" className="w-full h-full object-cover object-top" loading="lazy" />
        </div>
        <div className="overflow-hidden h-[160px] md:h-auto photo-zoom">
          <img src="https://images.pexels.com/photos/3373716/pexels-photo-3373716.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop" alt="Beleza natural" className="w-full h-full object-cover object-top" loading="lazy" />
        </div>
        <div className="overflow-hidden h-[160px] md:h-auto photo-zoom">
          <img src="https://images.pexels.com/photos/26588407/pexels-photo-26588407.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop" alt="Sardas" className="w-full h-full object-cover object-top" loading="lazy" />
        </div>
        <div className="overflow-hidden h-[160px] md:h-auto photo-zoom">
          <img src="https://images.pexels.com/photos/5927784/pexels-photo-5927784.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop" alt="Máscara facial" className="w-full h-full object-cover object-top" loading="lazy" />
        </div>
      </div>
    </div>
  );
}
