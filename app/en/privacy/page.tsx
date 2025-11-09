import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function PrivacyPageEN() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 pt-6 md:pt-16 pb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-balance break-words hyphens-auto">
            Privacy Policy
          </h1>

          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 space-y-8">
            <p className="text-lg text-gray-600">
              We take the protection of your personal data very seriously and handle your personal data confidentially
              and in accordance with the applicable data protection regulations.
            </p>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Purpose and Scope</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                This Privacy Policy describes how we process personal data when you visit this website, contact us,
                or use optional features. No user account for the platform is created via this website, and no platform
                transactions take place here. If applicable, a separate privacy policy applies to the use of the platform.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Based on Article 13 of the Swiss Federal Constitution and the data protection provisions of the
                Confederation (Federal Act on Data Protection, FADP), everyone has the right to protection of their
                privacy and protection against misuse of their personal data. We handle your personal data
                confidentially and in accordance with the legal data protection regulations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Controller</h2>
              <p className="text-gray-700 leading-relaxed">
                The controller responsible for data processing on this website is:
              </p>
              <div className="space-y-1 mt-4 text-gray-700">
                <p className="font-semibold">Claimity AG</p>
                <p>Wisentalstrasse 7a</p>
                <p>8185 Winkel</p>
                <p>Switzerland</p>
                <p className="mt-2">
                  Email:{" "}
                  <a href="mailto:info@claimity.ch" className="text-teal-600 hover:underline">
                    info@claimity.ch
                  </a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Categories of Data Processed</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Access and Log Data</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    When you visit our website, technical data is automatically collected that is required to provide,
                    secure, and stabilize the site:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>IP address (processed technically by the hosting provider)</li>
                    <li>Date and time of access</li>
                    <li>Requested pages and resources</li>
                    <li>Referrer URL (previous page)</li>
                    <li>Browser type and version, operating system</li>
                    <li>Device type and language settings</li>
                    <li>HTTP status code and amount of data transferred</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Communication Data</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    If you contact us via the contact form or by email, we collect:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>First and last name</li>
                    <li>Email address</li>
                    <li>Phone number (optional)</li>
                    <li>Company and position (optional)</li>
                    <li>Type of inquiry</li>
                    <li>Message content</li>
                    <li>Technical metadata (timestamp, header information)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Source of Data</h2>
              <p className="text-gray-700 leading-relaxed mb-3">We receive personal data from the following sources:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>
                  <strong>Directly from you:</strong> Data that you voluntarily provide to us via the contact form or by email
                </li>
                <li>
                  <strong>Automatically when visiting the site:</strong> Technical access and usage data that may be collected
                  by our hosting provider (GitHub Pages) for delivery, stability, and security of the site
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Purpose of Processing</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                We process your personal data exclusively for the following purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Provision, security, and stability of the website</li>
                <li>Error analysis and detection of misuse or attacks</li>
                <li>Platform-side, aggregated reach measurement for optimization and efficient operation of the site</li>
                <li>Responding to inquiries and pre-contractual communication</li>
                <li>Fulfillment of contractual obligations</li>
                <li>Compliance with statutory retention obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Legal Bases</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We process personal data under Swiss data protection law (in particular the revised FADP) according to
                the principles of lawfulness, proportionality, purpose limitation, and data minimization. Where required,
                we obtain consent (e.g., for non-essential cookies or newsletters).
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                If the GDPR applies (e.g., for targeted offerings in the EU/EEA), we rely on Art. 6(1) GDPR:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>
                  <strong>Art. 6(1)(a) GDPR:</strong> Consent (e.g., for optional cookies)
                </li>
                <li>
                  <strong>Art. 6(1)(b) GDPR:</strong> Pre-contractual communication and contract performance
                </li>
                <li>
                  <strong>Art. 6(1)(f) GDPR:</strong> Legitimate interests in a secure, efficient website operation, error analysis,
                  and aggregated usage statistics
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-3">
                At the present time, there are no targeted offerings outside Switzerland.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Storage and Security</h2>
              <p className="text-gray-700 leading-relaxed">
                All data is stored exclusively in ISO 27001-certified data centers in Switzerland.
                We use modern encryption technologies (TLS 1.3) and implement comprehensive security measures to protect
                your data against unauthorized access, loss, or misuse.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Disclosure of Data</h2>
              <p className="text-gray-700 leading-relaxed">
                Your personal data will only be disclosed to third parties if this is necessary to fulfill our contractual
                obligations, if you have expressly consented, or if we are legally obliged to do so.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Your Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-3">You have the right at any time to:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Access your stored data</li>
                <li>Rectification of inaccurate data</li>
                <li>Erasure of your data</li>
                <li>Restriction of processing</li>
                <li>Data portability</li>
                <li>Object to data processing</li>
                <li>Withdraw consent given</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                To exercise your rights, please contact:{" "}
                <a href="mailto:info@claimity.ch" className="text-teal-600 hover:underline">
                  info@claimity.ch
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Cookies and Tracking</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                This website uses <strong>no first-party cookies</strong>. We do not use tracking cookies, marketing cookies,
                or analytics tools (such as Google Analytics, Meta Pixel, or similar).
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                The website is hosted via GitHub Pages. For technical purposes (e.g., to ensure availability, load distribution,
                or abuse detection), GitHub may set technically necessary cookies. These cookies are used solely for the technical
                operation of the hosting infrastructure and are not used for tracking or advertising purposes.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                We have no influence over the type, scope, and purpose of these technical cookies by GitHub. For more information,
                please refer to the{" "}
                <a
                  href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:underline"
                >
                  GitHub Privacy Statement
                </a>
                .
              </p>
              <p className="text-gray-700 leading-relaxed">
                Since we do not use our own cookies or any tracking tools, no cookie banner is required.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to amend this Privacy Policy at any time in compliance with applicable data protection
                regulations. The current version is always available on our website.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                <strong>Last updated: 31.10.2025</strong>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}