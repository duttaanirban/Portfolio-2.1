import { ArrowUpRight, Code2, ChartNoAxesCombined, GitBranch, LayoutDashboard, NotebookPen, Sparkles, Ticket } from "lucide-react"

const visuals = [
  { icon: LayoutDashboard, color: "border-violet-400/25 bg-violet-400/10 text-violet-300", glow: "from-violet-500/10" },
  { icon: Ticket, color: "border-rose-400/25 bg-rose-400/10 text-rose-300", glow: "from-rose-500/10" },
  { icon: NotebookPen, color: "border-amber-400/25 bg-amber-400/10 text-amber-300", glow: "from-amber-500/10" },
  { icon: Sparkles, color: "border-purple-400/25 bg-purple-400/10 text-purple-300", glow: "from-purple-500/10" },
  { icon: GitBranch, color: "border-cyan-400/25 bg-cyan-400/10 text-cyan-300", glow: "from-cyan-500/10" },
  { icon: ChartNoAxesCombined, color: "border-teal-400/25 bg-teal-400/10 text-teal-300", glow: "from-teal-500/10" },
]

type ProjectCardProps = {
  title: string
  label: string
  description: string
  tags: readonly string[]
  href: string
  demoHref?: string
  number: number
}

export default function ProjectCard({ title, label, description, tags, href, demoHref, number }: ProjectCardProps) {
  const visual = visuals[(number - 1) % visuals.length]
  const Icon = visual.icon

  return (
    <article className="relative isolate flex h-full min-w-0 flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#111114] p-6 transition-[border-color,box-shadow] duration-300 hover:border-purple-400/35 hover:shadow-xl hover:shadow-purple-950/20 focus-within:border-purple-400/35 motion-reduce:transition-none sm:p-8">
      <div aria-hidden="true" className={`pointer-events-none absolute inset-0 -z-10 bg-linear-to-br ${visual.glow} via-transparent to-transparent`} />
      <div className="mb-8 flex items-center justify-between">
        <div className={`flex size-12 items-center justify-center rounded-2xl border ${visual.color}`}>
          <Icon aria-hidden="true" className="size-6" strokeWidth={1.5} />
        </div>
        <span aria-hidden="true" className="font-mono text-sm text-zinc-500">/{String(number).padStart(2, "0")}</span>
      </div>
      <p className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-400">{label}</p>
      <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-zinc-400 sm:text-base">{description}</p>
      <ul aria-label={`${title} technologies`} className="mb-8 mt-6 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <li key={tag} className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs text-zinc-300">{tag}</li>
        ))}
      </ul>
      <div className="mt-auto flex flex-wrap items-center gap-3 border-t border-white/[0.08] pt-5">
        {demoHref ? (
          <a href={demoHref} target="_blank" rel="noopener noreferrer" aria-label={`Live demo of ${title} (opens in a new tab)`} className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-purple-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-purple-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-400">
            Live Demo <ArrowUpRight aria-hidden="true" className="size-4" />
          </a>
        ) : null}
        <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`View ${title} repository (opens in a new tab)`} className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm font-medium text-zinc-300 transition-colors hover:border-white/25 hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-400">
          <Code2 aria-hidden="true" className="size-4" /> View Code
        </a>
      </div>
    </article>
  )
}
