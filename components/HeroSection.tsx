import Image from "next/image";
import HeroLinks from "./AnimatedComponents/HeroLinks";
import { HeroSectionData } from "@/lib/responseType";

export default function HeroSection({
  headline,
  subheadline,
  whatsApp,
  image,
}: HeroSectionData & {
  image: string;
}) {
  return (
    <section
      id="home"
      className="relative bg-main-color overflow-hidden min-h-screen">
      {/* Doodle background SVGs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <svg
          className="absolute top-[8%] right-[12%] w-16 opacity-[0.15] stroke-white fill-none stroke-2"
          viewBox="0 0 100 100">
          <path d="M50,10 L60,40 L90,40 L65,60 L75,90 L50,70 L25,90 L35,60 L10,40 L40,40 Z" />
        </svg>

        <svg
          className="absolute bottom-[25%] left-[4%] w-20 opacity-10 stroke-white fill-none stroke-2"
          viewBox="0 0 100 100">
          <path d="M30,30 Q50,10 70,30 T90,70 Q70,90 50,70 T10,30 Z" />
        </svg>

        <svg
          className="absolute top-[20%] left-[30%] w-10 opacity-10 stroke-white fill-none stroke-2"
          viewBox="0 0 50 50">
          <circle cx="25" cy="25" r="20" strokeDasharray="5,5" />
        </svg>

        <svg
          className="absolute bottom-[15%] right-[5%] w-14 opacity-10 stroke-white fill-none stroke-2"
          viewBox="0 0 100 100">
          <path d="M20,50 Q40,10 60,50 T100,50" />
          <circle cx="80" cy="30" r="5" />
        </svg>
      </div>

      {/* Floating badge */}
      <div className="absolute top-[12%] right-[42%] z-20 w-16 h-16 rounded-full bg-secondary-accent text-white flex items-center justify-center font-black text-sm rotate-15 shadow-lg">
        جديد
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-0 lg:gap-16 min-h-screen py-24 lg:py-0">
          {/* CONTENT */}
          <div className="flex flex-col justify-center order-2 lg:order-1 py-10 lg:py-0">
            {/* Label */}
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-gold mb-5">
              ضيافة عربية بطابع ملكي
            </p>

            {/* Headline */}
            <h1 className="font-black leading-[1.1] mb-6 text-5xl sm:text-6xl lg:text-7xl -rotate-1">
              {headline?.split(" ").map((word, i) =>
                i === 0 ? (
                  <span key={i} className="text-accent-gold">
                    {word}{" "}
                  </span>
                ) : (
                  <span key={i} className="text-white">
                    {word}{" "}
                  </span>
                ),
              )}
            </h1>

            {/* Divider */}
            <div className="w-14 h-1.5 bg-accent-gold rounded-full mb-6" />

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-xl mb-10">
              {subheadline}
            </p>

            <HeroLinks whatsApp={whatsApp} />

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-10">
              <Stat label="عميل سعيد" value="+500" />
              <Stat label="مناسبات ناجحة" value="+120" />
              <Stat label="قهوجيين محترفين" value="+40" />
              <Stat label="سنوات خبرة" value="+10" />
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative order-1 lg:order-2 flex justify-center items-center py-10 lg:py-0">
            {/* Rotating plate */}
            <div
              className="relative flex items-center justify-center rounded-full bg-white shadow-2xl animate-[rotatePlate_60s_linear_infinite]"
              style={{
                width: "clamp(280px,40vw,460px)",
                height: "clamp(280px,40vw,460px)",
              }}>
              <div className="relative w-[90%] h-[90%] rounded-full overflow-hidden">
                <Image
                  src={image}
                  alt={headline ?? "صورة الضيافة"}
                  fill
                  priority
                  className="object-cover rounded-full"
                  sizes="(min-width: 1024px) 40vw, 80vw"
                />
              </div>
            </div>

            {/* 100% Badge */}
            <div className="absolute bottom-8 left-4 w-20 h-20 rounded-full bg-accent-gold text-main-black flex flex-col items-center justify-center text-center shadow-lg -rotate-10">
              <p className="text-xl font-black leading-none">١٠٠٪</p>
              <p className="text-[9px] font-bold uppercase tracking-wide mt-1">
                سعودية
              </p>
            </div>

            {/* 24h Badge */}
            <div className="absolute top-10 right-2 w-18 h-18 rounded-full bg-main-color-dark text-white flex flex-col items-center justify-center text-center text-xs font-bold shadow-lg rotate-12">
              خدمة
              <br />
              24س
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full z-10 leading-none">
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          className="block w-full h-20">
          <path
            className="fill-main-background"
            d="M0,60L60,53C120,47,240,33,360,37C480,40,600,60,720,63C840,67,960,53,1080,43C1200,33,1320,27,1380,23L1440,20L1440,100L0,100Z"
          />
        </svg>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center justify-center text-center px-3 py-4 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20">
      <p className="text-xl sm:text-2xl font-black leading-none text-white">
        {value}
      </p>
      <p className="mt-1 text-[10px] sm:text-xs font-semibold uppercase tracking-wide text-white/80">
        {label}
      </p>
    </div>
  );
}
