"use client";
import { motion } from "framer-motion";

/* ─── Service data ───────────────────────────────────────────── */
const SERVICES = [
  {
    title:   "Cobertura Jornalística Municipal",
    desc:    "Equipe em campo para cobertura completa dos acontecimentos da sua cidade com agilidade e precisão.",
    img:     "https://res.cloudinary.com/dd5f5j2ni/image/upload/v1780353142/cobertura_jornalista_municipal_imagem_eywfut.png",
    objPos:  "center center",
  },
  {
    title:   "Publicação no Portal de Notícias",
    desc:    "Conteúdos publicados no setetvnews.com.br com alcance mundial e atualização em tempo real.",
    img:     "https://res.cloudinary.com/dd5f5j2ni/image/upload/v1780353046/publicação_no_portal_de_notícias_imagem_jjh7jd.png",
    objPos:  "center top",
  },
  {
    title:   "Produção de Conteúdo para Redes Sociais",
    desc:    "Criação de conteúdo estratégico para Instagram, YouTube e demais plataformas digitais.",
    img:     "https://res.cloudinary.com/dd5f5j2ni/image/upload/v1780353112/producao_de_conteudo_paras_redes_sociais_imagem_vbgxtn.png",
    objPos:  "center top",
  },
  {
    title:   "Assessoria de Imprensa Digital",
    desc:    "Gestão profissional da comunicação institucional com cobertura jornalística e presença digital.",
    img:     "https://res.cloudinary.com/dd5f5j2ni/image/upload/v1780352963/assesoria_de_imprensa_digital_imagem_iqqzsh.png",
    objPos:  "center center",
  },
  {
    title:   "Transmissões ao Vivo",
    desc:    "Cobertura em tempo real com transmissão simultânea no YouTube, Instagram e demais plataformas.",
    img:     "https://res.cloudinary.com/dd5f5j2ni/image/upload/v1780353019/transmissão_ao_vivo_imagem_xie4vu.png",
    objPos:  "center center",
  },
  {
    title:   "Cobertura de Eventos Oficiais",
    desc:    "Presença jornalística profissional em solenidades, inaugurações e atos da administração pública.",
    img:     "https://res.cloudinary.com/dd5f5j2ni/image/upload/v1780353170/cobertura_de_eventos_municipais_foto_fsuc7d.png",
    objPos:  "center top",
  },
];

/* ─── Card ───────────────────────────────────────────────────── */
function ServiceCard({ s, i }: { s: typeof SERVICES[0]; i: number }) {
  return (
    <motion.div
      className="sv-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Photo */}
      <div className="sv-img">
        <img
          src={s.img}
          alt={s.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: s.objPos,
            display: "block",
          }}
        />
      </div>

      {/* Text */}
      <div style={{ padding: "20px 24px 24px" }}>
        <h3
          style={{
            fontFamily: "Inter, system-ui, sans-serif",
            fontSize: "20px",
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: "-0.3px",
            lineHeight: 1.3,
            margin: 0,
          }}
        >
          {s.title}
        </h3>
        <p
          style={{
            fontFamily: "Inter, system-ui, sans-serif",
            fontSize: "14px",
            color: "rgba(255,255,255,0.6)",
            lineHeight: 1.6,
            marginTop: "8px",
            marginBottom: 0,
          }}
        >
          {s.desc}
        </p>
      </div>
    </motion.div>
  );
}

/* ─── Section ────────────────────────────────────────────────── */
export default function ServicosNew() {
  return (
    <section
      id="servicos"
      style={{
        background: "#0a0a0a",
        padding: "100px 0",
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>

        {/* ── Header ── */}
        <div className="sv-header">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <span
              style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#8B5CF6",
                display: "block",
                marginBottom: "16px",
              }}
            >
              Nossos Serviços
            </span>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 800,
                letterSpacing: "-0.04em",
                lineHeight: 1.1,
                color: "#ffffff",
              }}
            >
              Soluções completas em comunicação
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
            style={{
              fontSize: "15px",
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.7,
              maxWidth: "480px",
            }}
          >
            Comunicação institucional, produção audiovisual e divulgação digital para{" "}
            <span style={{ color: "rgba(255,255,255,0.85)", fontWeight: 500 }}>
              prefeituras, câmaras municipais e órgãos públicos
            </span>{" "}
            de todo o Piauí.
          </motion.p>
        </div>

        {/* ── Grid ── */}
        <div className="sv-grid">
          {SERVICES.map((s, i) => (
            <ServiceCard key={i} s={s} i={i} />
          ))}
        </div>
      </div>

      <style>{`
        /* Header: 2 columns on desktop */
        .sv-header {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: flex-end;
          margin-bottom: 64px;
        }

        /* Cards grid: 3 columns on desktop */
        .sv-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        /* Image container */
        .sv-img {
          height: 240px;
          overflow: hidden;
          flex-shrink: 0;
        }

        /* Card base */
        .sv-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          padding: 0;
          display: flex;
          flex-direction: column;
          cursor: default;
          overflow: hidden;
          transition: border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
        }
        .sv-card:hover {
          border-color: rgba(139, 92, 246, 0.3);
          transform: translateY(-4px);
          box-shadow: 0 8px 32px rgba(139, 92, 246, 0.15);
        }

        /* Responsive */
        @media (max-width: 980px) {
          .sv-header {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .sv-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 600px) {
          .sv-grid {
            grid-template-columns: 1fr;
          }
          .sv-img {
            height: 200px;
          }
          #servicos { padding: 64px 0 !important; }
          #servicos > div { padding: 0 22px !important; }
        }
      `}</style>
    </section>
  );
}
