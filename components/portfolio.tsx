"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"
import { useLanguage } from "@/lib/i18n/LanguageContext"

interface GraphicItem {
  images: string[]
  title: string
  subtitle: string
  description: string
}

interface VideoItem {
  src: string
  title: string
  category: string
}

interface SoftwareItem {
  title: string
  category: string
  videoSrc?: string
}

export function Portfolio() {
  const { t } = useLanguage()

  const portfolioKeys = ["graphic", "video", "motion"] as const

  const [selectedItem, setSelectedItem] = useState<GraphicItem | null>(null)
  const videoRefs = useRef<HTMLVideoElement[]>([])

  const graphicItems: GraphicItem[] = [
    {
      images: ["/portfolio/Screenshot 2025-12-13 at 23.59.24.png"],
      title: "Beau Plan",
      subtitle: "Souvenir Campaign",
      description: "We developed the key visuals that capture the essence of the brand and its offerings. This included creating a cohesive suite of print and digital assets to effectively communicate the campaign's message across various channels, fostering a connection to the Beau Plan experience.",
    },
    {
      images: ["/portfolio/Screenshot 2025-12-13 at 23.59.53.png"],
      title: "Phoenix Beer",
      subtitle: "Euro 2024 Campaign",
      description: "For the Euro Fiesta campaign, we created the key visuals that encapsulate the vibrant spirit of the event. This involved developing a cohesive range of print and digital assets to effectively promote the campaign across various platforms. The design elements were tailored to engage audiences and enhance the overall festive experience.",
    },
    {
      images: [
        "/portfolio/Screenshot 2025-12-14 at 00.00.26.png",
        "/portfolio/Screenshot 2025-12-14 at 00.01.12.png",
      ],
      title: "Diageo",
      subtitle: "Spirits Club",
      description: "The brand identity design for The Perfect Blend embodies the essence of sophistication and exclusivity. Through an elegant interplay of visuals, it encapsulates the refined world of spirits, celebrating the artistry of blending not only in taste but also in community, where diverse backgrounds converge into a seamless tapestry of shared passion and elevated experiences.",
    },
    {
      images: [
        "/portfolio/Screenshot 2025-12-14 at 00.01.34.png",
        "/portfolio/Screenshot 2025-12-14 at 00.02.13.png",
      ],
      title: "Syndicate",
      subtitle: "Esports",
      description: "Syndicate is a League of Legends esport team. It is a team of rebels and we needed the branding to establish the youthful spirit.",
    },
    {
      images: ["/portfolio/Screenshot 2025-12-14 at 00.02.39.png"],
      title: "Ukiyo",
      subtitle: "Cafe",
      description: "Ukiyo is the cafe specifically catered for fans of gaming and anime in Mauritius. These are the people who keep their interests to themselves, but Ukiyo is here to provide them with the platform for them to interact with people who share the same interests. We represented the brand as being an outline on the outside - similarly to how the demographic is perceived. On the inside however, their true colours emerge.",
    },
    {
      images: ["/portfolio/Screenshot 2025-12-14 at 00.03.20.png"],
      title: "Mersea",
      subtitle: "Fish and Seafood Store",
      description: "A promise of expertise, of hard work and hard-earned fresh fish and seafood. We needed to represent the bonds that Mersea is building through its service - connecting the people of Mauritius into a network of handpicked and honest quality.",
    },
    {
      images: ["/portfolio/Screenshot 2025-12-14 at 00.05.21.png"],
      title: "Out of Office",
      subtitle: "Rogers Hospitality Magazine",
      description:
        "Rogers Hospitality's annual magazine 'Out of Office' aims to deliver an aperçu of the island to tourists and visitors. We mixed traditional tropical paintings with textures and beautiful imagery to portray the island in this handy pocket-sized magazine.",
    },
    {
      images: ["/portfolio/Screenshot 2025-12-14 at 00.04.13.png"],
      title: "SBM",
      subtitle: "Annual Report",
      description:
        "For the SBM Integrated Report themed 'Embarking on a sustainable & purposeful journey,' this design proposal integrates 10 thematic dividers showcasing SBM's tangible actions towards sustainability, complemented by personal testimonials. The SBM icon transforms into a window revealing the bank's role as an enabler of sustainable futures, blending impactful narratives with innovative design.",
    },
  ]

  const videoItems: VideoItem[] = [
    {
      src: "/videos/Father day johnny.mp4",
      title: "Johnnie Walker – Father's Day",
      category: "Campaign Video",
    },
    {
      src: "/videos/Final Frog Cementis.mp4",
      title: "Cementis – Frog Spot",
      category: "Commercial",
    },
    {
      src: "/videos/Ba comp.mp4",
      title: "Event Highlights",
      category: "Events",
    },
    {
      src: "/videos/Jude.mp4",
      title: "Jude – Animated Piece",
      category: "Animation",
    },
    {
      src: "/videos/Swim comp.mp4",
      title: "Swim – Brand Piece",
      category: "Brand",
    },
    {
      src: "/videos/Loan comp.mp4",
      title: "Maubank – Loan Calculator Explainer",
      category: "Explainer",
    },
    {
      src: "/videos/Titans Screen comp.mp4",
      title: "Titan Coffee",
      category: "Promo",
    },
  ]

  const softwareItems: SoftwareItem[] = [
    {
      title: "AI Rapporteur",
      category: "AI / NLP",
    },
    {
      title: "Radiology Model Finetuning",
      category: "Medical Imaging",
    },
    {
      title: "Tennis Match Outcome Prediction Model",
      category: "Sports Analytics",
    },
    {
      title: "Student Planner Mobile App",
      category: "Education / Productivity",
    },
    {
      title: "AI E-Recruitment Pipeline",
      category: "HR / Talent",
    },
    {
      title: "AI Information Extraction Microservice",
      category: "Backend / AI",
    },
    {
      title: "Customer Service Conversation AI Agent",
      category: "Customer Support",
    },
    {
      title: "Pigby: Money Tracker App",
      category: "Fintech / Product",
      videoSrc: "/videos/Pigby screen record comp.mp4",
    },
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
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg data-[state=active]:shadow-primary/20 transition-all duration-300 hover:bg-primary/10"
            >
              {t.portfolio.tabs.graphic}
            </TabsTrigger>
            <TabsTrigger
              value="video"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg data-[state=active]:shadow-primary/20 transition-all duration-300 hover:bg-primary/10"
            >
              {t.portfolio.tabs.video}
            </TabsTrigger>
            <TabsTrigger
              value="motion"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg data-[state=active]:shadow-primary/20 transition-all duration-300 hover:bg-primary/10"
            >
              {t.portfolio.tabs.motion}
            </TabsTrigger>
          </TabsList>

          {portfolioKeys.map((key) => (
            <TabsContent key={key} value={key} className="animate-fade-in">
              <div className="grid md:grid-cols-2 gap-8">
                {key === "graphic" &&
                  graphicItems.map((item, index) => (
                    <Card
                      key={index}
                      className="group overflow-hidden bg-card border-border hover:border-accent hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 cursor-pointer"
                      onClick={() => setSelectedItem(item)}
                    >
                      <div className="aspect-video relative overflow-hidden">
                        <Image
                          src={item.images[0]}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                          sizes="(min-width: 768px) 50vw, 100vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                      <div className="p-6">
                        <span className="text-xs text-accent font-medium uppercase tracking-wider">{item.subtitle}</span>
                        <h3 className="text-xl font-bold mt-2 group-hover:text-primary transition-colors duration-300">
                          {item.title}
                        </h3>
                      </div>
                    </Card>
                  ))}

                {key === "video" &&
                  videoItems.map((video, index) => (
                    <Card
                      key={index}
                      className="group overflow-hidden bg-card border-border hover:border-accent hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500"
                    >
                      <div className="aspect-video relative overflow-hidden">
                        <video
                          src={video.src}
                          controls
                          ref={(el) => {
                            if (el) {
                              videoRefs.current[index] = el
                            }
                          }}
                          onPlay={() => {
                            videoRefs.current.forEach((v, i) => {
                              if (i !== index && v && !v.paused) {
                                v.pause()
                              }
                            })
                          }}
                          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <span className="text-xs text-accent font-medium uppercase tracking-wider">{video.category}</span>
                        <h3 className="text-xl font-bold mt-2 group-hover:text-primary transition-colors duration-300">
                          {video.title}
                        </h3>
                      </div>
                    </Card>
                  ))}

                {key === "motion" &&
                  softwareItems.map((item, index) => (
                    <Card
                      key={index}
                      className="group overflow-hidden bg-card border-border hover:border-accent hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 cursor-pointer"
                    >
                      <div className="aspect-video relative overflow-hidden">
                        {item.videoSrc ? (
                          <video
                            src={item.videoSrc}
                            controls
                            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/10 group-hover:from-primary/30 group-hover:to-accent/20 transition-all duration-500" />
                        )}
                      </div>
                      <div className="p-6">
                        <span className="text-xs text-accent font-medium uppercase tracking-wider">{item.category}</span>
                        <h3 className="text-xl font-bold mt-2 group-hover:text-primary transition-colors duration-300">
                          {item.title}
                        </h3>
                      </div>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
          <DialogContent className="max-w-4xl p-0 overflow-hidden bg-card border-border shadow-2xl">
            {selectedItem && (
              <div className="animate-in fade-in-0 zoom-in-95 duration-300">
                <DialogTitle className="sr-only">{selectedItem.title}</DialogTitle>
                {selectedItem.images.length > 1 ? (
                  <Carousel className="w-full">
                    <CarouselContent>
                      {selectedItem.images.map((img, idx) => (
                        <CarouselItem key={idx}>
                          <div className="aspect-video relative">
                            <Image
                              src={img}
                              alt={`${selectedItem.title} - ${idx + 1}`}
                              fill
                              className="object-cover"
                              sizes="(min-width: 768px) 80vw, 100vw"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-4 bg-background/80 hover:bg-background border-border" />
                    <CarouselNext className="right-4 bg-background/80 hover:bg-background border-border" />
                  </Carousel>
                ) : (
                  <div className="aspect-video relative">
                    <Image
                      src={selectedItem.images[0]}
                      alt={selectedItem.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 80vw, 100vw"
                    />
                  </div>
                )}
                <div className="p-8 md:p-10">
                  <span className="text-sm text-accent font-semibold uppercase tracking-wider">
                    {selectedItem.subtitle}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold mt-3 mb-4">
                    {selectedItem.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {selectedItem.description}
                  </p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
