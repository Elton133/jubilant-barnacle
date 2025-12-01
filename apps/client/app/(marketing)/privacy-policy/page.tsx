import ReusableHero from "../components/ReusableHero"
import Link from "next/link"

export const metadata = {
  title: "Privacy Policy - Find Event Vendors",
  description:
    "Privacy Policy for Find Event Vendors. Learn how we collect, use, and protect your personal information.",
}

const PrivacyPolicy = () => {
  const sections = [
    { number: 1, title: "Information We Collect" },
    { number: 2, title: "How We Use Your Information" },
    { number: 3, title: "Information Sharing and Disclosure" },
    { number: 4, title: "Data Security" },
    { number: 5, title: "Your Privacy Rights" },
    { number: 6, title: "Cookies and Tracking Technologies" },
    { number: 7, title: "Children's Privacy" },
    { number: 8, title: "Changes to This Privacy Policy" },
    { number: 9, title: "Contact Us" },
  ]

  return (
    <main>
      <ReusableHero title="Privacy Policy" />

      <section className="max-w-6xl mx-auto my-12 px-4">
        {/* Quick Summary */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Quick Summary</h2>
          <p className="text-lg text-muted-foreground mb-6">
            At Find Event Vendors (FEV), we are committed to protecting your privacy. This Privacy Policy outlines how
            we collect, use, and safeguard your personal information when you use our website and services. Here are the
            key highlights:
          </p>
          <ul className="space-y-3 text-muted-foreground ml-4">
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">•</span>
              <span>We collect minimal personal information necessary for our services</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">•</span>
              <span>Your data is never sold to third parties</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">•</span>
              <span>You have full control over your data and can request deletion at any time</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">•</span>
              <span>We use industry-standard security measures to protect your information</span>
            </li>
          </ul>
        </div>

        {/* Table of Contents */}
        <div className="mb-16 bg-muted/50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-8">Content</h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <ol className="space-y-3">
                {sections.slice(0, 5).map((section) => (
                  <li key={section.number} className="text-muted-foreground">
                    <Link href={`#section-${section.number}`} className="hover:text-primary transition-colors">
                      {section.number}. {section.title}
                    </Link>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <ol className="space-y-3" start={6}>
                {sections.slice(5).map((section) => (
                  <li key={section.number} className="text-muted-foreground">
                    <Link href={`#section-${section.number}`} className="hover:text-primary transition-colors">
                      {section.number}. {section.title}
                    </Link>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-16">
          {/* Section 1 */}
          <section id="section-1">
            <h3 className="text-2xl font-bold mb-6">1. Information We Collect</h3>
            <p className="text-muted-foreground mb-6">
              We collect information that you voluntarily provide to us and information that is automatically collected
              when you interact with our platform. The types of information we collect include:
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-lg mb-3">Personal Information</h4>
                <p className="text-muted-foreground">
                  When you register for an account, contact us, or make a purchase, we may collect personal information
                  such as your name, email address, phone number, billing address, and payment information. This
                  information is collected only with your explicit consent and is necessary to provide our services.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-3">Usage Data</h4>
                <p className="text-muted-foreground">
                  We automatically collect certain information about your interactions with our website, including your
                  IP address, browser type, operating system, referring URLs, pages visited, and the time and date of
                  your visits. This information helps us improve our services and user experience.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-3">Device Information</h4>
                <p className="text-muted-foreground">
                  We may collect information about the device you use to access our platform, including device type,
                  model, operating system, unique device identifiers, and mobile network information.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section id="section-2">
            <h3 className="text-2xl font-bold mb-6">2. How We Use Your Information</h3>
            <p className="text-muted-foreground mb-6">
              We use the information we collect for various purposes, including:
            </p>
            <ul className="space-y-3 text-muted-foreground ml-4">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span>To provide, maintain, and improve our services</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span>To process transactions and send related information</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span>To send promotional emails and marketing communications (with your consent)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span>To respond to your inquiries and provide customer support</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span>To monitor and analyze trends, usage, and activities</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span>To comply with legal obligations and enforce our terms of service</span>
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section id="section-3">
            <h3 className="text-2xl font-bold mb-6">3. Information Sharing and Disclosure</h3>
            <p className="text-muted-foreground mb-6">
              We do not sell, trade, or rent your personal information to third parties. However, we may share your
              information in the following circumstances:
            </p>
            <ul className="space-y-3 text-muted-foreground ml-4">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span>
                  <strong>Service Providers:</strong> We may share information with trusted third-party service
                  providers who assist us in operating our website and conducting our business
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span>
                  <strong>Legal Requirements:</strong> We may disclose information when required by law or when we
                  believe in good faith that such disclosure is necessary
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span>
                  <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your
                  information may be transferred as part of that transaction
                </span>
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section id="section-4">
            <h3 className="text-2xl font-bold mb-6">4. Data Security</h3>
            <p className="text-muted-foreground mb-6">
              We implement comprehensive security measures to protect your personal information from unauthorized
              access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="space-y-3 text-muted-foreground ml-4">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span>Encryption of data in transit using SSL/TLS protocols</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span>Secure password storage and authentication mechanisms</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span>Regular security audits and vulnerability assessments</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span>Limited access to personal information on a need-to-know basis</span>
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section id="section-5">
            <h3 className="text-2xl font-bold mb-6">5. Your Privacy Rights</h3>
            <p className="text-muted-foreground mb-6">
              Depending on your location, you may have certain rights regarding your personal information:
            </p>
            <ul className="space-y-3 text-muted-foreground ml-4">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span>
                  <strong>Right to Access:</strong> You have the right to request access to your personal information
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span>
                  <strong>Right to Correct:</strong> You can request correction of inaccurate or incomplete information
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span>
                  <strong>Right to Delete:</strong> You may request deletion of your personal information under certain
                  circumstances
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span>
                  <strong>Right to Opt-Out:</strong> You can opt out of receiving marketing communications from us at
                  any time
                </span>
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section id="section-6">
            <h3 className="text-2xl font-bold mb-6">6. Cookies and Tracking Technologies</h3>
            <p className="text-muted-foreground mb-6">
              We use cookies and similar tracking technologies to enhance your experience on our website. These
              technologies help us:
            </p>
            <ul className="space-y-3 text-muted-foreground ml-4">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span>Remember your preferences and login information</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span>Understand how you use our website</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span>Deliver personalized content and advertisements</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span>Analyze website performance and user behavior</span>
              </li>
            </ul>
            <p className="text-muted-foreground mt-6">
              You can control cookie settings through your browser preferences. Please note that disabling cookies may
              affect some functionality of our website.
            </p>
          </section>

          {/* Section 7 */}
          <section id="section-7">
            <h3 className="text-2xl font-bold mb-6">7. Children's Privacy</h3>
            <p className="text-muted-foreground">
              Our services are not directed to children under the age of 13. We do not knowingly collect personal
              information from children under 13. If we become aware that a child under 13 has provided us with personal
              information, we will take steps to delete such information and terminate the child's account. Parents or
              guardians who believe their child has provided information to us should contact us immediately.
            </p>
          </section>

          {/* Section 8 */}
          <section id="section-8">
            <h3 className="text-2xl font-bold mb-6">8. Changes to This Privacy Policy</h3>
            <p className="text-muted-foreground">
              We may update this Privacy Policy from time to time to reflect changes in our practices or for other
              operational, legal, or regulatory reasons. We will notify you of any significant changes by posting the
              new Privacy Policy on our website and updating the "Last Updated" date. Your continued use of our services
              following the posting of revised Privacy Policy means that you accept and agree to the changes.
            </p>
          </section>

          {/* Section 9 */}
          <section id="section-9">
            <h3 className="text-2xl font-bold mb-6">9. Contact Us</h3>
            <p className="text-muted-foreground mb-6">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices,
              please contact us:
            </p>
            <div className="bg-muted/50 p-6 rounded-lg space-y-2 text-muted-foreground">
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:privacy@findeventvendors.com" className="text-primary hover:underline">
                  privacy@findeventvendors.com
                </a>
              </p>
              <p>
                <strong>Phone:</strong> +233 (02) 123 4567
              </p>
              <p>
                <strong>Address:</strong>
              </p>
              <p className="ml-4">
                Find Event Vendors
                <br />
                123 Business Street
                <br />
                Accra, Ghana
              </p>
            </div>
          </section>
        </div>

        {/* Last Updated */}
        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>Last updated: November 25, 2025</p>
        </div>
      </section>
    </main>
  )
}

export default PrivacyPolicy
