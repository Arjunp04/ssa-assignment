import React from "react";
import Image from "next/image";
import Vector from "../../../assets/images/Vector.svg";

export default function AboutTabs() {
  return (
    <div className="relative w-full">
      {/* Background Vector Layout Asset */}
      <Image src={Vector} alt="vector" className="opacity-30" />

      {/* Floating Header Content Wrapper */}
      <div className="-translate-y-80 md:-translate-y-72 relative z-10 px-6 md:px-12 lg:px-32">
        <p className="text-lg sm:text-xl md:text-2xl text-center text-black">
          To be the first venue in the world to have{" "}
          <span className="font-bold text-primary">
            60 multi surface courts
          </span>{" "}
          <br className="hidden sm:block" /> at one location and establish first
          one stop tennis academy <br className="hidden sm:block" /> in the Asia
          Pacific producing grand slam champions.
        </p>

        {/* Tab Selection Row Layout */}
        <div className="grid grid-cols-2 xs-max:flex xs-max:justify-center items-center xs-max:items-baseline gap-6 xs-max:gap-8 font-semibold text-lg xs-max:text-xl md:text-2xl mt-24 w-full max-w-sm xs-max:max-w-full mx-auto text-center px-4 text-nowrap">
          {/* Tab 1: About Us (Active State) */}
          <div className="flex flex-col items-center cursor-pointer">
            <p className="text-black pb-1">About Us</p>
            <div className="border-b-[2.5px] border-primary w-16 xs-max:w-full"></div>
          </div>

          {/* Tab 2: Coaches */}
          <p className="text-muted cursor-pointer hover:text-black transition-colors py-1">
            Coaches
          </p>

          {/* Tab 3: Vision */}
          <p className="text-muted cursor-pointer hover:text-black transition-colors py-1">
            Vision
          </p>

          {/* Tab 4: Mission */}
          <p className="text-muted cursor-pointer hover:text-black transition-colors py-1">
            Mission
          </p>
        </div>
      </div>
    </div>
  );
}
