import { SectionHeader } from "@/components/section-header"
import { FileUp, Zap, FileCheck, CheckCircle2 } from "lucide-react"

const steps = [
  {
    icon: FileUp,
    number: "01",
    title: "Schaden melden",
    description: "Upload via Portal, API-Integration oder E-Mail – flexibel und unkompliziert",
  },
  {
    icon: Zap,
    number: "02",
    title: "Automatische Zuweisung",
    description: "System wählt passenden Experten nach Verfügbarkeit, Fachgebiet und Region",
  },
  {
    icon: FileCheck,
    number: "03",
    title: "Bearbeitung & Bericht",
    description: "Experte erstellt standardisierten Bericht – zentral, digital, revisionssicher",
  },
  {
    icon: CheckCircle2,
    number: "04",
    title: "Abschluss & Abrechnung",
    description: "Digitale Freigabe, automatische Abrechnung, vollständige Dokumentation",
  },
]

export function Process() {
  return (
    <section id="prozess" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionHeader
          overline="So funktioniert's"
          title="Vier Schritte zum digitalen Schadenmanagement"
          description="Von der Meldung bis zur Abrechnung – vollständig automatisiert und transparent."
        />

        <div className="mt-12 relative">
          {/* Timeline line - hidden on mobile */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-[#3FC1C9]/30" />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="relative z-10 h-20 w-20 rounded-full bg-[#3FC1C9] flex items-center justify-center mb-4 shadow-lg">
                    <step.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="text-sm font-bold text-[#3FC1C9] mb-2">{step.number}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-foreground/80">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-foreground/80">
            <span className="font-semibold text-foreground">Start in Tagen statt Monaten</span> – Pilotprojekt möglich
          </p>
        </div>
      </div>
    </section>
  )
}
