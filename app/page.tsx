import { Hero } from "@/components/hero"
import { Domains } from "@/components/domains"
import { Services } from "@/components/services"
import { Projects } from "@/components/projects"
import { PortfolioClient } from "@/components/portfolio-client"
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
      <Projects />
      <PortfolioClient />
      <Contact />
      <Newsletter />
      <Footer />
    </main>
  )
}
