"use client"

import { Card } from "@/components/ui/card"
import { Code, Video, TrendingUp } from "lucide-react"
import { useLanguage } from "@/lib/i18n/LanguageContext"

export function Domains() {
  const { t } = useLanguage()

  const domains = [
    {
      icon: Code,
      title: t.domains.software.title,
      description: t.domains.software.description,
    },
    {
      icon: Video,
      title: t.domains.content.title,
      description: t.domains.content.description,
    },
    {
      icon: TrendingUp,
      title: t.domains.marketing.title,
      description: t.domains.marketing.description,
    },
  ]

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.domains.sectionTitle}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t.domains.sectionSubtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {domains.map((domain, index) => {
            const Icon = domain.icon
            return (
              <Card
                key={index}
                className="card-shine p-8 bg-card border-border hover:border-primary/50 hover:-translate-y-2 transition-all duration-500 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <Icon className="h-8 w-8 text-primary group-hover:text-accent transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">{domain.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{domain.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
