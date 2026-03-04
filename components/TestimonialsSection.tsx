"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "من أفضل تجارب الضيافة التي مررت بها، القهوة كانت رائعة والفريق محترف جداً.",
    author: "خالد القحطاني",
    role: "مناسبة خاصة",
    stars: 5,
    featured: false,
    initial: "خ",
  },
  {
    quote:
      "ضيوفنا لم يتوقفوا عن المديح طوال الحفل. خدمة راقية بكل المقاييس وتنظيم لا يُضاهى.",
    author: "نورة السبيعي",
    role: "حفل استقبال رسمي",
    stars: 5,
    featured: true,
    initial: "ن",
  },
  {
    quote:
      "شركاء موثوقون في كل فعالياتنا. الالتزام بالمواعيد والجودة العالية جعلنا نعود إليهم دائماً.",
    author: "شركة مدى للتطوير",
    role: "فعالية شركات",
    stars: 5,
    featured: false,
    initial: "م",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      dir="rtl"
      className="relative py-28 bg-second-background overflow-hidden">
      {/* Doodles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute top-10 right-[5%] w-16 opacity-15 stroke-main-color fill-none stroke-2"
          viewBox="0 0 100 100">
          <path d="M50,10 L60,40 L90,40 L65,60 L75,90 L50,70 L25,90 L35,60 L10,40 L40,40 Z" />
        </svg>
        <svg
          className="absolute bottom-16 left-[4%] w-20 opacity-10 stroke-main-color fill-none stroke-2"
          viewBox="0 0 50 50">
          <circle cx="25" cy="25" r="20" strokeDasharray="5,5" />
        </svg>
        <svg
          className="absolute top-1/2 right-[2%] w-14 opacity-10 stroke-main-color fill-none stroke-2"
          viewBox="0 0 100 100">
          <path d="M20,50 Q40,10 60,50 T100,50" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-main-color text-white text-xs font-bold uppercase tracking-[0.25em] px-5 py-2 rounded-full mb-5">
            آراء العملاء
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-main-black -rotate-1 leading-tight mb-4">
            ماذا قالوا عنّا؟
          </h2>
          <div className="w-16 h-1.5 bg-accent-gold rounded-full mx-auto mb-4" />
          <p className="text-low-color max-w-xl mx-auto text-lg">
            ثقة مستمرة من عملائنا في مختلف المناسبات الخاصة والرسمية.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.author}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              className={`relative rounded-3xl p-8 flex flex-col gap-5 overflow-hidden
                hover:-translate-y-1 transition-all duration-300 group
                ${
                  item.featured
                    ? "bg-main-color shadow-[0_20px_50px_rgba(0,166,133,0.35)] scale-105 z-10"
                    : "bg-card-background shadow-[0_15px_35px_rgba(0,166,133,0.1)] border border-main-color/10"
                }`}>
              {/* Featured badge */}
              {item.featured && (
                <div className="absolute top-5 left-5 bg-accent-gold text-main-black text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full -rotate-2">
                  الأعلى تقييماً ⭐
                </div>
              )}

              {/* Quote icon */}
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center
                ${item.featured ? "bg-white/15" : "bg-main-color/10"}
                group-hover:scale-110 transition-transform duration-300`}>
                <Quote
                  className={`w-5 h-5 ${item.featured ? "text-accent-gold" : "text-main-color"}`}
                />
              </div>

              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: item.stars }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-accent-gold text-accent-gold"
                    strokeWidth={1.5}
                  />
                ))}
              </div>

              {/* Quote text */}
              <p
                className={`leading-relaxed text-base flex-1 ${item.featured ? "text-white/90" : "text-low-color"}`}>
                {item.quote}
              </p>

              {/* Divider */}
              <div
                className={`h-px ${item.featured ? "bg-white/20" : "bg-main-color/10"}`}
              />

              {/* Author row */}
              <div className="flex items-center gap-4">
                {/* Avatar circle */}
                <div
                  className={`w-11 h-11 rounded-full flex items-center justify-center font-black text-lg shrink-0
                  ${item.featured ? "bg-accent-gold text-main-black" : "bg-main-color text-white"}`}>
                  {item.initial}
                </div>
                <div>
                  <p
                    className={`font-bold text-sm ${item.featured ? "text-white" : "text-main-black"}`}>
                    {item.author}
                  </p>
                  <p
                    className={`text-xs mt-0.5 ${item.featured ? "text-white/60" : "text-low-color"}`}>
                    {item.role}
                  </p>
                </div>
              </div>

              {/* Bottom accent */}
              <div
                className={`h-1.5 rounded-full -mx-8 -mb-8 mt-1 ${item.featured ? "bg-accent-gold" : "bg-main-color"}`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
