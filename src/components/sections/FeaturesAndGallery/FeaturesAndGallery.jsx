import Image from "next/image";
import React from "react";
import KeyFeatures from "./KeyFeatures";
import ExcellenceGallery from "./ExcellenceGallery";
import bg2 from "../../../assets/images/bg2.jpg";

const FeaturesAndGallery = () => {
  return (
    <section className="relative w-full h-250 md:h-220 lg:h-180">
      {/* Shared Asset Background Layer */}
      <Image
        src={bg2}
        alt="background"
        fill
        priority
        className="object-cover pointer-events-none"
      />
      <KeyFeatures />
    </section>
  );
};

export default FeaturesAndGallery;
