import ReusableHero from "../components/ReusableHero"

export const metadata = {
  title: "Copyright Policy - Find Event Vendors",
  description:
    "Copyright Policy for Find Event Vendors. Learn about our intellectual property rights and content usage guidelines.",
}

const CopyrightPolicy = () => {
  return (
    <main>
      <ReusableHero title="Copyright Policy" />

      <section className="max-w-6xl mx-auto my-12 px-4">
        {/* Our Commitment To Copyright */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Commitment to Copyright</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Find Event Vendors (FEV) respects the intellectual property rights of others and expects users to do the
            same. This Copyright Policy outlines how we handle copyright-related issues on our platform and how we
            protect the rights of content creators and copyright owners.
          </p>
          <p className="text-muted-foreground mb-6">
            We comply with the Digital Millennium Copyright Act (DMCA) and similar copyright laws in other
            jurisdictions. FEV takes copyright infringement seriously and will take appropriate action when we become
            aware of any violations.
          </p>
        </section>

        {/* User-Generated Content */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">User-Generated Content</h2>
          <p className="text-muted-foreground mb-6">
            When you upload, submit, or share content to FEV, you represent and warrant that you own or have the
            necessary rights to the content. By uploading content, you grant FEV and other users a non-exclusive,
            worldwide, royalty-free license to use, copy, reproduce, process, adapt, modify, publish, transmit, display,
            and distribute the content in any media.
          </p>

          <div className="space-y-4 bg-muted/50 p-6 rounded-lg">
            <p className="font-bold">When you upload content to FEV, you represent and warrant that:</p>
            <ul className="space-y-3 text-muted-foreground ml-4">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span>You own all rights to the content or have permission to use it</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span>The content does not infringe on any third-party rights</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span>You grant FEV a license to display and distribute your content</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span>The content complies with our Terms of Service</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Counter-Notification */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Counter-Notification</h2>
          <p className="text-muted-foreground mb-6">
            If you believe that content you have created was removed or disabled by mistake, you may file a
            counter-notification with us. To be effective, a counter-notification must include:
          </p>
          <ul className="space-y-3 text-muted-foreground ml-4">
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">•</span>
              <span>Your physical or electronic signature</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">•</span>
              <span>Identification of the content that was removed and where it was located</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">•</span>
              <span>A statement under penalty of perjury that you believe the content was removed erroneously</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">•</span>
              <span>Your name, address, telephone number, and email address</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">•</span>
              <span>A statement that you consent to jurisdiction of the federal courts</span>
            </li>
          </ul>
        </section>

        {/* Repeat Infringers */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Repeat Infringers</h2>
          <p className="text-muted-foreground">
            FEV maintains a policy of terminating, in appropriate circumstances, users who are repeat infringers of
            copyright or other intellectual property rights. We will also terminate user accounts in response to valid
            DMCA notices from copyright owners. Users who have been notified of copyright infringement violations will
            be warned, and subsequent violations may result in account suspension or termination.
          </p>
        </section>

        {/* Fair Use */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Fair Use</h2>
          <p className="text-muted-foreground mb-6">
            Nothing in this Copyright Policy prevents the legitimate use of copyrighted material under applicable fair
            use doctrines. Fair use is a legal doctrine that permits limited use of copyrighted material without
            permission from the copyright holder. Fair use generally includes uses for criticism, commentary, news
            reporting, teaching, scholarship, research, and parody.
          </p>
          <p className="text-muted-foreground">
            The determination of whether a use is fair use depends on several factors, including the nature and purpose
            of the use, the nature of the copyrighted work, the amount and substantiality of the portion used, and the
            effect on the market value of the original work.
          </p>
        </section>

        {/* Copyright Agent Contact */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Copyright Agent Contact</h2>
          <p className="text-muted-foreground mb-6">
            If you believe that your copyright has been infringed, you may send a DMCA notice to our Copyright Agent:
          </p>

          <div className="bg-muted/50 p-6 rounded-lg space-y-4 text-muted-foreground">
            <p className="font-bold">Send DMCA Notices To:</p>
            <p>
              <a href="mailto:copyright@findeventvendors.com" className="text-primary hover:underline font-bold">
                copyright@findeventvendors.com
              </a>
            </p>

            <div className="pt-4 border-t border-border space-y-2">
              <p className="font-bold">Copyright Agent</p>
              <p>
                Find Event Vendors
                <br />
                123 Business Street
                <br />
                Accra, Ghana
              </p>
              <p className="pt-2">
                <strong>Attention:</strong> Copyright Agent
              </p>
            </div>
          </div>

          <p className="text-muted-foreground mt-6 text-sm">
            Please include all relevant information in your DMCA notice to ensure we can promptly investigate and
            respond to your claim.
          </p>
        </section>

        {/* Third-Party Content */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Third-Party Content</h2>
          <p className="text-muted-foreground mb-6">
            FEV provides links to third-party websites and services. We are not responsible for the content, accuracy,
            or copyright compliance of third-party websites. If you believe that third-party content available through
            FEV infringes your copyright, please contact us with the information described in this policy.
          </p>
        </section>

        {/* License Grant for FEV Content */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">License Grant for FEV Content</h2>
          <p className="text-muted-foreground mb-6">
            The content on FEV, including text, graphics, logos, images, and software, is the property of FEV or its
            content suppliers and is protected by international copyright laws. We grant you a limited, non-exclusive
            license to view and print content from FEV for personal, non-commercial use. This license does not
            authorize:
          </p>
          <ul className="space-y-3 text-muted-foreground ml-4">
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">•</span>
              <span>Downloading or copying content for resale or redistribution</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">•</span>
              <span>Modifying or creating derivative works</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">•</span>
              <span>Removing copyright or other proprietary notices</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">•</span>
              <span>Using content for any commercial purpose</span>
            </li>
          </ul>
        </section>

        {/* Modifications to Policy */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Modifications to This Policy</h2>
          <p className="text-muted-foreground">
            FEV reserves the right to modify this Copyright Policy at any time. Changes will be effective immediately
            upon posting to the website. Your continued use of FEV following the posting of revised Copyright Policy
            means that you accept and agree to the changes.
          </p>
        </section>

        {/* Last Updated */}
        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>Last updated: November 25, 2025</p>
        </div>
      </section>
    </main>
  )
}

export default CopyrightPolicy
