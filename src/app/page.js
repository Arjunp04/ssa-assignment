import AboutSummary from "@/components/sections/About/AboutSummary";
import ExcellenceGallery from "@/components/sections/FeaturesAndGallery/ExcellenceGallery";
import Hero from "@/components/sections/Hero";
import KeyFeatures from "@/components/sections/FeaturesAndGallery/KeyFeatures";
import VisionQuote from "@/components/sections/VisionQuote";
import FeaturesAndGallery from "@/components/sections/FeaturesAndGallery/FeaturesAndGallery";
import Programs from "@/components/sections/Programs";
import SloganMarquee from "@/components/sections/SloganMarquee";
import ConnectivityLaunch from "@/components/sections/ConnectivityLaunch";
import MeetProfessionals from "@/components/sections/MeetProfessionals";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSummary />
      <VisionQuote />
      <FeaturesAndGallery /> 
      <Programs/>
      <SloganMarquee/>
      <ConnectivityLaunch/>
      <MeetProfessionals/>
    </>
  );
}
