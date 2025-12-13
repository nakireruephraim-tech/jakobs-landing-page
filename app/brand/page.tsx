import { Header } from "@/components/header"
import { Vision } from "@/components/vision"
import { CoreValues } from "@/components/core-values"
import { Footer } from "@/components/footer"

export default function BrandPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Vision />
      <CoreValues />
      <Footer />
    </main>
  )
}
