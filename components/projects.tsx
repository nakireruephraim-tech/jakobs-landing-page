"use client"

import { Card } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import { useLanguage } from "@/lib/i18n/LanguageContext"

const tagColors = [
  "bg-green-500/10 text-green-500",
  "bg-primary/10 text-primary",
  "bg-accent/20 text-accent-foreground",
]

export function Projects() {
  const { t } = useLanguage()

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.projects.sectionTitle}</h2>
          <p className="text-xl text-muted-foreground">{t.projects.sectionSubtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {t.projects.projects.map((project, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <span className={`text-xs font-medium px-3 py-1 rounded-full ${tagColors[index]}`}>{project.tag}</span>
                <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{project.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
