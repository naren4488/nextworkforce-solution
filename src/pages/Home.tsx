import { AboutSection } from "@/components/sections/home/AboutSection"
import { HeroSection } from "@/components/sections/home/HeroSection"
import { OurServicesSection } from "@/components/sections/home/OurServicesSection"
import { ServiceHighlights } from "@/components/sections/home/ServiceHighlights"
import { WhySection } from "@/components/sections/home/WhySection"

export function Home() {
  return (
    <div>
      <HeroSection />
      <ServiceHighlights />
      <AboutSection />
      <OurServicesSection />
      <WhySection />
    </div>
  )
}
