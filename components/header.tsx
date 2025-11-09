"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { LanguageSwitcher } from "@/components/language-switcher"

export function Header() {
  const pathname = usePathname() || "/"
  const lang = pathname.startsWith("/en") ? "en" : pathname.startsWith("/fr") ? "fr" : "de"
  const base = `/${lang}`

  const L =
    lang === "de"
      ? {
          why: "Warum Claimity",
          features: "Funktionen",
          modules: "Module",
          book: "Termin buchen",
          clientLogin: "Anmelden",
          contact: "Kontakt",
          navTitle: "Navigation",
        }
      : lang === "en"
      ? {
          why: "Why Claimity",
          features: "Features",
          modules: "Modules",
          book: "Calendar Booking",
          clientLogin: "Login",
          contact: "Contact us",
          navTitle: "Navigation",
        }
      : {
          why: "Pourquoi Claimity",
          features: "Fonctionnalités",
          modules: "Modules",
          book: "Réserver une démo",
          clientLogin: "Connexion",
          contact: "Contact",
          navTitle: "Navigation",
        }

  const homeHref = `${base}/`
  const whyHref = `${base}/#why`
  const featuresHref = `${base}/#features`
  const modulesHref = `${base}/#modules`
  const integrationHref = `${base}/#integration`
  const bookingHref = `${base}/#book`
  const faqHref = `${base}/#faq`
  const contactHref = `${base}/contact`

  const menu = [
    { href: whyHref, label: L.why },
    { href: featuresHref, label: L.features },
    { href: modulesHref, label: L.modules },
    { href: bookingHref, label: L.book },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href={homeHref} aria-label="Claimity home" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Claimity Logo" width={100} height={28} priority />
        </Link>

        {/* Navigation Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {menu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-small text-gray-700 hover:text-gray-900 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTAs + Language */}
        <div className="hidden md:flex items-center gap-4">
            <Link href="https://app.claimity.ch" target="_blank" rel="noopener noreferrer" className="text-sm font-small text-gray-700 hover:text-gray-900 transition-colors mr-4">
              {L.clientLogin}
            </Link>
          <Button asChild className="bg-gray-900 text-white hover:bg-gray-800 rounded-lg px-6">
            <Link href={contactHref}>{L.contact}</Link>
          </Button>
          <LanguageSwitcher />
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open menu"
                className="text-gray-900 hover:bg-gray-100"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px]">
              <SheetHeader>
                <SheetTitle className="text-gray-900 font-semibold">{L.navTitle}</SheetTitle>
              </SheetHeader>
              <nav className="mt-4 grid gap-2">
                {menu.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="py-2 text-base font-medium text-gray-900 hover:text-gray-700 ml-4"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-6 grid gap-2">
                <Button asChild variant="outline" className="justify-start ml-4 mr-4">
                  <Link href="https://app.claimity.ch" target="_blank" rel="noopener noreferrer">
                    {L.clientLogin}
                  </Link>
                </Button>
                <Button asChild className="justify-start bg-gray-900 text-white hover:bg-gray-800 ml-4 mr-4">
                  <Link href={contactHref}>{L.contact}</Link>
                </Button>
                <div className="px-4">
                  <LanguageSwitcher />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
