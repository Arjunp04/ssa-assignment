import Image from "next/image";
import React from "react";
import academy from "../../assets/images/academy.jpg";
import camps from "../../assets/images/camps.jpg";
import performance from "../../assets/images/performance.jpg";

const Programs = () => {
  return (
    <section className="relative w-full mt-12 sm:mt-16 ">
      <div className=" relative z-20 px-6 md:px-12 lg:px-32 text-black mx-auto">
        {/* Title Area */}
        <div className="flex gap-1 items-start">
          <p className="font-bold text-3xl sm:text-4xl text-black leading-none">
            Programs
          </p>
          <span className="size-2 bg-primary rounded-full shrink-0 mt-1"></span>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6 mt-5">
          <p className="font-light text-sm sm:text-base leading-6 text-black max-w-xl">
            Lorem Ipsum has been the industry&apos;s standard dummy text ever
            since
            <br className="hidden sm:block" /> the 1500s, when an unknown
            printer took a galley of type and
            <br className="hidden sm:block" />
            scrambled it to make a type specimen book.
          </p>
          <button className="border border-primary rounded-4xl text-xs sm:text-[13px] px-4 py-1.5 cursor-pointer transition-all duration-300 ease-in-out bg-primary text-white hover:bg-transparent hover:text-primary text-nowrap">
            Register now
          </button>
        </div>

        {/* Fixed Proportional Equal Grid*/}
        <div className="grid grid-cols-1 xs-max:grid-cols-2 sm:grid-cols-3 gap-5 sm:gap-8 w-full mt-6">
          {/* Card 1 */}
          <div className="relative min-h-50 xs-max:h-70 lg:h-90 w-full overflow-hidden rounded-lg group cursor-pointer">
            <Image
              src={academy}
              alt="academy"
              fill
              className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-[1.03]"
            />
          </div>

          {/* Card 2 */}
          <div className="relative min-h-50 xs-max:h-70 lg:h-90 w-full overflow-hidden rounded-lg group cursor-pointer">
            <Image
              src={camps}
              alt="camps"
              fill
              className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-[1.03]"
            />
          </div>

          {/* Card 3 */}
          <div className="relative min-h-50 xs-max:h-70 lg:h-90 w-full overflow-hidden rounded-lg group cursor-pointer">
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
