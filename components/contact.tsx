"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin } from "lucide-react"
import { useLanguage } from "@/lib/i18n/LanguageContext"

export function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.contact.sectionTitle}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t.contact.sectionSubtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <Card className="p-8 bg-card border-border hover:border-primary/30 transition-colors duration-300 shadow-xl shadow-black/5">
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium">{t.contact.form.nameLabel}</Label>
                <Input 
                  id="name" 
                  placeholder={t.contact.form.namePlaceholder} 
                  className="bg-background border-border focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300" 
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">{t.contact.form.emailLabel}</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder={t.contact.form.emailPlaceholder} 
                  className="bg-background border-border focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300" 
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="service" className="text-sm font-medium">{t.contact.form.serviceLabel}</Label>
                <Input
                  id="service"
                  placeholder={t.contact.form.servicePlaceholder}
                  className="bg-background border-border focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium">{t.contact.form.messageLabel}</Label>
                <Textarea
                  id="message"
                  placeholder={t.contact.form.messagePlaceholder}
                  className="bg-background border-border min-h-32 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                />
              </div>

              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg shadow-accent/20" size="lg">
                {t.contact.form.submit}
              </Button>
            </form>
          </Card>

          <div className="space-y-8 lg:pl-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">{t.contact.info.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {t.contact.info.description}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <Mail className="h-5 w-5 text-primary group-hover:text-accent transition-colors duration-300" />
                </div>
                <div>
                  <p className="font-medium mb-1">{t.contact.info.emailLabel}</p>
                  <a
                    href="mailto:contact@jakobs.studio"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    contact@jakobs.studio
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <MapPin className="h-5 w-5 text-primary group-hover:text-accent transition-colors duration-300" />
                </div>
                <div>
                  <p className="font-medium mb-1">{t.contact.info.locationLabel}</p>
                  <p className="text-muted-foreground">{t.contact.info.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
