import { Hero } from "@/components/hero"
import { Domains } from "@/components/domains"
import { Services } from "@/components/services"
import { CoreValues } from "@/components/core-values"
import { Vision } from "@/components/vision"
import { Projects } from "@/components/projects"
import { Portfolio } from "@/components/portfolio"
import { Contact } from "@/components/contact"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Domains />
      <Services />
      <CoreValues />
      <Vision />
      <Projects />
      <Portfolio />
      <Contact />
      <Newsletter />
      <Footer />
    </main>
  )
}
