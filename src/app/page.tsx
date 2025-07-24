import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { BentoSection } from "@/components/bento-section"
import { AboutSection } from "@/components/about-section"
import { IndustriesSection } from "@/components/industries-section"
import { ProjectsSection } from "@/components/projects-section"
import { PartnersSection } from "@/components/partners-section"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function Home() {
    return (
        <main className="min-h-screen overflow-y-auto overflow-x-hidden max-w-full">
            <Header />
            <HeroSection />
            <StatsSection />
            <BentoSection />
            <AboutSection />
            <IndustriesSection />
            <ProjectsSection />
            <PartnersSection />
            <Footer />
        </main>
    )
}
