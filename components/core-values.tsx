import { Heart, Users, Clock, Shield, Target, Landmark } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Beauty",
    description: "Thoughtfully designed experiences",
  },
  {
    icon: Users,
    title: "Loyalty",
    description: "Long-lasting relationships",
  },
  {
    icon: Clock,
    title: "Longevity",
    description: "Solutions built to endure",
  },
  {
    icon: Shield,
    title: "Truth",
    description: "Transparency and integrity",
  },
  {
    icon: Target,
    title: "Discipline",
    description: "Focused execution",
  },
  {
    icon: Landmark,
    title: "Heritage",
    description: "Honoring our roots while innovating",
  },
]

export function CoreValues() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Core Values</h2>
          <p className="text-xl text-muted-foreground">The principles that guide everything we do</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon
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
