"use client"

import { useState } from "react"
import { ArrowUpRight } from "lucide-react"
import ProjectCard from "./ProjectCard"

const categories = ["All projects", "AI & Data", "Platforms", "Developer tools"] as const
type Category = (typeof categories)[number]

const projects = [
  {
    title: "Nexa",
    description: "A developer workspace for managing projects, tasks, and sprints, with productivity analytics and AI-powered project insights.",
    href: "https://github.com/duttaanirban/Nexa",
    demoHref: "https://nexa-tan.vercel.app",
    tags: ["React", "Express", "PostgreSQL"],
    category: "Developer tools", label: "Developer workspace",
  },
  {
    title: "EventX",
    description: "An event ticketing platform with Razorpay payments, QR-based check-in, real-time availability, and dashboards for organizers and admins.",
    href: "https://github.com/duttaanirban/EventX",
    demoHref: "https://eventx-duf8.onrender.com",
    tags: ["React", "Express", "MongoDB"],
    category: "Platforms", label: "Events & ticketing",
  },
  {
    title: "QuickBlog",
    description: "A full-stack blogging platform with an admin dashboard, AI-powered content generation, and image optimization.",
    href: "https://github.com/duttaanirban/QuickBlog",
    demoHref: "https://quick-blog-flax.vercel.app",
    tags: ["React", "Express", "MongoDB"],
    category: "Platforms", label: "Content publishing",
  },
  {
    title: "QuickAi",
    description: "A full-stack AI platform for generating articles, images, removing backgrounds, and reviewing resumes with a community feed.",
    href: "https://github.com/duttaanirban/QuickAi",
    demoHref: "https://quick-ai-mu-one.vercel.app",
    tags: ["React", "Express", "PostgreSQL"],
    category: "AI & Data", label: "AI creative toolkit",
  },
  {
    title: "HR Workflow Designer",
    description: "A functional React and React Flow prototype for designing, validating, and testing internal HR workflows like onboarding and approvals.",
    href: "https://github.com/duttaanirban/HR_WORKFLOW_DESIGNER",
    demoHref: "https://hr-workflow-designer-sage.vercel.app/",
    tags: ["React Flow", "TypeScript", "Workflow Builder"],
    category: "Developer tools", label: "Visual workflow builder",
  },
  {
    title: "SAPR",
    description: "A full-stack sentiment analysis app that classifies product reviews, returns confidence scores, and maps results to star ratings.",
    href: "https://github.com/duttaanirban/SAPR",
    tags: ["Flask", "React", "Vite"],
    category: "AI & Data", label: "Sentiment analysis",
  },
] as const

export default function Projects() {
  const [category, setCategory] = useState<Category>("All projects")
  const visibleProjects = projects.filter((project) => category === "All projects" || project.category === category)

  return (
    <section id="projects" aria-labelledby="projects-heading" className="relative isolate overflow-hidden px-6 py-20 md:px-10 md:py-28">
      <div aria-hidden="true" className="glow pointer-events-none -left-32 top-0 -z-10" />
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-purple-300">
              <span aria-hidden="true" className="h-px w-8 bg-purple-400" /> Selected work
            </p>
            <h2 id="projects-heading" className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Ideas turned into <span className="text-purple-300">products.</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-zinc-400">
              A collection of things I&apos;ve built, from developer tools to AI applications. Explore a live demo or look through the code.
            </p>
          </div>
          <a href="https://github.com/duttaanirban" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 shrink-0 items-center gap-2 self-start text-sm text-zinc-300 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-400 sm:self-auto">
            More on GitHub <ArrowUpRight aria-hidden="true" className="size-4" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>

        <div className="mb-8 mt-10 flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <div role="group" aria-label="Filter projects by category" className="flex flex-wrap gap-2">
            {categories.map((item) => (
              <button key={item} type="button" aria-pressed={category === item} aria-controls="project-grid" onClick={() => setCategory(item)} className={`min-h-11 rounded-full border px-4 py-2 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-400 ${category === item ? "border-purple-400/40 bg-purple-400/15 text-purple-200" : "border-white/10 bg-white/[0.02] text-zinc-400 hover:border-white/25 hover:text-white"}`}>
                {item}
              </button>
            ))}
          </div>
          <p role="status" aria-live="polite" aria-atomic="true" className="shrink-0 text-xs tabular-nums text-zinc-400">
            {visibleProjects.length} of {projects.length} projects
          </p>
        </div>

        <div id="project-grid" className="grid gap-5 md:grid-cols-2 md:gap-6">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.title} {...project} number={projects.indexOf(project) + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
