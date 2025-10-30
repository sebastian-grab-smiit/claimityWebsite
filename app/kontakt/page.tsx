"use client"

import { useEffect } from "react"
import { Header } from "@/components/header"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"

export default function KontaktPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
