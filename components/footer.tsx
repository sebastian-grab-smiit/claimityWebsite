"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const pathname = usePathname() || "/"
  const lang = pathname.startsWith("/en") ? "en" : "de"
  const base = `/${lang}`

  const L = {
    product: lang === "de" ? "Produkt" : "Product",
    company: lang === "de" ? "Unternehmen" : "Company",
    contactSection: lang === "de" ? "Kontakt" : "Contact",
    functions: lang === "de" ? "Funktionen" : "Features",
    modules: lang === "de" ? "Module" : "Modules",
    integration: lang === "de" ? "Integration" : "Integration",
    process: lang === "de" ? "Prozess" : "Process",
    why: lang === "de" ? "Warum Claimity" : "Why Claimity",
    references: lang === "de" ? "Referenzen" : "References",
    faq: "FAQ",
    contact: lang === "de" ? "Kontakt" : "Contact",
    emailLabel: lang === "de" ? "E‑Mail:" : "Email:",
    phoneLabel: lang === "de" ? "Telefon:" : "Phone:",
    rights: lang === "de" ? "Alle Rechte vorbehalten." : "All rights reserved.",
    privacy: lang === "de" ? "Datenschutzerklärung" : "Privacy Policy",
    terms: lang === "de" ? "Nutzungsbedingungen" : "Terms of Service",
    imprint: lang === "de" ? "Impressum" : "Legal Notice",
    companyName: "Claimity AG",
    street: "Wisentalstrasse 7a",
    city: "8185 Winkel",
    country: lang === "de" ? "Schweiz" : "Switzerland",
    companyBlurb:
      lang === "de"
        ? "Die digitale Plattform für effizientes Schadenmanagement. Automatisiert, transparent, sicher."
        : "The digital platform for efficient claims management. Automated, transparent, secure.",
    emailValue: "info@claimity.ch",
    phoneValue: "+41 78 344 77 36",
    phoneHref: "tel:+41783447736",
  }

  const homeHref = `${base}/`
  const contactHref = `${base}/contact`
  const privacyHref = `${base}/privacy`
  const termsHref = `${base}/terms`
  const imprintHref = `${base}/legal-notice`

  const whyHref = `${base}/#why`
  const featuresHref = `${base}/#features`
  const modulesHref = `${base}/#modules`
  const integrationHref = `${base}/#integration`
  const processHref = `${base}/#process`
  const referencesHref = `${base}/#references`
  const faqHref = `${base}/#faq`

  return (
    <footer className="bg-white border-t border-gray-200 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 mb-12">
          {/* Left Column - Logo & Description */}
          <div className="col-span-2 lg:col-span-2 space-y-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Link href={homeHref} aria-label="Claimity home" className="flex items-center">
                <Image src="/logo.png" alt="Claimity Logo" width={120} height={28} priority />
              </Link>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 leading-relaxed max-w-sm">
              {L.companyBlurb}
            </p>

            {/* Social Media */}
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/claimity-ag/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
                aria-label="Claimity on LinkedIn"
              >
                <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 1 - Produkt */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-gray-900">{L.product}</h3>
            <ul className="space-y-3">
              <li>
                <Link href={featuresHref} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  {L.functions}
                </Link>
              </li>
              <li>
                <Link href={modulesHref} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  {L.modules}
                </Link>
              </li>
              <li>
                <Link href={integrationHref} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  {L.integration}
                </Link>
              </li>
              <li>
                <Link href={processHref} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  {L.process}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 - Unternehmen */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-gray-900">{L.company}</h3>
            <ul className="space-y-3">
              <li>
                <Link href={whyHref} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  {L.why}
                </Link>
              </li>
              <li>
                <Link href={referencesHref} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  {L.references}
                </Link>
              </li>
              <li>
                <Link href={faqHref} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  {L.faq}
                </Link>
              </li>
              <li>
                <Link href={contactHref} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  {L.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-gray-900">{L.contactSection}</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a
                  href={`mailto:${L.emailValue}`}
                  className="hover:text-gray-900 transition-colors"
                >
                  {L.emailValue}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href={L.phoneHref} className="hover:text-gray-900 transition-colors">
                  {L.phoneValue}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>
                  {L.companyName}
                  <br />
                  {L.street}
                  <br />
                  {L.city}
                  <br />
                  {L.country}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar - Copyright & Legal Links */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600">© 2025 {L.companyName}. {L.rights}</p>
          <div className="flex flex-wrap gap-6 md:flex-nowrap justify-center md:justify-start w-full md:w-auto">
            <Link href={imprintHref} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              {L.imprint}
            </Link>
            <Link href={privacyHref} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              {L.privacy}
            </Link>
            <Link href={termsHref} className="text-sm text-gray-600 hover:text-gray-900 transition-colors w-full text-center md:w-auto md:text-left">
              {L.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
