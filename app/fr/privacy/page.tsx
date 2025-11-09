import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function PrivacyPageFR() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 pt-6 md:pt-16 pb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-balance break-words hyphens-auto">
            Politique de confidentialité
          </h1>

          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 space-y-8">
            <p className="text-lg text-gray-600">
              Nous accordons une grande importance à la protection de vos données personnelles et les traitons de
              manière confidentielle conformément aux dispositions légales en vigueur.
            </p>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Objet et champ d’application</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                La présente politique décrit comment nous traitons les données personnelles lorsque vous visitez ce site,
                nous contactez ou utilisez des fonctionnalités optionnelles. Aucun compte pour la plateforme n’est créé
                via ce site et aucune transaction de plateforme n’y a lieu. Pour l’utilisation de la plateforme, une
                politique distincte peut s’appliquer le cas échéant.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Conformément à l’article 13 de la Constitution fédérale et aux dispositions de la loi fédérale sur la
                protection des données (LPD), toute personne a droit à la protection de sa sphère privée et à la
                protection contre l’emploi abusif de ses données personnelles. Nous traitons vos données de manière
                confidentielle et dans le respect des dispositions légales.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Responsable du traitement</h2>
              <p className="text-gray-700 leading-relaxed">
                Le responsable du traitement des données sur ce site est&nbsp;:
              </p>
              <div className="space-y-1 mt-4 text-gray-700">
                <p className="font-semibold">Claimity AG</p>
                <p>Wisentalstrasse 7a</p>
                <p>8185 Winkel</p>
                <p>Suisse</p>
                <p className="mt-2">
                  E‑mail&nbsp;:{" "}
                  <a href="mailto:info@claimity.ch" className="text-teal-600 hover:underline">
                    info@claimity.ch
                  </a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Catégories de données traitées</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Données d’accès et de journalisation</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Lors de votre visite, des données techniques nécessaires à la mise à disposition, à la sécurité et
                    à la stabilité du site peuvent être collectées&nbsp;:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Adresse IP (traitée techniquement par l’hébergeur)</li>
                    <li>Date et heure d’accès</li>
                    <li>Pages et ressources demandées</li>
                    <li>URL référente (page précédente)</li>
                    <li>Type et version du navigateur, système d’exploitation</li>
                    <li>Type d’appareil et paramètres de langue</li>
                    <li>Code d’état HTTP et volume de données transférées</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Données de communication</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Si vous nous contactez via le formulaire ou par e‑mail, nous collectons&nbsp;:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Nom et prénom</li>
                    <li>Adresse e‑mail</li>
                    <li>Numéro de téléphone (optionnel)</li>
                    <li>Entreprise et poste (optionnel)</li>
                    <li>Nature de la demande</li>
                    <li>Contenu du message</li>
                    <li>Métadonnées techniques (horodatage, informations d’en‑tête)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Provenance des données</h2>
              <p className="text-gray-700 leading-relaxed mb-3">Nous recevons des données personnelles depuis&nbsp;:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>
                  <strong>Directement de vous&nbsp;:</strong> données transmises volontairement via le formulaire ou par e‑mail
                </li>
                <li>
                  <strong>Automatiquement lors de la visite&nbsp;:</strong> données d’accès et d’usage collectées par notre
                  hébergeur (GitHub Pages) à des fins de livraison, stabilité et sécurité du site
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Finalités du traitement</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Vos données personnelles sont traitées exclusivement aux fins suivantes&nbsp;:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Mise à disposition, sécurité et stabilité du site</li>
                <li>Analyse d’erreurs et détection d’abus ou d’attaques</li>
                <li>Mesure d’audience agrégée côté plateforme pour optimisation et exploitation efficace</li>
                <li>Réponse aux demandes et communication précontractuelle</li>
                <li>Exécution d’obligations contractuelles</li>
                <li>Respect des obligations légales de conservation</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Bases légales</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nous traitons les données conformément au droit suisse (LPD révisée), selon les principes de
                licéité, proportionnalité, finalité et minimisation des données. Le cas échéant, nous recueillons votre
                consentement (p. ex. pour des cookies non essentiels ou des newsletters).
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                Si le RGPD s’applique (p. ex. pour des offres ciblées dans l’UE/EEE), nous nous fondons sur l’art. 6(1) RGPD&nbsp;:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>
                  <strong>Art. 6(1)(a) RGPD&nbsp;:</strong> consentement (p. ex. pour des cookies optionnels)
                </li>
                <li>
                  <strong>Art. 6(1)(b) RGPD&nbsp;:</strong> communication précontractuelle et exécution contractuelle
                </li>
                <li>
                  <strong>Art. 6(1)(f) RGPD&nbsp;:</strong> intérêts légitimes à une exploitation sûre et efficace du site, à
                  l’analyse d’erreurs et à des statistiques d’utilisation agrégées
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-3">
                À ce jour, il n’existe pas d’offres ciblées en dehors de la Suisse.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Conservation et sécurité des données</h2>
              <p className="text-gray-700 leading-relaxed">
                Toutes les données sont stockées exclusivement dans des centres certifiés ISO 27001 en Suisse. Nous
                utilisons des technologies de chiffrement modernes (TLS 1.3) et mettons en place des mesures de sécurité
                complètes pour protéger vos données contre les accès non autorisés, la perte ou l’utilisation abusive.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Communication des données</h2>
              <p className="text-gray-700 leading-relaxed">
                Les données personnelles ne sont communiquées à des tiers que si cela est nécessaire à l’exécution de nos
                obligations contractuelles, si vous avez donné votre consentement explicite ou si nous y sommes tenus
                légalement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Vos droits</h2>
              <p className="text-gray-700 leading-relaxed mb-3">Vous disposez notamment des droits suivants&nbsp;:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Droit d’accès</li>
                <li>Rectification des données inexactes</li>
                <li>Effacement des données</li>
                <li>Limitation du traitement</li>
                <li>Portabilité des données</li>
                <li>Opposition au traitement</li>
                <li>Retrait des consentements donnés</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Pour exercer vos droits, veuillez contacter&nbsp;:{" "}
                <a href="mailto:info@claimity.ch" className="text-teal-600 hover:underline">
                  info@claimity.ch
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Cookies et tracking</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Ce site n’utilise <strong>aucun cookie propriétaire</strong>. Nous n’utilisons ni cookies de suivi, ni cookies
                marketing, ni outils d’analytics (tels que Google Analytics, Meta Pixel, etc.).
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                Le site est hébergé via GitHub Pages. À des fins techniques (p. ex. disponibilité, répartition de charge,
                détection d’abus), GitHub peut déposer des cookies strictement nécessaires. Ces cookies servent
                exclusivement au fonctionnement technique de l’infrastructure d’hébergement et ne sont pas utilisés à des
                fins de suivi ou de publicité.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                Nous n’avons aucune influence sur la nature, l’étendue et la finalité de ces cookies techniques déposés par
                GitHub. Pour plus d’informations, consultez la{" "}
                <a
                  href="https://docs.github.com/fr/site-policy/privacy-policies/github-privacy-statement"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:underline"
                >
                  Déclaration de confidentialité de GitHub
                </a>
                .
              </p>
              <p className="text-gray-700 leading-relaxed">
                Étant donné que nous n’utilisons ni cookies propriétaires ni outils de suivi, aucune bannière cookies n’est requise.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Modifications</h2>
              <p className="text-gray-700 leading-relaxed">
                Nous nous réservons le droit de modifier à tout moment la présente politique, dans le respect des
                dispositions légales applicables. La version en vigueur est toujours disponible sur notre site.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                <strong>Dernière mise à jour&nbsp;: 31.10.2025</strong>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}