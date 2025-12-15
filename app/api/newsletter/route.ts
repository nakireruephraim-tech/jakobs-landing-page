import { NextResponse } from "next/server"
import { getSupabaseClient } from "@/lib/supabase"

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    const trimmedEmail = email.trim().toLowerCase()

    const supabase = getSupabaseClient()
    if (!supabase) {
      return NextResponse.json({ error: "Server is not configured" }, { status: 500 })
    }

    const { error } = await supabase.from("newsletter_subscriptions").insert({ email: trimmedEmail })

    if (error) {
      return NextResponse.json({ error: "Unable to subscribe right now" }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }
}
