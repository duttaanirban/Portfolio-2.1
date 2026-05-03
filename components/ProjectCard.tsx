type ProjectCardProps = {
  title: string
  description: string
  tags: string[]
  href?: string
}

export default function ProjectCard({ title, description, tags, href }: ProjectCardProps) {
  return (
    <article className="group rounded-4xl border border-white/10 bg-white/5 p-6 md:p-7 shadow-2xl shadow-black/20 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-purple-400/30 hover:shadow-purple-500/20">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-purple-300/80">Featured project</p>
          <h3 className="mt-3 text-2xl font-semibold text-white">{title}</h3>
        </div>
        <div className="h-12 w-12 rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(168,85,247,0.22),rgba(17,24,39,0.2))]" />
      </div>

      <p className="mt-4 max-w-xl text-base leading-7 text-white/70">{description}</p>

      <div className="mt-6 flex flex-wrap gap-3">
        {tags.map((tag) => (
          <span key={tag} className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-white/75">
            {tag}
          </span>
        ))}
      </div>

      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/85 transition hover:border-purple-400/40 hover:bg-purple-500/10 hover:text-white"
        >
          View Repository
        </a>
      ) : null}
    </article>
  )
}