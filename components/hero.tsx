import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Database, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-muted/30 pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 md:px-8 xl:px-16 2xl:px-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#3FC1C9]/10 px-4 py-2 text-sm text-[#3FC1C9] font-medium">
            <CheckCircle2 className="h-4 w-4" />
            <span>Die Plattform für Versicherungen und Experten</span>
          </div>

          <p className="mb-4 text-2xl md:text-3xl font-semibold text-[#3FC1C9] italic">Where Claims find Clarity</p>

          <h1 className="mb-6 text-4xl font-bold tracking-tight text-primary md:text-6xl lg:text-7xl text-balance">
            Schadenmanagement. Digital. Effizient.
          </h1>

          <p className="mb-8 text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto text-pretty">
            Claimity vermittelt zertifizierte Expert:innen automatisch – für schnellere Bearbeitung, weniger Aufwand und
            volle Transparenz.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" asChild className="w-full sm:w-auto">
              <Link href="/kontakt">
                Demo anfordern
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="w-full sm:w-auto bg-transparent">
              <Link href="/kontakt">Kontakt aufnehmen</Link>
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Shield className="h-5 w-5 text-[#3FC1C9]" />
              <span>Schweizer Hosting</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Database className="h-5 w-5 text-[#3FC1C9]" />
              <span>DSGVO-konform</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <CheckCircle2 className="h-5 w-5 text-[#3FC1C9]" />
              <span>Zertifizierte Experten</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
