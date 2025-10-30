import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Claimity AG | Digitales Schadenmanagement für Versicherungen",
  description:
    "Claimity vermittelt zertifizierte Expert:innen automatisch – für schnellere Bearbeitung, weniger Aufwand und volle Transparenz. Schweizer Unternehmen, DSGVO/DSG-konform.",
  keywords: "Schadenmanagement, Versicherung, Fahrzeugexpertisen, Sachverständige, Betrugsermittlung, Digital, Schweiz",
  openGraph: {
    title: "Claimity AG | Digitales Schadenmanagement",
    description: "Automatisierte Expertenvermittlung für effizientes Schadenmanagement",
    type: "website",
    locale: "de_CH",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
