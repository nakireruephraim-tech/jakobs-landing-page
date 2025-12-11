"use client"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const services = {
  software: {
    title: "Software Development",
    items: ["Mobile app development", "Web app development", "Corporate/SME websites"],
  },
  ai: {
    title: "AI",
    items: ["Conversational AI agents", "AI workflow automation", "Custom LLM fine-tuning for industries"],
  },
  graphic: {
    title: "Graphic Design",
    items: [
      "Brand identity design",
      "Social media graphics (carousel design)",
      "Banner ads & promos",
      "Packaging mockups",
      "Business cards, flyers, brochures",
      "Podcast cover art / YouTube thumbnails",
    ],
  },
  motion: {
    title: "Motion Design",
    items: [
      "Logo animations",
      "Animated social posts",
      "Kinetic typography",
      "Explainer animations",
      "Promo event animations",
    ],
  },
  video: {
    title: "Video Editing",
    items: [
      "Short-form editing (TikTok/Reels/Shorts)",
      "Long-form editing (YouTube & online courses)",
      "Corporate & commercial edits",
      "Event recap videos",
      "Branded influencer editing",
      "Documentary-style storytelling",
    ],
  },
  marketing: {
    title: "Digital Marketing",
    items: [
      "Social media management",
      "Paid ads (Meta + Google)",
      "Content strategy + calendars",
      "Email marketing (Mailchimp)",
      "SEO optimization",
      "Campaign planning & reporting",
    ],
  },
}

export function Services() {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground">Comprehensive solutions for the modern digital landscape</p>
        </div>

        <Tabs defaultValue="software" className="max-w-5xl mx-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 h-auto bg-transparent">
            <TabsTrigger
              value="software"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Software
            </TabsTrigger>
            <TabsTrigger
              value="ai"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              AI
            </TabsTrigger>
            <TabsTrigger
              value="graphic"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Graphic
            </TabsTrigger>
            <TabsTrigger
              value="motion"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Motion
            </TabsTrigger>
            <TabsTrigger
              value="video"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Video
            </TabsTrigger>
            <TabsTrigger
              value="marketing"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Marketing
            </TabsTrigger>
          </TabsList>

          {Object.entries(services).map(([key, service]) => (
            <TabsContent key={key} value={key} className="mt-8">
              <Card className="p-8 bg-card border-border">
                <h3 className="text-2xl font-bold mb-6 text-primary">{service.title}</h3>
                <ul className="grid md:grid-cols-2 gap-4">
                  {service.items.map((item, index) => (
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
