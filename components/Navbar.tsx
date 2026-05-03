// components/Navbar.tsx
"use client"

import { useRef } from "react"
import { motion } from "framer-motion"

export default function Navbar() {
  const navRef = useRef<HTMLDivElement | null>(null)

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (!el) return

    const navHeight = navRef.current?.offsetHeight ?? 80
    const top = el.getBoundingClientRect().top + window.pageYOffset - navHeight - 12

    window.scrollTo({ top, behavior: "smooth" })
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
    >
      <div ref={navRef} className="pointer-events-auto mx-auto w-full max-w-3xl flex items-center gap-8 px-8 py-3 rounded-full 
        bg-white/5 backdrop-blur-lg 
        border border-purple-500/20 
        shadow-lg shadow-purple-500/10">

        <div className="flex gap-6 text-sm text-gray-300">

            <a href="#home" onClick={(e) => handleNavClick(e, "home")} className="relative group transition">
                <span className="group-hover:text-white">Home</span>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-400 transition-all group-hover:w-full"></span>
            </a>

            <a href="#about" onClick={(e) => handleNavClick(e, "about")} className="relative group transition">
                <span className="group-hover:text-white">About</span>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-400 transition-all group-hover:w-full"></span>
            </a>

            <a href="#projects" onClick={(e) => handleNavClick(e, "projects")} className="relative group transition">
                <span className="group-hover:text-white">Projects</span>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-400 transition-all group-hover:w-full"></span>
            </a>

            <a href="#contact" onClick={(e) => handleNavClick(e, "contact")} className="relative group transition">
                <span className="group-hover:text-white">Contact</span>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-400 transition-all group-hover:w-full"></span>
            </a>
        </div>

      </div>
    </motion.nav>
  )
}