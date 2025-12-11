"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Newsletter() {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground">
            Stay ahead with insights on AI, design, and creativity.
          </h3>

          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
            />
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 flex-shrink-0">Subscribe</Button>
          </form>
        </div>
      </div>
    </section>
  )
}
