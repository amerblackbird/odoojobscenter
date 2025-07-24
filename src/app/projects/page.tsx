import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProjectsHeroSection } from "@/components/projects-hero-section"
import { ProjectsGallerySection } from "@/components/projects-gallery-section"
import { ProjectsTimelineSection } from "@/components/projects-timeline-section"
import { ProjectsCTASection } from "@/components/projects-cta-section"

export default function ProjectsPage() {
  return (
      <main className="min-h-screen overflow-y-auto overflow-x-hidden max-w-full">
      <Header />
      <ProjectsHeroSection />
      <ProjectsGallerySection />
      <ProjectsTimelineSection />
      <ProjectsCTASection />
      <Footer />
    </main>
  )
}
