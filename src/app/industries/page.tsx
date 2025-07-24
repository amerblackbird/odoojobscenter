import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { IndustriesHeroSection } from "@/components/industries-hero-section"
import { IndustriesDetailSection } from "@/components/industries-detail-section"
import { IndustriesCaseStudies } from "@/components/industries-case-studies"
import { IndustriesCTASection } from "@/components/industries-cta-section"

export default function IndustriesPage() {
  return (
      <main className="min-h-screen overflow-y-auto overflow-x-hidden max-w-full">
      <Header />
      <IndustriesHeroSection />
      <IndustriesDetailSection />
      <IndustriesCaseStudies />
      <IndustriesCTASection />
      <Footer />
    </main>
  )
}
