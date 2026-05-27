import AboutSummary from "@/components/sections/About/AboutSummary";
import Hero from "@/components/sections/Hero";
import VisionQuote from "@/components/sections/VisionQuote";
import FeaturesAndGallery from "@/components/sections/FeaturesAndGallery/FeaturesAndGallery";
import Programs from "@/components/sections/Programs";
import SloganMarquee from "@/components/sections/SloganMarquee";
import ConnectivityLaunch from "@/components/sections/ConnectivityLaunch";
import MeetProfessionals from "@/components/sections/MeetProfessionals";
import CoachesAndEvents from "@/components/sections/CoachesAndEvents";
import Facilities from "@/components/sections/Facilities";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSummary />
      <VisionQuote />
      <FeaturesAndGallery />
      <Programs />
      <SloganMarquee />
      <ConnectivityLaunch />
      <MeetProfessionals />
      <Facilities />
      <CoachesAndEvents />
    </>
  );
}
