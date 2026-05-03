// components/Navbar.tsx
"use client"

import { motion } from "framer-motion"

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="flex items-center gap-8 px-8 py-3 rounded-full 
        bg-white/5 backdrop-blur-lg 
        border border-purple-500/20 
        shadow-lg shadow-purple-500/10">

        {/* Logo */}
        {/* <h1 className="text-sm font-semibold text-white">
          Anirban
        </h1> */}

        {/* Links */}
        <div className="flex gap-6 text-sm text-gray-300">

            <a href="#home" className="relative group transition">
                <span className="group-hover:text-white">Home</span>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-400 transition-all group-hover:w-full"></span>
            </a>

            <a href="#about" className="relative group transition">
                <span className="group-hover:text-white">About</span>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-400 transition-all group-hover:w-full"></span>
            </a>

            <a href="#projects" className="relative group transition">
                <span className="group-hover:text-white">Projects</span>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-400 transition-all group-hover:w-full"></span>
            </a>

            <a href="#contact" className="relative group transition">
                <span className="group-hover:text-white">Contact</span>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-400 transition-all group-hover:w-full"></span>
            </a>
        </div>

      </div>
    </motion.nav>
  )
}