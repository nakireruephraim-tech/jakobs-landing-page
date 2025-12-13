"use client"

import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useLanguage } from "@/lib/i18n/LanguageContext"

export function Services() {
  const { t } = useLanguage()

  const serviceKeys = ["software", "ai", "graphic", "motion", "video", "marketing"] as const

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.services.sectionTitle}</h2>
          <p className="text-xl text-muted-foreground">{t.services.sectionSubtitle}</p>
        </div>

        <Tabs defaultValue="software" className="max-w-5xl mx-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 h-auto bg-transparent max-w-3xl mx-auto">
            <TabsTrigger
              value="software"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              {t.services.tabs.software}
            </TabsTrigger>
            <TabsTrigger
              value="ai"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              {t.services.tabs.ai}
            </TabsTrigger>
            <TabsTrigger
              value="graphic"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              {t.services.tabs.graphic}
            </TabsTrigger>
            <TabsTrigger
              value="motion"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              {t.services.tabs.motion}
            </TabsTrigger>
            <TabsTrigger
              value="video"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              {t.services.tabs.video}
            </TabsTrigger>
            <TabsTrigger
              value="marketing"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              {t.services.tabs.marketing}
            </TabsTrigger>
          </TabsList>

          {serviceKeys.map((key) => (
            <TabsContent key={key} value={key} className="mt-8">
              <Card className="p-8 bg-card border-border">
                <h3 className="text-2xl font-bold mb-6 text-primary">{t.services[key].title}</h3>
                <ul className="grid md:grid-cols-2 gap-4">
                  {t.services[key].items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-accent mt-1">→</span>
                      <span className="text-foreground leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
