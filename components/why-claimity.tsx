import { SectionHeader } from "@/components/section-header"
import { Clock, FileX, TrendingDown, Users } from "lucide-react"
import { CheckCircle2, Zap, BarChart3, Plug } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const challenges = [
  {
    icon: Clock,
    title: "Zeitdruck & Ressourcenmangel",
    description: "Manuelle Prozesse binden Kapazitäten und verzögern die Bearbeitung",
  },
  {
    icon: FileX,
    title: "Medienbrüche & Intransparenz",
    description: "Kein einheitlicher Überblick über Schadenfälle und Status",
  },
  {
    icon: TrendingDown,
    title: "Qualität & Compliance",
    description: "Dezentrale Datenhaltung gefährdet Qualität und Nachweispflichten",
  },
  {
    icon: Users,
    title: "Fehlende Verfügbarkeit",
    description: "Qualifizierte Experten in der Region nicht verfügbar",
  },
]

const solutions = [
  {
    icon: Zap,
    title: "Automatisierte Zuweisung",
    description: "Experten nach Verfügbarkeit und Fachgebiet automatisch zugeteilt",
  },
  {
    icon: BarChart3,
    title: "Echtzeit-Reporting",
    description: "Transparenz über Status, Fristen und Kosten im Dashboard",
  },
  {
    icon: Plug,
    title: "Offene API",
    description: "Nahtlose Integration in bestehende Systeme ohne Medienbruch",
  },
  {
    icon: CheckCircle2,
    title: "Schnelle Expertise",
    description: "Großes Netzwerk qualifizierter Experten für schnelle Verfügbarkeit",
  },
]

export function WhyClaimity() {
  return (
    <section id="warum-claimity" className="py-10 md:py-12 bg-[#3FC1C9]/5">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 md:px-8 xl:px-16 2xl:px-20">
        <SectionHeader
          overline="Warum Claimity"
          title="Von manuell zu digital"
          description="Traditionelle Schadenabwicklung kostet Zeit und Geld. Claimity automatisiert den Prozess."
        />

        {/* Herausforderungen */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {challenges.map((challenge, index) => (
            <Card
              key={index}
              className="h-full flex flex-col bg-white border-[#3FC1C9]/20 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
            >
              <CardHeader className="pb-0">
                <div className="w-12 h-12 rounded-lg bg-white shadow-md flex items-center justify-center mb-3">
                  <challenge.icon className="w-6 h-6 text-red-500" />
                </div>
                <CardTitle className="text-base font-semibold mb-2">{challenge.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0 flex-1">
                <p className="text-sm text-muted-foreground line-clamp-2">{challenge.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Lösungen */}
        <div className="mt-5 md:mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {solutions.map((solution, index) => (
            <Card
              key={index}
              className="h-full flex flex-col bg-white border-[#3FC1C9]/20 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
            >
              <CardHeader className="pb-0">
                <div className="w-12 h-12 rounded-lg bg-white shadow-md flex items-center justify-center mb-3">
                  <solution.icon className="w-6 h-6 text-[#3FC1C9]" />
                </div>
                <CardTitle className="text-base font-semibold mb-2">{solution.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0 flex-1">
                <p className="text-sm text-muted-foreground line-clamp-2">{solution.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
