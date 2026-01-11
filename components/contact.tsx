"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Loader2 } from "lucide-react"
import { useLanguage } from "@/lib/i18n/LanguageContext"

export function Contact() {
  const { t } = useLanguage()
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)
    setStatus("idle")
    setErrorMessage(null)

    const form = e.currentTarget
    const formData = new FormData(form)
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      service: formData.get("service") as string,
      message: formData.get("message") as string,
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setStatus("success")
        form.reset()
      } else {
        const resBody = await response.json().catch(() => null)
        console.error("[contact] Client received error response", response.status, resBody)
        setErrorMessage(resBody?.error ?? "Unknown error from server")
        setStatus("error")
      }
    } catch (err) {
      console.error("[contact] Client fetch error", err)
      setErrorMessage("Network error while calling /api/contact")
      setStatus("error")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 ">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.contact.sectionTitle}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t.contact.sectionSubtitle}</p>
        </div>

        <div className="space-y-8 max-w-2xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-6">{t.contact.info.title}</h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {t.contact.info.description}
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <Mail className="h-5 w-5 text-primary group-hover:text-accent transition-colors duration-300" />
              </div>
              <div>
                <p className="font-medium mb-1">{t.contact.info.emailLabel}</p>
                <a
                  href="mailto:contact@jakobs.studio"
                  className="inline-flex items-center gap-2 text-primary font-semibold underline underline-offset-4 decoration-primary/60 hover:decoration-primary hover:text-primary/90 transition-colors duration-300"
                >
                  <span>contact@jakobs.studio</span>
                  <span className="text-xs text-muted-foreground">(Click to email)</span>
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <MapPin className="h-5 w-5 text-primary group-hover:text-accent transition-colors duration-300" />
              </div>
              <div>
                <p className="font-medium mb-1">{t.contact.info.locationLabel}</p>
                <p className="text-muted-foreground">{t.contact.info.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
