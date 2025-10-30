import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"

export const metadata = {
  title: "Datenschutzerklärung | Claimity AG",
  description: "Datenschutzerklärung der Claimity AG",
}

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto prose prose-slate">
          <h1 className="text-4xl font-bold text-primary mb-8">Datenschutzerklärung</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">1. Zweck und Geltungsbereich</h2>
            <p className="text-muted-foreground">
              Diese Datenschutzerklärung beschreibt, wie wir personenbezogene Daten verarbeiten, wenn Sie diese Webseite
              besuchen, mit uns Kontakt aufnehmen oder optionale Funktionen nutzen. Über diese Seite wird kein
              Nutzerkonto für die Plattform erstellt und es erfolgen keine Plattform-Transaktionen. Für die Nutzung der
              Plattform gilt – sofern einschlägig – eine separate Datenschutzerklärung.
            </p>
            <p className="text-muted-foreground mt-4">
              Gestützt auf Artikel 13 der schweizerischen Bundesverfassung und die datenschutzrechtlichen Bestimmungen
              des Bundes (Datenschutzgesetz, DSG) hat jede Person Anspruch auf Schutz ihrer Privatsphäre sowie auf
              Schutz vor Missbrauch ihrer persönlichen Daten. Wir behandeln Ihre personenbezogenen Daten vertraulich und
              entsprechend der gesetzlichen Datenschutzvorschriften.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">2. Verantwortliche Stelle</h2>
            <p className="text-muted-foreground">
              Verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
              <br />
              <br />
              <strong>Claimity AG</strong>
              <br />
              Wisentalstrasse 7a
              <br />
              8185 Winkel
              <br />
              Schweiz
              <br />
              E-Mail: datenschutz@claimity.ch
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">3. Kategorien von verarbeiteten Daten</h2>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Zugriffs- und Protokolldaten</h3>
            <p className="text-muted-foreground">
              Beim Besuch unserer Website werden automatisch technische Daten erhoben, die für die Bereitstellung,
              Sicherheit und Stabilität der Seite erforderlich sind:
            </p>
            <ul className="text-muted-foreground list-disc pl-6 mt-2">
              <li>IP-Adresse (wird vom Hosting-Anbieter technisch verarbeitet)</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Angeforderte Seiten und Ressourcen</li>
              <li>Referrer-URL (vorherige Seite)</li>
              <li>Browser-Typ und -Version, Betriebssystem</li>
              <li>Gerätetyp und Spracheinstellungen</li>
              <li>HTTP-Statuscode und übertragene Datenmenge</li>
            </ul>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Nutzungs- und Analysedaten</h3>
            <p className="text-muted-foreground">
              Unser Website-Anbieter (Gamma) stellt plattformeigene, aggregierte Statistiken zur Verfügung, die uns
              helfen, die Nutzung und Performance der Website zu verstehen. Diese umfassen:
            </p>
            <ul className="text-muted-foreground list-disc pl-6 mt-2">
              <li>Seitenaufrufe und Navigationspfade</li>
              <li>Ungefähre Verweildauer</li>
              <li>Anzahl eindeutiger Besucher (aggregiert)</li>
            </ul>
            <p className="text-muted-foreground mt-2">
              Uns liegen keine vollständigen IP-Adressen oder individuellen Nutzerprofile vor. Wir setzen keine
              Dritt-Analytics- oder Marketing-Tools (z.B. Google Analytics, Meta Pixel) ein.
            </p>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Einwilligungs- und Consent-Daten</h3>
            <p className="text-muted-foreground">
              Zur Verwaltung Ihrer Cookie-Einstellungen verwenden wir CookieYes. Dabei werden folgende Daten erhoben:
            </p>
            <ul className="text-muted-foreground list-disc pl-6 mt-2">
              <li>Pseudonyme Consent-ID</li>
              <li>Gewählte Cookie-Kategorien (Akzeptieren/Ablehnen)</li>
              <li>Zeitstempel der Einwilligung</li>
              <li>Banner-Interaktionen</li>
            </ul>

            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Kommunikationsdaten</h3>
            <p className="text-muted-foreground">
              Wenn Sie uns über das Kontaktformular oder per E-Mail kontaktieren, erheben wir:
            </p>
            <ul className="text-muted-foreground list-disc pl-6 mt-2">
              <li>Name und Vorname</li>
              <li>E-Mail-Adresse</li>
              <li>Telefonnummer (optional)</li>
              <li>Firma und Position (optional)</li>
              <li>Art der Anfrage</li>
              <li>Nachrichteninhalt</li>
              <li>Technische Metadaten (Sendezeitpunkt, Header-Informationen)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">4. Herkunft der Daten</h2>
            <p className="text-muted-foreground">Wir erhalten personenbezogene Daten aus folgenden Quellen:</p>
            <ul className="text-muted-foreground list-disc pl-6 mt-2">
              <li>
                <strong>Direkt von Ihnen:</strong> Daten, die Sie uns freiwillig über das Kontaktformular oder per
                E-Mail mitteilen
              </li>
              <li>
                <strong>Automatisch beim Seitenaufruf:</strong> Technische Zugriffs- und Nutzungsdaten, die durch
                unseren Website-Anbieter (Gamma) zur Auslieferung, Stabilität und Sicherheit der Seite erhoben werden
              </li>
              <li>
                <strong>Durch Cookie-Banner:</strong> Einwilligungsstatus und Präferenzen, die durch CookieYes verwaltet
                werden
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">5. Zweck der Datenverarbeitung</h2>
            <p className="text-muted-foreground">
              Die Verarbeitung Ihrer personenbezogenen Daten erfolgt ausschliesslich zu folgenden Zwecken:
            </p>
            <ul className="text-muted-foreground list-disc pl-6 mt-2">
              <li>Bereitstellung, Sicherheit und Stabilität der Website</li>
              <li>Fehleranalyse und Erkennung von Missbrauch oder Angriffen</li>
              <li>
                Plattformeigene, aggregierte Reichweitenmessung zur Optimierung und zum wirtschaftlichen Betrieb der
                Seite
              </li>
              <li>Beantwortung von Anfragen und vorvertragliche Kommunikation</li>
              <li>Nachweis und Verwaltung von Einwilligungen (Consent-Management)</li>
              <li>Erfüllung vertraglicher Verpflichtungen</li>
              <li>Einhaltung gesetzlicher Aufbewahrungspflichten</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">6. Rechtsgrundlagen</h2>
            <p className="text-muted-foreground">
              Wir verarbeiten personenbezogene Daten im Rahmen des Schweizer Datenschutzrechts (insbesondere revDSG)
              nach den Grundsätzen von Rechtmässigkeit, Verhältnismässigkeit, Zweckbindung und Datensparsamkeit. Wo
              erforderlich, holen wir Einwilligungen ein (z.B. für nicht technisch notwendige Cookies oder Newsletter).
            </p>
            <p className="text-muted-foreground mt-4">
              Sofern die DSGVO anwendbar ist (z.B. bei zielgerichteten Angeboten in der EU/EWR), stützen wir die
              Verarbeitung auf Art. 6 Abs. 1 DSGVO:
            </p>
            <ul className="text-muted-foreground list-disc pl-6 mt-2">
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
            <p className="text-muted-foreground mt-4">
              Zum aktuellen Zeitpunkt gibt es keine zielgerichteten Angebote ausserhalb der Schweiz.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">7. Datenspeicherung und -sicherheit</h2>
            <p className="text-muted-foreground">
              Alle Daten werden ausschliesslich in ISO 27001-zertifizierten Rechenzentren in der Schweiz gespeichert.
              Wir verwenden moderne Verschlüsselungstechnologien (TLS 1.3) und implementieren umfassende
              Sicherheitsmassnahmen zum Schutz Ihrer Daten vor unbefugtem Zugriff, Verlust oder Missbrauch.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">8. Weitergabe von Daten</h2>
            <p className="text-muted-foreground">
              Eine Weitergabe Ihrer personenbezogenen Daten an Dritte erfolgt nur, wenn dies zur Erfüllung unserer
              vertraglichen Verpflichtungen erforderlich ist, Sie ausdrücklich eingewilligt haben oder wir gesetzlich
              dazu verpflichtet sind.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">9. Ihre Rechte</h2>
            <p className="text-muted-foreground">Sie haben jederzeit das Recht auf:</p>
            <ul className="text-muted-foreground list-disc pl-6 mt-2">
              <li>Auskunft über Ihre gespeicherten Daten</li>
              <li>Berichtigung unrichtiger Daten</li>
              <li>Löschung Ihrer Daten</li>
              <li>Einschränkung der Datenverarbeitung</li>
              <li>Datenübertragbarkeit</li>
              <li>Widerspruch gegen die Datenverarbeitung</li>
              <li>Widerruf erteilter Einwilligungen</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Zur Ausübung Ihrer Rechte wenden Sie sich bitte an: datenschutz@claimity.ch
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">10. Cookies und Tracking</h2>
            <p className="text-muted-foreground">
              Diese Website verwendet nur technisch notwendige Cookies, die für den Betrieb der Website erforderlich
              sind. Wir setzen keine Tracking- oder Marketing-Cookies von Drittanbietern (z.B. Google Analytics, Meta
              Pixel) ein.
            </p>
            <p className="text-muted-foreground mt-4">
              Zur Verwaltung Ihrer Cookie-Einstellungen verwenden wir CookieYes, das Ihre Einwilligungspräferenzen
              speichert und verwaltet.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">11. Änderungen</h2>
            <p className="text-muted-foreground">
              Wir behalten uns vor, diese Datenschutzerklärung jederzeit unter Beachtung der geltenden
              Datenschutzbestimmungen anzupassen. Die aktuelle Version ist stets auf unserer Website verfügbar.
            </p>
            <p className="text-muted-foreground mt-4">
              <strong>Stand:</strong> {new Date().toLocaleDateString("de-CH")}
            </p>
          </section>
        </div>
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
