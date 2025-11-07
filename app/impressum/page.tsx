import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Content */}
      <main className="mx-auto max-w-4xl px-6 py-20">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">Impressum</h1>
            <p className="text-lg text-gray-600">Angaben gemäss Art. 8 UWG</p>
          </div>

          <div className="space-y-8 text-gray-700">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Anschrift</h2>
              <div className="space-y-1">
                <p className="font-semibold">Claimity AG</p>
                <p>Wisentalstrasse 7a</p>
                <p>8185 Winkel</p>
                <p>Schweiz</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Kontakt</h2>
              <div className="space-y-1">
                <p>
                  <span className="font-semibold">Telefon:</span> +41 78 344 77 36
                </p>
                <p>
                  <span className="font-semibold">E-Mail:</span>{" "}
                  <a href="mailto:info@claimity.ch" className="text-teal-600 hover:underline">
                    info@claimity.ch
                  </a>
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Handelsregister</h2>
              <div className="space-y-1">
                <p>
                  <span className="font-semibold">Handelsregister:</span> CHE-123.456.789
                </p>
                <p>
                  <span className="font-semibold">UID:</span> CHE-215.217.236
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Vertretungsberechtigte Personen</h2>
              <p>Geschäftsführung: Burim Kryeziu</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Haftungsausschluss</h2>
              <p className="leading-relaxed">
                Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit, Aktualität,
                Zuverlässigkeit und Vollständigkeit der Informationen. Haftungsansprüche gegen den Autor wegen Schäden
                materieller oder immaterieller Art, welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der
                veröffentlichten Informationen, durch Missbrauch der Verbindung oder durch technische Störungen
                entstanden sind, werden ausgeschlossen.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Haftung für Links</h2>
              <p className="leading-relaxed">
                Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres Verantwortungsbereichs. Es wird
                jegliche Verantwortung für solche Webseiten abgelehnt. Der Zugriff und die Nutzung solcher Webseiten
                erfolgen auf eigene Gefahr des Nutzers oder der Nutzerin.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Urheberrechte</h2>
              <p className="leading-relaxed">
                Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf der Website
                gehören ausschliesslich der Claimity AG oder den speziell genannten Rechtsinhabern. Für die Reproduktion
                jeglicher Elemente ist die schriftliche Zustimmung der Urheberrechtsträger im Voraus einzuholen.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
