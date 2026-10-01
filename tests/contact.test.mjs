import assert from "node:assert/strict"
import { readFile } from "node:fs/promises"
import { afterEach, beforeEach, test } from "node:test"
import ts from "typescript"

// Compile the standalone handler in memory; all provider calls below are mocked.
const source = await readFile(new URL("../app/api/contact/route.ts", import.meta.url), "utf8")
const { outputText } = ts.transpileModule(source, {
  compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ESNext },
})
const { POST } = await import(`data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`)
const originalFetch = globalThis.fetch
const originalKey = process.env.RESEND_API_KEY
const originalFrom = process.env.CONTACT_FROM_EMAIL
const valid = { name: "Visitor", email: "visitor@example.com", message: "Hello, I would like to discuss a developer role." }

function request(body = valid, headers = {}) {
  return new Request("https://portfolio.example/api/contact", {
    method: "POST",
    headers: { "content-type": "application/json", origin: "https://portfolio.example", ...headers },
    body: JSON.stringify(body),
  })
}

beforeEach(() => {
  process.env.RESEND_API_KEY = "test-key-not-real"
  process.env.CONTACT_FROM_EMAIL = "Portfolio <contact@example.com>"
  globalThis.fetch = async () => { throw new Error("Unexpected external request") }
})

afterEach(() => {
  globalThis.fetch = originalFetch
  if (originalKey === undefined) delete process.env.RESEND_API_KEY
  else process.env.RESEND_API_KEY = originalKey
  if (originalFrom === undefined) delete process.env.CONTACT_FROM_EMAIL
  else process.env.CONTACT_FROM_EMAIL = originalFrom
})

test("sends only to the portfolio owner and sets the visitor as Reply-To", async () => {
  let called = false
  globalThis.fetch = async (url, options) => {
    called = true
    assert.equal(url, "https://api.resend.com/emails")
    const email = JSON.parse(options.body)
    assert.deepEqual(email.to, ["anirbandutta458@gmail.com"])
    assert.equal(email.reply_to, valid.email)
    assert.equal(email.from, process.env.CONTACT_FROM_EMAIL)
    assert.ok(email.text.includes(valid.message))
    return Response.json({ id: "accepted-message" })
  }
  const response = await POST(request({ ...valid, to: "someone-else@example.com" }))
  assert.equal(response.status, 200)
  assert.equal(called, true)
  assert.deepEqual(await response.json(), { success: true })
})

test("rejects malformed, empty, oversized and invalid fields before sending", async () => {
  for (const body of [null, [], {}, { ...valid, name: "  " }, { ...valid, name: "a\nb" }, { ...valid, email: "not-an-email" }, { ...valid, message: "short" }, { ...valid, message: "x".repeat(5001) }, { ...valid, website: "spam" }]) {
    assert.equal((await POST(request(body))).status, 400)
  }
  assert.equal((await POST(request({ ...valid, message: "x".repeat(33000) }))).status, 413)
  assert.equal((await POST(new Request("https://portfolio.example/api/contact", {
    method: "POST", headers: { "content-type": "application/json" }, body: "{broken",
  }))).status, 400)
})

test("rejects other browser origins and unsupported content types", async () => {
  assert.equal((await POST(request(valid, { origin: "https://other.example" }))).status, 403)
  assert.equal((await POST(request(valid, { "content-type": "text/plain" }))).status, 415)
})

test("reports missing configuration without claiming success", async () => {
  delete process.env.RESEND_API_KEY
  assert.equal((await POST(request())).status, 503)
})

test("provider rejections and rate limits never produce success or expose provider details", async () => {
  for (const status of [403, 429, 500]) {
    globalThis.fetch = async () => Response.json({ message: "private provider detail" }, { status })
    const response = await POST(request())
    assert.equal(response.status, status === 429 ? 429 : 502)
    assert.equal((await response.text()).includes("private provider detail"), false)
  }
})

test("network failure and invalid provider responses do not produce success", async () => {
  assert.equal((await POST(request())).status, 502)
  globalThis.fetch = async () => Response.json({})
  assert.equal((await POST(request())).status, 502)
})
