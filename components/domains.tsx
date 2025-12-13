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
          <p className="text-xl text-muted-foreground">{t.domains.sectionSubtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {domains.map((domain, index) => {
            const Icon = domain.icon
            return (
              <Card
                key={index}
                className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{domain.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{domain.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
