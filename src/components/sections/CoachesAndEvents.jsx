import React from "react";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import coach from "../../assets/images/coach.jpg";

const CoachesAndEvents = () => {
  return (
    <section className="w-full bg-white overflow-hidden pt-4">
   
      <div className="grid grid-cols-1 sm:grid-cols-2 w-full h-auto md:h-64">
        
        {/* FIRST COLUMN (COACHES) */}
        <div className="relative w-full min-h-56 md:h-full overflow-hidden group cursor-pointer">
          {/* Background Image */}
          <Image
            src={coach}
            alt="Academy professional tennis coaches training session"
            fill
            priority
            className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-[1.03]"
          />
          {/* Dark Overlay Sheet */}
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/55 transition-colors duration-300" />
          
          {/* Content Box with Responsive Padding */}
          <div className="absolute inset-0 flex flex-col justify-center px-6 xs:px-10 phone:px-16 lg:pl-32 text-white">
            <div className="flex items-start gap-1 mb-2 md:mb-3">
              <h3 className="text-2xl xs:text-3xl lg:text-4xl font-bold tracking-tight">Our Coaches</h3>
              <span className="size-2 bg-white rounded-full shrink-0"></span>
            </div>
            <p className="font-light text-sm lg:text-base max-w-sm leading-relaxed mb-4 md:mb-6">
              Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.
            </p>
            <div className="flex items-center gap-2 text-sm cursor-pointer group/btn w-fit">
              <span className="hover:underline underline-offset-2 decoration-1 transition-all duration-300">
                Read More
              </span>
              <FaArrowRightLong className="transition-transform duration-300 ease-in-out group-hover/btn:translate-x-1.5" />
            </div>
          </div>
        </div>

        {/* SECOND COLUMN (EVENTS) */}
        <div className="relative w-full min-h-56 md:h-full bg-primary flex flex-col justify-center px-6 xs:px-10 phone:px-16 lg:pl-32 text-white group cursor-pointer">
          <div className="absolute inset-0 opacity-10 bg-primary" />
          
          <div className="relative z-10">
            <div className="flex items-start gap-1 mb-2 md:mb-3">
              <h3 className="text-2xl xs:text-3xl lg:text-4xl font-bold tracking-tight">Events</h3>
              <span className="size-2 bg-white rounded-full shrink-0"></span>
            </div>
            <p className="font-light text-sm lg:text-base max-w-sm leading-relaxed mb-4 md:mb-6">
              Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.
            </p>
            <div className="flex items-center gap-3 text-sm cursor-pointer group/btn w-fit">
              <span className="hover:underline underline-offset-2 decoration-1 transition-all duration-300">
                Read More
              </span>
              <FaArrowRightLong className="transition-transform duration-300 ease-in-out group-hover/btn:translate-x-1.5" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CoachesAndEvents;
