import Image from "next/image";
import { ServicesSectionData } from "@/lib/responseType";

type GalleryImageData = {
  url: string;
  alt?: string | undefined;
};

export default function ServicesSection({
  description,
  items,
  label,
  title,
  images,
}: ServicesSectionData & {
  images: GalleryImageData[];
}) {
  return (
    <section
      id="services"
      dir="rtl"
      className="relative bg-second-background overflow-hidden py-28">
      {/* Doodles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute top-12 left-[4%] w-20 opacity-10 stroke-main-color fill-none stroke-2"
          viewBox="0 0 100 100">
          <path d="M50,10 L60,40 L90,40 L65,60 L75,90 L50,70 L25,90 L35,60 L10,40 L40,40 Z" />
        </svg>
        <svg
          className="absolute bottom-20 right-[3%] w-16 opacity-10 stroke-main-color fill-none stroke-2"
          viewBox="0 0 50 50">
          <circle cx="25" cy="25" r="20" strokeDasharray="5,5" />
        </svg>
        <svg
          className="absolute top-[40%] left-[1%] w-14 opacity-8 stroke-main-color fill-none stroke-2"
          viewBox="0 0 100 100">
          <path d="M20,50 Q40,10 60,50 T100,50" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* ── HEADER ── */}
        <div className="grid lg:grid-cols-2 gap-10 items-end mb-20">
          <div>
            <span className="inline-block bg-main-color text-white text-xs font-bold uppercase tracking-[0.25em] px-5 py-2 rounded-full mb-5">
              {label}
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold text-main-black -rotate-1 leading-tight">
              {title}
            </h2>
            <div className="w-16 h-1.5 bg-accent-gold rounded-full mt-6" />
          </div>
          <div className="flex flex-col justify-end">
            <p className="text-low-color text-lg leading-relaxed max-w-md">
              {description}
            </p>
          </div>
        </div>

        {/* ── SERVICE CARDS ── */}
        {items && items.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {items.map((card, index) => {
              const img = images?.[index];
              const isLarge =
                index === 0 ||
                (items.length % 2 !== 0 && index === items.length - 1);

              return (
                <div
                  key={card.title}
                  className={`group relative bg-card-background rounded-3xl overflow-hidden
                    shadow-[0_15px_35px_rgba(0,166,133,0.1)] border border-main-color/10
                    hover:-translate-y-2 hover:shadow-[0_24px_50px_rgba(0,166,133,0.2)]
                    transition-all duration-300
                    ${isLarge ? "md:col-span-2" : ""}
                  `}>
                  <div
                    className={`flex flex-col ${isLarge ? "md:flex-row" : ""}`}>
                    {/* Image */}
                    <div
                      className={`relative overflow-hidden shrink-0
                      ${isLarge ? "md:w-[45%] h-100 md:h-auto" : "h-100 w-full"}`}>
                      {img?.url ? (
                        <>
                          <Image
                            src={img.url}
                            alt={img.alt ?? (card.title as string)}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          {/* overlay */}
                          <div className="absolute inset-0 bg-linear-to-t from-main-color-dark/50 via-transparent to-transparent" />
                        </>
                      ) : (
                        <div className="w-full h-full bg-main-color/10 flex items-center justify-center">
                          <span className="text-7xl font-black text-main-color/20">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>
                      )}

                      {/* Number badge over image */}
                      <div
                        className="absolute top-4 right-4 w-11 h-11 rounded-xl bg-accent-gold text-main-black font-black text-sm flex items-center justify-center shadow-[0_4px_0_rgba(0,0,0,0.15)] z-10
                        group-hover:rotate-3 group-hover:scale-110 transition-all duration-300">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-center p-8 md:p-10 flex-1">
                      <h3 className="text-xl md:text-2xl font-extrabold text-main-black mb-3 leading-tight group-hover:text-main-color transition-colors duration-300">
                        {card.title}
                      </h3>

                      <div className="w-8 h-1.5 rounded-full bg-accent-gold mb-5 group-hover:w-16 transition-all duration-300" />

                      <p className="text-low-color leading-relaxed text-sm md:text-base">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
