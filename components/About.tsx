export default function About() {
  return (
    <section id="about" className="relative overflow-hidden px-6 md:px-10 py-28">
      <div className="glow top-10 right-0" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative z-10">
          <p className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-base text-white/80 backdrop-blur">
            About me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Building thoughtful products with clean code and a sharp eye for detail.
          </h2>

          <p className="mt-6 max-w-2xl text-base md:text-lg leading-8 text-white/70">
            I’m a full-stack developer focused on building practical, high-impact web applications—from real-time systems to data-driven dashboards and AI-powered tools.          </p>

          <p className="mt-4 max-w-2xl text-base md:text-lg leading-8 text-white/70">
            I enjoy turning ideas into clean, responsive, and scalable products, with attention to both user experience and underlying architecture.
          </p>
        </div>

        <div className="relative z-10">
          <div className="rounded-4xl border border-white/10 bg-white/5 p-6 md:p-8 shadow-2xl shadow-black/30 backdrop-blur-xl">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-purple-300/80">Focus</p>
                <p className="mt-3 text-lg font-semibold text-white">UI, performance, and scalability</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-purple-300/80">Approach</p>
                <p className="mt-3 text-lg font-semibold text-white">Simple, consistent, and user-first</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-purple-300/80">Builds</p>
                <p className="mt-3 text-lg font-semibold text-white">Dashboards, apps, and portfolios</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-purple-300/80">Mindset</p>
                <p className="mt-3 text-lg font-semibold text-white">Clean code with strong visuals</p>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  )
}