import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function LegalNoticeEN() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 pt-6 md:pt-16 pb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-balance break-words hyphens-auto">
            Legal Notice
          </h1>

          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 space-y-8">
            <p className="text-gray-600">
              Information according to Swiss law.
            </p>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Address</h2>
              <div className="space-y-1">
                <p className="font-semibold">Claimity AG</p>
                <p>Wisentalstrasse 7a</p>
                <p>8185 Winkel</p>
                <p>Switzerland</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact</h2>
              <div className="space-y-1">
                <p>
                  <span className="font-semibold">Phone:</span> +41 78 344 77 36
                </p>
                <p>
                  <span className="font-semibold">Email:</span>{" "}
                  <a href="mailto:info@claimity.ch" className="text-teal-600 hover:underline">
                    info@claimity.ch
                  </a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Commercial Register</h2>
              <div className="space-y-1">
                <p>
                  <span className="font-semibold">Register No.:</span> CH-020.3.056.095-8
                </p>
                <p>
                  <span className="font-semibold">Commercial Registry Office of the Canton of Zurich</span>
                </p>
                <p>
                  <span className="font-semibold">UID:</span> CHE-215.217.236
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Authorized Representatives</h2>
              <p>Management: Burim Kryeziu</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Disclaimer</h2>
              <p className="leading-relaxed">
                The author assumes no liability for the correctness, accuracy, timeliness, reliability, or completeness
                of the information provided. Liability claims against the author for material or immaterial damage arising
                from access to, use of, or non-use of published information, misuse of the connection, or technical
                malfunctions are excluded to the extent permitted by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Liability for Links</h2>
              <p className="leading-relaxed">
                References and links to third-party websites are outside our area of responsibility. Any responsibility for
                such websites is declined. Access and use of such websites are at the user’s own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Copyright</h2>
              <p className="leading-relaxed">
                The copyrights and all other rights to content, images, photos, or other files on this website are the
                exclusive property of Claimity AG or the specifically named rights holders. The reproduction of any
                elements requires the prior written consent of the copyright holders.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}