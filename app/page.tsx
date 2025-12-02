import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Programs } from "@/components/programs"
import { WhyJoin } from "@/components/why-join"
import { OurMission } from "@/components/our-mission"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Programs />
      <WhyJoin />
      <OurMission />
      <CTA />
      <Footer />
    </div>
  )
}
