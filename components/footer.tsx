import Link from "next/link"
import { Mail, Phone, Linkedin } from "lucide-react"

const footerLinks = {
  product: [
    { name: "Funktionen", href: "#funktionen" },
    { name: "Module", href: "#module" },
    { name: "Integration", href: "#integration" },
    { name: "Prozess", href: "#prozess" },
  ],
  company: [
    { name: "Warum Claimity", href: "#warum-claimity" },
    { name: "Referenzen", href: "#referenzen" },
    { name: "FAQ", href: "#faq" },
    { name: "Kontakt", href: "/kontakt" }, // Updated Kontakt link to /kontakt instead of #kontakt
  ],
  legal: [
    { name: "Impressum", href: "/impressum" },
    { name: "Datenschutz", href: "/datenschutz" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 md:px-8 xl:px-16 2xl:px-20 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="text-2xl font-bold mb-4">Claimity</div>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Die digitale Plattform für effizientes Schadenmanagement. Automatisiert, transparent, sicher.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@claimity.ch" className="hover:underline">
                  info@claimity.ch
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4" />
                <a href="tel:+41783447736" className="hover:underline">
                  +41 78 344 77 36
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Produkt</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Unternehmen</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Rechtliches</h3>
            <ul className="space-y-2 mb-4">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/claimity-ag/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/80">
          <p>&copy; {new Date().getFullYear()} Claimity AG. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  )
}
