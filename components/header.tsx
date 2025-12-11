import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src="/jakobs-logo-white.png" alt="Jakob's" width={120} height={40} className="h-8 w-auto" />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Services
            </Link>
            <Link href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </Link>
            <Link href="#portfolio" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Portfolio
            </Link>
            <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </nav>

          <Button className="bg-accent text-accent-foreground hover:bg-accent/90">Start a Project</Button>
        </div>
      </div>
    </header>
  )
}
