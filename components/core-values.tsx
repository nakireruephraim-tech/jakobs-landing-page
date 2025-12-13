"use client"

import { Heart, Users, Clock, Shield, Target, Landmark } from "lucide-react"
import { useLanguage } from "@/lib/i18n/LanguageContext"

const icons = [Heart, Users, Clock, Shield, Target, Landmark]

export function CoreValues() {
  const { t } = useLanguage()

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.coreValues.sectionTitle}</h2>
          <p className="text-xl text-muted-foreground">{t.coreValues.sectionSubtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.coreValues.values.map((value, index) => {
            const Icon = icons[index]
            return (
              <div key={index} className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-secondary">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
