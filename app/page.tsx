import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import PricingSection from "@/components/pricing-section"
import AboutSection from "@/components/about-section"
import ContactSection from "@/components/contact-section"
import LeadMagnetSection from "@/components/lead-magnet-section"
import ConsultationBanner from "@/components/consultation-banner"
import ChatWidget from "@/components/chat-widget"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Main sections */}
      <main>
        <ServicesSection />
        <PricingSection />
        <AboutSection />
        <ContactSection />
      </main>

      {/* Lead Magnet Section - Above Footer */}
      <LeadMagnetSection />

      {/* Consultation Banner - Bottom of page */}
      <ConsultationBanner />

      <Footer />

      {/* Chat Widget - Fixed Position */}
      <ChatWidget />
    </div>
  )
}
