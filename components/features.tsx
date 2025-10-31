import { SectionHeader } from "@/components/section-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, BarChart3, Users, Shield } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Automatisierte Expertenzuweisung",
    benefits: [
      "Keine manuelle Suche mehr",
      "Optimale Netzwerk-Auslastung",
      "Schnellere Reaktionszeiten",
      "Transparente Zuteilungskriterien",
    ],
  },
  {
    icon: BarChart3,
    title: "Echtzeit-Status & Dashboard",
    benefits: [
      "Live-Tracking aller Schadenfälle",
      "KPI-Dashboards für Management",
      "Automatische Fristüberwachung",
      "Export & Reporting-Funktionen",
    ],
  },
  {
    icon: Users,
    title: "Rollen & Rechte",
    benefits: [
      "Flexible Rollendefinition",
      "Mandantenfähigkeit",
      "Single Sign-On (SSO)",
      "Granulare Zugriffssteuerung",
    ],
  },
  {
    icon: Shield,
    title: "DSG/DSGVO & Hosting Schweiz",
    benefits: [
      "Schweizer Rechenzentren",
      "Ende-zu-Ende-Verschlüsselung",
      "Vollständiger Audit-Trail",
      "ISO-zertifizierte Infrastruktur",
    ],
  },
]

export function Features() {
  return (
    <section id="funktionen" className="py-12 md:py-16 bg-muted/30">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 md:px-8 xl:px-16 2xl:px-20">
        <SectionHeader overline="Kernfunktionen" title="Alles, was Sie für effizientes Schadenmanagement brauchen" />

        <p className="text-base md:text-lg lg:text-xl text-muted-foreground text-center mx-auto w-full leading-tight md:leading-snug whitespace-normal md:whitespace-nowrap mt-4">
          Eine Plattform, die den Prozess von der Schadenmeldung bis zur Abrechnung digitalisiert.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="border-2 hover:border-[#3FC1C9]/50 transition-colors bg-white h-full flex flex-col"
            >
              <CardHeader className="pb-0">
                <div className="h-12 w-12 rounded-lg bg-[#3FC1C9]/15 flex items-center justify-center mb-2">
                  <feature.icon className="h-6 w-6 text-[#3FC1C9]" />
                </div>
                <CardTitle className="text-xl mb-1">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0 flex-1">
                <ul className="grid grid-cols-2 gap-x-4 gap-y-2 mt-0">
                  {feature.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2 text-sm">
                      <span className="text-[#3FC1C9] flex-shrink-0">•</span>
                      <span className="text-foreground/80 leading-tight">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
