import { SectionHeader } from "@/components/section-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, BarChart3, Users, Shield } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Automatisierte Expertenzuweisung",
    description: "Intelligente Vermittlung basierend auf Verfügbarkeit, Fachgebiet und Standort",
    benefits: ["Keine manuelle Suche mehr", "Optimale Auslastung des Expertennetzwerks", "Schnellere Reaktionszeiten"],
  },
  {
    icon: BarChart3,
    title: "Echtzeit-Status & Dashboard",
    description: "Vollständiger Überblick über alle laufenden und abgeschlossenen Fälle",
    benefits: ["Live-Tracking aller Schadenfälle", "KPI-Dashboards für Management", "Automatische Fristüberwachung"],
  },
  {
    icon: Users,
    title: "Rollen & Rechte",
    description: "Granulare Zugriffskontrolle und Berechtigungsmanagement",
    benefits: ["Flexible Rollendefinition", "Mandantenfähigkeit", "Single Sign-On (SSO)"],
  },
  {
    icon: Shield,
    title: "DSG/DSGVO & Hosting Schweiz",
    description: "Vollständige Compliance mit Schweizer und EU-Datenschutzrecht",
    benefits: ["Schweizer Rechenzentren", "Ende-zu-Ende-Verschlüsselung", "Vollständiger Audit-Trail"],
  },
]

export function Features() {
  return (
    <section id="funktionen" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionHeader
          overline="Kernfunktionen"
          title="Alles, was Sie für effizientes Schadenmanagement brauchen"
          description="Eine Plattform, die den gesamten Prozess von der Schadenmeldung bis zur Abrechnung digitalisiert."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {features.map((feature) => (
            <Card key={feature.title} className="border-2 hover:border-[#3FC1C9]/50 transition-colors bg-white">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-[#3FC1C9]/15 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-[#3FC1C9]" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2 text-sm">
                      <span className="text-[#3FC1C9] mt-0.5">•</span>
                      <span className="text-foreground/80">{benefit}</span>
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
