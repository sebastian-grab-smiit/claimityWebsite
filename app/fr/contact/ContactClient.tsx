"use client"

import { useState, useEffect } from "react"
import emailjs from "@emailjs/browser"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, Calendar, ArrowRight } from "lucide-react"

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string

export default function ContactPageFRClient() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [trap, setTrap] = useState("")

  useEffect(() => {
    emailjs.init({ publicKey: PUBLIC_KEY })
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setSent(false)

    if (trap.trim()) return

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      setError("Veuillez remplir tous les champs obligatoires.")
      return
    }

    setIsSubmitting(true)
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          ...formData,
          from_name: `${formData.firstName} ${formData.lastName}`,
          reply_to: formData.email,
        },
        { publicKey: PUBLIC_KEY }
      )

      setSent(true)
      setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" })
    } catch (err) {
      setError("Désolé, une erreur est survenue lors de l’envoi. Veuillez réessayer.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <section className="pt-6 md:pt-16 pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-12">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Prendre contact avec Claimity
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Vous avez des questions, des commentaires ou avez besoin d’assistance ? Nous sommes ravis de vous aider. Contactez notre équipe – nous vous répondrons dans les plus brefs délais.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-gray-900">E‑mail&nbsp;:</h3>
                    <a href="mailto:info@claimity.ch" className="text-base text-teal-600 hover:text-teal-700 transition-colors">
                      info@claimity.ch
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-gray-900">Téléphone&nbsp;:</h3>
                    <a href="tel:+41783447736" className="text-base text-teal-600 hover:text-teal-700 transition-colors">
                      +41 78 344 77 36
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-gray-900">Souhaitez-vous parler immédiatement&nbsp;?</h3>
                    <a href="/fr/contact/#book" className="text-base text-teal-600 hover:text-teal-700 transition-colors">
                      Prendre rendez-vous
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 lg:p-10 lg:mt-16">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="company"
                  className="hidden"
                  autoComplete="off"
                  tabIndex={-1}
                  value={trap}
                  onChange={(e) => setTrap(e.target.value)}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-gray-900">
                      Prénom <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      placeholder="Prénom"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full bg-white border-gray-300 focus:border-teal-600 focus:ring-teal-600"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-gray-900">
                      Nom <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      placeholder="Nom"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full bg-white border-gray-300 focus:border-teal-600 focus:ring-teal-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-900">
                      E‑mail <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="nom@exemple.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white border-gray-300 focus:border-teal-600 focus:ring-teal-600"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-900">
                      Téléphone (facultatif)
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+41 79 123 45 67"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-white border-gray-300 focus:border-teal-600 focus:ring-teal-600"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-900">
                    Comment pouvons-nous vous aider&nbsp;? <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Envoyer la demande"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-white border-gray-300 focus:border-teal-600 focus:ring-teal-600 resize-none"
                  />
                </div>

                {error && <p className="text-sm text-red-600">{error}</p>}
                {sent && <p className="text-sm text-green-700">Merci&nbsp;! Votre message a été envoyé.</p>}

                <Button
                  type="submit"
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white py-5 rounded-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Envoi en cours..." : "Envoyer la demande"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <p className="text-xs text-gray-600 leading-relaxed">
                  En envoyant ce formulaire, vous acceptez le traitement de vos données pour le traitement de votre demande. Pour plus d’informations, veuillez consulter notre{" "}
                  <a href="/fr/privacy" className="text-teal-600 hover:text-teal-700 underline">
                    Politique de confidentialité
                  </a>
                  .
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}