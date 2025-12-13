"use client"

import Link from "next/link"
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
  const pigbyUrl = process.env.NEXT_PUBLIC_PIGBY_URL ?? "https://pigby.io"

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.projects.sectionTitle}</h2>
          <p className="text-xl text-muted-foreground">{t.projects.sectionSubtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {t.projects.projects.map((project, index) => {
            const card = (
              <Card
                key={index}
                className="card-shine p-6 bg-card border-border hover:border-primary/50 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 group cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className={`text-xs font-medium px-3 py-1.5 rounded-full ${tagColors[index]} border border-current/20`}>{project.tag}</span>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:rotate-12 transition-all duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{project.description}</p>
              </Card>
            )

            // Pigby.io is the first project
            if (index === 0) {
              return (
                <Link key={index} href={pigbyUrl} target="_blank" rel="noreferrer" className="block">
                  {card}
                </Link>
              )
            }

            // Jakob's Brand Identity is the second project
            if (index === 1) {
              return (
                <Link key={index} href="/brand" className="block">
                  {card}
                </Link>
              )
            }

            return card
          })}
        </div>
      </div>
    </section>
  )
}
