"use client"

import { useRef, useState } from "react"
import { Mail } from "lucide-react"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const submitting = useRef(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setSubmitStatus("idle")
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (submitting.current) return
    const website = new FormData(e.currentTarget).get("website")
    submitting.current = true
    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrorMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, website }),
        signal: AbortSignal.timeout(20000),
      })
      const result = await response.json()
      if (!response.ok || result.success !== true) {
        setErrorMessage(typeof result.error === "string" ? result.error : "Unable to send your message. Please try again or email me directly.")
        setSubmitStatus("error")
        return
      }
      setSubmitStatus("success")
      setFormData({ name: "", email: "", message: "" })
    } catch {
      setErrorMessage("Unable to confirm sending. Please check your connection or email me directly.")
      setSubmitStatus("error")
    } finally {
      submitting.current = false
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden px-6 md:px-10 py-28">
      <div className="glow top-0 right-0" />

      <div className="mx-auto max-w-6xl">
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <p className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur">
            Get in touch
          </p>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Let&apos;s build something amazing together.
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg leading-8 text-white/70">
            Have a project in mind or just want to chat? Reach out and let me know how I can help.
          </p>
        </div>

        <div className="mt-12 rounded-4xl border border-white/10 bg-white/5 p-8 md:p-10 shadow-2xl shadow-black/30 backdrop-blur-xl max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} aria-busy={isSubmitting}>
            <div className="hidden" aria-hidden="true">
              <label htmlFor="website">Leave this field empty</label>
              <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
            </div>
            <fieldset disabled={isSubmitting} className="min-w-0 space-y-6">
              <legend className="sr-only">Send Anirban a message</legend>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white mb-3">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                autoComplete="name"
                maxLength={100}
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white placeholder-white/40 transition focus:border-purple-400/40 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-3">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                maxLength={254}
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white placeholder-white/40 transition focus:border-purple-400/40 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white mb-3">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                minLength={10}
                maxLength={5000}
                aria-describedby="message-hint"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white placeholder-white/40 transition focus:border-purple-400/40 focus:outline-none focus:ring-2 focus:ring-purple-500/20 resize-y"
                placeholder="Tell me about your project..."
              />
              <p id="message-hint" className="mt-2 text-xs text-zinc-400">10 to 5,000 characters.</p>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-2xl bg-purple-600 px-6 py-3 font-medium text-white shadow-lg shadow-purple-600/25 transition hover:bg-purple-700 disabled:opacity-50 disabled:cursor-wait focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-400"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
            </fieldset>

            <div role="status" aria-live="polite" aria-atomic="true" className="mt-4 text-center text-sm">
              {submitStatus === "success" && <p className="text-green-400">Thanks! Your message has been submitted. I&apos;ll reply to the email you provided.</p>}
              {submitStatus === "error" && <p className="text-red-400">{errorMessage}</p>}
            </div>
            <p className="mt-4 text-center text-sm leading-6 text-zinc-400">
              Prefer email? <a href="mailto:anirbandutta458@gmail.com" className="break-all text-purple-300 underline underline-offset-4 hover:text-purple-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-400">anirbandutta458@gmail.com</a>
            </p>
          </form>

          <div className="mt-10 border-t border-white/10 pt-10">
            <p className="text-sm uppercase tracking-[0.2em] text-white/60 mb-6 text-center">
              Connect with me
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="mailto:anirbandutta458@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 bg-white/5 p-4 text-white/70 transition hover:border-purple-400/40 hover:bg-purple-500/10 hover:text-white"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
              <a
                href="https://github.com/duttaanirban"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 bg-white/5 p-4 text-white/70 transition hover:border-purple-400/40 hover:bg-purple-500/10 hover:text-white"
                aria-label="GitHub"
              >
                <FaGithub className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/anirban-dutta-709861292/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 bg-white/5 p-4 text-white/70 transition hover:border-purple-400/40 hover:bg-purple-500/10 hover:text-white"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a
                href="https://x.com/Anirban_ad8"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 bg-white/5 p-4 text-white/70 transition hover:border-purple-400/40 hover:bg-purple-500/10 hover:text-white"
                aria-label="Twitter"
              >
                <FaTwitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
