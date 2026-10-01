// components/Navbar.tsx
"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const

export default function Navbar() {
  const navRef = useRef<HTMLDivElement | null>(null)
  const [activeSection, setActiveSection] = useState<string>("home")

  useEffect(() => {
    const sections = links.flatMap(({ id }) => {
      const element = document.getElementById(id)
      return element ? [{ id, element }] : []
    })
    let frame = 0

    const updateActiveSection = () => {
      frame = 0
      // Track a line below the navbar, keeping tall sections active as they scroll.
      const marker = Math.max(96, window.innerHeight * 0.25)
      let current: string = sections[0]?.id ?? "home"
      for (const section of sections) {
        if (section.element.getBoundingClientRect().top <= marker) current = section.id
      }
      // The last section may be too short to reach the marker.
      if (window.scrollY > 0 && window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
        current = sections.at(-1)?.id ?? current
      }
      setActiveSection(current)
    }

    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateActiveSection)
    }

    // Project filtering, fonts, and responsive layout can move section boundaries.
    const observer = new ResizeObserver(scheduleUpdate)
    sections.forEach(({ element }) => observer.observe(element))
    window.addEventListener("scroll", scheduleUpdate, { passive: true })
    window.addEventListener("resize", scheduleUpdate)
    window.addEventListener("hashchange", scheduleUpdate)
    scheduleUpdate()

    return () => {
      window.cancelAnimationFrame(frame)
      observer.disconnect()
      window.removeEventListener("scroll", scheduleUpdate)
      window.removeEventListener("resize", scheduleUpdate)
      window.removeEventListener("hashchange", scheduleUpdate)
    }
  }, [])

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
      aria-label="Main navigation"
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

          {links.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleNavClick(e, id)}
              aria-current={activeSection === id ? "location" : undefined}
              className={`relative group rounded-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-400 ${activeSection === id ? "text-purple-300" : "hover:text-white"}`}
            >
              {label}
              <span aria-hidden="true" className={`absolute left-0 -bottom-1 h-0.5 rounded-full bg-purple-400 transition-[width] motion-reduce:transition-none ${activeSection === id ? "w-full" : "w-0 group-hover:w-full"}`} />
            </a>
          ))}
        </div>

      </div>
    </motion.nav>
  )
}
