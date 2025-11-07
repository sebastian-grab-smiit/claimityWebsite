import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-5 gap-12 mb-12">
          {/* Left Column - Logo & Description */}
          <div className="lg:col-span-2 space-y-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img src="./logo.png" alt="" height={28} width={120}/>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 leading-relaxed max-w-sm">
              Die digitale Plattform für effizientes Schadenmanagement. Automatisiert, transparent, sicher.
            </p>

            {/* Social Media */}
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/claimity-ag/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 1 - Produkt */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-gray-900">Produkt</h3>
            <ul className="space-y-3">
              <li>
                <a href="/#funktionen" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Funktionen
                </a>
              </li>
              <li>
                <a href="/#module" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Module
                </a>
              </li>
              <li>
                <a href="/#integration" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Integration
                </a>
              </li>
              <li>
                <a href="/#prozess" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Prozess
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2 - Unternehmen */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-gray-900">Unternehmen</h3>
            <ul className="space-y-3">
              <li>
                <a href="/#warum" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Warum Claimity
                </a>
              </li>
              <li>
                <a href="/#referenzen" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Referenzen
                </a>
              </li>
              <li>
                <a href="/#faq" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <Link href="/kontakt" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-gray-900">Kontakt</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@claimity.ch"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  info@claimity.ch
                </a>
              </li>
              <li>
                <a href="tel:+41783447736" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  +41 78 344 77 36
                </a>
              </li>
              <li>
                <Link href="/kontakt" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Kontaktformular
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar - Copyright & Legal Links */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600">© 2025 Claimity AG. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <Link href="/impressum" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
