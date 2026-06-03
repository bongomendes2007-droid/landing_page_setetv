"use client";
import { useEffect, useRef } from "react";

const ICON_STYLE: React.CSSProperties = {
  width: "52px",
  height: "52px",
  borderRadius: "14px",
  objectFit: "contain",
  filter: "drop-shadow(0 4px 16px rgba(139, 92, 246, 0.35))",
};

const CARDS = [
  {
    icon: (
      <img
        src="https://res.cloudinary.com/dnth1inmv/image/upload/v1780281333/0e4dabe3-b407-4b6e-9d59-ff05c650b5ac_hmwq0q.png"
        alt="TV Digital"
        style={ICON_STYLE}
      />
    ),
    tag: "@setetv.oficial",
    title: "TV Digital",
    desc: "Canal no YouTube com transmissões ao vivo, coberturas jornalísticas e conteúdo sob demanda.",
  },
  {
    icon: (
      <img
        src="https://res.cloudinary.com/dnth1inmv/image/upload/v1780281325/bf22711d-4d13-4107-bbf5-63d557b23cb0_eqg0ma.png"
        alt="Portal de Notícias"
        style={ICON_STYLE}
      />
    ),
    tag: "setetvnews.com.br",
    title: "Portal de Notícias",
    desc: "Site com alcance mundial — cobertura regional, nacional e internacional em tempo real.",
  },
  {
    icon: (
      <img
        src="https://res.cloudinary.com/dnth1inmv/image/upload/v1780281314/beb2c698-183a-4ddd-a615-5947ac7df917_zd4lpz.png"
        alt="Sete Cast"
        style={ICON_STYLE}
      />
    ),
    tag: "Conexão 7Cast",
    title: "Sete Cast",
    desc: "Canal de podcast com debates, entrevistas e análises aprofundadas dos principais temas.",
  },
];

