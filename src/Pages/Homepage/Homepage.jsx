import HeroSection from "./Components/HeroSection/HeroSection";
import AboutSection from "./Components/AboutSection/AboutSection";
import CountdownSection from "./Components/CountdownSection/CountdownSection";
import InfoComponent from "./Components/InfoComponent/InfoComponent";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CountdownSection />
      <InfoComponent />
      <AboutSection />
    </>
  );
}