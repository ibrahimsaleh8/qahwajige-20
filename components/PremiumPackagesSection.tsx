"use client";

import { PackageData } from "@/lib/responseType";
import { Check } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function PremiumPackagesSection({
  whatsapp,
  packages,
}: {
  whatsapp: string;
  packages: PackageData[];
}) {
  const whatsappNumber = whatsapp.replace("+", "");

  if (!packages?.length) return null;

  return (
    <section
      id="packages"
      dir="rtl"
      className="relative bg-main-background py-28 overflow-hidden">
      {/* Background doodles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute top-10 left-[5%] w-20 opacity-10 stroke-main-color fill-none stroke-2"
          viewBox="0 0 100 100">
          <path d="M50,10 L60,40 L90,40 L65,60 L75,90 L50,70 L25,90 L35,60 L10,40 L40,40 Z" />
        </svg>
        <svg
          className="absolute top-[30%] right-[3%] w-16 opacity-10 stroke-main-color fill-none stroke-2"
          viewBox="0 0 50 50">
          <circle cx="25" cy="25" r="20" strokeDasharray="5,5" />
        </svg>
        <svg
          className="absolute bottom-20 left-[8%] w-24 opacity-10 stroke-main-color fill-none stroke-2"
          viewBox="0 0 100 100">
          <path d="M30,30 Q50,10 70,30 T90,70 Q70,90 50,70 T10,30 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block bg-main-color text-white text-xs font-bold uppercase tracking-[0.25em] px-5 py-2 rounded-full mb-5">
            باقاتنا
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-main-black -rotate-1 leading-tight">
            اختر الباقة المناسبة
          </h2>
          <div className="w-16 h-1.5 bg-accent-gold rounded-full mx-auto mt-6 mb-5" />
          <p className="text-low-color max-w-2xl mx-auto text-lg">
            باقات مصممة بعناية لتقديم تجربة ضيافة سعودية فاخرة تليق بضيوفك.
          </p>
        </div>

        {/* Packages grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {packages.map((pkg, index) => {
            const isFeatured = index === 1;

            const message = encodeURIComponent(
              `مرحباً 👋 أود طلب باقة "${pkg.title}" من فضلكم.`,
            );
            const waLink = `https://wa.me/${whatsappNumber}?text=${message}`;

            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`relative rounded-3xl overflow-hidden flex flex-col
                  ${
                    isFeatured
                      ? "bg-main-color shadow-[0_20px_50px_rgba(0,166,133,0.35)] scale-105 z-10"
                      : "bg-card-background shadow-[0_15px_35px_rgba(0,166,133,0.1)] border border-main-color/10"
                  }`}>
                {/* Featured badge */}
                {isFeatured && (
                  <div className="absolute top-5 left-5 z-20 bg-accent-gold text-main-black text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full -rotate-2">
                    الأكثر طلباً ⭐
                  </div>
                )}

                {/* Image */}
                {pkg.image && (
                  <div className="relative h-52 w-full overflow-hidden">
                    <Image
                      src={pkg.image}
                      alt={pkg.title}
                      fill
                      className="object-cover"
                    />
                    {/* overlay */}
                    <div
                      className={`absolute inset-0 ${isFeatured ? "bg-main-color-dark/40" : "bg-main-black/20"}`}
                    />
                  </div>
                )}

                {/* Content */}
                <div className="flex flex-col flex-1 p-8">
                  {/* Title */}
                  <h3
                    className={`text-2xl md:text-3xl font-extrabold mb-2 ${isFeatured ? "text-accent-gold" : "text-main-black"}`}>
                    {pkg.title}
                  </h3>

                  {/* Divider */}
                  <div
                    className={`w-10 h-1.5 rounded-full mb-6 ${isFeatured ? "bg-accent-gold" : "bg-main-color"}`}
                  />

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-1">
                    {pkg.features?.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <span
                          className={`mt-0.5 shrink-0 w-5 h-5 rounded-full flex items-center justify-center
                          ${isFeatured ? "bg-accent-gold" : "bg-main-color"}`}>
                          <Check
                            className="w-3 h-3 text-white"
                            strokeWidth={3}
                          />
                        </span>
                        <span
                          className={
                            isFeatured ? "text-white/85" : "text-low-color"
                          }>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-3 py-4 rounded-full text-sm font-black uppercase tracking-wide
                      shadow-[0_6px_0_rgba(0,0,0,0.15)] hover:-translate-y-0.5 active:translate-y-1 active:shadow-[0_2px_0_rgba(0,0,0,0.15)]
                      transition-all duration-200
                      ${
                        isFeatured
                          ? "bg-accent-gold text-main-black hover:bg-white"
                          : "bg-main-color text-white hover:bg-main-color-dark"
                      }`}>
                    <FaWhatsapp className="size-5" />
                    اطلب الباقة الآن
                  </a>
                </div>

                {/* Bottom accent bar */}
                <div
                  className={`h-1.5 w-full ${isFeatured ? "bg-accent-gold" : "bg-main-color"}`}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
