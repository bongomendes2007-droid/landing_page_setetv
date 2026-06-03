"use client";
import { motion } from "framer-motion";
import { Phone, Mail, Globe, AtSign, Play } from "lucide-react";

const contacts = [
  { Icon:Phone,     label:"WhatsApp — Rex Jone",      value:"(86) 99560-7919",              href:"tel:+558699560-7919"                 },
  { Icon:Phone,     label:"WhatsApp — Lorena Morais",  value:"(86) 98151-0292",              href:"tel:+558698151-0292"                 },
  { Icon:Mail,      label:"E-mail",                    value:"redacao.setetvnews@gmail.com",  href:"mailto:redacao.setetvnews@gmail.com" },
  { Icon:Globe,     label:"Portal",                    value:"www.setetvnews.com.br",         href:"https://www.setetvnews.com.br"       },
  { Icon:AtSign,    label:"Instagram",                 value:"@setetvnews",                   href:"https://instagram.com/setetvnews"    },
  { Icon:Play,      label:"YouTube",                   value:"@setetv.oficial",               href:"https://youtube.com/@setetv.oficial" },
];

function BeamButton({ children, onClick }: { children:React.ReactNode; onClick?:() => void }) {
  return (
    <button onClick={onClick}
      style={{ position:"relative", display:"inline-flex", alignItems:"center",
               justifyContent:"center", overflow:"hidden", borderRadius:100,
               padding:1, background:"transparent", border:"none", cursor:"pointer" }}>
      <motion.span animate={{ rotate:360 }} transition={{ duration:2.5, repeat:Infinity, ease:"linear" }}
        style={{ position:"absolute", inset:"-1000%",
                 background:"conic-gradient(from 0deg,transparent 0deg 340deg,rgba(123,47,224,0.8) 360deg)" }}/>
      <span style={{ position:"relative", display:"flex", alignItems:"center", borderRadius:100,
                     padding:"12px 32px", background:"#0a0a0a",
                     boxShadow:"inset 0 0 0 1px rgba(255,255,255,0.08)" }}>
        <motion.span initial={{ x:"-100%", skewX:"-15deg" }} whileHover={{ x:"200%" }}
          transition={{ duration:0.5, ease:"easeOut" }}
          style={{ position:"absolute", inset:0, borderRadius:100, pointerEvents:"none",
                   background:"linear-gradient(90deg,transparent,rgba(255,255,255,0.12),transparent)" }}/>
        <span style={{ fontFamily:"Inter", fontSize:14, fontWeight:700,
                       color:"#fff", position:"relative", zIndex:1 }}>{children}</span>
      </span>
    </button>
  );
}

export default function ContatoNew() {
  return (
    <section id="contato" className="section-dark" style={{ padding:"100px 0", borderTop:"1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ maxWidth:1152, margin:"0 auto", padding:"0 48px" }}>
        <div className="grid md:grid-cols-2" style={{ gap:72, alignItems:"center" }}>

          <motion.div
            initial={{ opacity:0, y:24, filter:"blur(8px)" }}
            whileInView={{ opacity:1, y:0, filter:"blur(0px)" }}
            viewport={{ once:true }}
            transition={{ duration:0.7, ease:[0.16,1,0.3,1] }}>
            <span style={{ fontFamily:"Inter", fontSize:11, fontWeight:600, letterSpacing:"0.12em",
                           textTransform:"uppercase", color:"rgba(155,93,229,0.8)", display:"block", marginBottom:20 }}>
              Entre em Contato
            </span>
            <h2 style={{ fontFamily:"Inter", fontWeight:900, letterSpacing:"-0.05em",
                         fontSize:"clamp(2.5rem,6vw,5rem)", lineHeight:0.92, marginBottom:24 }}>
              <span style={{ color:"#fff", display:"block" }}>Vamos</span>
              <span style={{ background:"linear-gradient(135deg,#9B5DE5,#7B2FE0)",
                             WebkitBackgroundClip:"text", backgroundClip:"text",
                             color:"transparent", WebkitTextFillColor:"transparent", display:"block" }}>
                trabalhar
              </span>
              <span style={{ color:"#8B5CF6", display:"block" }}>juntos?</span>
            </h2>
            <p style={{ fontFamily:"Inter", fontSize:15, color:"rgba(255,255,255,0.45)",
                        maxWidth:340, lineHeight:1.65, marginBottom:36 }}>
              Quer anunciar, fechar uma parceria ou contratar nossos serviços? Nossa equipe está pronta para atender você.
            </p>
            <BeamButton onClick={() => window.open("mailto:redacao.setetvnews@gmail.com")}>
              Enviar Mensagem →
            </BeamButton>
          </motion.div>

          <motion.div
            initial={{ opacity:0, x:32 }}
            whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true }}
            transition={{ duration:0.7, delay:0.2 }}
            style={{ display:"flex", flexDirection:"column", gap:2 }}>
            {contacts.map((c,i) => (
              <motion.a key={i} href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                initial={{ opacity:0, x:20 }}
                whileInView={{ opacity:1, x:0 }}
                viewport={{ once:true }}
                transition={{ delay:0.3+i*0.07 }}
                style={{ display:"flex", alignItems:"center", gap:14, padding:"14px 16px",
                         background:"rgba(255,255,255,0.02)", borderLeft:"2px solid transparent",
                         textDecoration:"none", color:"#fff", transition:"all .22s" }}
                onMouseOver={e => { (e.currentTarget as HTMLElement).style.borderLeftColor="#7B2FE0"; (e.currentTarget as HTMLElement).style.background="rgba(123,47,224,0.06)"; }}
                onMouseOut={e => { (e.currentTarget as HTMLElement).style.borderLeftColor="transparent"; (e.currentTarget as HTMLElement).style.background="rgba(255,255,255,0.02)"; }}>
                <div style={{ width:34, height:34, borderRadius:"50%",
                              border:"1px solid rgba(255,255,255,0.08)", display:"flex",
                              alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                  <c.Icon size={14} style={{ color:"rgba(255,255,255,0.4)" }}/>
                </div>
                <div>
                  <p style={{ fontFamily:"Inter", fontSize:9, fontWeight:700, letterSpacing:"0.1em",
                               textTransform:"uppercase", color:"rgba(255,255,255,0.25)", marginBottom:2 }}>{c.label}</p>
                  <p style={{ fontFamily:"Inter", fontSize:14, fontWeight:600, letterSpacing:"-0.02em" }}>{c.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
