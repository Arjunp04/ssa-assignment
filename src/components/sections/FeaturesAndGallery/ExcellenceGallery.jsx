import React from "react";
import Image from "next/image";
import gallery1 from "../../../assets/images/gallery1.jpg";
import gallery2 from "../../../assets/images/gallery2.jpg";

const ExcellenceGallery = () => {
  return (
    <section className="mt-50 xs-max:mt-0 w-full bg-transparent">
      <div className="relative z-20 -mt-6 xs-max:mt-0 px-6 md:px-12 lg:px-32 py-4 lg:py-10 text-black mx-auto">
        {/* Title Area */}
        <div className="flex gap-1 items-start">
          <p className="font-bold text-3xl sm:text-4xl text-black leading-none">
            A Glimpse of Excellence
          </p>
          <span className="size-2 bg-primary rounded-full shrink-0 mt-1"></span>
        </div>

        <div className="flex flex-row justify-between items-start sm:items-center gap-4 sm:gap-6 mt-5">
          <p className="font-light text-sm sm:text-base leading-6 text-black max-w-xl">
            Lorem Ipsum has been the industry&apos;s standard dummy text ever
            since the 1500s.
          </p>
          <button className="border border-primary rounded-4xl text-xs sm:text-[13px] px-4 py-1.5 cursor-pointer transition-all duration-300 ease-in-out bg-primary text-white hover:bg-transparent hover:text-primary text-nowrap">
            Register now
          </button>
        </div>

     
        <div
          className="grid grid-cols-1 xs-max:grid-cols-[35fr_65fr] gap-5 sm:gap-8 mt-6 w-full h-auto"
        >
          {/* Image 1 Container */}
          <div className="relative min-h-50 xs-max:h-72 lg:h-84 w-full overflow-hidden rounded-lg bg-black/5">
            <Image
              src={gallery1}
              alt="Gallery image left"
              fill
              className="object-cover"
            />
          </div>

          {/* Image 2 Container */}
          <div className="relative min-h-50 xs-max:h-72 lg:h-84 w-full overflow-hidden rounded-lg bg-black/5">
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
