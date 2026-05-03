// components/Hero.tsx
"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen px-6 md:px-10 py-28 relative overflow-hidden">
      <div className="glow top-20 left-10 md:left-20" />
      <div className="glow bottom-0 right-0" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="relative z-10 max-w-2xl">
          {/* <p className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur">
            Available for freelance and full-time opportunities
          </p> */}

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
            Hi, I&apos;m <span className="text-purple-400">Anirban</span>
          </h1>

          <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
            I build <span className="bg-linear-to-r from-purple-400 via-fuchsia-400 to-pink-500 text-transparent bg-clip-text">
              modern web apps
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-base md:text-lg text-white/70">
            Full stack developer focused on building scalable and interactive applications.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="mt-8 rounded-xl bg-purple-600 px-6 py-3 font-medium text-white shadow-lg shadow-purple-600/25 transition"
          >
            View Projects
          </motion.button>
        </div>

        <div className="relative z-10">
          <div className="rounded-4xl border border-white/10 bg-white/5 p-4 shadow-2xl shadow-black/30 backdrop-blur-xl">
            <div className="flex items-center justify-center rounded-4xl border border-white/10 bg-[#12081f] p-6 md:p-8">
              <div className="relative aspect-square w-full max-w-sm overflow-hidden rounded-full border-4 border-white/10 shadow-2xl shadow-black/30">
                <Image
                  src="/Profile.jpeg"
                  alt="Portrait of Anirban"
                  fill
                  priority
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}