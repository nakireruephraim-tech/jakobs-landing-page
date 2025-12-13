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
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.contact.sectionTitle}</h2>
          <p className="text-xl text-muted-foreground">{t.contact.sectionSubtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <Card className="p-8 bg-card border-border">
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">{t.contact.form.nameLabel}</Label>
                <Input id="name" placeholder={t.contact.form.namePlaceholder} className="bg-background border-border" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">{t.contact.form.emailLabel}</Label>
                <Input id="email" type="email" placeholder={t.contact.form.emailPlaceholder} className="bg-background border-border" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="service">{t.contact.form.serviceLabel}</Label>
                <Input
                  id="service"
                  placeholder={t.contact.form.servicePlaceholder}
                  className="bg-background border-border"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">{t.contact.form.messageLabel}</Label>
                <Textarea
                  id="message"
                  placeholder={t.contact.form.messagePlaceholder}
                  className="bg-background border-border min-h-32"
                />
              </div>

              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90" size="lg">
                {t.contact.form.submit}
              </Button>
            </form>
          </Card>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">{t.contact.info.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {t.contact.info.description}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium mb-1">{t.contact.info.emailLabel}</p>
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
