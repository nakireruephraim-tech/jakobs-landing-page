"use client"

import { useEffect, useRef, useState } from "react"
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
  poster?: string
}

interface SoftwareItem {
  title: string
  category: string
  videoSrc?: string
}

function LazyVideo({
  src,
  videoRef,
  preload = "none",
  ...props
}: Omit<React.VideoHTMLAttributes<HTMLVideoElement>, "src" | "preload" | "ref"> & {
  src: string
  videoRef?: (el: HTMLVideoElement | null) => void
  preload?: "none" | "metadata" | "auto"
}) {
  const localRef = useRef<HTMLVideoElement | null>(null)
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    const el = localRef.current
    if (!el || shouldLoad) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShouldLoad(true)
        }
      },
      { root: null, rootMargin: "200px 0px", threshold: 0.01 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [shouldLoad])

  return (
    <video
      {...props}
      ref={(el) => {
        localRef.current = el
        videoRef?.(el)
      }}
      preload={shouldLoad ? preload : "none"}
      src={shouldLoad ? src : undefined}
    />
  )
}

export function Portfolio() {
  const { t } = useLanguage()

  const portfolioKeys = ["graphic", "video", "motion"] as const

  const [selectedItem, setSelectedItem] = useState<GraphicItem | null>(null)
  const videoRefs = useRef<HTMLVideoElement[]>([])

  const graphicItems: GraphicItem[] = [
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
      images: [
        "/portfolio/2423bb2a-702d-46d9-9b4c-7f77b520ccf7.JPG",
        "/portfolio/42bad916-fbaf-4d19-bc44-b9948178cf02.JPG",
        "/portfolio/8372deb6-9cab-4643-b22c-a50f0a0c7129.JPG",
        "/portfolio/aab8cedc-ae00-472b-9b4d-adb6c4ffa7df.JPG",
      ],
      title: "Constance Group",
      subtitle: "Branding",
      description: "",
    },
  ]

  const videoItems: VideoItem[] = [
    {
      src: "/videos/Ba comp.mp4",
      title: "Event Highlights",
      category: "Events",
      poster: "/videos/posters/ba-comp.jpg",
    },
    {
      src: "/videos/Swim comp.mp4",
      title: "Swim – Brand Piece",
      category: "Brand",
      poster: "/videos/posters/swim-comp.jpg",
    },
    {
      src: "/videos/Titans Screen comp.mp4",
      title: "Titan Coffee",
      category: "Promo",
      poster: "/videos/posters/titans-screen-comp.jpg",
    },
    { src: "/videos/image00009.mp4",
      title: "Induction day",
      category: "Student comming to school",
      poster: "/videos/posters/image00009.jpg",
    },
    {
      src: "/videos/Mom for you (reduce) .mp4",
      title: "Workout session",
      category: "Motivation",
      poster: "/videos/posters/mom-for-you (reduce) .jpg",
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
      videoSrc: "/videos/new%20app%20comp.mp4",
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
                          loading="lazy"
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
                        <LazyVideo
                          src={video.src}
                          controls
                          preload="metadata"
                          poster={video.poster}
                          videoRef={(el) => {
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
                          <LazyVideo
                            src={item.videoSrc}
                            controls
                            preload="metadata"
                            className="w-full h-full object-contain bg-black/5 group-hover:scale-[1.01] transition-transform duration-500"
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
                              loading="lazy"
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
                      loading="lazy"
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
