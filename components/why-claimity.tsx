import { SectionHeader } from "@/components/section-header"
import { Clock, FileX, TrendingDown, Users } from "lucide-react"
import { CheckCircle2, Zap, BarChart3, Plug } from "lucide-react"

const painPoints = [
  {
    icon: Clock,
    title: "Zeitdruck & Ressourcenmangel",
    description: "Manuelle Zuweisung und Koordination binden wertvolle Kapazitäten",
  },
  {
    icon: FileX,
    title: "Medienbrüche & Intransparenz",
    description: "E-Mail, Telefon, Excel – kein einheitlicher Überblick über Schadenfälle",
  },
  {
    icon: TrendingDown,
    title: "Qualität & Compliance",
    description: "Unterschiedliche Kanäle und dezentrale Datenhaltung gefährden Qualität & Nachweispflichten",
  },
  {
    icon: Users,
    title: "Fehlende Verfügbarkeit",
    description:
      "In der jeweiligen Region und für den jeweiligen Fall sind nicht ausreichend qualifizierte Experten verfügbar",
  },
]

const solutions = [
  {
    icon: Zap,
    title: "Automatisierte Zuweisung",
    description: "Experten werden nach Verfügbarkeit, Fachgebiet und Region automatisch zugeteilt",
  },
  {
    icon: BarChart3,
    title: "Echtzeit-Reporting",
    description: "Vollständige Transparenz über Status, Fristen und Kosten in einem Dashboard",
  },
  {
    icon: Plug,
    title: "Offene API",
    description: "Nahtlose Integration in bestehende Versicherungssysteme ohne Medienbruch",
  },
  {
    icon: CheckCircle2,
    title: "Schnelle Expertise",
    description: "Großes Netzwerk qualifizierter Experten in allen Regionen für schnelle Verfügbarkeit",
  },
]

const metrics = [
  { value: "30%", label: "weniger Admin-Aufwand" },
  { value: "24h", label: "Reaktionszeit" },
  { value: "100%", label: "digitale Integration" },
]

export function WhyClaimity() {
  return (
    <section id="warum-claimity" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader
          overline="Warum Claimity"
          title="Von manuell zu digital – in einem Schritt"
          description="Traditionelle Schadenabwicklung kostet Zeit, Geld und Nerven. Claimity automatisiert den gesamten Prozess."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {painPoints.map((point) => (
            <div key={point.title} className="rounded-lg bg-muted/30 p-6 shadow-sm">
              <point.icon className="h-8 w-8 text-destructive mb-4" />
              <h3 className="font-semibold text-foreground mb-2">{point.title}</h3>
              <p className="text-sm text-foreground/80">{point.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-[#3FC1C9]">Unser Ansatz</h3>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {solutions.map((solution) => (
              <div
                key={solution.title}
                className="rounded-lg bg-[#3FC1C9]/10 p-6 shadow-sm border-2 border-[#3FC1C9]/30"
              >
                <div className="h-12 w-12 rounded-lg bg-[#3FC1C9] flex items-center justify-center mb-4">
                  <solution.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{solution.title}</h3>
                <p className="text-sm text-foreground/80">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#3FC1C9] mb-2">{metric.value}</div>
              <div className="text-sm text-foreground/80">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
