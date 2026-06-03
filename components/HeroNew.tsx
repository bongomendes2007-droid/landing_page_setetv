"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "@/components/new/Typewriter";

const BG_IMG =
  "https://res.cloudinary.com/dnth1inmv/image/upload/v1780087111/2_xsvxwu.png";

const DOCK_ICONS = [
  {
    label: "YouTube",
    href: "https://www.youtube.com/@setetv.oficial",
    target: "_blank" as const,
    rel: "noopener noreferrer",
    svg: (
      <svg viewBox="0 0 24 24" width="100%" height="100%">
        <path
          fill="#FF0000"
          d="M23 7.6a3 3 0 0 0-2.1-2.13C19.04 5 12 5 12 5s-7.04 0-8.9.47A3 3 0 0 0 1 7.6 31.3 31.3 0 0 0 .53 12 31.3 31.3 0 0 0 1 16.4a3 3 0 0 0 2.1 2.13C4.96 19 12 19 12 19s7.04 0 8.9-.47A3 3 0 0 0 23 16.4 31.3 31.3 0 0 0 23.47 12 31.3 31.3 0 0 0 23 7.6z"
        />
        <path fill="#fff" d="M9.75 15.5v-7l6 3.5z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/setetvnews/",
    target: "_blank" as const,
    rel: "noopener noreferrer",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" width="100%" height="100%">
        <defs>
          <linearGradient id="ig-hero" x1="2" y1="22" x2="22" y2="2">
            <stop offset="0" stopColor="#feda75" />
            <stop offset=".35" stopColor="#fa7e1e" />
            <stop offset=".65" stopColor="#d62976" />
            <stop offset="1" stopColor="#4f5bd5" />
          </linearGradient>
        </defs>
        <rect x="3" y="3" width="18" height="18" rx="5.5" stroke="url(#ig-hero)" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" stroke="url(#ig-hero)" strokeWidth="2" />
        <circle cx="17.3" cy="6.7" r="1.3" fill="url(#ig-hero)" />
      </svg>
    ),
  },
  {
    label: "Equipe",
    href: "#contato",
    svg: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#fff"
        strokeWidth="1.8"
        strokeLinecap="round"
        width="100%"
        height="100%"
      >
        <circle cx="12" cy="8" r="4" />
        <path d="M4.5 20.5c0-4.4 3.4-7 7.5-7s7.5 2.6 7.5 7" />
      </svg>
    ),
  },
];

const AVATARS = [
  { initials: "JM", bg: "linear-gradient(135deg,#7B2FE0,#9B5DE5)" },
  { initials: "EL", bg: "linear-gradient(135deg,#d946ef,#7B2FE0)" },
  { initials: "RL", bg: "linear-gradient(135deg,#9B5DE5,#c084fc)" },
  { initials: "LR", bg: "linear-gradient(135deg,#5b21b6,#9B5DE5)" },
  { initials: "LM", bg: "linear-gradient(135deg,#c084fc,#d946ef)" },
];

/* ─── Magic Dock ─────────────────────────────────────────────── */
function MagicDock() {
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);
  const BASE = 36, MAX_SCALE = 56 / 36, RANGE = 92;

  function update(clientX: number) {
    iconRefs.current.forEach((ic) => {
      if (!ic) return;
      const rect = ic.getBoundingClientRect();
      const center = rect.left + rect.width / 2;
      const d = Math.abs(clientX - center);
      let s = 1;
      if (d < RANGE) {
        const t = 1 - d / RANGE;
        s = 1 + (MAX_SCALE - 1) * t * t * (3 - 2 * t);
      }
      ic.style.transform = `scale(${s.toFixed(3)}) translateY(${(-(s - 1) * 16).toFixed(1)}px)`;
    });
  }

  function reset() {
    iconRefs.current.forEach((ic) => {
      if (ic) ic.style.transform = "scale(1)";
    });
  }

  return (
    <div
      onMouseMove={(e) => update(e.clientX)}
      onMouseLeave={reset}
      style={{
        display: "inline-flex",
        alignItems: "flex-end",
        gap: 20,
        padding: "12px 28px",
        background: "rgba(255,255,255,0.08)",
        border: "1px solid rgba(255,255,255,0.12)",
        borderRadius: 100,
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5)",
      }}
    >
      {DOCK_ICONS.map((icon, i) => (
        <a
          key={i}
          href={icon.href}
          target={"target" in icon ? icon.target : undefined}
          rel={"rel" in icon ? icon.rel : undefined}
          aria-label={icon.label}
          style={{ display: "contents", cursor: "pointer" }}
        >
          <div
            ref={(el) => { iconRefs.current[i] = el; }}
            style={{
              width: BASE,
              height: BASE,
              flexShrink: 0,
              display: "grid",
              placeItems: "center",
              transformOrigin: "center bottom",
              transition: "transform .22s cubic-bezier(.2,1.4,.35,1)",
              willChange: "transform",
            }}
          >
            {icon.svg}
          </div>
        </a>
      ))}
    </div>
  );
}