export default function AboutSection() {
  const textRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("as-in");
            observer.unobserve(en.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    if (textRef.current) observer.observe(textRef.current);
    if (cardsRef.current) observer.observe(cardsRef.current);

    const cards = document.querySelectorAll<HTMLElement>(".as-card");
    const handlers: Array<{ el: HTMLElement; fn: (e: MouseEvent) => void }> = [];

    cards.forEach((card) => {
      const fn = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--mouse-x", e.clientX - rect.left + "px");
        card.style.setProperty("--mouse-y", e.clientY - rect.top + "px");
      };
      card.addEventListener("mousemove", fn);
      handlers.push({ el: card, fn });
    });

    return () => {
      observer.disconnect();
      handlers.forEach(({ el, fn }) => el.removeEventListener("mousemove", fn));
    };
  }, []);

  return (
    <section
      id="sobre"
      style={{
        background: "#0a0a0a",
        padding: "80px 40px",
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "64px",
          alignItems: "center",
        }}
      >
        {/* Left — text */}
        <div ref={textRef} className="as-text as-reveal">
          <span
            style={{
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "3px",
              color: "#9B5DE5",
              textTransform: "uppercase",
              display: "block",
            }}
          >
            Sobre Nós
          </span>

          <h2
            style={{
              fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
              fontWeight: 700,
              letterSpacing: "-1.2px",
              lineHeight: 1.2,
              marginTop: "18px",
              color: "#fff",
              textWrap: "balance" as never,
            }}
          >
            A mais completa{" "}
            <span style={{ color: "#9B5DE5" }}>plataforma de comunicação</span>{" "}
            do Piauí
          </h2>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.6)",
              marginTop: "26px",
              maxWidth: "460px",
            }}
          >
            A SETE TV nasceu com o propósito de democratizar a informação,
            utilizando a tecnologia como ponte entre os fatos e o público
            piauiense.
          </p>

          <button
            onClick={() =>
              document
                .querySelector("#servicos")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="as-cta-btn"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              marginTop: "32px",
              fontSize: "15px",
              fontWeight: 600,
              fontFamily: "Inter, system-ui, sans-serif",
              padding: "15px 28px",
              borderRadius: "999px",
              background: "#7B2FE0",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              boxShadow:
                "0 14px 40px -8px rgba(123,47,224,0.65), inset 0 1px 0 rgba(255,255,255,0.18)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseOver={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = "translateY(-2px)";
              el.style.boxShadow =
                "0 20px 52px -8px rgba(123,47,224,0.8), inset 0 1px 0 rgba(255,255,255,0.18)";
              const arrow = el.querySelector<HTMLElement>(".as-arrow");
              if (arrow) arrow.style.transform = "translateX(6px)";
            }}
            onMouseOut={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = "translateY(0)";
              el.style.boxShadow =
                "0 14px 40px -8px rgba(123,47,224,0.65), inset 0 1px 0 rgba(255,255,255,0.18)";
              const arrow = el.querySelector<HTMLElement>(".as-arrow");
              if (arrow) arrow.style.transform = "translateX(0)";
            }}
          >
            Ver Nossos Serviços{" "}
            <span
              className="as-arrow"
              style={{ transition: "transform 0.3s ease", display: "inline-block" }}
            >
              →
            </span>
          </button>
        </div>

        {/* Right — cards */}
        <div
          ref={cardsRef}
          className="as-cards as-reveal"
          style={{ display: "flex", flexDirection: "column", gap: "12px" }}
        >
          {CARDS.map((card, i) => (
            <div
              key={i}
              className={`as-card as-card-${i}`}
              style={{ "--delay": `${i * 0.1}s` } as React.CSSProperties}
            >
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  display: "grid",
                  placeItems: "center",
                  flexShrink: 0,
                  animation: `asIconFloat 2.5s ease-in-out infinite`,
                  animationDelay: `${i * 0.4}s`,
                }}
              >
                {card.icon}
              </div>
              <div style={{ flex: 1, minWidth: 0, position: "relative", zIndex: 1 }}>
                <span
                  style={{
                    fontSize: "10px",
                    fontWeight: 700,
                    letterSpacing: "1.6px",
                    color: "rgba(255,255,255,0.38)",
                    textTransform: "uppercase",
                    display: "block",
                  }}
                >
                  {card.tag}
                </span>
                <h3
                  style={{
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    color: "#fff",
                    letterSpacing: "-0.3px",
                    marginTop: "3px",
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.82rem",
                    lineHeight: 1.5,
                    color: "rgba(255,255,255,0.52)",
                    marginTop: "4px",
                  }}
                >
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        /* Reveal */
        .as-reveal {
          opacity: 0;
          transition: opacity 0.6s cubic-bezier(.4,0,.2,1), transform 0.6s cubic-bezier(.4,0,.2,1);
        }
        .as-reveal.as-in { opacity: 1; }
        .as-text.as-reveal { transform: translateX(-30px); }
        .as-text.as-reveal.as-in { transform: none; }

        /* Cards reveal */
        .as-cards .as-card {
          opacity: 0;
          transform: translateX(30px);
          transition: opacity 0.6s cubic-bezier(.4,0,.2,1), transform 0.6s cubic-bezier(.4,0,.2,1),
                      border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
          transition-delay: var(--delay, 0s);

          position: relative;
          overflow: hidden;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 16px;
          padding: 20px;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          display: grid;
          grid-template-columns: auto 1fr;
          column-gap: 16px;
          align-items: center;
        }
        .as-cards.as-in .as-card {
          opacity: 1;
          transform: none;
        }

        /* Hover lift */
        .as-card:hover {
          transform: translateY(-6px) !important;
          border-color: rgba(155,93,229,0.4);
          background: rgba(155,93,229,0.06);
          box-shadow: 0 12px 32px rgba(168,85,247,0.2);
        }

        /* Magic card glow */
        .as-card::before {
          content: '';
          position: absolute;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(168,85,247,0.18) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          transform: translate(-50%, -50%);
          transition: opacity 0.3s ease;
          opacity: 0;
          z-index: 0;
          left: var(--mouse-x, 50%);
          top: var(--mouse-y, 50%);
        }
        .as-card:hover::before { opacity: 1; }
        .as-card > * { position: relative; z-index: 1; }

        /* Icon float */
        @keyframes asIconFloat {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-8px); }
        }

        /* Responsive */
        @media (max-width: 980px) {
          #sobre > div { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
        @media (max-width: 560px) {
          #sobre { padding: 64px 22px !important; }
        }
      `}</style>
    </section>
  );
}
