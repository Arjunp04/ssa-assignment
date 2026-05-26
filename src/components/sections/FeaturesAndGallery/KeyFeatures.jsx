import Image from "next/image";
import React from "react";
import bg2 from "../../../assets/images/bg2.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
import ExcellenceGallery from "./ExcellenceGallery";

const KeyFeatures = () => {
  const features = [
    "First venue in the world",
    "First venue in the world to have 60 multi surface courts (20 clay & 30 hard + 10 natural grass) at one location alongside a stadium",
    "First facility in the world to have capabilities to hold WTA & ATP events on any three court surface at one location",
    "First tennis academy in the world to have capabilities to stage WTA & ATP events too",
    "First venue in the world with tennis academy, Equestrian Centre, 18 holes golf course, Exhibition Centre, Aboriginal Art & Culture Museum, Stadium, 5 Star Hunter Valley resort and airport all in 500 meters radius",
    "First one stop tennis academy in Asia Pacific",
  ];

  return (
    <section className=" w-full overflow-hidden">
      {/* Background Image */}
      {/* <Image
        src={bg2}
        alt="background"
        fill
        priority
        className="object-cover pointer-events-none"
      /> */}

      {/* Overlay Content */}
      <div className="relative z-10 py-32 px-32 text-black">
        <div className="flex gap-1 items-start">
          <p className="font-bold text-4xl text-black leading-none">
            Key Features
          </p>
          <span className="size-2 bg-primary rounded-full shrink-0"></span>
        </div>
        <div className="flex justify-between items-center mt-5">
          <p className="font-light text-base leading-6 text-black">
            Lorem Ipsum has been the industry&apos;s standard dummy text ever
            since the 1500s.
          </p>
          <button className="border border-primary rounded-4xl text-[13px] px-4 py-1.5 cursor-pointer transition-all duration-300 ease-in-out bg-primary text-white hover:bg-transparent hover:text-primary">
            Register now
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 mt-10">
          {/* Left Side Features List */}
          <ul className="flex flex-col gap-5">
            {features.map((item, index) => (
              <li
                key={`left-${index}`}
                className="flex items-start gap-3 text-base leading-6 text-black font-light"
              >
                <FaArrowRightLong className="shrink-0 mt-1 text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Right Side Features List */}
          <ul className="flex flex-col gap-5">
            {features.map((item, index) => (
              <li
                key={`right-${index}`}
                className="flex items-start gap-3 text-base leading-6 text-black font-light"
              >
                <FaArrowRightLong className="shrink-0 mt-1 text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* <ExcellenceGallery /> */}
    </section>
  );
};

export default KeyFeatures;