/* ─── Hero ───────────────────────────────────────────────────── */
export default function HeroNew() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        isolation: "isolate",
        overflow: "hidden",
        background: `#07020f url('${BG_IMG}') center center / cover no-repeat`,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
      }}
    >
      {/* Left legibility overlay (desktop only) */}
      <div
        aria-hidden
        className="hero-bg-overlay"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          background:
            "linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      {/* ── Two-column content ──────────────────────────────── */}
      <div
        className="hero-content"
        style={{
          position: "relative",
          zIndex: 5,
          maxWidth: 1280,
          margin: "0 auto",
          padding: "120px 40px 64px",
          display: "flex",
          alignItems: "center",
          gap: "64px",
          minHeight: "100vh",
        }}
      >
        {/* ── Left: text ────────────────────────────────────── */}
        <div className="hero-left" style={{ flex: "0 0 auto", maxWidth: 520 }}>

          {/* Headline */}
          <motion.h1
            className="hero-headline"
            initial={{ opacity: 0, y: 32, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "Inter, system-ui, sans-serif",
              fontWeight: 800,
              letterSpacing: "-0.05em",
              lineHeight: 1.04,
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              color: "#fff",
            }}
          >
            <span style={{ display: "block" }}>Comunicação</span>{" "}
            <span style={{ display: "block", color: "#9B5DE5" }}>
              que{" "}
              <Typewriter
                words={["conecta", "inspira", "transforma"]}
                speed={90}
                deleteSpeed={55}
                pauseTime={2000}
                style={{ color: "#9B5DE5" }}
              />
            </span>{" "}
            <span style={{ display: "block", color: "#ffffff" }}>o Piauí.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="hero-sub"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            style={{
              fontFamily: "Inter, system-ui, sans-serif",
              fontSize: "1.1rem",
              fontWeight: 400,
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.6,
              maxWidth: 440,
              marginTop: 18,
            }}
          >
            TV Digital, Portal de Notícias, Podcast e Redes Sociais{" "}
            <span className="hero-sub-em" style={{ color: "#9B5DE5", fontWeight: 400 }}>
              a plataforma completa de comunicação do Piauí.
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 24 }}
          >
            <button
              onClick={() =>
                document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" })
              }
              style={{
                fontFamily: "Inter, system-ui, sans-serif",
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                fontSize: 15,
                fontWeight: 600,
                padding: "15px 28px",
                borderRadius: 999,
                cursor: "pointer",
                border: "1px solid transparent",
                background: "#7B2FE0",
                color: "#fff",
                boxShadow:
                  "0 14px 40px -8px rgba(123,47,224,0.65), inset 0 1px 0 rgba(255,255,255,0.18)",
                transition: "transform .2s, box-shadow .2s",
              }}
              onMouseOver={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(-2px)";
                el.style.boxShadow =
                  "0 20px 52px -8px rgba(123,47,224,0.8), inset 0 1px 0 rgba(255,255,255,0.18)";
              }}
              onMouseOut={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(0)";
                el.style.boxShadow =
                  "0 14px 40px -8px rgba(123,47,224,0.65), inset 0 1px 0 rgba(255,255,255,0.18)";
              }}
            >
              Fale Conosco <span>→</span>
            </button>

            <button
              onClick={() =>
                document.querySelector("#servicos")?.scrollIntoView({ behavior: "smooth" })
              }
              style={{
                fontFamily: "Inter, system-ui, sans-serif",
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                fontSize: 15,
                fontWeight: 600,
                padding: "15px 28px",
                borderRadius: 999,
                cursor: "pointer",
                border: "1px solid rgba(255,255,255,0.16)",
                background: "rgba(255,255,255,0.04)",
                color: "#fff",
                transition: "background .2s, border-color .2s, transform .2s",
              }}
              onMouseOver={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(255,255,255,0.09)";
                el.style.borderColor = "rgba(255,255,255,0.3)";
                el.style.transform = "translateY(-2px)";
              }}
              onMouseOut={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(255,255,255,0.04)";
                el.style.borderColor = "rgba(255,255,255,0.16)";
                el.style.transform = "translateY(0)";
              }}
            >
              Soluções <span>→</span>
            </button>
          </motion.div>

          {/* Dock */}
          <motion.div
            className="hero-dock"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            style={{ display: "flex", justifyContent: "flex-start", marginTop: 20 }}
          >
            <MagicDock />
          </motion.div>

          {/* Social Proof */}
          <motion.div
            className="hero-social"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85 }}
            style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 24 }}
          >
            <div style={{ display: "flex" }}>
              {AVATARS.map((av, i) => (
                <div
                  key={i}
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    border: "2px solid #07020f",
                    marginLeft: i === 0 ? 0 : -13,
                    display: "grid",
                    placeItems: "center",
                    fontSize: 12,
                    fontWeight: 700,
                    color: "#fff",
                    background: av.bg,
                    flexShrink: 0,
                  }}
                >
                  {av.initials}
                </div>
              ))}
            </div>
            <p
              style={{
                fontFamily: "Inter, system-ui, sans-serif",
                fontSize: "13.5px",
                color: "rgba(255,255,255,0.6)",
                lineHeight: 1.5,
                maxWidth: 280,
              }}
            >
              Confiado por{" "}
              <strong style={{ color: "#fff", fontWeight: 600 }}>
                prefeituras e órgãos públicos
              </strong>{" "}
              em todo o Piauí
            </p>
          </motion.div>
        </div>

      </div>

      {/* ── Styles + keyframes ────────────────────────────────── */}
      <style>{`
        /* ── Mobile ≤768px ─────────────────────────────────── */
        @media (max-width: 768px) {
          /* Background: image at 100% width so laptop fills top naturally */
          #hero {
            background-color: #140428 !important;
            background-image: url('https://res.cloudinary.com/dnth1inmv/image/upload/v1780171344/Design_sem_nome_4_f1wrdx.png') !important;
            background-size: 100% auto !important;
            background-position: top center !important;
          }
          /* Bottom-fade gradient — fades laptop into dark bg */
          #hero::after {
            content: "";
            position: absolute;
            inset: 0;
            z-index: 1;
            background: linear-gradient(to bottom, transparent 30%, rgba(20,4,40,0.45) 42%, rgba(20,4,40,0.78) 62%, #140428 96%);
            pointer-events: none;
          }

          /* Hide desktop left overlay */
          .hero-bg-overlay { display: none !important; }

          /* Content: column from top — h1 margin-top anchors text below the bg laptop */
          .hero-content {
            flex-direction: column !important;
            align-items: center !important;
            justify-content: flex-start !important;
            padding: 0 0 48px !important;
            min-height: 100svh !important;
            gap: 0 !important;
          }
          .hero-left {
            width: 100% !important;
            max-width: 100% !important;
            text-align: center !important;
          }

          /*
           * Headline: margin-top pushes all content below the bg-image laptop.
           * Image is 853×1844 px → displayed at 843px tall on a 390px screen
           * (background-size: 100% auto). Laptop ≈ top 50% = ~421px + 32px gap = 453px
           * → rounded up to 460px for a comfortable buffer.
           */
          .hero-headline {
            font-size: clamp(2rem, 8vw, 2.6rem) !important;
            letter-spacing: -1px !important;
            line-height: 1.2 !important;
            text-align: center !important;
            margin-top: 460px !important;
            padding: 0 24px !important;
            text-shadow: 0 2px 28px rgba(0,0,0,0.6) !important;
          }
          /* Inline spans so headline flows naturally across lines */
          .hero-headline span {
            display: inline !important;
          }

          /* Subtitle */
          .hero-sub {
            font-size: 1rem !important;
            margin-top: 16px !important;
            padding: 0 24px !important;
            max-width: 100% !important;
            text-shadow: 0 1px 12px rgba(0,0,0,0.5) !important;
          }
          /* Accent part of subtitle on its own line */
          .hero-sub-em {
            display: block !important;
            margin-top: 2px !important;
          }

          /* Buttons: full-width stacked, 56px tall */
          .hero-cta {
            flex-direction: column !important;
            width: 100% !important;
            gap: 12px !important;
            margin-top: 28px !important;
            padding: 0 24px !important;
            align-items: stretch !important;
          }
          .hero-cta > button {
            height: 56px !important;
            font-size: 16px !important;
            width: 100% !important;
            display: flex !important;
            justify-content: center !important;
          }

          /* Dock: centred pill, 30px icons */
          .hero-dock {
            justify-content: center !important;
            margin-top: 20px !important;
          }
          .hero-dock div[aria-label] {
            width: 30px !important;
            height: 30px !important;
          }

          /* Social proof: vertical stack */
          .hero-social {
            flex-direction: column !important;
            align-items: center !important;
            justify-content: center !important;
            flex-wrap: wrap !important;
            gap: 14px !important;
            margin-top: 20px !important;
            padding: 0 24px !important;
          }
          .hero-social p {
            text-align: center !important;
            font-size: 13px !important;
            max-width: 280px !important;
          }
        }
      `}</style>
    </section>
  );
}
