
import { CtaSection } from "../components/CtaSection";
import { AboutUs } from "./components/AboutUs";
import { FevTaglineBanner } from "./components/FevTaglineBanner";
import { MeetOurTeam } from "./components/MeetOurTeam";
import { MissionVision } from "./components/MissionVision";
import { OurValues } from "./components/OurValues";
import { WhyFevCard } from "./components/WhyFev";

import ReusableHero from "../components/ReusableHero";

export default function HomePage() {
  return (
    <main>
      <ReusableHero title="Connecting You to the Right" bluetitle="Event Vendors" subtitle="Join Ghana’s trusted event vendor platform. List your services, reach new clients, and grow your bookings."/>
      <AboutUs />
      <FevTaglineBanner />
      <OurValues />
      <MissionVision />
      <MeetOurTeam />
      <WhyFevCard />
    <CtaSection/>
    </main>
  );
}
