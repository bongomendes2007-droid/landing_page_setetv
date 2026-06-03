"use client";
const LOGO = "https://res.cloudinary.com/dnth1inmv/image/upload/f_auto,q_auto/v1779833548/setetvnews_color_branca_H_ggfybe.png";

const cols = [
  { title:"Plataformas", links:[
    { label:"TV Digital",        href:"https://youtube.com/@setetv.oficial"    },
    { label:"Portal de Notícias",href:"https://www.setetvnews.com.br"          },
    { label:"Sete Cast",          href:"#"                                      },
    { label:"Instagram",         href:"https://instagram.com/setetvnews"       },
    { label:"YouTube",           href:"https://youtube.com/@setetv.oficial"    },
  ]},
  { title:"Serviços", links:[
    { label:"Cobertura Jornalística",    href:"#servicos" },
    { label:"Assessoria de Comunicação", href:"#servicos" },
    { label:"Transmissões ao Vivo",      href:"#servicos" },
    { label:"Produção Audiovisual",      href:"#servicos" },
    { label:"Campanhas Institucionais",  href:"#servicos" },
  ]},
  { title:"Contato", links:[
    { label:"redacao.setetvnews@gmail.com", href:"mailto:redacao.setetvnews@gmail.com" },
    { label:"(86) 99560-7919",             href:"tel:+558699560-7919"                 },
    { label:"(86) 98151-0292",             href:"tel:+558698151-0292"                 },
    { label:"Teresina – PI",               href:"#"                                   },
  ]},
];

export default function FooterNew() {
  return (
    <footer className="section-dark"
      style={{ borderTop:"1px solid rgba(255,255,255,0.06)", padding:"64px 0 32px" }}>
      <div style={{ maxWidth:1152, margin:"0 auto", padding:"0 48px" }}>
        <div className="grid md:grid-cols-4" style={{ gap:48, marginBottom:48 }}>
          <div>
            <img src={LOGO} alt="SETE TV News" style={{ height:36, width:"auto", marginBottom:16 }}/>
            <p style={{ fontFamily:"Inter", fontSize:13, color:"rgba(255,255,255,0.35)", lineHeight:1.65, marginBottom:20 }}>
              A plataforma de comunicação digital que conecta o Piauí com credibilidade, ética e responsabilidade social.
            </p>
            <div style={{ display:"flex", gap:8 }}>
              {[
                { label:"IG", href:"https://instagram.com/setetvnews"    },
                { label:"YT", href:"https://youtube.com/@setetv.oficial" },
                { label:"TK", href:"#"                                   },
                { label:"FB", href:"#"                                   },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                  style={{ width:32, height:32, borderRadius:8, background:"rgba(255,255,255,0.06)",
                           border:"1px solid rgba(255,255,255,0.08)", display:"flex",
                           alignItems:"center", justifyContent:"center", fontSize:9,
                           fontWeight:700, color:"rgba(255,255,255,0.5)", textDecoration:"none",
                           transition:"all .2s" }}
                  onMouseOver={e => { (e.currentTarget as HTMLElement).style.background="rgba(123,47,224,0.2)"; (e.currentTarget as HTMLElement).style.borderColor="rgba(123,47,224,0.4)"; }}
                  onMouseOut={e => { (e.currentTarget as HTMLElement).style.background="rgba(255,255,255,0.06)"; (e.currentTarget as HTMLElement).style.borderColor="rgba(255,255,255,0.08)"; }}>
                  {s.label}
                </a>
              ))}
            </div>
          </div>
          {cols.map((col,i) => (
            <div key={i}>
              <p style={{ fontFamily:"Inter", fontSize:10, fontWeight:700, letterSpacing:"0.1em",
                           textTransform:"uppercase", color:"rgba(255,255,255,0.25)", marginBottom:14 }}>{col.title}</p>
              {col.links.map((l,j) => (
                <a key={j} href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                  style={{ display:"block", fontFamily:"Inter", fontSize:13,
                           color:"rgba(255,255,255,0.45)", marginBottom:8,
                           textDecoration:"none", transition:"color .2s" }}
                  onMouseOver={e => (e.currentTarget.style.color="#fff")}
                  onMouseOut={e => (e.currentTarget.style.color="rgba(255,255,255,0.45)")}>
                  {l.label}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div style={{ borderTop:"1px solid rgba(255,255,255,0.06)", paddingTop:24,
                      display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:12 }}>
          <p style={{ fontFamily:"Inter", fontSize:12, color:"rgba(255,255,255,0.2)" }}>
            © 2026 SETE TV News — Todos os direitos reservados.
          </p>
          <p style={{ fontFamily:"Inter", fontSize:12, color:"rgba(255,255,255,0.2)" }}>
            Teresina – Piauí – Brasil
          </p>
        </div>
      </div>
    </footer>
  );
}
