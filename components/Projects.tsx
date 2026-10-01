"use client"

import ProjectCard from "./ProjectCard"

import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Projects() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return
    const scrollAmount = 380
    scrollContainerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    })
  }

  return (
    <section id="projects" className="relative overflow-hidden px-6 md:px-10 py-28">
      <div className="glow top-0 left-0" />

      <div className="mx-auto max-w-6xl">
        <div className="relative z-10 max-w-2xl">
          <p className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-base text-white/80 backdrop-blur">
            Projects
          </p>

          {/* <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Projects designed to feel polished, fast, and easy to use.
          </h2>

          <p className="mt-6 max-w-2xl text-base md:text-lg leading-8 text-white/70">
            A few examples of the kind of work I enjoy building: practical tools, responsive interfaces,
            and systems that make everyday workflows simpler.
          </p> */}
        </div>

        <div className="mt-10 rounded-4xl border border-white/10 bg-white/5 p-6 md:p-8 shadow-2xl shadow-black/30 backdrop-blur-xl overflow-visible">
          <div className="relative overflow-visible">
            <div
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto overflow-y-hidden snap-x snap-mandatory pt-2 pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
            <div className="min-w-[320px] max-w-105 flex-1 snap-start relative z-20">
              <ProjectCard
                title="Nexa"
                description="A developer workspace for managing projects, tasks, and sprints, with productivity analytics and AI-powered project insights."
                tags={["React", "Express", "PostgreSQL"]}
                href="https://github.com/duttaanirban/Nexa"
                demoHref="https://nexa-tan.vercel.app"
              />
            </div>
            <div className="min-w-[320px] max-w-105 flex-1 snap-start relative z-20">
              <ProjectCard
                title="EventX"
                description="An event ticketing platform with Razorpay payments, QR-based check-in, real-time availability, and dashboards for organizers and admins."
                tags={["React", "Express", "MongoDB"]}
                href="https://github.com/duttaanirban/EventX"
                demoHref="https://eventx-duf8.onrender.com"
              />
            </div>
            <div className="min-w-[320px] max-w-105 flex-1 snap-start relative z-20">
              <ProjectCard
                title="QuickBlog"
                description="A full-stack blogging platform with an admin dashboard, AI-powered content generation, and image optimization."
                tags={["React", "Express", "MongoDB"]}
                href="https://github.com/duttaanirban/QuickBlog"
                demoHref="https://quick-blog-flax.vercel.app"
              />
            </div>
            <div className="min-w-[320px] max-w-105 flex-1 snap-start relative z-20">
              <ProjectCard
                title="QuickAi"
                description="A full-stack AI platform for generating articles, images, removing backgrounds, and reviewing resumes with a community feed."
                tags={["React", "Express", "PostgreSQL"]}
                href="https://github.com/duttaanirban/QuickAi"
                demoHref="https://quick-ai-mu-one.vercel.app"
              />
            </div>
            <div className="min-w-[320px] max-w-105 flex-1 snap-start relative z-20">
              <ProjectCard
                title="HR Workflow Designer"
                description="A functional React and React Flow prototype for designing, validating, and testing internal HR workflows like onboarding and approvals."
                tags={["React Flow", "TypeScript", "Workflow Builder"]}
                href="https://github.com/duttaanirban/HR_WORKFLOW_DESIGNER"
                demoHref="https://hr-workflow-designer-sage.vercel.app/"
              />
            </div>
            <div className="min-w-[320px] max-w-105 flex-1 snap-start relative z-20">
              <ProjectCard
                title="SAPR"
                description="A full-stack sentiment analysis app that classifies product reviews, returns confidence scores, and maps results to star ratings."
                tags={["Flask", "React", "Vite"]}
                href="https://github.com/duttaanirban/SAPR"
              />
            </div>
            </div>

            <button
              type="button"
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-24 md:-translate-x-28 z-10 rounded-full border border-white/10 bg-white/5 p-3 text-white/70 transition hover:border-purple-400/40 hover:bg-purple-500/10 hover:text-white"
              aria-label="Scroll projects left"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              type="button"
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-24 md:translate-x-28 z-10 rounded-full border border-white/10 bg-white/5 p-3 text-white/70 transition hover:border-purple-400/40 hover:bg-purple-500/10 hover:text-white"
              aria-label="Scroll projects right"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
