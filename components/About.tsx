import { ArrowUpRight, Braces, Database, PanelsTopLeft } from "lucide-react"

const toolkit = [
  { title: "Interfaces", icon: PanelsTopLeft, color: "text-violet-300 bg-violet-400/10", description: "Responsive pages, dashboards, and interactive workflow tools.", skills: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS"] },
  { title: "APIs & application logic", icon: Braces, color: "text-cyan-300 bg-cyan-400/10", description: "Connecting interfaces to authentication, payments, and AI features.", skills: ["Node.js", "Express", "Python", "Flask"] },
  { title: "Data & persistence", icon: Database, color: "text-amber-300 bg-amber-400/10", description: "Relational and document databases that power application features.", skills: ["PostgreSQL", "MongoDB"] },
]

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="relative isolate overflow-hidden px-6 py-20 md:px-10 md:py-28">
      <div aria-hidden="true" className="glow pointer-events-none -right-32 top-10 -z-10" />
      <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <div>
          <p className="mb-4 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-purple-300">
            <span aria-hidden="true" className="h-px w-8 bg-purple-400" /> About me
          </p>
          <h2 id="about-heading" className="text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
            From the interface <span className="text-purple-300">to the API.</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-zinc-200">
            I&apos;m Anirban, a final-year B.Tech student in Computer Science and Engineering,
            building web applications across the stack.
          </p>
          <p className="mt-4 text-base leading-8 text-zinc-400">
            My projects span developer workspaces, event ticketing, and AI tools. I like working across the stack:
            shaping the interface, connecting the APIs, and organizing the data behind them.
          </p>
          <p className="mt-4 text-base leading-8 text-zinc-400">
            I&apos;m seeking Software Development Engineer (SDE) and Full Stack Developer roles,
            where I can contribute to useful products and keep growing as a developer.
          </p>
          <div className="mt-8 border-l-2 border-purple-400/50 pl-5">
            <h3 className="text-xs font-medium uppercase tracking-[0.16em] text-purple-300">Experience</h3>
            <p className="mt-3 text-base font-medium text-zinc-100">Full Stack Developer Intern</p>
            <p className="mt-1 text-sm text-zinc-300">Innovation Hacks</p>
            <p className="mt-2 text-sm text-zinc-400">
              <time dateTime="2026-08">Aug 2026</time> &ndash; <time dateTime="2026-09">Sep 2026</time>
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-purple-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-purple-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-400">
              Get in touch <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
            <a href="#projects" className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-white/10 px-5 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:border-white/25 hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-400">
              Explore my work <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
          </div>
        </div>
        <div className="relative isolate min-w-0 overflow-hidden rounded-3xl border border-white/10 bg-[#111114] p-6 sm:p-8">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-br from-purple-500/10 via-transparent to-transparent" />
          <div className="border-b border-white/10 pb-6">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-purple-300">My toolkit</p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">Tools behind the work.</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-400">Technologies I use across the projects in this portfolio.</p>
          </div>
          <div className="divide-y divide-white/10">
            {toolkit.map(({ title, description, icon: Icon, color, skills }) => (
              <div key={title} className="py-6 last:pb-0">
                <div className="flex items-center gap-3">
                  <span className={`flex size-10 shrink-0 items-center justify-center rounded-xl border border-white/10 ${color}`}>
                    <Icon aria-hidden="true" className="size-5" strokeWidth={1.5} />
                  </span>
                  <h4 className="text-base font-medium text-zinc-100">{title}</h4>
                </div>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{description}</p>
                <ul aria-label={`${title} technologies`} className="mt-4 flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <li key={skill} className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs text-zinc-300">{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
