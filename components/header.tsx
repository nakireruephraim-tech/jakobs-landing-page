"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/lib/i18n/LanguageContext"

export function Header() {
  const { t } = useLanguage()

  return (
    <header className="fixed top-0 w-full z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center group">
            <Image 
              src="/jakobs-logo-white.png" 
              alt="Jakob's" 
              width={120} 
              height={40} 
              className="h-8 w-auto group-hover:opacity-80 transition-opacity duration-300" 
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link 
              href="#services" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
            >
              {t.nav.services}
            </Link>
            <Link 
              href="#projects" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
            >
              {t.nav.projects}
            </Link>
            <Link 
              href="#portfolio" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
            >
              {t.nav.portfolio}
            </Link>
            <Link 
              href="#contact" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
            >
              {t.nav.contact}
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Link href="#contact">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 hover:scale-105 active:scale-95 transition-all duration-300 shadow-md shadow-accent/20">
                {t.hero.primaryCta}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
