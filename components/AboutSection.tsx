import { AboutSectionData, WhyUsFeatureData } from "@/lib/responseType";

export default function AboutSection({
  description1,
  label,
  title,
  features,
  whyUsDescription,
}: AboutSectionData & {
  features?: WhyUsFeatureData[];
  whyUsDescription: string;
}) {
  return (
    <section
      id="about"
      dir="rtl"
      className="bg-main-background overflow-hidden">
      {/* ── HEADER + DESCRIPTION ── side by side layout */}
      <div className="relative py-24 px-6">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg
            className="absolute top-10 left-[5%] w-24 opacity-10 stroke-main-color fill-none stroke-2"
            viewBox="0 0 100 100">
            <path d="M20,50 Q40,10 60,50 T100,50" />
          </svg>
          <svg
            className="absolute bottom-10 right-[4%] w-16 opacity-10 stroke-main-color fill-none stroke-2"
            viewBox="0 0 50 50">
            <circle cx="25" cy="25" r="20" strokeDasharray="5,5" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left — title */}
          <div>
            <span className="inline-block bg-main-color text-white text-xs font-bold uppercase tracking-[0.25em] px-5 py-2 rounded-full mb-6">
              {label}
            </span>
            <h2 className="text-5xl md:text-6xl font-extrabold leading-tight text-main-black -rotate-1 mb-6">
              {title}
            </h2>
            <div className="w-16 h-1.5 bg-accent-gold rounded-full mb-8" />

            {/* Inline stats */}
            <div className="flex gap-8">
              <div>
                <p className="text-4xl font-black text-main-color leading-none">
                  ٥٠٠+
                </p>
                <p className="text-xs font-semibold uppercase tracking-widest text-low-color mt-2">
                  مناسبة ناجحة
                </p>
              </div>
              <div className="w-px bg-main-color/15" />
              <div>
                <p className="text-4xl font-black text-main-color leading-none">
                  ١٠+
                </p>
                <p className="text-xs font-semibold uppercase tracking-widest text-low-color mt-2">
                  سنوات خبرة
                </p>
              </div>
              <div className="w-px bg-main-color/15" />
              <div>
                <p className="text-4xl font-black text-main-color leading-none">
                  ١٠٠٪
                </p>
                <p className="text-xs font-semibold uppercase tracking-widest text-low-color mt-2">
                  رضا العملاء
                </p>
              </div>
            </div>
          </div>

          {/* Right — description card */}
          {description1 && (
            <div className="relative">
              {/* decorative blob behind card */}
              <div className="absolute -top-6 -right-6 w-48 h-48 rounded-full bg-main-color/8 blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-accent-gold/15 blur-xl" />

              <div className="relative bg-card-background rounded-3xl p-10 shadow-[0_20px_50px_rgba(0,166,133,0.12)] border border-main-color/10">
                {/* quote mark */}
                <div className="text-6xl font-black text-main-color/20 leading-none mb-4 select-none">
                  {'"'}
                </div>
                <p className="text-lg leading-relaxed text-low-color">
                  {description1}
                </p>
                <div className="mt-6 h-1 rounded-full bg-linear-to-l from-accent-gold via-main-color to-transparent" />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── WHY US ── diagonal band */}
      {whyUsDescription && (
        <div className="relative py-28 px-6 bg-second-background overflow-hidden">
          {/* diagonal teal shape */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-main-color/5 skew-y-2 origin-top-left" />
            <svg
              className="absolute top-8 right-[8%] w-20 opacity-15 stroke-main-color fill-none stroke-2"
              viewBox="0 0 100 100">
              <path d="M50,10 L60,40 L90,40 L65,60 L75,90 L50,70 L25,90 L35,60 L10,40 L40,40 Z" />
            </svg>
            <svg
              className="absolute bottom-8 left-[6%] w-16 opacity-10 stroke-main-color fill-none stroke-2"
              viewBox="0 0 100 100">
              <path d="M30,30 Q50,10 70,30 T90,70 Q70,90 50,70 T10,30 Z" />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 items-center">
              {/* Big label */}
              <div className="text-center lg:text-right">
                <span className="inline-block bg-main-color text-white text-xs font-bold uppercase tracking-[0.25em] px-5 py-2 rounded-full mb-5">
                  لماذا نحن؟
                </span>
                <h3 className="text-4xl md:text-6xl font-extrabold text-main-black -rotate-1 leading-tight">
                  الفرق الذي <span className="text-main-color">تشعر به</span>
                </h3>
                <div className="w-16 h-1.5 bg-accent-gold rounded-full mt-6 lg:mr-0 mx-auto" />
              </div>

              {/* Description + accent */}
              <div className="bg-card-background rounded-3xl p-10 shadow-[0_15px_35px_rgba(0,166,133,0.1)] border border-main-color/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-accent-gold/10 -translate-y-8 translate-x-8" />
                <p className="text-lg leading-relaxed text-low-color relative z-10">
                  {whyUsDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── FEATURES ── alternating row layout */}
      {features && features.length > 0 && (
        <div className="py-24 px-6 bg-main-background">
          <div className="max-w-5xl mx-auto space-y-5">
            {features.map((item, index) => (
              <div
                key={index}
                className={`group flex items-start gap-8 bg-card-background rounded-3xl p-8
                  shadow-[0_10px_30px_rgba(0,166,133,0.08)] border border-main-color/10
                  hover:shadow-[0_16px_40px_rgba(0,166,133,0.16)] hover:-translate-y-1
                  transition-all duration-300
                  ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
                {/* Number */}
                <div
                  className="shrink-0 w-16 h-16 rounded-2xl bg-main-color flex items-center justify-center font-black text-white text-xl
                  group-hover:bg-accent-gold group-hover:text-main-black group-hover:rotate-3
                  transition-all duration-300">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h4 className="text-xl font-extrabold text-main-black mb-2">
                    {item.title}
                  </h4>
                  <div className="w-8 h-1 rounded-full bg-accent-gold mb-3 group-hover:w-14 transition-all duration-300" />
                  <p className="text-low-color leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
