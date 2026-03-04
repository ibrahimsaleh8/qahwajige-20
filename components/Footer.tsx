"use client";

import { FooterData } from "@/lib/responseType";
import { Mail, MapPin, Phone } from "lucide-react";
import {
  FaInstagram,
  FaTiktok,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";

export default function Footer({
  address,
  phone,
  brandName,
  email,
  description,
}: FooterData & { description?: string }) {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/qahwajeyn",
      label: "انستقرام",
    },
    {
      icon: FaTiktok,
      href: "https://www.tiktok.com/@user61719922769991",
      label: "تيك توك",
    },
    {
      icon: FaFacebookF,
      href: "https://www.facebook.com/SbabinAlkahwaa/?_rdr",
      label: "فيسبوك",
    },
    { icon: FaTwitter, href: "https://x.com/NghmAbw11703", label: "تويتر" },
    {
      icon: FaYoutube,
      href: "https://www.youtube.com/channel/UCProSRhVIgB-Bkn6_NPrMng",
      label: "يوتيوب",
    },
  ];

  const footerLinks = [
    { name: "الرئيسية", href: "/#home" },
    { name: "عن الشركة", href: "/#about" },
    { name: "خدماتنا", href: "/#services" },
    { name: "باقاتنا", href: "/#packages" },
    { name: "اتصل بنا", href: "/#contact" },
  ];

  return (
    <footer dir="rtl" className="relative bg-main-color overflow-hidden">
      {/* Doodles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute top-12 right-[5%] w-24 opacity-10 stroke-white fill-none stroke-2"
          viewBox="0 0 100 100">
          <path d="M50,10 L60,40 L90,40 L65,60 L75,90 L50,70 L25,90 L35,60 L10,40 L40,40 Z" />
        </svg>
        <svg
          className="absolute bottom-24 left-[4%] w-20 opacity-10 stroke-white fill-none stroke-2"
          viewBox="0 0 50 50">
          <circle cx="25" cy="25" r="20" strokeDasharray="5,5" />
        </svg>
        <svg
          className="absolute top-1/3 left-[8%] w-16 opacity-10 stroke-white fill-none stroke-2"
          viewBox="0 0 100 100">
          <path d="M20,50 Q40,10 60,50 T100,50" />
        </svg>
        <svg
          className="absolute bottom-40 right-[15%] w-20 opacity-10 stroke-white fill-none stroke-2"
          viewBox="0 0 100 100">
          <path d="M30,30 Q50,10 70,30 T90,70 Q70,90 50,70 T10,30 Z" />
        </svg>
      </div>

      {/* Wave top */}
      <div className="absolute top-0 left-0 w-full leading-none pointer-events-none rotate-180">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="block w-full h-14">
          <path
            className="fill-main-background"
            d="M0,40L60,35C120,30,240,20,360,25C480,30,600,50,720,53C840,56,960,43,1080,35C1200,27,1320,22,1380,20L1440,18L1440,80L0,80Z"
          />
        </svg>
      </div>

      {/* ── CTA BANNER ── */}
      <div className="relative z-10 pt-24 pb-16 px-6 text-center border-b border-white/15">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block bg-white backdrop-blur-sm border border-white/30 text-black text-xs font-bold uppercase tracking-[0.25em] px-5 py-2 rounded-full mb-6">
            هل أنت مستعد؟
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-accent-gold -rotate-1 leading-tight mb-4">
            ارفع مستوى ضيافتك اليوم
          </h2>
          <div className="w-16 h-1.5 bg-accent-gold rounded-full mx-auto mb-6" />

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/#contact"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-full font-black uppercase text-sm
                bg-accent-gold text-main-black
                shadow-[0_6px_0_rgba(0,0,0,0.15)]
                hover:bg-white hover:-translate-y-0.5
                active:translate-y-1 active:shadow-[0_2px_0_rgba(0,0,0,0.15)]
                transition-all duration-200">
              احجز مناسبتك الآن
            </Link>

            {phone && (
              <a
                href={`tel:${phone}`}
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-full font-black uppercase text-sm
                  bg-white/5 backdrop-blur-sm text-white border-2 border-white/40
                  shadow-[0_6px_0_rgba(0,0,0,0.1)]
                  hover:bg-white hover:text-main-color hover:-translate-y-0.5
                  active:translate-y-1 active:shadow-[0_2px_0_rgba(0,0,0,0.1)]
                  transition-all duration-200">
                <Phone className="w-4 h-4" />
                تواصل عبر الهاتف
              </a>
            )}
          </div>
        </div>
      </div>

      {/* ── MAIN GRID ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <div className="inline-block bg-accent-gold text-main-black font-black text-2xl px-5 py-2 rounded-2xl -rotate-1 mb-5 shadow-[0_4px_0_rgba(0,0,0,0.15)]">
            {brandName}
          </div>
          {description && (
            <p className="text-white leading-relaxed max-w-xs text-sm mt-4">
              {description}
            </p>
          )}
          {/* Social */}
          <div className="flex gap-3 mt-8 flex-wrap">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/15 border border-white/25 flex items-center justify-center text-white
                    hover:bg-accent-gold hover:text-main-black hover:border-accent-gold hover:scale-110
                    transition-all duration-200">
                  <Icon size={15} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Nav links */}
        <div>
          <p className="text-white font-black uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
            <span className="w-6 h-0.5 bg-accent-gold rounded-full" />
            روابط سريعة
          </p>
          <ul className="space-y-3">
            {footerLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-white/90 hover:text-accent-gold transition-colors duration-200 text-sm font-semibold flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-gold/40 group-hover:bg-accent-gold transition-colors duration-200 shrink-0" />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <p className="text-white font-black uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
            <span className="w-6 h-0.5 bg-accent-gold rounded-full" />
            معلومات التواصل
          </p>

          <div className="space-y-4">
            {address && (
              <div className="flex items-start gap-3 text-white/90 text-sm">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-accent-gold" />
                </div>
                <span className="leading-relaxed">{address}</span>
              </div>
            )}
            {email && (
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-3 text-white/90 hover:text-accent-gold transition-colors duration-200 text-sm group">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-accent-gold/20 transition-colors duration-200">
                  <Mail className="w-3.5 h-3.5 text-accent-gold" />
                </div>
                {email}
              </a>
            )}
            {phone && (
              <a
                href={`tel:${phone}`}
                className="flex items-center gap-3 text-white/90 hover:text-accent-gold transition-colors duration-200 text-sm group">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-accent-gold/20 transition-colors duration-200">
                  <Phone className="w-3.5 h-3.5 text-accent-gold" />
                </div>
                {phone}
              </a>
            )}
          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="relative z-10 border-t border-white/15 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-white/90 text-xs">
          <p>
            © {currentYear} {brandName}. جميع الحقوق محفوظة.
          </p>
          <div className="w-8 h-1 bg-accent-gold rounded-full" />
          <p>خدمة ضيافة عربية أصيلة في الرياض</p>
        </div>
      </div>
    </footer>
  );
}
