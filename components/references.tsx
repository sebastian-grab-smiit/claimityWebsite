"use client"

import { useState } from "react"
import { SectionHeader } from "@/components/section-header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Quote, Mail, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const references = [
  {
    id: 1,
    quote:
      "Mit Claimity haben wir unsere Bearbeitungszeit um 40% reduziert. Die automatische Zuweisung und die ständige Verfügbarkeit qualifizierter Experten spart uns täglich Stunden.",
    name: "Amin Gerber",
    role: "Geschäftsführung",
    company: "AFES Schweiz AG",
    image: "/professional-man-portrait.png",
    fullCase: {
      situation:
        "AFES Schweiz AG verarbeitete monatlich über 2.000 Fahrzeugschäden mit manueller Expertenzuweisung. Dies führte zu Verzögerungen und inkonsistenter Qualität.",
      solution:
        "Implementierung von Claimity mit vollständiger API-Integration in das bestehende Schadensystem. Automatisierte Zuweisung nach Postleitzahl und Verfügbarkeit.",
      results: "40% schnellere Bearbeitung, 95% Kundenzufriedenheit, 30% Reduktion administrativer Kosten",
    },
    contact: {
      email: "a.gerber@afes.ch",
      phone: "+41 44 123 45 67",
    },
  },
  {
    id: 2,
    quote:
      "Durch Claimity erhalten wir einen durchgängigen Zufluss an Expertenanfragen von zahlreichen Versicherungen. Das ist effektiver als jede Vertriebskampagne.",
    name: "Toni Tulliani",
    role: "Geschäftsführung",
    company: "Car-Logistics AG (HCG)",
    image: "/professional-man-portrait.png",
    fullCase: {
      situation:
        "Car-Logistics AG (HCG) suchte nach einer effizienten Möglichkeit, kontinuierlich neue Aufträge von verschiedenen Versicherungen zu erhalten.",
      solution:
        "Integration in das Claimity-Expertennetzwerk mit automatischer Auftragszuweisung basierend auf Verfügbarkeit und Spezialisierung.",
      results: "Kontinuierlicher Auftragsfluss, 50% mehr Anfragen, effizientere Auslastung des Expertenteams",
    },
    contact: {
      email: "t.tulliani@car-logistics.ch",
      phone: "+41 43 987 65 43",
    },
  },
]

export function References() {
  const [selectedReference, setSelectedReference] = useState<(typeof references)[0] | null>(null)

  return (
    <section id="referenzen" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader
          overline="Referenzen"
          title="Vertrauen durch Ergebnisse"
          description="Führende Versicherungen setzen auf Claimity für ihr digitales Schadenmanagement."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {references.map((reference) => (
            <Card
              key={reference.id}
              className="border-2 hover:border-[#3FC1C9]/50 transition-colors bg-white shadow-sm"
            >
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-[#3FC1C9] mb-4" />
                <p className="text-lg text-foreground mb-6 italic leading-relaxed">"{reference.quote}"</p>
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={reference.image || "/placeholder.svg"}
                    alt={reference.name}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{reference.name}</div>
                    <div className="text-sm text-foreground/80">{reference.role}</div>
                    <div className="text-sm font-medium text-primary">{reference.company}</div>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="w-full bg-transparent"
                  onClick={() => setSelectedReference(reference)}
                >
                  Mehr dazu
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/kontakt">Weitere Referenzen anfragen</Link>
          </Button>
        </div>
      </div>

      <Dialog open={!!selectedReference} onOpenChange={() => setSelectedReference(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">Erfolgsgeschichte: {selectedReference?.company}</DialogTitle>
            <DialogDescription>
              {selectedReference?.name}, {selectedReference?.role}
            </DialogDescription>
          </DialogHeader>
          {selectedReference && (
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Ausgangslage</h4>
                <p className="text-sm text-foreground/70">{selectedReference.fullCase.situation}</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Lösung</h4>
                <p className="text-sm text-foreground/70">{selectedReference.fullCase.solution}</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Ergebnisse</h4>
                <p className="text-sm text-foreground/70">{selectedReference.fullCase.results}</p>
              </div>
              <div className="border-t pt-4">
                <h4 className="font-semibold text-foreground mb-3">Kontakt zur Referenz</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-[#3FC1C9]" />
                    <a href={`mailto:${selectedReference.contact.email}`} className="text-[#3FC1C9] hover:underline">
                      {selectedReference.contact.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-[#3FC1C9]" />
                    <a href={`tel:${selectedReference.contact.phone}`} className="text-[#3FC1C9] hover:underline">
                      {selectedReference.contact.phone}
                    </a>
                  </div>
                </div>
                <p className="text-xs text-foreground/70 mt-3">
                  Hinweis: Kontaktaufnahme erfolgt mit Einwilligung der Referenzperson gemäss DSG/DSGVO.
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
