import type { VercelRequest, VercelResponse } from "@vercel/node"

const GOOGLE_FORM_ACTION = process.env.GOOGLE_FORM_ACTION_URL
const ENTRY_NAME = process.env.GOOGLE_FORM_ENTRY_NAME || "entry.0"
const ENTRY_PHONE = process.env.GOOGLE_FORM_ENTRY_PHONE || "entry.1"
const ENTRY_EMAIL = process.env.GOOGLE_FORM_ENTRY_EMAIL || "entry.2"
const ENTRY_MESSAGE = process.env.GOOGLE_FORM_ENTRY_MESSAGE || "entry.3"

interface ContactPayload {
  name: string
  phone: string
  email: string
  message: string
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  const origin = req.headers.origin || ""
  const allowedOrigins = [
    "http://localhost:5173",
    "http://localhost:3000",
    "https://nextworkforce.vercel.app",
  ]
  if (process.env.ALLOWED_ORIGINS) {
    allowedOrigins.push(...process.env.ALLOWED_ORIGINS.split(","))
  }
  const isAllowed = allowedOrigins.some((o) => origin.startsWith(o)) || !origin
  if (isAllowed) {
    res.setHeader("Access-Control-Allow-Origin", origin || "*")
  }
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS")
  res.setHeader("Access-Control-Allow-Headers", "Content-Type")

  if (req.method === "OPTIONS") {
    return res.status(204).end()
  }

  try {
    const body = req.body as ContactPayload
    const { name, phone, email, message } = body || {}

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return res.status(400).json({
        error: "Missing required fields: name, email, and message are required",
      })
    }

    if (!GOOGLE_FORM_ACTION) {
      console.warn("GOOGLE_FORM_ACTION_URL not set - form submission skipped")
      return res.status(200).json({ success: true })
    }

    const params = new URLSearchParams({
      [ENTRY_NAME]: name.trim(),
      [ENTRY_PHONE]: (phone || "").trim(),
      [ENTRY_EMAIL]: email.trim(),
      [ENTRY_MESSAGE]: message.trim(),
    })

    await fetch(GOOGLE_FORM_ACTION, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    })

    return res.status(200).json({ success: true })
  } catch (err) {
    console.error("Contact form error:", err)
    return res.status(500).json({ error: "Failed to submit form" })
  }
}
