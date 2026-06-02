"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/* ─── Images ─────────────────────────────────────────────────── */
const IMAGES = [
  "https://res.cloudinary.com/dd5f5j2ni/image/upload/v1780425528/e4064ae8-13ce-4069-a52f-6a1d002c419e_wo9rrl.png",
  "https://res.cloudinary.com/dd5f5j2ni/image/upload/v1780425616/cf25d449-75ec-4b2f-8988-d5ede2b0f7f9_qmyeb9.png",
  "https://res.cloudinary.com/dd5f5j2ni/image/upload/v1780425730/b7b93bee-f5bb-482e-aa7f-02b717605365_zrjwdo.png",
  "https://res.cloudinary.com/dd5f5j2ni/image/upload/v1780425836/d5632784-8545-4f84-b8d2-9ef4255ab28e_zerkch.png",
  "https://res.cloudinary.com/dd5f5j2ni/image/upload/v1780425881/27c6c362-9880-43c5-8b18-31252eac2738_cwszgj.png",
  "https://res.cloudinary.com/dd5f5j2ni/image/upload/v1780426033/a574e137-d8f1-48a1-8b9e-eac49140af71_ypasax.png",
  "https://res.cloudinary.com/dd5f5j2ni/image/upload/v1780426089/957c797f-ca0d-4de3-8f85-0e5444a97fd1_jm2xzn.png",
  "https://res.cloudinary.com/dd5f5j2ni/image/upload/v1780426177/0b66ffda-668f-4f20-8003-da7839f18cb0_tkdpgs.png",
];

/* ─── Desktop: 4-column parallax ────────────────────────────── */
function DesktopParallax() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(900);

  useEffect(() => {
    setHeight(window.innerHeight);
    const onResize = () => setHeight(window.innerHeight);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: galleryRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  const cols = [
    { images: [IMAGES[0], IMAGES[1]], y: y1, marginTop: "-45%" },
    { images: [IMAGES[2], IMAGES[3]], y: y2, marginTop: "-95%" },
    { images: [IMAGES[4], IMAGES[5]], y: y3, marginTop: "-45%" },
    { images: [IMAGES[6], IMAGES[7]], y: y4, marginTop: "-75%" },
  ];

  return (
    <div
      ref={galleryRef}
      style={{
        height: "175vh",
        display: "flex",
        gap: "2vw",
        padding: "2vw",
        overflow: "hidden",
        background: "#0A0A0F",
      }}
    >
      {cols.map((col, ci) => (
        <motion.div
          key={ci}
          style={{ y: col.y, flex: 1, marginTop: col.marginTop }}
        >
          {col.images.map((src, ii) => (
            <div
              key={ii}
              style={{
                width: "100%",
                aspectRatio: "3/4",
                borderRadius: "12px",
                overflow: "hidden",
                marginBottom: "2vw",
              }}
            >
              <img
                src={src}
                alt={`Galeria ${ci * 2 + ii + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          ))}
        </motion.div>
      ))}
    </div>
  );
}

/* ─── Mobile: 2-column parallax (unchanged) ─────────────────── */
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

  const y1 = useTransform(scrollYProgress, [0, 1], [0, vh * 0.8]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, vh * 1.2]);

  const imgStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
    borderRadius: "10px",
  };

  return (
    <div
      ref={galleryRef}
      style={{ height: "120vh", display: "flex", gap: "8px", padding: "8px", overflow: "hidden" }}
    >
      {/* Column 1 — slower */}
      <motion.div style={{ y: y1, flex: 1, marginTop: "-20%" }}>
        {IMAGES.slice(0, 4).map((src, i) => (
          <div key={i} style={{ aspectRatio: "3/4", marginBottom: "8px" }}>
            <img src={src} alt={`Galeria ${i + 1}`} style={imgStyle} />
          </div>
        ))}
      </motion.div>

      {/* Column 2 — faster */}
      <motion.div style={{ y: y2, flex: 1, marginTop: "-40%" }}>
        {IMAGES.slice(4, 8).map((src, i) => (
          <div key={i} style={{ aspectRatio: "3/4", marginBottom: "8px" }}>
            <img src={src} alt={`Galeria ${i + 5}`} style={imgStyle} />
          </div>
        ))}
      </motion.div>
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
    <section id="galeria" style={{ overflow: "hidden" }}>
      {isMobile ? <MobileParallax /> : <DesktopParallax />}
    </section>
  );
}
