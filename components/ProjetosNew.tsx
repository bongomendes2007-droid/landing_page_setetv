"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const COLLAPSED = 72;
const EXPANDED_D = 460;
const EXPANDED_M = 560;

const projetos = [
  {
    city: "ALTOS – PI",
    name: "Festa da Manga 2026",
    bg: "linear-gradient(135deg, #2d5a1b 0%, #4a7c2f 100%)",
    image: "https://res.cloudinary.com/df2xyllxf/image/upload/v1780353546/0cb0a5d3-8093-4a5e-acde-c05c5f87c9d2_qu5bhh.png",
    metrics: [
      { value: "10K", label: "pessoas estimadas" },
      { value: "3",   label: "dias de evento" },
      { value: "4",   label: "transmissões ao vivo" },
    ],
  },
  {
    city: "ÁGUA BRANCA – PI",
    name: "Carnaval Água Branca 2026",
    bg: "linear-gradient(135deg, #6b1535 0%, #9b2550 100%)",
    image: "https://res.cloudinary.com/df2xyllxf/image/upload/v1780353892/d31dfcbc-124e-4600-a630-82cddd50a68c_kvkwlf.png",
    metrics: [
      { value: "12K", label: "pessoas/dia" },
      { value: "4",   label: "dias de evento" },
      { value: "8",   label: "transmissões ao vivo" },
    ],
  },
  {
    city: "UNIÃO – PI",
    name: "Carnaval União 2026",
    bg: "linear-gradient(135deg, #0f2850 0%, #1a4080 100%)",
    image: "https://res.cloudinary.com/df2xyllxf/image/upload/v1780353797/39b610eb-f8ac-423d-a76a-3f6e4c2edf74_jbmrxi.png",
    metrics: [
      { value: "9K", label: "pessoas/dia" },
      { value: "3",  label: "dias de evento" },
      { value: "6",  label: "transmissões ao vivo" },
    ],
  },
  {
    city: "CAMPO MAIOR – PI",
    name: "Corso 2026",
    bg: "linear-gradient(135deg, #6b2d55 0%, #9b4578 100%)",
    image: "https://res.cloudinary.com/df2xyllxf/image/upload/v1780352445/thumbs_foyqa0.jpg",
    metrics: [
      { value: "8K", label: "pessoas estimadas" },
      { value: "1",  label: "dia de evento" },
      { value: "5",  label: "transmissões ao vivo" },
    ],
  },
];

