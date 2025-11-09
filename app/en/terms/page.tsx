import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsPageEN() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 pt-6 md:pt-16 pb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-balance break-words hyphens-auto">
            Terms of Service
          </h1>

          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of the Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing or using the Claimity platform and services of Claimity AG, you agree to these Terms of
                Service and all applicable laws and regulations. If you do not agree to these terms, you are prohibited
                from using our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. License of Use</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Subject to your compliance with these terms, Claimity AG grants you a limited, non-exclusive,
                non-transferable license to use our services for internal business purposes. This license does not include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>modifying or copying materials</li>
                <li>using materials for commercial purposes outside your organization</li>
                <li>attempting to reverse engineer any software</li>
                <li>removing copyright or proprietary notices</li>
                <li>transferring materials to other people or organizations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Accounts</h2>
              <p className="text-gray-700 leading-relaxed">
                You are responsible for maintaining the confidentiality of your login credentials and for all activities
                that occur under your account. Please notify us immediately of any unauthorized use. We reserve the right
                to suspend or terminate accounts in case of violation of these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Acceptable Use</h2>
              <p className="text-gray-700 leading-relaxed mb-4">You agree to refrain from:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>using our services for unlawful purposes</li>
                <li>violations of applicable laws or regulations</li>
                <li>infringing the rights of third parties</li>
                <li>transmitting malicious code or malware</li>
                <li>attempting to gain unauthorized access to our systems</li>
                <li>interfering with the integrity or performance of our services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed">
                All content, features, and functionality of our services — including, but not limited to, text, graphics,
                logos, and software — are the property of Claimity AG and protected by international copyright, trademark,
                and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Payment Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                Subscription fees are billed in advance at regular intervals. You authorize us to charge your payment
                method for all applicable fees. Fees are non-refundable unless required by law or expressly stated in your agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Service Availability</h2>
              <p className="text-gray-700 leading-relaxed">
                We strive for high availability but do not guarantee uninterrupted or error-free use. We reserve the
                right to modify, suspend, or discontinue parts of the services with reasonable prior notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed">
                To the extent permitted by law, Claimity AG shall not be liable for any indirect, incidental, special,
                consequential, or punitive damages arising from the use or inability to use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Termination</h2>
              <p className="text-gray-700 leading-relaxed">
                We may suspend or terminate your access to our services for cause and without prior notice, in particular
                in case of a breach of these terms. Upon termination, your right to use the services ceases immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Governing Law</h2>
              <p className="text-gray-700 leading-relaxed">
                These terms are governed by Swiss law, excluding conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to the Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to amend these terms at any time. We will inform you of material changes by publishing
                the updated version on our website. Your continued use constitutes acceptance of the revised terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
            </section>

            <div className="mt-4 space-y-2 text-gray-700">
              <p>
                <strong>Email:</strong> info@claimity.ch
              </p>
              <p>
                <strong>Address:</strong> Claimity AG, Wisentalstrasse 7a, 8185 Winkel, Switzerland
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}