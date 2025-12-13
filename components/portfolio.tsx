"use client"

import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useLanguage } from "@/lib/i18n/LanguageContext"

export function Portfolio() {
  const { t } = useLanguage()

  const portfolioKeys = ["graphic", "video", "motion"] as const

  return (
    <section id="portfolio" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.portfolio.sectionTitle}</h2>
          <p className="text-xl text-muted-foreground">{t.portfolio.sectionSubtitle}</p>
        </div>

        <Tabs defaultValue="graphic" className="max-w-5xl mx-auto">
          <TabsList className="grid grid-cols-3 gap-2 h-auto bg-transparent max-w-md mx-auto mb-12">
            <TabsTrigger
              value="graphic"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              {t.portfolio.tabs.graphic}
            </TabsTrigger>
            <TabsTrigger
              value="video"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              {t.portfolio.tabs.video}
            </TabsTrigger>
            <TabsTrigger
              value="motion"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              {t.portfolio.tabs.motion}
            </TabsTrigger>
          </TabsList>

          {portfolioKeys.map((key) => (
            <TabsContent key={key} value={key}>
              <div className="grid md:grid-cols-2 gap-6">
                {t.portfolio[key].map((item, index) => (
                  <Card
                    key={index}
                    className="group overflow-hidden bg-card border-border hover:border-accent transition-all duration-300 cursor-pointer"
                  >
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/10 relative overflow-hidden">
                      <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors" />
                    </div>
                    <div className="p-6">
                      <span className="text-xs text-accent font-medium">{item.category}</span>
                      <h3 className="text-xl font-bold mt-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
