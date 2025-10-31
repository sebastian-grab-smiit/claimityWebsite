import { SectionHeader } from "@/components/section-header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plug, Server, Settings, Shield } from "lucide-react"
import Link from "next/link"

const integrationFeatures = [
  {
    icon: Plug,
    title: "Offene API",
    description: "RESTful API für einfache Anbindung an Versicherungs- und Bestandssoftware",
  },
  {
    icon: Server,
    title: "Sichere Datenübertragung",
    description: "TLS 1.3, Ende-zu-Ende-Verschlüsselung, Schweizer Rechenzentren",
  },
  {
    icon: Settings,
    title: "Anpassbare Workflows",
    description: "Individuelle Zuweisungslogik nach Region, Fachgebiet und Priorität",
  },
  {
    icon: Shield,
    title: "Zero-Trust Ready",
    description: "Moderne Sicherheitsarchitektur für höchste Compliance-Anforderungen",
  },
]

const badges = ["API-first", "Schweizer Hosting", "DSGVO-konform"]

export function Integration() {
  return (
    <section id="integration" className="py-16 md:py-24 bg-[#3FC1C9]/5">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 md:px-8 xl:px-16 2xl:px-20">
        <SectionHeader
          overline="Digitale Integration"
          title="Integration leicht gemacht"
          description="Claimity fügt sich nahtlos in Ihre bestehende IT-Landschaft ein – ohne aufwändige Migration."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {integrationFeatures.map((feature) => (
            <Card key={feature.title} className="text-center border-2 bg-white shadow-sm">
              <CardContent className="pt-6">
                <div className="mx-auto h-16 w-16 rounded-full bg-[#3FC1C9]/15 flex items-center justify-center mb-4">
                  <feature.icon className="h-8 w-8 text-[#3FC1C9]" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-foreground/80">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {badges.map((badge) => (
            <div
              key={badge}
              className="px-6 py-3 rounded-full bg-white border-2 border-[#3FC1C9]/30 text-sm font-medium text-primary"
            >
              {badge}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" className="bg-black hover:bg-black/90 text-white" asChild>
            <Link href="/kontakt">Technisches Gespräch vereinbaren</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
