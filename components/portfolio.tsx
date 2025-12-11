import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const portfolioItems = {
  graphic: [
    { title: "Brand Identity Kit", category: "Branding" },
    { title: "Social Media Campaign", category: "Social" },
    { title: "Product Packaging", category: "Design" },
    { title: "Event Poster Series", category: "Print" },
  ],
  video: [
    { title: "Product Launch Video", category: "Commercial" },
    { title: "Documentary Short", category: "Storytelling" },
    { title: "Social Media Reels", category: "Social" },
    { title: "Event Highlight Reel", category: "Events" },
  ],
  motion: [
    { title: "Logo Animation", category: "Branding" },
    { title: "Explainer Video", category: "Educational" },
    { title: "Kinetic Typography", category: "Typography" },
    { title: "Promo Animation", category: "Marketing" },
  ],
}

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Portfolio</h2>
          <p className="text-xl text-muted-foreground">A showcase of our creative work</p>
        </div>

        <Tabs defaultValue="graphic" className="max-w-5xl mx-auto">
          <TabsList className="grid grid-cols-3 gap-2 h-auto bg-transparent max-w-md mx-auto mb-12">
            <TabsTrigger
              value="graphic"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Graphic Design
            </TabsTrigger>
            <TabsTrigger
              value="video"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Video Editing
            </TabsTrigger>
            <TabsTrigger
              value="motion"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Motion Design
            </TabsTrigger>
          </TabsList>

          {Object.entries(portfolioItems).map(([key, items]) => (
            <TabsContent key={key} value={key}>
              <div className="grid md:grid-cols-2 gap-6">
                {items.map((item, index) => (
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
