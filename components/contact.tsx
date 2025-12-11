"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to work with us?</h2>
          <p className="text-xl text-muted-foreground">We'd love to build something extraordinary together.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <Card className="p-8 bg-card border-border">
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Your name" className="bg-background border-border" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" className="bg-background border-border" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="service">What service are you looking for?</Label>
                <Input
                  id="service"
                  placeholder="e.g., Web Development, Branding"
                  className="bg-background border-border"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project..."
                  className="bg-background border-border min-h-32"
                />
              </div>

              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90" size="lg">
                Send Message
              </Button>
            </form>
          </Card>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you have a project in mind or just want to chat about possibilities, we're here to help bring
                your vision to life.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium mb-1">Email</p>
                  <a
                    href="mailto:hello@jakobs.studio"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    hello@jakobs.studio
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium mb-1">Location</p>
                  <p className="text-muted-foreground">Mauritius | Remote</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
