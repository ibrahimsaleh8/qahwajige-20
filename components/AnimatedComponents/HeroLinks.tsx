"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { ArrowLeft } from "lucide-react";

export default function HeroLinks({
  whatsApp,
}: {
  whatsApp?: string | undefined;
}) {
  return (
    <div className="flex flex-wrap gap-4" dir="rtl">
      {whatsApp && (
        <motion.a
          href={`https://wa.me/${whatsApp.replace(/\+/g, "")}?text=`}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          whileTap={{ scale: 0.97 }}
          whileHover={{ y: -2 }}
          className="flex items-center gap-3 text-sm md:text-base font-bold uppercase tracking-wide
            bg-secondary-accent text-white
            px-8 py-4 rounded-full
            shadow-[0_8px_0_rgba(0,0,0,0.15)]
            transition-colors duration-200
            hover:bg-accent-gold hover:text-main-black
            active:shadow-[0_2px_0_rgba(0,0,0,0.15)] active:translate-y-1">
          <FaWhatsapp className="w-5 h-5" />
          احجز قهوجي لمناسبتك
        </motion.a>
      )}

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.97 }}>
        <Link
          href="#packages"
          className="flex items-center gap-3 text-sm md:text-base font-bold uppercase tracking-wide
            bg-white/15 backdrop-blur-sm text-white
            border-2 border-white/40
            px-8 py-4 rounded-full
            shadow-[0_8px_0_rgba(0,0,0,0.1)]
            transition-all duration-200
            hover:bg-accent-gold hover:text-main-black hover:border-accent-gold
            active:shadow-[0_2px_0_rgba(0,0,0,0.1)] active:translate-y-1">
          شاهد الباقات
          <ArrowLeft className="w-5 h-5" />
        </Link>
      </motion.div>
    </div>
  );
}
