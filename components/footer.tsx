"use client"

import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/lib/i18n/LanguageContext"

const socials = [
  { label: "Twitter", href: "#" },
  { label: "LinkedIn", href: "#" },
  {
    label: "Instagram",
    href: "https://www.instagram.com/jakobsstudio?igsh=MTNvNGJkYjgwN3h3cw%3D%3D&utm_source=qr",
  },
  { label: "GitHub", href: "#" },
]

export function Footer() {
  const { t } = useLanguage()

  const footerSections = [
    { title: t.footer.aboutTitle, links: t.footer.aboutLinks },
    { title: t.footer.servicesTitle, links: t.footer.servicesLinks },
    { title: t.footer.contactTitle, links: t.footer.contactLinks },
  ]

  return (
    <footer className="bg-secondary text-secondary-foreground py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Image src="/jakobs-logo-white.png" alt="Jakob's" width={120} height={40} className="h-8 w-auto mb-4" />
            <p className="text-secondary-foreground/70 leading-relaxed">{t.footer.tagline}</p>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-bold mb-4 text-lg">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-secondary-foreground/70 hover:text-accent hover:translate-x-1 transition-all duration-300 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-secondary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary-foreground/70 text-sm">
            {t.footer.copyright}
          </p>

          <div className="flex gap-6">
            {socials.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                className="text-secondary-foreground/70 hover:text-accent transition-colors duration-300 text-sm"
              >
                {social.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
