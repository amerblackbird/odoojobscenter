import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactHeroSection } from "@/components/contact-hero-section"
import { ContactSection } from "@/components/contact-section"
import { ContactInfoSection } from "@/components/contact-info-section"

export default function ContactPage() {
  return (
      <main className="min-h-screen overflow-y-auto overflow-x-hidden max-w-full">
      <Header />
      <ContactHeroSection />
      <ContactInfoSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
