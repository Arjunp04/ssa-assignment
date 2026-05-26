import React from "react";
import Image from "next/image";
import Vector from "../../../assets/images/Vector.svg";

export default function AboutTabs() {
  return (
    <div className="relative w-full">
      {/* Background Vector Layout Asset */}
      <Image src={Vector} alt="vector" className="opacity-30" />
      
      {/* Floating Header Content Wrapper */}
      <div className="-translate-y-16 md:-translate-y-72 relative z-10">
        <p className="text-2xl text-center text-black">
          To be the first venue in the world to have{" "}
          <span className="font-bold text-primary">60 multi surface courts</span>{" "}
          <br /> at one location and establish first one stop tennis academy{" "}
          <br /> in the Asia Pacific producing grand slam champions.
        </p>

        {/* Tab Selection Row Layout */}
        <div className="flex justify-center items-baseline gap-10 font-semibold text-2xl mt-24"> 
          <div className="flex flex-col items-center">
            <p className="text-black pb-1">About Us</p> 
            <div className="border-b-[2.5px] border-primary w-full"></div>
          </div>
          <p className="text-muted cursor-pointer hover:text-black transition-colors">Coaches</p>
          <p className="text-muted cursor-pointer hover:text-black transition-colors">Vision</p>
          <p className="text-muted cursor-pointer hover:text-black transition-colors">Mission</p>
        </div>
      </div>
    </div>
  );
}
