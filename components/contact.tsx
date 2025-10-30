"use client"

import type React from "react"

import { useState } from "react"
import { SectionHeader } from "@/components/section-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin } from "lucide-react"

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader
          overline="Kontakt"
          title="Lassen Sie uns sprechen"
          description="Vereinbaren Sie eine Demo oder kontaktieren Sie uns für weitere Informationen."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-1 space-y-6">
            <Card className="shadow-sm">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-[#3FC1C9] mt-1" />
                  <div>
                    <div className="font-semibold text-foreground mb-1">E-Mail</div>
                    <a href="mailto:info@claimity.ch" className="text-sm text-[#3FC1C9] hover:underline">
                      info@claimity.ch
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-[#3FC1C9] mt-1" />
                  <div>
                    <div className="font-semibold text-foreground mb-1">Telefon</div>
                    <a href="tel:+41783447736" className="text-sm text-[#3FC1C9] hover:underline">
                      +41 78 344 77 36
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-[#3FC1C9] mt-1" />
                  <div>
                    <div className="font-semibold text-foreground mb-1">Adresse</div>
                    <p className="text-sm text-foreground/80">
                      Claimity AG
                      <br />
                      Wisentalstrasse 7a
                      <br />
                      8185 Winkel
                      <br />
                      Schweiz
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card className="shadow-sm">
              <CardContent className="pt-6">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="text-[#3FC1C9] text-5xl mb-4">✓</div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Vielen Dank!</h3>
                    <p className="text-foreground/80">
                      Wir haben Ihre Nachricht erhalten und melden uns innerhalb von 1 Werktag bei Ihnen.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="requestType" className="text-sm font-medium text-foreground">
                        Art der Anfrage *
                      </label>
                      <Select required>
                        <SelectTrigger id="requestType">
                          <SelectValue placeholder="Bitte wählen Sie eine Option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="termin">Termin vereinbaren</SelectItem>
                          <SelectItem value="demo">Demo anfordern</SelectItem>
                          <SelectItem value="pilot">Pilotphase planen</SelectItem>
                          <SelectItem value="technisch">Technisches Gespräch vereinbaren</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-foreground">
                          Name *
                        </label>
                        <Input id="name" required placeholder="Max Mustermann" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="company" className="text-sm font-medium text-foreground">
                          Firma *
                        </label>
                        <Input id="company" required placeholder="Mustermann Versicherung AG" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">
                        E-Mail *
                      </label>
                      <Input id="email" type="email" required placeholder="max.mustermann@firma.ch" />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-foreground">
                        Telefon (optional)
                      </label>
                      <Input id="phone" type="tel" placeholder="+41 44 555 12 34" />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-foreground">
                        Nachricht *
                      </label>
                      <Textarea id="message" required placeholder="Beschreiben Sie kurz Ihr Anliegen..." rows={5} />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="appointment" className="text-sm font-medium text-foreground">
                        Terminwunsch (optional)
                      </label>
                      <Input id="appointment" placeholder="z.B. nächste Woche Dienstag 14:00" />
                    </div>

                    <div className="flex items-start gap-2">
                      <Checkbox id="privacy" required className="mt-1" />
                      <label htmlFor="privacy" className="text-sm text-foreground/80 leading-relaxed">
                        Ich stimme zu, dass meine Angaben zur Kontaktaufnahme und Zuordnung für Rückfragen gespeichert
                        werden. Hinweis: Sie können Ihre Einwilligung jederzeit für die Zukunft per E-Mail widerrufen.
                        Detaillierte Informationen zum Umgang mit Nutzerdaten finden Sie in unserer{" "}
                        <a href="/datenschutz" className="text-[#3FC1C9] hover:underline">
                          Datenschutzerklärung
                        </a>
                        .
                      </label>
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Nachricht senden
                    </Button>

                    <p className="text-xs text-center text-foreground/80">
                      Wir melden uns innerhalb von 1 Werktag bei Ihnen.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
