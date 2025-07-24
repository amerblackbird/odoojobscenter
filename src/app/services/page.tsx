import {Header} from "@/components/header"
import {Footer} from "@/components/footer"
import {ServicesHeroSection} from "@/components/services-hero-section"
import {ServicesSection} from "@/components/services-section"
import {MediaSection} from "@/components/media-section"
import {ServicesCTASection} from "@/components/services-cta-section"

export default function ServicesPage() {
    return (
        <main className="min-h-screen overflow-y-auto overflow-x-hidden max-w-full">
            <Header/>
            <ServicesHeroSection/>
            <ServicesSection/>
            <MediaSection/>
            <ServicesCTASection/>
            <Footer/>
        </main>
    )
}
