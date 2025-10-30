import { SectionHeader } from "@/components/section-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Car, Building2, Search } from "lucide-react"
import Link from "next/link"

const modules = [
  {
    icon: Car,
    title: "Fahrzeugexpertisen",
    description: "Umfassende Gutachten für alle Fahrzeugtypen – vom Kleinwagen bis zum Nutzfahrzeug",
    services: [
      "Standard-Schadengutachten mit detaillierter Kalkulation",
      "Kurz- und Live-Expertisen für schnelle Entscheidungen",
      "Wrackverkauf und Verwertungsabwicklung",
      "Rechnungsprüfung und Plausibilitätschecks",
    ],
  },
  {
    icon: Building2,
    title: "Sachverständige",
    description: "Professionelle Begutachtung von Gebäude-, Tiefbau- und Hausratschäden",
    services: [
      "Gebäudeschäden: Feuer, Wasser, Sturm, Erdbeben",
      "Tiefbauschäden: Fundamente, Leitungen, Infrastruktur",
      "Hausratschäden: Inventar, Einrichtung, Wertsachen",
      "Normierte Dokumentation nach Schweizer Standards",
    ],
  },
  {
    icon: Search,
    title: "Betrugsermittlung",
    description: "Diskrete und professionelle Aufklärung von Verdachtsfällen",
    services: [
      "Verdachtsabklärung bei auffälligen Schadenmustern",
      "Beweissicherung durch zertifizierte Ermittler",
      "Umfassende Ermittlungsberichte mit Handlungsempfehlungen",
      "Zusammenarbeit mit Behörden und Rechtsabteilungen",
    ],
  },
]

export function Modules() {
  return (
    <section id="module" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader
          overline="Module & Leistungsbereiche"
          title="Drei Kernbereiche – eine Plattform"
          description="Von Fahrzeugschäden über Gebäudegutachten bis zur Betrugsermittlung: Claimity deckt alle Bereiche ab."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {modules.map((module) => (
            <Card
              key={module.title}
              className="border-2 border-[#3FC1C9]/20 hover:border-[#3FC1C9]/50 transition-colors bg-white shadow-sm flex flex-col"
            >
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-[#3FC1C9]/15 flex items-center justify-center mb-4">
                  <module.icon className="h-6 w-6 text-[#3FC1C9]" />
                </div>
                <CardTitle className="text-2xl text-primary">{module.title}</CardTitle>
                <CardDescription className="text-base">{module.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <ul className="space-y-3 flex-1">
                  {module.services.map((service) => (
                    <li key={service} className="flex items-start gap-3 text-sm">
                      <span className="text-[#3FC1C9] mt-1 flex-shrink-0">✓</span>
                      <span className="text-foreground/80">{service}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full mt-6 bg-transparent" asChild>
                  <Link href="/kontakt">Beratung anfragen</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
