"use client";

import { FooterData } from "@/lib/responseType";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const mapEmbedSrc =
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7247.733529263881!2d46.7653!3d24.731454!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f013bec0d4b7b%3A0xeb4d9048d7b13647!2z2YLZh9mI2KzZiiDZiNi12KjYp9io2YrZhiDZgtmH2YjYqSDYp9mE2LHZitin2LY!5e0!3m2!1sar!2str!4v1728329118756!5m2!1sar!2str";

export default function ContactSection({
  address,
  phone,
  email,
  whatsapp,
}: FooterData & { whatsapp: string }) {
  const formattedWhatsapp = whatsapp?.replace("+", "");

  const contactItems = [
    phone && {
      icon: <Phone className="w-5 h-5" />,
      label: "اتصل بنا",
      value: phone,
      href: `tel:${phone}`,
      ltr: true,
    },
    whatsapp && {
      icon: <FaWhatsapp className="w-5 h-5" />,
      label: "واتساب",
      value: whatsapp,
      href: `https://wa.me/${formattedWhatsapp}`,
      ltr: true,
      external: true,
    },
    email && {
      icon: <Mail className="w-5 h-5" />,
      label: "راسلنا",
      value: email,
      href: `mailto:${email}`,
      ltr: false,
    },
    address && {
      icon: <MapPin className="w-5 h-5" />,
      label: "موقعنا",
      value: address,
      href: null,
      ltr: false,
    },
  ].filter(Boolean) as {
    icon: React.ReactNode;
    label: string;
    value: string;
    href: string | null;
    ltr: boolean;
    external?: boolean;
  }[];

  return (
    <section
      id="contact"
      dir="rtl"
      className="relative bg-main-background py-28 overflow-hidden">
      {/* Doodles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute top-10 left-[5%] w-16 opacity-15 stroke-main-color fill-none stroke-2"
          viewBox="0 0 100 100">
          <path d="M50,10 L60,40 L90,40 L65,60 L75,90 L50,70 L25,90 L35,60 L10,40 L40,40 Z" />
        </svg>
        <svg
          className="absolute bottom-20 right-[4%] w-20 opacity-10 stroke-main-color fill-none stroke-2"
          viewBox="0 0 50 50">
          <circle cx="25" cy="25" r="20" strokeDasharray="5,5" />
        </svg>
        <svg
          className="absolute top-1/3 left-[2%] w-14 opacity-10 stroke-main-color fill-none stroke-2"
          viewBox="0 0 100 100">
          <path d="M20,50 Q40,10 60,50 T100,50" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-main-color text-white text-xs font-bold uppercase tracking-[0.25em] px-5 py-2 rounded-full mb-5">
            تواصل معنا
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-main-black -rotate-1 leading-tight mb-4">
            نسعد بخدمتكم
          </h2>
          <div className="w-16 h-1.5 bg-accent-gold rounded-full mx-auto mb-4" />
          <p className="text-low-color max-w-xl mx-auto text-lg">
            تواصل معنا الآن وسنكون سعداء بالرد عليك وتقديم أفضل خدمة ضيافة.
          </p>
        </div>

        {/* Layout */}
        <div className="grid lg:grid-cols-5 gap-6 items-stretch">
          {/* Contact cards — 2 cols */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {/* Contact items */}
            {contactItems.map((item, i) => (
              <div
                key={i}
                className="bg-card-background rounded-2xl px-6 py-5 flex items-center gap-4
                  shadow-[0_8px_24px_rgba(0,166,133,0.08)] border border-main-color/10
                  hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(0,166,133,0.15)]
                  transition-all duration-200 group">
                {/* Icon bubble */}
                <div
                  className="w-11 h-11 rounded-full bg-main-color/10 flex items-center justify-center text-main-color shrink-0
                  group-hover:bg-main-color group-hover:text-white transition-all duration-200">
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-widest text-low-color mb-0.5">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      dir={item.ltr ? "ltr" : "rtl"}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="text-main-black font-semibold text-sm hover:text-main-color transition-colors truncate block">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-main-black font-semibold text-sm">
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            ))}

            {/* WhatsApp CTA */}
            {whatsapp && (
              <a
                href={`https://wa.me/${formattedWhatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center justify-center gap-3 font-black uppercase text-sm
                  bg-main-color text-white px-7 py-4 rounded-full
                  shadow-[0_6px_0_rgba(0,0,0,0.15)]
                  hover:bg-main-color-dark hover:-translate-y-0.5
                  active:translate-y-1 active:shadow-[0_2px_0_rgba(0,0,0,0.15)]
                  transition-all duration-200">
                <FaWhatsapp className="w-5 h-5" />
                ابدأ المحادثة الآن
              </a>
            )}
          </div>

          {/* Map — 3 cols */}
          <div className="lg:col-span-3 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.12)] min-h-105 relative border border-main-color/10">
            <iframe
              src={mapEmbedSrc}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="موقع الشركة على الخريطة"
              className="absolute inset-0 w-full h-full border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
