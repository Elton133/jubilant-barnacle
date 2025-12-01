import ReusableHero from "../components/ReusableHero"
import Link from "next/link"
import { AlertCircle } from "lucide-react"

export const metadata = {
  title: "Terms of Service - Find Event Vendors",
  description:
    "Terms of Service for Find Event Vendors. Review our terms, policies, and conditions for using our platform.",
}

const TermsOfService = () => {
  const sections = [
    { number: 1, title: "Acceptance of Terms" },
    { number: 2, title: "User Accounts" },
    { number: 3, title: "Vendor Responsibilities" },
    { number: 4, title: "Customer Responsibilities" },
    { number: 5, title: "Prohibited Activities" },
    { number: 6, title: "Payment Terms" },
    { number: 7, title: "Intellectual Property" },
    { number: 8, title: "Limitation of Liability" },
    { number: 10, title: "Changes to Terms" },
    { number: 9, title: "Contact Information" },
  ]

  return (
    <main>
      <ReusableHero title="Terms of Service" />

      <section className="max-w-6xl mx-auto my-12 px-4">
        {/* Important Notice */}
        <div className="mb-16 border-l-4 border-[#600FD7] bg-[#600FD7]/20 p-6 rounded-r-lg flex gap-4">
          <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-xl font-bold mb-3">Important Notice</h2>
            <p className="text-muted-foreground">
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Please Read These Terms Carefully Before Using
              Our Platform. By Accessing Or Using FEV, You Agree To Be Bound By These Terms Of Service.
            </p>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="mb-16 bg-muted/50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-8">Table of Contents</h3>
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
              <ol className="space-y-3">
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
            <h3 className="text-2xl font-bold mb-6">1. Acceptance of Terms</h3>
            <p className="text-muted-foreground mb-6">
              By accessing and using Find Event Vendors (FEV), you acknowledge that you have read, understood, and agree
              to be bound by these Terms of Service. If you do not agree to any part of these terms, please do not use
              our platform. We reserve the right to modify these terms at any time, and your continued use of the
              platform following the posting of revised terms means that you accept and agree to the changes.
            </p>
            <p className="text-muted-foreground">
              These terms apply to all users of our platform, including vendors, customers, and visitors. Please read
              them carefully and contact us if you have any questions or concerns about our terms.
            </p>
          </section>

          {/* Section 2 */}
          <section id="section-2">
            <h3 className="text-2xl font-bold mb-6">2. User Accounts</h3>
            <p className="text-muted-foreground mb-6">
              To use certain features of FEV, you may need to create an account. When creating an account, you agree to
              provide accurate, complete, and current information. You are responsible for maintaining the
              confidentiality of your account credentials and password. You agree to notify us immediately of any
              unauthorized use of your account or any other breach of security.
            </p>
            <p className="text-muted-foreground">
              You acknowledge that you are responsible for all activities that occur under your account. We reserve the
              right to suspend or terminate accounts that violate these terms or engage in fraudulent or illegal
              activity.
            </p>
          </section>

          {/* Section 3 */}
          <section id="section-3">
            <h3 className="text-2xl font-bold mb-6">3. Vendor Responsibilities</h3>
            <p className="text-muted-foreground mb-6">
              Vendors agree to provide accurate and complete information about their services, pricing, and availability
              on the FEV platform. Vendors are responsible for maintaining the quality and reliability of their services
              in accordance with the descriptions provided on the platform. Vendors must respond to customer inquiries
              and bookings in a timely and professional manner.
            </p>
            <p className="text-muted-foreground">
              Vendors agree to comply with all applicable laws and regulations related to their services. Vendors are
              responsible for obtaining any necessary licenses, permits, or certifications required to provide their
              services. FEV is not responsible for any legal issues arising from vendor non-compliance.
            </p>
          </section>

          {/* Section 4 */}
          <section id="section-4">
            <h3 className="text-2xl font-bold mb-6">4. Customer Responsibilities</h3>
            <p className="text-muted-foreground mb-6">
              Customers agree to use the FEV platform responsibly and in accordance with these terms. Customers must
              provide accurate information when booking services and communicate clearly with vendors about their needs
              and expectations.
            </p>
            <ul className="space-y-3 text-muted-foreground ml-4">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span>Provide honest reviews and ratings based on actual experiences</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span>Respect vendor terms and policies</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span>Communicate clearly about event needs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span>Honor booking commitments</span>
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section id="section-5">
            <h3 className="text-2xl font-bold mb-6">5. Prohibited Activities</h3>
            <p className="text-muted-foreground mb-6">
              You agree not to engage in any of the following prohibited activities:
            </p>
            <ul className="space-y-3 text-muted-foreground ml-4">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span>Posting false or misleading information</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span>Harassment or abusive behavior toward other users</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span>Spam or unsolicited advertising</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span>Impersonating others</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span>Violating intellectual property rights</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span>Using automated systems to access the platform</span>
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section id="section-6">
            <h3 className="text-2xl font-bold mb-6">6. Payment Terms</h3>
            <p className="text-muted-foreground mb-6">
              All payments made through the FEV platform are subject to our payment terms and conditions. Customers
              agree to pay the full amount quoted for services as agreed with the vendor. Payment must be made through
              the methods provided on the platform.
            </p>
            <p className="text-muted-foreground">
              FEV is not responsible for payment disputes between customers and vendors. However, we provide a dispute
              resolution process to address payment-related issues. All refunds and cancellations are subject to the
              vendor's cancellation policy as displayed on the platform.
            </p>
          </section>

          {/* Section 7 */}
          <section id="section-7">
            <h3 className="text-2xl font-bold mb-6">7. Intellectual Property</h3>
            <p className="text-muted-foreground mb-6">
              All content on the FEV platform, including but not limited to text, graphics, logos, images, and software,
              is the property of Find Event Vendors or its content suppliers and is protected by international copyright
              laws. You may not reproduce, distribute, or transmit any content without our prior written permission.
            </p>
            <p className="text-muted-foreground">
              User-generated content posted on the FEV platform remains the property of the user. By posting content on
              FEV, you grant FEV a non-exclusive, royalty-free license to use, reproduce, and distribute your content.
            </p>
          </section>

          {/* Section 8 */}
          <section id="section-8">
            <h3 className="text-2xl font-bold mb-6">8. Limitation of Liability</h3>
            <p className="text-muted-foreground mb-6">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, FEV AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT
              BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF
              PROFITS, LOSS OF DATA, OR LOSS OF GOODWILL, ARISING OUT OF OR RELATED TO YOUR USE OF THE PLATFORM.
            </p>
            <p className="text-muted-foreground">
              FEV is provided on an "as-is" basis. We make no warranties, expressed or implied, regarding the platform
              or any services offered through it. FEV does not guarantee the accuracy or completeness of vendor
              information or the quality of services provided by vendors.
            </p>
          </section>

          {/* Section 10 */}
          <section id="section-10">
            <h3 className="text-2xl font-bold mb-6">10. Changes to Terms</h3>
            <p className="text-muted-foreground mb-6">
              FEV reserves the right to modify these Terms of Service at any time. We will notify users of any
              significant changes by posting the updated terms on our website and updating the "Last Updated" date. Your
              continued use of the platform following the posting of revised terms means that you accept and agree to
              the changes.
            </p>
            <p className="text-muted-foreground">
              We encourage you to review these terms periodically to ensure you are aware of any changes. If you do not
              agree with any modifications, you should discontinue your use of the platform.
            </p>
          </section>

          {/* Section 9 */}
          <section id="section-9">
            <h3 className="text-2xl font-bold mb-6">9. Contact Information</h3>
            <p className="text-muted-foreground mb-6">For questions about these Terms of Service, please contact us:</p>
            <div className="bg-muted/50 p-6 rounded-lg space-y-2 text-muted-foreground">
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:legal@findeventvendors.com" className="text-primary hover:underline">
                  legal@findeventvendors.com
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

export default TermsOfService
