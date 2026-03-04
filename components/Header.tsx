"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowLeft } from "lucide-react";
import { HeaderData } from "@/lib/responseType";
import Link from "next/link";

const navLinks = [
  { href: "/#about", label: "من نحن" },
  { href: "/#services", label: "خدماتنا" },
  { href: "/#events", label: "فعالياتنا" },
  { href: "/blog", label: "خدمات الضيافة" },
  { href: "/#packages", label: "باقاتنا" },
  { href: "/#gallery", label: "ألبوم الصور" },
  { href: "/#contact", label: "اتصل بنا" },
];

type HeaderProps = HeaderData & { whatsapp: string };

export function Header({ brandName, whatsapp }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMobileMenuOpen(false);

  const waHref = `https://wa.me/${whatsapp.includes("+") ? whatsapp.split("+").join("") : whatsapp}?text=`;

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300
       bg-white backdrop-blur-md shadow-[0_4px_24px_rgba(0,166,133,0.12)]`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20" dir="rtl">
          {/* Logo */}
          <Link href="/" className="group">
            <span
              className="inline-block font-black text-base md:text-2xl leading-none
              text-main-color -rotate-1
              group-hover:text-main-color-dark group-hover:rotate-0
              transition-all duration-200">
              {brandName}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/70 backdrop-blur-sm border border-main-color/15 rounded-full px-3 py-1.5 shadow-[0_4px_16px_rgba(0,166,133,0.08)]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-1.5 rounded-full text-sm font-semibold text-main-black
                  hover:bg-main-color hover:text-white
                  transition-all duration-200">
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMenu}
              className="lg:hidden w-10 h-10 rounded-full bg-main-color/10 flex items-center justify-center text-main-color
                hover:bg-main-color hover:text-white transition-all duration-200">
              {isMobileMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </button>

            <a
              target="_blank"
              href={waHref}
              className="flex items-center gap-2 font-black md:text-sm text-xs uppercase tracking-wide
                bg-main-color text-white md:px-6 md:py-3 px-3 py-3 rounded-full
                shadow-[0_4px_0_rgba(0,0,0,0.15)]
                hover:bg-main-color-dark hover:-translate-y-0.5
                active:translate-y-0.5 active:shadow-[0_1px_0_rgba(0,0,0,0.15)]
                transition-all duration-200">
              احجز الآن
              <ArrowLeft className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mx-4 mb-3 rounded-2xl bg-white
              shadow-[0_20px_40px_rgba(0,166,133,0.15)] border border-main-color/10 overflow-hidden">
            <nav className="flex flex-col px-4 py-3" dir="rtl">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}>
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className="flex items-center gap-3 py-3 border-b border-main-color/8 last:border-0
                      text-main-black font-semibold text-sm
                      hover:text-main-color transition-colors duration-200 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-gold/50 group-hover:bg-main-color shrink-0 transition-colors duration-200" />
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <a
                target="_blank"
                href={waHref}
                className="flex items-center justify-center gap-2 mt-4 mb-1
                  bg-main-color text-white py-3.5 rounded-xl font-black text-sm uppercase tracking-wide
                  shadow-[0_4px_0_rgba(0,0,0,0.12)] hover:bg-main-color-dark
                  transition-all duration-200">
                احجز الآن
                <ArrowLeft className="w-4 h-4" />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
