
import Hero from "./components/Hero";
import { FevBrings } from "./components/FevBrings";
import { HowItWorks } from "./components/HowItWorks";
import { VendorCategories } from "./components/VendorCategories";
import { FevAdvantage } from "./components/Advantages";
import { Testimonials } from "./components/Testimonials";
import { NewsletterSignup } from "./components/Newsletter";
import { RelatedArticles } from "./components/RelatedArticles";
import { CtaSection } from "./components/CtaSection";
import WatchTutorial from "./components/WatchTutorial";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <FevBrings />
      <HowItWorks />
      <WatchTutorial />
      <VendorCategories />
      <FevAdvantage />
      <Testimonials />
      <NewsletterSignup />
      <RelatedArticles />
      <CtaSection />
    </main>
  );
}
