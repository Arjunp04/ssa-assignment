import React from "react";
import Image from "next/image";
import gallery1 from "../../../assets/images/gallery1.jpg";
import gallery2 from "../../../assets/images/gallery2.jpg";

const ExcellenceGallery = () => {
  return (
    <section className="w-full bg-transparent">
      <div className=" relative z-20 py-10 px-32 text-black mx-auto">
        {/* Title Area */}
        <div className="flex gap-1 items-start">
          <p className="font-bold text-4xl text-black leading-none">
            A Glimpse of Excellence
          </p>
          <span className="size-2 bg-primary rounded-full shrink-0 mt-1"></span>
        </div>

        {/* Subtitle and Action Button Layout Row */}
        <div className="flex justify-between items-center mt-5 mb-12">
          <p className="font-light text-base leading-6 text-black">
            Lorem Ipsum has been the industry&apos;s standard dummy text ever
            since the 1500s.
          </p>
          <button className="border border-primary rounded-4xl text-[13px] px-4 py-1.5 cursor-pointer transition-all duration-300 ease-in-out bg-primary text-white hover:bg-transparent hover:text-primary">
            Register now
          </button>
        </div>

        {/* Fixed Proportional 35% / 65% Desktop Grid */}
        <div className="grid grid-cols-[35fr_65fr] gap-8">
          {/* Image 1 Container (35% width element) */}
          <div className="relative h-120 w-full overflow-hidden rounded-lg">
            <Image
              src={gallery1}
              alt="Gallery image left"
              fill
              className="object-cover"
            />
          </div>

          {/* Image 2 Container (65% width element) */}
          <div className="relative h-120 w-full overflow-hidden rounded-lg">
            <Image
              src={gallery2}
              alt="Gallery image right"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExcellenceGallery;
