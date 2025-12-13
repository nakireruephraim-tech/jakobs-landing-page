import { NextResponse } from "next/server"
import { Resend } from "resend"

const resendApiKey = process.env.RESEND_API_KEY
const resend = resendApiKey ? new Resend(resendApiKey) : null

export async function POST(request: Request) {
  try {
    const body = await request.json().catch((err) => {
      console.error("[contact] Failed to parse JSON body", err)
      throw new Error("INVALID_JSON")
    })

    const { name, email, service, message } = body ?? {}

    console.log("[contact] Incoming request", { name, email, service, hasMessage: !!message })

    if (!name || !email || !message) {
      console.error("[contact] Missing required fields", { name, email, hasMessage: !!message })
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 },
      )
    }

    if (!resend) {
      console.error("[contact] RESEND_API_KEY is missing. Cannot send email.")
      return NextResponse.json(
        { error: "Email service is not configured on the server (missing RESEND_API_KEY)." },
        { status: 500 },
      )
    }

    const result = await resend.emails.send({
      from: "Jakob's Contact Form <noreply@jakobs.studio>",
      to: ["contact@jakobs.studio"],
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service Interested In:</strong> ${service || "Not specified"}</p>
        <p><strong>Message:</strong></p>
        <p>${String(message).replace(/\n/g, "<br>")}</p>
      `,
    })

    console.log("[contact] Resend response", result)

    if (result.error) {
      console.error("[contact] Resend error", result.error)
      return NextResponse.json(
        { error: `Failed to send message via Resend: ${result.error.message ?? "Unknown error"}` },
        { status: 500 },
      )
    }

    return NextResponse.json({ success: true })
  } catch (error: unknown) {
    if ((error as Error)?.message === "INVALID_JSON") {
      return NextResponse.json({ error: "Invalid JSON in request" }, { status: 400 })
    }

    console.error("[contact] Unhandled error", error)
    return NextResponse.json({ error: "Unexpected server error" }, { status: 500 })
  }
}
