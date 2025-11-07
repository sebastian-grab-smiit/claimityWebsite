import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <img src="./logo.png" alt="" height={28} width={100}/>
        </Link>

        {/* Navigation Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="/#warum" className="text-sm font-medium text-gray-700 hover:text-gray-900">
            Warum Claimity
          </a>
          <a href="/#funktionen" className="text-sm font-medium text-gray-700 hover:text-gray-900">
            Funktionen
          </a>
          <a href="/#module" className="text-sm font-medium text-gray-700 hover:text-gray-900">
            Module
          </a>
          <a href="/#prozess" className="text-sm font-medium text-gray-700 hover:text-gray-900">
            Prozess
          </a>
        </nav>

        {/* CTA Button */}
        <Link href="/kontakt">
          <Button className="bg-gray-900 text-white hover:bg-gray-800 rounded-lg px-6">Kontakt aufnehmen</Button>
        </Link>
      </div>
    </header>
  )
}