export default function ProjetosNew() {
  const [activeCard, setActiveCard] = useState(0);
  const [btnHover, setBtnHover] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [visible, setVisible] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const el = triggerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const expandedH = isMobile ? EXPANDED_M : EXPANDED_D;

  return (
    <section
      id="projetos"
      className="section-dark"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "100px 24px 120px" }}
    >
      {/* Section header */}
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <span style={{
          display: "block",
          fontSize: 12,
          letterSpacing: "0.15em",
          color: "#8B5CF6",
          textTransform: "uppercase",
          marginBottom: 16,
          fontFamily: "Inter, sans-serif",
          fontWeight: 600,
        }}>
          PROJETOS
        </span>
        <h2 style={{
          fontSize: "clamp(28px, 5vw, 42px)",
          fontWeight: 700,
          color: "#FFFFFF",
          margin: "0 0 16px",
          fontFamily: "Inter, sans-serif",
          letterSpacing: "-0.02em",
          lineHeight: 1.1,
        }}>
          Eventos que cobrimos
        </h2>
        <p style={{
          fontSize: 16,
          color: "rgba(255,255,255,0.5)",
          margin: 0,
          fontFamily: "Inter, sans-serif",
        }}>
          Presença jornalística em cada canto do Piauí
        </p>
      </div>

      {/* Accordion */}
      <div ref={triggerRef} style={{ maxWidth: 1100, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: "flex", flexDirection: "column", gap: 8 }}
        >
          {projetos.map((p, i) => (
            <motion.div
              key={i}
              style={{
                background: p.bg,
                borderRadius: 20,
                overflow: "hidden",
                cursor: "pointer",
                position: "relative",
              }}
              animate={{ height: activeCard === i ? expandedH : COLLAPSED }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setActiveCard(i)}
              onHoverStart={() => setActiveCard(i)}
            >
              {/* Strip header — always visible */}
              <div style={{
                height: COLLAPSED,
                display: "flex",
                alignItems: "center",
                padding: "0 28px",
                gap: 16,
                position: "relative",
                zIndex: 2,
              }}>
                <span style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.35)",
                  fontFamily: "Inter, sans-serif",
                  letterSpacing: "0.08em",
                  flexShrink: 0,
                }}>
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div style={{ flex: 1, overflow: "hidden" }}>
                  <span style={{
                    fontSize: 10,
                    color: "rgba(255,255,255,0.45)",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    display: "block",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 500,
                  }}>
                    {p.city}
                  </span>
                  <span style={{
                    fontSize: 15,
                    fontWeight: 600,
                    color: "#fff",
                    fontFamily: "Inter, sans-serif",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "block",
                  }}>
                    {p.name}
                  </span>
                </div>

                <motion.span
                  animate={{ rotate: activeCard === i ? 180 : 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    color: "rgba(255,255,255,0.4)",
                    fontSize: 10,
                    flexShrink: 0,
                    display: "inline-block",
                    lineHeight: 1,
                  }}
                >
                  ▼
                </motion.span>
              </div>

              {/* Expanded content */}
              <AnimatePresence>
                {activeCard === i && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25, delay: 0.12 }}
                    style={{
                      height: expandedH - COLLAPSED,
                      display: "flex",
                      flexDirection: isMobile ? "column" : "row",
                      gap: isMobile ? 20 : 40,
                      padding: isMobile ? "0 24px 28px" : "0 48px 36px",
                      alignItems: isMobile ? "flex-start" : "center",
                      boxSizing: "border-box",
                      position: "relative",
                    }}
                  >
                    {/* Decorative number */}
                    <span style={{
                      position: "absolute",
                      top: 0,
                      left: 32,
                      fontSize: 120,
                      fontWeight: 800,
                      color: "rgba(255,255,255,0.06)",
                      lineHeight: 1,
                      userSelect: "none",
                      pointerEvents: "none",
                      fontFamily: "Inter, sans-serif",
                      letterSpacing: "-0.04em",
                    }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* Image — mobile: top, desktop: right column */}
                    {isMobile && (
                      <div style={{ width: "100%", flexShrink: 0 }}>
                        <BlurImage src={p.image} alt={p.name} height={180} />
                      </div>
                    )}

                    {/* Left column */}
                    <div style={{
                      flex: isMobile ? "unset" : "0 0 58%",
                      display: "flex",
                      flexDirection: "column",
                      position: "relative",
                      zIndex: 1,
                      width: isMobile ? "100%" : undefined,
                    }}>
                      <p style={{
                        fontSize: 11,
                        letterSpacing: "0.15em",
                        color: "rgba(255,255,255,0.55)",
                        textTransform: "uppercase",
                        margin: "0 0 6px",
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 500,
                      }}>
                        {p.city}
                      </p>
                      <h3 style={{
                        fontSize: isMobile ? 22 : 28,
                        fontWeight: 700,
                        color: "#fff",
                        margin: "0 0 20px",
                        lineHeight: 1.2,
                        fontFamily: "Inter, sans-serif",
                        letterSpacing: "-0.02em",
                      }}>
                        {p.name}
                      </h3>

                      <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
                        {p.metrics.map((m, mi) => (
                          <div key={mi}>
                            <div style={{
                              fontSize: isMobile ? 22 : 26,
                              fontWeight: 800,
                              color: "#fff",
                              lineHeight: 1,
                              fontFamily: "Inter, sans-serif",
                              letterSpacing: "-0.02em",
                            }}>
                              {m.value}
                            </div>
                            <div style={{
                              fontSize: 10,
                              color: "rgba(255,255,255,0.5)",
                              marginTop: 3,
                              textTransform: "uppercase",
                              letterSpacing: "0.08em",
                              fontFamily: "Inter, sans-serif",
                            }}>
                              {m.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div style={{ height: 1, background: "rgba(255,255,255,0.12)", margin: "20px 0" }} />

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" });
                        }}
                        onMouseEnter={() => setBtnHover(i)}
                        onMouseLeave={() => setBtnHover(null)}
                        style={{
                          background: btnHover === i ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.1)",
                          border: "1px solid rgba(255,255,255,0.25)",
                          color: "#fff",
                          padding: "10px 22px",
                          borderRadius: 100,
                          fontSize: 13,
                          fontWeight: 500,
                          cursor: "pointer",
                          transition: "all 0.3s ease",
                          transform: btnHover === i ? "translateX(4px)" : "translateX(0)",
                          alignSelf: "flex-start",
                          fontFamily: "Inter, sans-serif",
                        }}
                      >
                        Solicitar cobertura →
                      </button>
                    </div>

                    {/* Right column — desktop only */}
                    {!isMobile && (
                      <div style={{
                        flex: "0 0 42%",
                        display: "flex",
                        justifyContent: "center",
                        position: "relative",
                        zIndex: 1,
                      }}>
                        <BlurImage src={p.image} alt={p.name} height={280} />
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function BlurImage({ src, alt, height }: { src: string; alt: string; height: number }) {
  const [hover, setHover] = useState(false);
  return (
    <div style={{
      position: "relative",
      width: "100%",
      maxWidth: 320,
      height,
      borderRadius: 14,
      overflow: "hidden",
      boxShadow: "0 16px 48px rgba(0,0,0,0.45)",
    }}>
      <img
        src={src}
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "blur(24px) brightness(0.6)",
          transform: "scale(1.1)",
          pointerEvents: "none",
        }}
      />
      <img
        src={src}
        alt={alt}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          objectFit: "contain",
          display: "block",
          zIndex: 1,
          transform: hover ? "scale(1.04)" : "scale(1)",
          transition: "transform 0.4s ease",
        }}
      />
    </div>
  );
}
