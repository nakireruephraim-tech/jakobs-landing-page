"use client"

import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useLanguage } from "@/lib/i18n/LanguageContext"
import { useEffect, useState, useCallback } from "react"

const SERVICE_KEYS = ["software", "ai", "graphic", "motion", "video", "marketing"] as const
type ServiceTab = (typeof SERVICE_KEYS)[number]

export function Services() {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState<ServiceTab>("software")

  useEffect(() => {
    // Function to extract tab from URL hash
    const updateTabFromHash = () => {
      const hash = window.location.hash
      
      // Check if hash matches our pattern
      if (hash && hash.startsWith("#services-")) {
        const tabName = hash.substring(10) // Remove "#services-" prefix
        
        // Verify it's a valid tab
        if (SERVICE_KEYS.includes(tabName as ServiceTab)) {
          setActiveTab(tabName as ServiceTab)
          
          // Scroll to section
          const section = document.getElementById("services")
          if (section) {
            section.scrollIntoView({ behavior: "smooth" })
          }
        }
      }
    }

    // Run on mount to check initial hash
    updateTabFromHash()

    // Listen for hash changes
    window.addEventListener("hashchange", updateTabFromHash)
    
    // Cleanup
    return () => {
      window.removeEventListener("hashchange", updateTabFromHash)
    }
  }, [])

  return (
    <section id="services" className="py-24 bg-muted/30 relative">
      {/* Deep linking anchors for native browser scrolling */}
      {SERVICE_KEYS.map((key) => (
        <span key={key} id={`services-${key}`} className="absolute top-0" />
      ))}
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.services.sectionTitle}</h2>
          <p className="text-xl text-muted-foreground">{t.services.sectionSubtitle}</p>
        </div>

        <Tabs
          value={activeTab}
          onValueChange={(next) => {
            const nextTab = next as ServiceTab
            setActiveTab(nextTab)
            if (typeof window !== "undefined") {
              window.history.replaceState(null, "", `#services-${nextTab}`)
            }
          }}
          className="max-w-5xl mx-auto"
        >
          <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 h-auto bg-transparent max-w-3xl mx-auto mb-2">
            <TabsTrigger
              value="software"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg data-[state=active]:shadow-primary/20 transition-all duration-300 hover:bg-primary/10"
            >
              {t.services.tabs.software}
            </TabsTrigger>
            <TabsTrigger
              value="ai"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg data-[state=active]:shadow-primary/20 transition-all duration-300 hover:bg-primary/10"
            >
              {t.services.tabs.ai}
            </TabsTrigger>
            <TabsTrigger
              value="graphic"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg data-[state=active]:shadow-primary/20 transition-all duration-300 hover:bg-primary/10"
            >
              {t.services.tabs.graphic}
            </TabsTrigger>
            <TabsTrigger
              value="motion"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg data-[state=active]:shadow-primary/20 transition-all duration-300 hover:bg-primary/10"
            >
              {t.services.tabs.motion}
            </TabsTrigger>
            <TabsTrigger
              value="video"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg data-[state=active]:shadow-primary/20 transition-all duration-300 hover:bg-primary/10"
            >
              {t.services.tabs.video}
            </TabsTrigger>
            <TabsTrigger
              value="marketing"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg data-[state=active]:shadow-primary/20 transition-all duration-300 hover:bg-primary/10"
            >
              {t.services.tabs.marketing}
            </TabsTrigger>
          </TabsList>

          {SERVICE_KEYS.map((key) => (
            <TabsContent key={key} value={key} className="mt-8 animate-fade-in">
              <Card className="p-8 bg-card border-border hover:border-primary/30 transition-colors duration-300">
                <h3 className="text-2xl font-bold mb-6 text-primary">{t.services[key].title}</h3>
                <ul className="grid md:grid-cols-2 gap-4">
                  {t.services[key].items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 group">
                      <span className="text-accent mt-1 group-hover:translate-x-1 transition-transform duration-300">→</span>
                      <span className="text-foreground leading-relaxed group-hover:text-primary/90 transition-colors duration-300">{item}</span>
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
