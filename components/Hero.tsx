import Image from "next/image"
import { ArrowUpRight, Code2, FileText } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-heading" className="relative isolate overflow-hidden px-6 pb-16 pt-36 md:px-10 md:pb-20 lg:pt-44">
      <div aria-hidden="true" className="glow pointer-events-none -left-24 top-24 -z-10" />
      <div aria-hidden="true" className="glow pointer-events-none -right-24 bottom-20 -z-10" />

      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div className="min-w-0">
            <p className="mb-7 inline-flex max-w-full items-center gap-2.5 rounded-full border border-purple-400/20 bg-purple-400/[0.06] px-3.5 py-2 text-xs leading-5 text-purple-200 sm:text-sm">
              <span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-purple-300" />
              Open to SDE &amp; Full Stack Developer roles
            </p>
            <p className="mb-3 text-base text-zinc-400 sm:text-lg">Hi, I&apos;m</p>
            <h1 id="hero-heading" className="text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-7xl lg:text-8xl">
              Anirban <span className="block text-purple-300">Dutta.</span>
            </h1>
            <p className="mt-6 max-w-xl text-2xl font-medium leading-snug tracking-tight text-zinc-100 sm:text-3xl">
              I build web apps,<br className="hidden sm:block" /> from interface to database.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="group inline-flex min-h-12 items-center gap-3 rounded-xl bg-purple-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-purple-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-400">
                View Projects
                <ArrowUpRight aria-hidden="true" className="size-4 motion-safe:transition-transform motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5" />
              </a>
              <a href="https://drive.google.com/file/d/1PeWHRPVUqZx_XKBWjx6lV8qQvwAHJdB4/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-white/15 px-6 py-3 text-sm font-medium text-zinc-200 transition-colors hover:border-white/30 hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-400">
                <FileText aria-hidden="true" className="size-4" /> View R&eacute;sum&eacute;
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-zinc-400">
              <a href="https://github.com/duttaanirban" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-1 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-400">
                GitHub <ArrowUpRight aria-hidden="true" className="size-3.5" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
              <a href="https://www.linkedin.com/in/anirban-dutta-709861292/" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-1 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-400">
                LinkedIn <ArrowUpRight aria-hidden="true" className="size-3.5" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </div>
          </div>

          <figure className="mx-auto w-full max-w-sm overflow-hidden rounded-3xl border border-white/10 bg-[#111114] shadow-2xl shadow-purple-950/20 lg:ml-auto lg:mr-0">
            <div className="relative aspect-[4/5] overflow-hidden bg-zinc-200">
              <Image
                src="/pic.jpeg"
                alt="Portrait of Anirban Dutta"
                fill
                sizes="(min-width: 432px) 382px, calc(100vw - 50px)"
                preload
                className="object-cover object-center"
              />
            </div>
            <figcaption className="flex items-center gap-3 border-t border-white/10 px-5 py-5 sm:px-6">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-purple-400/20 bg-purple-400/10 text-purple-300">
                <Code2 aria-hidden="true" className="size-5" />
              </span>
              <div>
                <p className="text-sm font-medium text-white">Full Stack Developer</p>
                <p className="mt-1 text-xs leading-5 text-zinc-400">Interfaces. APIs. Real-world ideas.</p>
              </div>
            </figcaption>
          </figure>
        </div>

      </div>
    </section>
  )
}
