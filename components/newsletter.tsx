"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useLanguage } from "@/lib/i18n/LanguageContext"

export function Newsletter() {
  const { t } = useLanguage()
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)
    setMessage(null)
    setError(null)

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error ?? "Something went wrong")
      } else {
        setMessage("Thanks for subscribing!")
        setEmail("")
      }
    } catch (err) {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="newsletter" className="py-20 bg-gradient-to-r from-primary via-primary to-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(245,206,69,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h3 className="text-2xl md:text-4xl font-bold text-primary-foreground">{t.newsletter.title}</h3>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.newsletter.placeholder}
              required
              className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:border-accent/50 focus:ring-2 focus:ring-accent/20 transition-all duration-300 h-12"
            />
            <Button
              type="submit"
              disabled={isLoading}
              className="bg-accent text-accent-foreground hover:bg-accent/90 hover:scale-105 active:scale-95 transition-all duration-300 flex-shrink-0 h-12 px-8 shadow-lg shadow-accent/30"
            >
              {isLoading ? t.newsletter.subscribing : t.newsletter.subscribe}
            </Button>
          </form>
          {message && (
            <p className="text-sm text-primary-foreground/90 animate-fade-in bg-white/10 inline-block px-4 py-2 rounded-full">
              {t.newsletter.success}
            </p>
          )}
          {error && (
            <p className="text-sm text-red-200 animate-fade-in bg-red-500/20 inline-block px-4 py-2 rounded-full">
              {t.newsletter.error}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
