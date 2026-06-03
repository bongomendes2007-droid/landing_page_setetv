"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const team = [
  { name:"James Almeida",  role:"Editor-Chefe",            src:"https://res.cloudinary.com/dnth1inmv/image/upload/v1779911660/James_Almeida_tvzehb.png" },
  { name:"Ilanna Lima",    role:"Jornalista Repórter",      src:"https://res.cloudinary.com/dnth1inmv/image/upload/v1779911660/Ilanna_Lima_mroszt.png" },
  { name:"Bruna Leão",     role:"Jornalista Repórter",      src:"https://res.cloudinary.com/dnth1inmv/image/upload/v1779911660/Bruna_Le%C3%A3o_q4ckxp.png" },
  { name:"Lia Raquel",     role:"Coord. Conteúdo Criativo", src:"https://res.cloudinary.com/dnth1inmv/image/upload/v1779911660/Lia_Raquel_uwz0t9.png" },
  { name:"Lorena Morais",  role:"Diretora de Comunicação",  src:"https://res.cloudinary.com/dnth1inmv/image/upload/v1779911660/Lorena_Morais_vkcxri.png" },
  { name:"Rafael Sérgio",  role:"Produtor Audiovisual",     src:"https://res.cloudinary.com/dnth1inmv/image/upload/v1779911659/Rafael_S%C3%A9rgio_ybfj2f.png" },
  { name:"Luis Costa",     role:"Administrador",            src:"https://res.cloudinary.com/dnth1inmv/image/upload/v1779911659/Luis_Costa_h7rdyk.png" },
  { name:"Lucas",          role:"Redator Jornalístico",     src:"https://res.cloudinary.com/dnth1inmv/image/upload/v1779911659/Lucas_hxy1bt.png" },
  { name:"Yasmin Silva",   role:"Redatora Jornalística",    src:"https://res.cloudinary.com/dnth1inmv/image/upload/v1779911659/Yasmin_Silva_mjob73.png" },
  { name:"Amadeu Bruno",   role:"Direção Criativa de Identidade Visual Sete TV News", src:"https://res.cloudinary.com/dd5f5j2ni/image/upload/v1780511866/Amadeu_Bruno.jpg_sblvv9.jpg" },
];

export default function EquipeNew() {
  return (
    <section id="time" className="section-dark" style={{ padding:"100px 0 0", overflow:"hidden" }}>
      <div style={{ maxWidth:1152, margin:"0 auto", padding:"0 48px 56px" }}>
        <motion.div
          initial={{ opacity:0, y:24 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.7 }}
          style={{ textAlign:"center" }}>
          <span style={{ fontFamily:"Inter", fontSize:11, fontWeight:600, letterSpacing:"0.12em",
                         textTransform:"uppercase", color:"rgba(155,93,229,0.8)", display:"block", marginBottom:16 }}>
            Nossa Equipe
          </span>
          <h2 style={{ fontFamily:"Inter", fontWeight:900, letterSpacing:"-0.04em",
                       fontSize:"clamp(1.8rem,4vw,3rem)", color:"#fff", lineHeight:1.05, marginBottom:12 }}>
            Os profissionais por trás da informação
          </h2>
          <p style={{ fontFamily:"Inter", fontSize:15, color:"rgba(255,255,255,0.45)", maxWidth:440, margin:"0 auto" }}>
            Jornalismo sério, compromisso com a verdade e informação que transforma.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity:0, y:48 }}
        whileInView={{ opacity:1, y:0 }}
        viewport={{ once:true }}
        transition={{ duration:0.9, delay:0.3 }}
        style={{ position:"relative", paddingBottom:80 }}>
        {[{ cls:"swiper-prev-t", Icon:ChevronLeft, pos:{ left:24 } },
          { cls:"swiper-next-t", Icon:ChevronRight, pos:{ right:24 } }].map(({ cls,Icon,pos }) => (
          <button key={cls} className={cls}
            style={{ position:"absolute", ...pos as React.CSSProperties, top:"50%", transform:"translateY(-60%)", zIndex:20,
                     width:40, height:40, borderRadius:"50%", border:"1px solid rgba(255,255,255,0.12)",
                     background:"rgba(255,255,255,0.05)", color:"#fff", cursor:"pointer",
                     display:"flex", alignItems:"center", justifyContent:"center", transition:"all .2s" }}
            onMouseOver={e => { (e.currentTarget as HTMLElement).style.borderColor="#7B2FE0"; (e.currentTarget as HTMLElement).style.background="rgba(123,47,224,0.15)"; }}
            onMouseOut={e => { (e.currentTarget as HTMLElement).style.borderColor="rgba(255,255,255,0.12)"; (e.currentTarget as HTMLElement).style.background="rgba(255,255,255,0.05)"; }}>
            <Icon size={16}/>
          </button>
        ))}
        <Swiper modules={[EffectCoverflow,Pagination,Navigation,Autoplay]}
          effect="coverflow" grabCursor centeredSlides slidesPerView="auto" loop
          coverflowEffect={{ rotate:24, stretch:0, depth:130, modifier:1, slideShadows:true }}
          pagination={{ clickable:true }}
          navigation={{ nextEl:".swiper-next-t", prevEl:".swiper-prev-t" }}
          autoplay={{ delay:3200, disableOnInteraction:true }}
          className="team-swiper">
          {team.map((m,i) => (
            <SwiperSlide key={i} style={{ width:260 }}>
              <div style={{ borderRadius:18, overflow:"hidden",
                            border:"1px solid rgba(255,255,255,0.08)",
                            boxShadow:"inset 0 2px 0 rgba(123,47,224,0.8)",
                            background:"#1a1a2e",
                            display:"flex", flexDirection:"column" }}>
                <div style={{ aspectRatio:"3/4", overflow:"hidden", flexShrink:0 }}>
                  <img src={m.src} alt={m.name} style={{ width:"100%", height:"100%",
                         objectFit:"cover", objectPosition:"center top", display:"block",
                         padding:0, margin:0 }}/>
                </div>
                <div style={{ padding:"12px 16px 16px", minHeight:80,
                              display:"flex", flexDirection:"column", gap:4 }}>
                  <p style={{ fontSize:14, fontWeight:700, color:"#FFFFFF",
                               textTransform:"uppercase", whiteSpace:"nowrap",
                               overflow:"hidden", textOverflow:"ellipsis", margin:0 }}>
                    {m.name}
                  </p>
                  <p style={{ fontSize:12, color:"rgba(255,255,255,0.7)",
                               lineHeight:1.4, whiteSpace:"normal", margin:0 }}>
                    {m.role}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
}
