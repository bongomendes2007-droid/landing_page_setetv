"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/* ─── Gallery images ─────────────────────────────────────────── */
/* Replace src values with your actual gallery photo URLs.         */
const IMAGES = [
  { src: "https://res.cloudinary.com/dnth1inmv/image/upload/v1779911660/James_Almeida_tvzehb.png",               alt: "Cobertura 1" },
  { src: "https://res.cloudinary.com/dnth1inmv/image/upload/v1779911660/Ilanna_Lima_mroszt.png",                 alt: "Cobertura 2" },
  { src: "https://res.cloudinary.com/dnth1inmv/image/upload/v1779911660/Lorena_Morais_vkcxri.png",               alt: "Cobertura 3" },
  { src: "https://res.cloudinary.com/dnth1inmv/image/upload/v1779911660/Bruna_Le%C3%A3o_q4ckxp.png",            alt: "Cobertura 4" },
  { src: "https://res.cloudinary.com/dnth1inmv/image/upload/v1779911659/Adriano_Magno_sqldqc.png",               alt: "Cobertura 5" },
  { src: "https://res.cloudinary.com/dnth1inmv/image/upload/v1779911659/Rafael_S%C3%A9rgio_ybfj2f.png",         alt: "Cobertura 6" },
  { src: "https://res.cloudinary.com/dnth1inmv/image/upload/v1779911659/Yasmin_Silva_mjob73.png",                alt: "Cobertura 7" },
  { src: "https://res.cloudinary.com/dnth1inmv/image/upload/v1779911659/Amadeu_Bruno_shxjsz.png",               alt: "Cobertura 8" },
];

const IMG_STYLE: React.CSSProperties = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
  borderRadius: "10px",
};

/* ─── Mobile: two-column parallax ───────────────────────────── */
function MobileParallax() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [vh, setVh] = useState(800);

  useEffect(() => {
    setVh(window.innerHeight);
    const onResize = () => setVh(window.innerHeight);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: galleryRef,
    offset: ["start end", "end start"],
  });

  // Column 1: slower (80 % of vh travel)
  const y1 = useTransform(scrollYProgress, [0, 1], [0, vh * 0.8]);
  // Column 2: faster (120 % of vh travel)
  const y2 = useTransform(scrollYProgress, [0, 1], [0, vh * 1.2]);

  return (
    <div
      ref={galleryRef}
      style={{
        height: "120vh",
        display: "flex",
        gap: "8px",
        padding: "8px",
        overflow: "hidden",
      }}
    >
      {/* Column 1 — starts 20 % above, scrolls at 0.8× speed */}
      <motion.div
        style={{ y: y1, flex: 1, marginTop: "-20%" }}
      >
        {IMAGES.slice(0, 4).map((img, i) => (
          <div
            key={i}
            style={{ aspectRatio: "3/4", marginBottom: "8px" }}
          >
            <img src={img.src} alt={img.alt} style={IMG_STYLE} />
          </div>
        ))}
      </motion.div>

      {/* Column 2 — starts 40 % above, scrolls at 1.2× speed */}
      <motion.div
        style={{ y: y2, flex: 1, marginTop: "-40%" }}
      >
        {IMAGES.slice(4, 8).map((img, i) => (
          <div
            key={i}
            style={{ aspectRatio: "3/4", marginBottom: "8px" }}
          >
            <img src={img.src} alt={img.alt} style={IMG_STYLE} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

/* ─── Desktop: static 4-column grid ─────────────────────────── */
function DesktopGrid() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "12px",
      }}
    >
      {IMAGES.map((img, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
          style={{ aspectRatio: "3/4", borderRadius: "12px", overflow: "hidden" }}
        >
          <img src={img.src} alt={img.alt} style={IMG_STYLE} />
        </motion.div>
      ))}
    </div>
  );
}

/* ─── Section ────────────────────────────────────────────────── */
export default function GaleriaParallax() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <section
      id="galeria"
      style={{
        background: "#0a0a0a",
        padding: isMobile ? "0" : "80px 0",
        overflow: "hidden",
      }}
    >
      {!isMobile && (
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            style={{ marginBottom: 48 }}
          >
            <span
              style={{
                fontFamily: "Inter, system-ui, sans-serif",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#8B5CF6",
                display: "block",
                marginBottom: "12px",
              }}
            >
              Galeria
            </span>
            <h2
              style={{
                fontFamily: "Inter, system-ui, sans-serif",
                fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                fontWeight: 800,
                letterSpacing: "-0.04em",
                color: "#fff",
                lineHeight: 1.1,
              }}
            >
              Nossa cobertura em imagens
            </h2>
          </motion.div>
          <DesktopGrid />
        </div>
      )}

      {isMobile && <MobileParallax />}
    </section>
  );
}
