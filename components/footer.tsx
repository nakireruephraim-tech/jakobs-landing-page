import Link from "next/link"
import Image from "next/image"

const footerLinks = {
  "About Jakob's": [
    { label: "Our Story", href: "#" },
    { label: "Core Values", href: "#" },
    { label: "Vision", href: "#" },
  ],
  Services: [
    { label: "Software Development", href: "#services" },
    { label: "AI Solutions", href: "#services" },
    { label: "Content Creation", href: "#portfolio" },
    { label: "Digital Marketing", href: "#services" },
  ],
  Contact: [
    { label: "hello@jakobs.studio", href: "mailto:hello@jakobs.studio" },
    { label: "Mauritius", href: "#" },
    { label: "Work with us", href: "#contact" },
  ],
}

const socials = [
  { label: "Twitter", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "GitHub", href: "#" },
]

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Image src="/jakobs-logo-white.png" alt="Jakob's" width={120} height={40} className="h-8 w-auto mb-4" />
            <p className="text-secondary-foreground/70 leading-relaxed">Built in Africa. Powered by innovation.</p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-bold mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors"
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
            © {new Date().getFullYear()} Jakob's. All rights reserved.
          </p>

          <div className="flex gap-6">
            {socials.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors text-sm"
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
