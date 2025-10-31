import { SectionHeader } from "@/components/section-header"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Wo werden unsere Daten gespeichert?",
    answer:
      "Alle Daten werden ausschliesslich in Schweizer Rechenzentren gespeichert. Die Plattformarchitektur ist FINMA-konform. Wir garantieren vollständige Compliance mit dem Schweizer Datenschutzgesetz (DSG) und der EU-DSGVO.",
  },
  {
    question: "Wie funktioniert die Integration in unsere bestehenden Systeme?",
    answer:
      "Wir bieten eine REST API Schnittstelle zur Verfügung, über die Sie ihre Systeme nahtlos an die Claimity-Plattform anbinden können. Auf Anfrage können wir auch eine individuelle Schnittstelle entwickeln oder Sie bei der Integration unterstützen.",
  },
  {
    question: "Wie lange dauert das Onboarding?",
    answer:
      "Grundsätzlich können Sie sofort starten, innerhalb von 24 Stunden. Falls Sie den Prozess individuell anpassen möchten, dauert das Onboarding typischerweise 2 Wochen.",
  },
  {
    question: "Welche SLAs bieten Sie an?",
    answer:
      "Wir bieten zuverlässige Service Level Agreements an, die auf Ihre spezifischen Anforderungen zugeschnitten werden können. Individuelle SLAs können vertraglich vereinbart werden.",
  },
  {
    question: "Wie wird die Qualität der Experten sichergestellt?",
    answer:
      "Alle Experten durchlaufen einen mehrstufigen Zertifizierungsprozess. Wir prüfen Qualifikationen, Versicherungen und führen regelmässige Qualitätskontrollen durch.",
  },
  {
    question: "Gibt es Vertragslaufzeiten?",
    answer:
      "Wir bieten vollkommene Flexibilität: Unsere Verträge sind monatlich kündbar, sodass Sie jederzeit die volle Kontrolle über Ihre Zusammenarbeit mit Claimity behalten.",
  },
  {
    question: "Wie funktioniert die Abrechnung?",
    answer:
      "Transparente Preisgestaltung: Monatliche Plattformgebühr plus variable Kosten pro bearbeitetem Fall. Keine versteckten Kosten. Detaillierte Abrechnungsberichte stehen jederzeit im Dashboard zur Verfügung.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-muted/30">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 md:px-8 xl:px-16 2xl:px-20">
        <SectionHeader
          overline="Häufige Fragen"
          title="Alles, was Sie wissen müssen"
          description="Antworten auf die wichtigsten Fragen zu Claimity, Datenschutz und Integration."
        />

        <div className="mt-12 max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white border rounded-lg px-6 shadow-sm">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-foreground">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
