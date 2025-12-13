"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useLanguage } from "@/lib/i18n/LanguageContext"

export function Portfolio() {
  const { t } = useLanguage()

  const portfolioKeys = ["graphic", "video", "motion"] as const

  const graphicImages = [
    "/portfolio/Screenshot 2025-12-13 at 23.59.24.png",
    "/portfolio/Screenshot 2025-12-13 at 23.59.53.png",
    "/portfolio/Screenshot 2025-12-14 at 00.00.26.png",
    "/portfolio/Screenshot 2025-12-14 at 00.01.12.png",
    "/portfolio/Screenshot 2025-12-14 at 00.01.34.png",
    "/portfolio/Screenshot 2025-12-14 at 00.02.13.png",
    "/portfolio/Screenshot 2025-12-14 at 00.02.39.png",
    "/portfolio/Screenshot 2025-12-14 at 00.03.20.png",
  ]

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
                {key === "graphic"
                  ? graphicImages.map((src, index) => {
                      const item = t.portfolio.graphic[index % t.portfolio.graphic.length]
                      return (
                        <Card
                          key={index}
                          className="group overflow-hidden bg-card border-border hover:border-accent transition-all duration-300 cursor-pointer"
                        >
                          <div className="aspect-video relative overflow-hidden">
                            <Image
                              src={src}
                              alt={item.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                              sizes="(min-width: 768px) 50vw, 100vw"
                            />
                          </div>
                          <div className="p-6">
                            <span className="text-xs text-accent font-medium">{item.category}</span>
                            <h3 className="text-xl font-bold mt-2 group-hover:text-primary transition-colors">
                              {item.title}
                            </h3>
                          </div>
                        </Card>
                      )
                    })
                  : t.portfolio[key].map((item, index) => (
                      <Card
                        key={index}
                        className="group overflow-hidden bg-card border-border hover:border-accent transition-all duration-300 cursor-pointer"
                      >
                        <div className="aspect-video relative overflow-hidden">
                          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/10" />
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
