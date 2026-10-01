const recipient = "anirbandutta458@gmail.com"
const unavailable = "Your message could not be sent. Please try again or email me directly."

export async function POST(request: Request) {
  const origin = request.headers.get("origin")
  if (origin && origin !== new URL(request.url).origin) {
    return Response.json({ error: "Please send your message through the portfolio form." }, { status: 403 })
  }

  if (!request.headers.get("content-type")?.includes("application/json")) {
    return Response.json({ error: "Expected a JSON message." }, { status: 415 })
  }

  let data: unknown
  try {
    const body = await request.text()
    if (new TextEncoder().encode(body).length > 32768) {
      return Response.json({ error: "Your message is too long." }, { status: 413 })
    }
    data = JSON.parse(body)
  } catch {
    return Response.json({ error: "Please check your message and try again." }, { status: 400 })
  }

  if (!data || typeof data !== "object" || Array.isArray(data)) {
    return Response.json({ error: "Please complete all fields." }, { status: 400 })
  }

  const fields = data as Record<string, unknown>
  if (fields.website) {
    return Response.json({ error: "Unable to submit this message." }, { status: 400 })
  }
  const name = typeof fields.name === "string" ? fields.name.trim() : ""
  const email = typeof fields.email === "string" ? fields.email.trim() : ""
  const message = typeof fields.message === "string" ? fields.message.trim() : ""

  if (!name || name.length > 100 || /[\r\n]/.test(name)) {
    return Response.json({ error: "Enter a name between 1 and 100 characters." }, { status: 400 })
  }
  if (email.length > 254 || !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(email)) {
    return Response.json({ error: "Enter a valid email address." }, { status: 400 })
  }
  if (message.length < 10 || message.length > 5000) {
    return Response.json({ error: "Your message must contain 10 to 5,000 characters." }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.CONTACT_FROM_EMAIL
  if (!apiKey || !from) {
    return Response.json({ error: unavailable }, { status: 503 })
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [recipient],
        reply_to: email,
        subject: `Portfolio message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      }),
      signal: AbortSignal.timeout(15000),
    })

    if (!response.ok) {
      return Response.json({ error: unavailable }, { status: response.status === 429 ? 429 : 502 })
    }
    const result = await response.json()
    if (typeof result?.id !== "string" || !result.id) {
      return Response.json({ error: unavailable }, { status: 502 })
    }
    return Response.json({ success: true })
  } catch {
    return Response.json({ error: unavailable }, { status: 502 })
  }
}
