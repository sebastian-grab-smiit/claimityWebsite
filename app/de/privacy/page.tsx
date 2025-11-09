import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function PrivacyPageDE() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 pt-6 md:pt-16 pb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-balance break-words hyphens-auto">Datenschutzerklärung</h1>

          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 space-y-8">
            <p className="text-lg text-gray-600">
              Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst und behandeln Ihre personenbezogenen Daten
              vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften.
            </p>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Zweck und Geltungsbereich</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Diese Datenschutzerklärung beschreibt, wie wir personenbezogene Daten verarbeiten, wenn Sie diese
                Webseite besuchen, mit uns Kontakt aufnehmen oder optionale Funktionen nutzen. Über diese Seite wird
                kein Nutzerkonto für die Plattform erstellt und es erfolgen keine Plattform-Transaktionen. Für die
                Nutzung der Plattform gilt – sofern einschlägig – eine separate Datenschutzerklärung.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Gestützt auf Artikel 13 der schweizerischen Bundesverfassung und die datenschutzrechtlichen
                Bestimmungen des Bundes (Datenschutzgesetz, DSG) hat jede Person Anspruch auf Schutz ihrer
                Privatsphäre sowie auf Schutz vor Missbrauch ihrer persönlichen Daten. Wir behandeln Ihre
                personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Verantwortliche Stelle</h2>
              <p className="text-gray-700 leading-relaxed">
                Verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
              </p>
              <div className="space-y-1 mt-4 text-gray-700">
                <p className="font-semibold">Claimity AG</p>
                <p>Wisentalstrasse 7a</p>
                <p>8185 Winkel</p>
                <p>Schweiz</p>
                <p className="mt-2">
                  E-Mail:{" "}
                  <a href="mailto:info@claimity.ch" className="text-teal-600 hover:underline">
                    info@claimity.ch
                  </a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Kategorien von verarbeiteten Daten</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Zugriffs- und Protokolldaten</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Beim Besuch unserer Website werden automatisch technische Daten erhoben, die für die Bereitstellung,
                    Sicherheit und Stabilität der Seite erforderlich sind:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>IP-Adresse (wird vom Hosting-Anbieter technisch verarbeitet)</li>
                    <li>Datum und Uhrzeit des Zugriffs</li>
                    <li>Angeforderte Seiten und Ressourcen</li>
                    <li>Referrer-URL (vorherige Seite)</li>
                    <li>Browser-Typ und -Version, Betriebssystem</li>
                    <li>Gerätetyp und Spracheinstellungen</li>
                    <li>HTTP-Statuscode und übertragene Datenmenge</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Kommunikationsdaten</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Wenn Sie uns über das Kontaktformular oder per E-Mail kontaktieren, erheben wir:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Name und Vorname</li>
                    <li>E-Mail-Adresse</li>
                    <li>Telefonnummer (optional)</li>
                    <li>Firma und Position (optional)</li>
                    <li>Art der Anfrage</li>
                    <li>Nachrichteninhalt</li>
                    <li>Technische Metadaten (Sendezeitpunkt, Header-Informationen)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Herkunft der Daten</h2>
              <p className="text-gray-700 leading-relaxed mb-3">Wir erhalten personenbezogene Daten aus folgenden Quellen:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>
                  <strong>Direkt von Ihnen:</strong> Daten, die Sie uns freiwillig über das Kontaktformular oder per
                  E-Mail mitteilen
                </li>
                <li>
                  <strong>Automatisch beim Seitenaufruf:</strong> Technische Zugriffs- und Nutzungsdaten, die durch
                  unseren Hosting-Anbieter (GitHub Pages) zur Auslieferung, Stabilität und Sicherheit der Seite
                  erhoben werden können
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Zweck der Datenverarbeitung</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Die Verarbeitung Ihrer personenbezogenen Daten erfolgt ausschliesslich zu folgenden Zwecken:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Bereitstellung, Sicherheit und Stabilität der Website</li>
                <li>Fehleranalyse und Erkennung von Missbrauch oder Angriffen</li>
                <li>
                  Plattformeigene, aggregierte Reichweitenmessung zur Optimierung und zum wirtschaftlichen Betrieb der
                  Seite
                </li>
                <li>Beantwortung von Anfragen und vorvertragliche Kommunikation</li>
                <li>Erfüllung vertraglicher Verpflichtungen</li>
                <li>Einhaltung gesetzlicher Aufbewahrungspflichten</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Rechtsgrundlagen</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Wir verarbeiten personenbezogene Daten im Rahmen des Schweizer Datenschutzrechts (insbesondere revDSG)
                nach den Grundsätzen von Rechtmässigkeit, Verhältnismässigkeit, Zweckbindung und Datensparsamkeit. Wo
                erforderlich, holen wir Einwilligungen ein (z.B. für nicht technisch notwendige Cookies oder
                Newsletter).
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                Sofern die DSGVO anwendbar ist (z.B. bei zielgerichteten Angeboten in der EU/EWR), stützen wir die
                Verarbeitung auf Art. 6 Abs. 1 DSGVO:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>
                  <strong>Art. 6 Abs. 1 lit. a DSGVO:</strong> Einwilligung (z.B. für optionale Cookies)
                </li>
                <li>
                  <strong>Art. 6 Abs. 1 lit. b DSGVO:</strong> Vorvertragliche Kommunikation und Vertragserfüllung
                </li>
                <li>
                  <strong>Art. 6 Abs. 1 lit. f DSGVO:</strong> Berechtigte Interessen an sicherem, wirtschaftlichem
                  Betrieb der Website, Fehleranalyse und aggregierter Nutzungsstatistik
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-3">
                Zum aktuellen Zeitpunkt gibt es keine zielgerichteten Angebote ausserhalb der Schweiz.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Datenspeicherung und -sicherheit</h2>
              <p className="text-gray-700 leading-relaxed">
                Alle Daten werden ausschliesslich in ISO 27001-zertifizierten Rechenzentren in der Schweiz gespeichert.
                Wir verwenden moderne Verschlüsselungstechnologien (TLS 1.3) und implementieren umfassende
                Sicherheitsmassnahmen zum Schutz Ihrer Daten vor unbefugtem Zugriff, Verlust oder Missbrauch.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Weitergabe von Daten</h2>
              <p className="text-gray-700 leading-relaxed">
                Eine Weitergabe Ihrer personenbezogenen Daten an Dritte erfolgt nur, wenn dies zur Erfüllung unserer
                vertraglichen Verpflichtungen erforderlich ist, Sie ausdrücklich eingewilligt haben oder wir gesetzlich
                dazu verpflichtet sind.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Ihre Rechte</h2>
              <p className="text-gray-700 leading-relaxed mb-3">Sie haben jederzeit das Recht auf:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Auskunft über Ihre gespeicherten Daten</li>
                <li>Berichtigung unrichtiger Daten</li>
                <li>Löschung Ihrer Daten</li>
                <li>Einschränkung der Datenverarbeitung</li>
                <li>Datenübertragbarkeit</li>
                <li>Widerspruch gegen die Datenverarbeitung</li>
                <li>Widerruf erteilter Einwilligungen</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{" "}
                <a href="mailto:info@claimity.ch" className="text-teal-600 hover:underline">
                  info@claimity.ch
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Cookies und Tracking</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Diese Website verwendet <strong>keine eigenen Cookies</strong>. Wir setzen weder Tracking-Cookies,
                Marketing-Cookies noch Analytics-Tools (wie Google Analytics, Meta Pixel oder ähnliche) ein.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                Die Website wird über GitHub Pages gehostet. GitHub kann für technische Zwecke (z.B. zur
                Sicherstellung der Verfügbarkeit, Lastverteilung oder Missbrauchserkennung) technisch notwendige
                Cookies setzen. Diese Cookies dienen ausschliesslich dem technischen Betrieb der Hosting-Infrastruktur
                und werden nicht für Tracking- oder Werbezwecke verwendet.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                Wir haben keinen Einfluss auf Art, Umfang und Zweck dieser technischen Cookies von GitHub. Weitere
                Informationen finden Sie in der{" "}
                <a
                  href="https://docs.github.com/de/site-policy/privacy-policies/github-privacy-statement"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:underline"
                >
                  Datenschutzerklärung von GitHub
                </a>
                .
              </p>
              <p className="text-gray-700 leading-relaxed">
                Da wir keine eigenen Cookies verwenden und keine Tracking-Tools einsetzen, ist kein Cookie-Banner
                erforderlich.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Änderungen</h2>
              <p className="text-gray-700 leading-relaxed">
                Wir behalten uns vor, diese Datenschutzerklärung jederzeit unter Beachtung der geltenden
                Datenschutzbestimmungen anzupassen. Die aktuelle Version ist stets auf unserer Website verfügbar.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                <strong>Stand: 31.10.2025</strong>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}