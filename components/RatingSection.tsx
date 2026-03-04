"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Toast } from "@/app/(Dashboard)/_components/Toast";
import { APP_URL } from "@/lib/ProjectId";

const STORAGE_KEY = (projectId: string) => `rating_${projectId}`;

interface RatingSectionProps {
  projectId: string;
  averageRating: number;
  totalRatings: number;
}

export default function RatingSection({
  projectId,
  averageRating,
  totalRatings,
}: RatingSectionProps) {
  const [selectedRating, setSelectedRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [submitted, setSubmitted] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY(projectId));
      if (stored) {
        const value = parseInt(stored, 10);
        if (value >= 1 && value <= 5) setSubmitted(value);
      }
    } catch {}
    setMounted(true);
  }, [projectId]);

  const displayRating = hoverRating || selectedRating;

  const handleStarClick = async (value: number) => {
    if (submitted !== null) return;
    setSelectedRating(value);
    setIsLoading(true);
    try {
      const res = await fetch(`${APP_URL}/api/rating`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ projectId, stars: value }),
      });
      const data = await res.json();
      if (res.ok) {
        setSubmitted(value);
        localStorage.setItem(STORAGE_KEY(projectId), String(value));
        Toast({ icon: "success", message: "شكراً لتقييمك" });
      } else {
        setSelectedRating(0);
        Toast({ icon: "error", message: data.message || "حدث خطأ في التقييم" });
      }
    } catch {
      setSelectedRating(0);
      Toast({ icon: "error", message: "حدث خطأ في التقييم" });
    } finally {
      setIsLoading(false);
    }
  };

  const renderStars = (value: number, interactive = false) => (
    <div className="flex justify-center gap-3" dir="rtl">
      {[1, 2, 3, 4, 5].map((star) => {
        const active = star <= value;
        return interactive ? (
          <motion.button
            key={star}
            type="button"
            aria-label="زر التقييم"
            disabled={isLoading || !mounted}
            onClick={() => handleStarClick(star)}
            onMouseEnter={() => setHoverRating(star)}
            onMouseLeave={() => setHoverRating(0)}
            whileHover={{ scale: 1.25, rotate: -5 }}
            whileTap={{ scale: 0.85 }}
            className="transition disabled:opacity-40">
            <Star
              className="w-10 h-10 drop-shadow-sm"
              style={{
                fill: active ? "var(--accent-gold)" : "transparent",
                color: active ? "var(--accent-gold)" : "var(--low-color)",
                transition: "fill 0.15s, color 0.15s",
              }}
              strokeWidth={2}
            />
          </motion.button>
        ) : (
          <Star
            key={star}
            className="w-10 h-10"
            style={{
              fill: active ? "var(--accent-gold)" : "transparent",
              color: active ? "var(--accent-gold)" : "var(--low-color)",
            }}
            strokeWidth={2}
          />
        );
      })}
    </div>
  );

  return (
    <section
      id="rating"
      dir="rtl"
      className="relative py-28 bg-main-color overflow-hidden">
      {/* Doodles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute top-8 right-[6%] w-20 opacity-10 stroke-white fill-none stroke-2"
          viewBox="0 0 100 100">
          <path d="M50,10 L60,40 L90,40 L65,60 L75,90 L50,70 L25,90 L35,60 L10,40 L40,40 Z" />
        </svg>
        <svg
          className="absolute bottom-10 left-[5%] w-16 opacity-10 stroke-white fill-none stroke-2"
          viewBox="0 0 50 50">
          <circle cx="25" cy="25" r="20" strokeDasharray="5,5" />
        </svg>
        <svg
          className="absolute top-1/2 left-[3%] w-20 opacity-10 stroke-white fill-none stroke-2"
          viewBox="0 0 100 100">
          <path d="M30,30 Q50,10 70,30 T90,70 Q70,90 50,70 T10,30 Z" />
        </svg>
        <svg
          className="absolute top-10 left-[40%] w-14 opacity-10 stroke-white fill-none stroke-2"
          viewBox="0 0 100 100">
          <path d="M20,50 Q40,10 60,50 T100,50" />
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

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 w-full leading-none pointer-events-none">
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

      <div className="max-w-3xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-white/15 backdrop-blur-sm border border-white/30 text-white text-xs font-bold uppercase tracking-[0.25em] px-5 py-2 rounded-full mb-5">
            التقييمات
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-accent-gold -rotate-1 leading-tight mb-4">
            قيّم تجربتك
          </h2>
          <div className="w-16 h-1.5 bg-accent-gold rounded-full mx-auto mb-4" />
          <p className="text-white/80 max-w-xl mx-auto text-lg">
            رأيك يساعدنا على تقديم تجربة ضيافة أفضل دائماً.
          </p>
        </div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="bg-card-background rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] overflow-hidden">
          {/* Stats row */}
          {(averageRating > 0 || totalRatings > 0) && (
            <div className="grid grid-cols-2 divide-x divide-x-reverse divide-main-color/10 border-b border-main-color/10">
              {averageRating > 0 && (
                <div className="py-10 px-6 text-center">
                  <div className="text-6xl font-black text-main-color leading-none mb-2">
                    {averageRating.toFixed(1)}
                  </div>
                  <div className="w-8 h-1 bg-accent-gold rounded-full mx-auto mb-2" />
                  <p className="text-xs font-semibold uppercase tracking-widest text-low-color">
                    متوسط التقييم
                  </p>
                </div>
              )}
              {totalRatings > 0 && (
                <div className="py-10 px-6 text-center">
                  <div className="text-6xl font-black text-main-color leading-none mb-2">
                    {totalRatings}
                  </div>
                  <div className="w-8 h-1 bg-accent-gold rounded-full mx-auto mb-2" />
                  <p className="text-xs font-semibold uppercase tracking-widest text-low-color">
                    {totalRatings === 1 ? "تقييم" : "تقييمات"}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Interaction area */}
          <div className="flex flex-col items-center gap-6 py-14 px-8">
            {submitted !== null && mounted ? (
              <>
                {renderStars(submitted, false)}
                <div className="mt-2 bg-main-color/10 border border-main-color/20 text-main-color text-sm font-black uppercase tracking-widest px-8 py-3 rounded-full">
                  ✅ تم إرسال تقييمك
                </div>
              </>
            ) : (
              <>
                {renderStars(displayRating, true)}
                <p className="text-sm font-semibold uppercase tracking-widest text-low-color min-h-5">
                  {isLoading ? (
                    <span className="text-main-color animate-pulse">
                      جاري الإرسال...
                    </span>
                  ) : mounted ? (
                    "اضغط على النجوم لتقييمنا"
                  ) : (
                    ""
                  )}
                </p>
              </>
            )}
          </div>

          {/* Bottom accent bar */}
          <div className="h-1.5 bg-accent-gold" />
        </motion.div>
      </div>
    </section>
  );
}
