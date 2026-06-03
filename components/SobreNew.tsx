"use client";
import { motion } from "framer-motion";

const platforms = [
  { num:"01", icon:"📺", name:"TV Digital",         sub:"@SETETV.OFICIAL",   stat:"423K", label:"Views YouTube",   desc:"Canal no YouTube com transmissões ao vivo, coberturas jornalísticas e conteúdo sob demanda." },
  { num:"02", icon:"📰", name:"Portal de Notícias", sub:"SETETVNEWS.COM.BR",  stat:"24/7", label:"Online",          desc:"Site com alcance mundial — cobertura regional, nacional e internacional em tempo real." },
  { num:"03", icon:"🎙", name:"Sete Cast",           sub:"CONEXÃO 7CAST",      stat:"302K", label:"Views Instagram", desc:"Canal de podcast com debates, entrevistas e análises aprofundadas dos principais temas." },
];

function FadeIn({ children, delay=0, x=0, y=24 }: { children:React.ReactNode; delay?:number; x?:number; y?:number }) {
  return (
    <motion.div
      initial={{ opacity:0, y, x, filter:"blur(8px)" }}
      whileInView={{ opacity:1, y:0, x:0, filter:"blur(0px)" }}
      viewport={{ once:true, margin:"-60px" }}
      transition={{ duration:0.7, delay, ease:[0.16,1,0.3,1] }}>
      {children}
    </motion.div>
  );
}

export default function SobreNew() {
  return (
    <>
      <section id="sobre" className="section-dark" style={{ padding:"100px 0" }}>
        <div style={{ maxWidth:1152, margin:"0 auto", padding:"0 48px" }}>
          <div className="grid md:grid-cols-2" style={{ gap:72, alignItems:"center" }}>
            <FadeIn>
              <span style={{ fontFamily:"Inter", fontSize:11, fontWeight:600,
                             letterSpacing:"0.12em", textTransform:"uppercase",
                             color:"rgba(155,93,229,0.8)", display:"block", marginBottom:16 }}>Sobre Nós</span>
              <h2 style={{ fontFamily:"Inter", fontWeight:900, letterSpacing:"-0.04em",
                           fontSize:"clamp(2rem,4.5vw,3.5rem)", color:"#fff", lineHeight:1.0, marginBottom:28 }}>
                Conheça a SETE TV, a mais completa{" "}
                <span style={{ background:"linear-gradient(135deg,#9B5DE5,#7B2FE0)",
                               WebkitBackgroundClip:"text", backgroundClip:"text",
                               color:"transparent", WebkitTextFillColor:"transparent" }}>
                  plataforma de comunicação
                </span>{" "}
                do Piauí
              </h2>
              <p style={{ fontFamily:"Inter", fontSize:15, color:"rgba(255,255,255,0.55)",
                          lineHeight:1.7, marginBottom:20 }}>
                A SETE TV nasceu com o propósito de democratizar a informação, utilizando a tecnologia como ponte entre os fatos e o público piauiense.
              </p>
              <p style={{ fontFamily:"Inter", fontSize:15, color:"rgba(255,255,255,0.55)",
                          lineHeight:1.7, marginBottom:36 }}>
                Nosso compromisso é informar com <strong style={{ color:"rgba(255,255,255,0.9)", fontWeight:600 }}>ética, transparência e responsabilidade social</strong>, garantindo que cada notícia passe por critérios rigorosos de apuração.
              </p>
              <button onClick={() => document.querySelector("#servicos")?.scrollIntoView({ behavior:"smooth" })}
                style={{ fontFamily:"Inter", fontSize:13, fontWeight:700,
                         color:"#fff", background:"#7B2FE0", padding:"12px 28px",
                         borderRadius:100, border:"none", cursor:"pointer",
                         boxShadow:"0 4px 20px rgba(123,47,224,0.4)", transition:"all .25s" }}
                onMouseOver={e => { (e.currentTarget as HTMLElement).style.transform="translateY(-2px)"; }}
                onMouseOut={e => { (e.currentTarget as HTMLElement).style.transform="translateY(0)"; }}>
                Ver Nossos Serviços →
              </button>
            </FadeIn>

            <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
              {platforms.map((p,i) => (
                <FadeIn key={i} delay={0.1+i*0.1} x={32}>
                  <div style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.08)",
                                borderRadius:16, padding:"20px 24px", display:"flex",
                                alignItems:"center", gap:20, transition:"all .3s", cursor:"default" }}
                    onMouseOver={e => { (e.currentTarget as HTMLElement).style.borderColor="rgba(123,47,224,0.4)"; (e.currentTarget as HTMLElement).style.background="rgba(123,47,224,0.06)"; }}
                    onMouseOut={e => { (e.currentTarget as HTMLElement).style.borderColor="rgba(255,255,255,0.08)"; (e.currentTarget as HTMLElement).style.background="rgba(255,255,255,0.03)"; }}>
                    <span style={{ fontSize:28, flexShrink:0 }}>{p.icon}</span>
                    <div style={{ flex:1, minWidth:0 }}>
                      <span style={{ fontFamily:"Inter", fontSize:10, fontWeight:700,
                                     letterSpacing:"0.1em", color:"rgba(123,47,224,0.7)",
                                     textTransform:"uppercase", display:"block", marginBottom:3 }}>{p.sub}</span>
                      <div style={{ fontFamily:"Inter", fontSize:15, fontWeight:700, color:"#fff" }}>{p.name}</div>
                      <div style={{ fontFamily:"Inter", fontSize:12, color:"rgba(255,255,255,0.4)", marginTop:2 }}>{p.desc}</div>
                    </div>
                    <div style={{ textAlign:"right", flexShrink:0 }}>
                      <div style={{ fontFamily:"Inter", fontSize:24, fontWeight:800,
                                    letterSpacing:"-0.04em", color:"#fff" }}>{p.stat}</div>
                      <div style={{ fontFamily:"Inter", fontSize:9, fontWeight:600,
                                    letterSpacing:"0.08em", textTransform:"uppercase",
                                    color:"rgba(255,255,255,0.35)" }}>{p.label}</div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div style={{ height:1, background:"linear-gradient(to right,transparent,rgba(123,47,224,0.4),transparent)" }}/>
    </>
  );
}
