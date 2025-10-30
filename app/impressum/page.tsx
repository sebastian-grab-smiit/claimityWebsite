import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"

export const metadata = {
  title: "Impressum | Claimity AG",
  description: "Impressum und rechtliche Informationen der Claimity AG",
}

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto prose prose-slate">
          <h1 className="text-4xl font-bold text-primary mb-8">Impressum</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">Angaben gemäss Art. 8 UWG</h2>
            <p className="text-muted-foreground">
              <strong>Claimity AG</strong>
              <br />
              Wisentalstrasse 7a
              <br />
              8185 Winkel
              <br />
              Schweiz
            </p>
            <p className="text-muted-foreground mt-4">
              <strong>Handelsregister:</strong> CHE-123.456.789
              <br />
              <strong>UID:</strong> CHE-215.217.236
              <br />
              <strong>Telefon:</strong> +41 79 687 50 82
              <br />
              <strong>E-Mail:</strong> info@claimity.ch
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">Vertretungsberechtigte Personen</h2>
            <p className="text-muted-foreground">Geschäftsführung: Burim Kryeziu</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">Haftungsausschluss</h2>
            <p className="text-muted-foreground">
              Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit, Aktualität,
              Zuverlässigkeit und Vollständigkeit der Informationen. Haftungsansprüche gegen den Autor wegen Schäden
              materieller oder immaterieller Art, welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der
              veröffentlichten Informationen, durch Missbrauch der Verbindung oder durch technische Störungen entstanden
              sind, werden ausgeschlossen.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">Haftung für Links</h2>
            <p className="text-muted-foreground">
              Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres Verantwortungsbereichs. Es wird
              jegliche Verantwortung für solche Webseiten abgelehnt. Der Zugriff und die Nutzung solcher Webseiten
              erfolgen auf eigene Gefahr des Nutzers oder der Nutzerin.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">Urheberrechte</h2>
            <p className="text-muted-foreground">
              Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf der Website
              gehören ausschliesslich der Claimity AG oder den speziell genannten Rechtsinhabern. Für die Reproduktion
              jeglicher Elemente ist die schriftliche Zustimmung der Urheberrechtsträger im Voraus einzuholen.
            </p>
          </section>
        </div>
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
