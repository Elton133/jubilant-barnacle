
import { CtaSection } from "../components/CtaSection";
import { AboutUs } from "./components/AboutUs";
import { MeetOurTeam } from "./components/MeetOurTeam";
import { MissionVision } from "./components/MissionVision";
import { OurValues } from "./components/OurValues";

export default function HomePage() {
  return (
    <main>
      <AboutUs />
      <MeetOurTeam />
      <MissionVision />
      <OurValues />
    <CtaSection/>
    </main>
  );
}
