import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function LegalNoticeFR() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 pt-6 md:pt-16 pb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-balance break-words hyphens-auto">
            Mentions légales
          </h1>

          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 space-y-8">
            <p className="text-gray-600">Informations conformément au droit suisse.</p>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Adresse</h2>
              <div className="space-y-1">
                <p className="font-semibold">Claimity SA</p>
                <p>Wisentalstrasse 7a</p>
                <p>8185 Winkel</p>
                <p>Suisse</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact</h2>
              <div className="space-y-1">
                <p>
                  <span className="font-semibold">Téléphone&nbsp;:</span> +41 78 344 77 36
                </p>
                <p>
                  <span className="font-semibold">E‑mail&nbsp;:</span>{" "}
                  <a href="mailto:info@claimity.ch" className="text-teal-600 hover:underline">
                    info@claimity.ch
                  </a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Registre du commerce</h2>
              <div className="space-y-1">
                <p>
                  <span className="font-semibold">N° du registre&nbsp;:</span> CH-020.3.056.095-8
                </p>
                <p>
                  <span className="font-semibold">Office du registre du commerce du canton de Zurich</span>
                </p>
                <p>
                  <span className="font-semibold">UID&nbsp;:</span> CHE-215.217.236
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Représentation autorisée</h2>
              <p>Direction&nbsp;: Burim Kryeziu</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Clause de non‑responsabilité</h2>
              <p className="leading-relaxed">
                L’auteur ne garantit pas l’exactitude, la précision, l’actualité, la fiabilité ou l’exhaustivité des
                informations. Toute responsabilité pour des dommages matériels ou immatériels résultant de l’accès, de
                l’utilisation ou de la non‑utilisation des informations publiées, d’un abus de la connexion ou de
                dérangements techniques est exclue dans les limites autorisées par la loi.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Responsabilité pour les liens</h2>
              <p className="leading-relaxed">
                Les références et liens vers des sites web de tiers sont hors de notre sphère de responsabilité. Toute
                responsabilité pour de tels sites est déclinée. L’accès à ces sites et leur utilisation se font aux risques
                et périls de l’utilisateur ou de l’utilisatrice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Droits d’auteur</h2>
              <p className="leading-relaxed">
                Les droits d’auteur et tous les autres droits relatifs aux contenus, images, photos ou autres fichiers
                publiés sur ce site appartiennent exclusivement à Claimity SA ou aux titulaires de droits expressément
                mentionnés. Toute reproduction d’éléments nécessite l’accord écrit préalable des titulaires des droits.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}