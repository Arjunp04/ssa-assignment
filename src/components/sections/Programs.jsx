import Image from "next/image";
import React from "react";
import academy from "../../assets/images/academy.jpg";
import camps from "../../assets/images/camps.jpg";
import performance from "../../assets/images/performance.jpg";

const Programs = () => {
  return (
    <section className="relative w-full mt-80">
      <div className=" relative z-20 px-32 text-black mx-auto">
        {/* Title Area */}
        <div className="flex gap-1 items-start">
          <p className="font-bold text-4xl text-black leading-none">Programs</p>
          <span className="size-2 bg-primary rounded-full shrink-0 mt-1"></span>
        </div>

        {/* Subtitle and Action Button Layout Row */}
        <div className="flex justify-between items-center mt-5 mb-12">
          <p className="font-light text-base leading-6 text-black">
            Lorem Ipsum has been the industry&apos;s standard dummy text ever
            since
            <br /> the 1500s, when an unknown printer took a galley of type and
            <br />
            scrambled it to make a type specimen book.
          </p>
          <button className="border border-primary rounded-4xl text-[13px] px-4 py-1.5 cursor-pointer transition-all duration-300 ease-in-out bg-primary text-white hover:bg-transparent hover:text-primary">
            Register now
          </button>
        </div>

        {/* Fixed Proportional Equal Grid*/}
        <div className="grid grid-cols-[33fr_33fr_33fr] gap-8">
          {/* Card 1 — Added 'group' to listen for hovers */}
          <div className="relative h-120 w-full overflow-hidden rounded-lg group cursor-pointer">
            <Image
              src={academy}
              alt="academy"
              fill
              className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-[1.03]"
            />
          </div>

          {/* Card 2 — Added 'group' to listen for hovers */}
          <div className="relative h-120 w-full overflow-hidden rounded-lg group cursor-pointer">
            <Image
              src={camps}
              alt="camps"
              fill
              className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-[1.03]"
            />
          </div>

          {/* Card 3 — Added 'group' to listen for hovers */}
          <div className="relative h-120 w-full overflow-hidden rounded-lg group cursor-pointer">
            <Image
              src={performance}
              alt="performance"
              fill
              className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-[1.03]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
