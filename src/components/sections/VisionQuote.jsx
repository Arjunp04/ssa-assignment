import Image from "next/image";
import React from "react";
import bg1 from "../../assets/images/bg1.jpg";

const VisionQuote = () => {
  return (
    <section className="relative h-80 sm:h-96 w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src={bg1}
        alt="Vision Background"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6 text-white">
        {/* Quote Block */}
        <div className="inline-flex flex-col items-start">
          {/* Quote */}
          <blockquote className="text-center xs-max:text-xl sm:text-2xl lg:text-4xl font-semibold leading-tight text-shadow-xs">
            “ We have created an environment ideal for
            <br className="hidden sm:block"/>
            building craft. Our goal is to be recognized as the
            <br className="hidden sm:block"/>{" "}
            best tennis performance centre in the world. ”
          </blockquote>


          {/* Border */}
          <div className="mt-6 h-px w-full bg-white "></div>

          {/* Author */}
          <div className="mt-6 flex flex-col items-start text-shadow-xs">
            <span className="sm:text-xl font-medium">John Doe</span>

            <span className="mt-1 text-sm sm:text-base text-white">Chairman</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionQuote;
