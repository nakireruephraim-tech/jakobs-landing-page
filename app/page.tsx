import { Hero } from "@/components/hero"
import { Domains } from "@/components/domains"
import { Services } from "@/components/services"
import { Projects } from "@/components/projects"
import dynamic from "next/dynamic"
import { Contact } from "@/components/contact"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

const Portfolio = dynamic(
  () => import("@/components/portfolio").then((m) => m.Portfolio),
  { ssr: false },
)

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Domains />
      <Services />
      <Projects />
      <Portfolio />
      <Contact />
      <Newsletter />
      <Footer />
    </main>
  )
}
