"use client"

import { useRef, useEffect, useState } from "react"
import { useScroll, useTransform, motion } from "framer-motion"
import Image from "next/image"

const images = [
  "https://res.cloudinary.com/dd5f5j2ni/image/upload/v1780425528/e4064ae8-13ce-4069-a52f-6a1d002c419e_wo9rrl.png",
  "https://res.cloudinary.com/dd5f5j2ni/image/upload/v1780425616/cf25d449-75ec-4b2f-8988-d5ede2b0f7f9_qmyeb9.png",
  "https://res.cloudinary.com/dd5f5j2ni/image/upload/v1780425730/b7b93bee-f5bb-482e-aa7f-02b717605365_zrjwdo.png",
  "https://res.cloudinary.com/dd5f5j2ni/image/upload/v1780425836/d5632784-8545-4f84-b8d2-9ef4255ab28e_zerkch.png",
  "https://res.cloudinary.com/dd5f5j2ni/image/upload/v1780425881/27c6c362-9880-43c5-8b18-31252eac2738_cwszgj.png",
  "https://res.cloudinary.com/dd5f5j2ni/image/upload/v1780426033/a574e137-d8f1-48a1-8b9e-eac49140af71_ypasax.png",
  "https://res.cloudinary.com/dd5f5j2ni/image/upload/v1780426089/957c797f-ca0d-4de3-8f85-0e5444a97fd1_jm2xzn.png",
  "https://res.cloudinary.com/dd5f5j2ni/image/upload/v1780426177/0b66ffda-668f-4f20-8003-da7839f18cb0_tkdpgs.png",
]

const columns = [
  { imgs: [images[0], images[1]], topOffset: "-45%", speedMultiplier: 2 },
  { imgs: [images[2], images[3]], topOffset: "-95%", speedMultiplier: 3.3 },
  { imgs: [images[4], images[5]], topOffset: "-45%", speedMultiplier: 1.25 },
  { imgs: [images[6], images[7]], topOffset: "-75%", speedMultiplier: 3 },
]

function Column({
  imgs,
  topOffset,
  y,
}: {
  imgs: string[]
  topOffset: string
  y: ReturnType<typeof useTransform>
}) {
  return (
    <motion.div
      style={{
        y,
        top: topOffset,
        position: "relative",
        display: "flex",
        flexDirection: "column",
        flex: 1,
        gap: "2vw",
      }}
    >
      {imgs.map((src, i) => (
        <div
          key={i}
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "3/4",
            borderRadius: 12,
            overflow: "hidden",
            flexShrink: 0,
          }}
        >
          <Image
            src={src}
            alt={`Galeria imagem ${i + 1}`}
            fill
            sizes="25vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      ))}
    </motion.div>
  )
}

export default function GaleriaParallax() {
  const gallery = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    const update = () => setHeight(window.innerHeight)
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  useEffect(() => {
    let lenis: import("lenis").default | null = null

    const initLenis = async () => {
      const Lenis = (await import("lenis")).default
      // Reutiliza instância global se já existir
      if ((window as Window & { __lenis?: import("lenis").default }).__lenis) return
      lenis = new Lenis({ autoRaf: true })
      ;(window as Window & { __lenis?: import("lenis").default }).__lenis = lenis
    }

    initLenis()

    return () => {
      if (lenis) {
        lenis.destroy()
        delete (window as Window & { __lenis?: import("lenis").default }).__lenis
      }
    }
  }, [])

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, height * 2])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3])

  const yValues = [y1, y2, y3, y4]

  return (
    <section style={{ background: "#0A0A0F" }}>
      {/* Header */}
      <div
        style={{
          textAlign: "center",
          paddingTop: 80,
          paddingBottom: 48,
          paddingLeft: "1rem",
          paddingRight: "1rem",
        }}
      >
        <p
          style={{
            fontSize: 12,
            color: "#8B5CF6",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: 16,
            fontWeight: 600,
          }}
        >
          GALERIA
        </p>
        <h2
          style={{
            fontSize: "clamp(28px, 5vw, 42px)",
            fontWeight: 700,
            color: "#ffffff",
            margin: 0,
          }}
        >
          Momentos que marcaram o Piauí
        </h2>
      </div>

      {/* Galeria parallax */}
      <div
        ref={gallery}
        style={{
          height: "175vh",
          display: "flex",
          gap: "2vw",
          padding: "2vw",
          overflow: "hidden",
          background: "#0A0A0F",
        }}
      >
        {columns.map((col, i) => (
          <Column
            key={i}
            imgs={col.imgs}
            topOffset={col.topOffset}
            y={yValues[i]}
          />
        ))}
      </div>
    </section>
  )
}
