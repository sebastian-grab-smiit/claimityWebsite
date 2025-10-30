import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { WhyClaimity } from "@/components/why-claimity"
import { Features } from "@/components/features"
import { Modules } from "@/components/modules"
import { Integration } from "@/components/integration"
import { Process } from "@/components/process"
import { References } from "@/components/references"
import { FAQ } from "@/components/faq"
import { CTABanner } from "@/components/cta-banner"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <WhyClaimity />
        <Features />
        <Modules />
        <Integration />
        <Process />
        <References />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
