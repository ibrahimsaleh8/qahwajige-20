import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "قهوجين وصبابين الرياض",
    short_name: "قهوجين وصبابين الرياض",
    description:
      "خدمات قهوجين وصبابين الرياض للمناسبات والأفراح والفعاليات مع تقديم القهوة العربية والضيافة الراقية في جميع أحياء الرياض.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#f9fdfb",
    theme_color: "#1f4d45",
    lang: "ar",
    dir: "rtl",
    icons: [
      {
        src: "/icons/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icons/icon-512x512-maskable.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
