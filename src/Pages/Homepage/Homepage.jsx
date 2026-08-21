import HeroSection from "./Components/HeroSection/HeroSection";
import AboutSection from "./Components/AboutSection/AboutSection";
import CountdownSection from "./Components/CountdownSection/CountdownSection";
import InfoComponent from "./Components/InfoComponent/InfoComponent";
import EventsGrid from "./Components/EventsGrid/EventsGrid";
import MarqueeSection from "./Components/Marqueesection/Marqueesection";
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CountdownSection />
      <InfoComponent />
      <AboutSection />
      <EventsGrid />
      <MarqueeSection/>
    </>
  );
}