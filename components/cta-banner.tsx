import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function CTABanner() {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 md:px-8 xl:px-16 2xl:px-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Bereit für digitales Schadenmanagement?</h2>
          <p className="text-lg mb-8 text-primary-foreground/90 text-pretty">
            Starten Sie noch heute mit einer unverbindlichen Demo und erleben Sie, wie Claimity Ihre Prozesse
            transformiert.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/kontakt">
                Demo anfordern
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Link href="/kontakt">Kontakt aufnehmen</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
