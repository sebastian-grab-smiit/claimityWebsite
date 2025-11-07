import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, Calendar } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function KontaktPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Header />

      {/* Main Content */}
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column - Contact Info */}
            <div className="space-y-12">
              {/* Header */}
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Kontakt aufnehmen mit Claimity
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Haben Sie Fragen, Feedback oder benötigen Sie Unterstützung? Wir helfen Ihnen gerne weiter.
                  Kontaktieren Sie unser Team – wir melden uns so schnell wie möglich.
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-teal-600" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-gray-900">E-Mail:</h3>
                    <a
                      href="mailto:info@claimity.ch"
                      className="text-base text-teal-600 hover:text-teal-700 transition-colors"
                    >
                      info@claimity.ch
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-teal-600" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-gray-900">Telefon:</h3>
                    <a
                      href="tel:+41783447736"
                      className="text-base text-teal-600 hover:text-teal-700 transition-colors"
                    >
                      +41 78 344 77 36
                    </a>
                  </div>
                </div>
              </div>

              {/* CTA Box */}
              <div className="bg-gray-50 rounded-2xl p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="h-6 w-6 text-teal-600" />
                  <h3 className="text-lg font-bold text-gray-900">Möchten Sie sofort sprechen?</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Buchen Sie direkt einen Termin für ein persönliches Gespräch mit unserem Team.
                </p>
                <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-6 rounded-lg">
                  Termin buchen
                </Button>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-8 lg:p-10">
              <form className="space-y-6">
                {/* First Name */}
                <div className="space-y-2">
                  <label htmlFor="vorname" className="text-sm font-medium text-gray-900">
                    Vorname <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="vorname"
                    type="text"
                    required
                    className="w-full bg-white border-gray-300 focus:border-teal-600 focus:ring-teal-600"
                  />
                </div>

                {/* Last Name */}
                <div className="space-y-2">
                  <label htmlFor="nachname" className="text-sm font-medium text-gray-900">
                    Nachname <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="nachname"
                    type="text"
                    required
                    className="w-full bg-white border-gray-300 focus:border-teal-600 focus:ring-teal-600"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-900">
                    E-Mail <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    className="w-full bg-white border-gray-300 focus:border-teal-600 focus:ring-teal-600"
                  />
                </div>

                {/* Phone (optional) */}
                <div className="space-y-2">
                  <label htmlFor="telefon" className="text-sm font-medium text-gray-900">
                    Telefon (optional)
                  </label>
                  <Input
                    id="telefon"
                    type="tel"
                    className="w-full bg-white border-gray-300 focus:border-teal-600 focus:ring-teal-600"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="nachricht" className="text-sm font-medium text-gray-900">
                    Wie können wir Ihnen helfen? <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    id="nachricht"
                    required
                    rows={6}
                    className="w-full bg-white border-gray-300 focus:border-teal-600 focus:ring-teal-600 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white py-6 rounded-lg">
                  Anfrage absenden
                </Button>

                {/* Privacy Notice */}
                <p className="text-xs text-gray-600 leading-relaxed">
                  Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten zur Bearbeitung zu.{" "}
                  <Link href="/datenschutz" className="text-teal-600 hover:text-teal-700 underline">
                    Datenschutzerklärung
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
