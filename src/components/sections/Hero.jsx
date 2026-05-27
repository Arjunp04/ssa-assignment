import React from "react";
import WeatherWidget from "./WeatherWidget";

const Hero = () => {
  return (
    <section className="relative overflow-hidden w-full h-150">
      {/* background video*/}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/banner.mp4" type="video/mp4" />
      </video>

      {/* overlay content  */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white -top-16 sm:-top-12 md:-top-5">
        <div>
          <p className="font-bold xs-max:text-lg track uppercase tracking-wider text-shadow-sm">
            SSA HUNTER VALLEY
          </p>
          <div className="font-light text-xl xs-max:text-3xl sm:text-4xl md:text-[42px] lg:text-[50px] uppercase leading-tight text-shadow-sm">
            Grow Your Game with the <br />
            <span className="inline-flex flex-col items-center">
              <span className="font-bold">Professionals</span>

              <span className="border-[1.5px] border-white w-full mt-2 lg:mt-4"></span>
            </span>
          </div>
        </div>

        {/* Adopt • Nurture • Deliver */}
        <div className="uppercase text-xs md:text-sm lg:text-lg tracking-[0.285em] text-white drop-shadow-lg bg-linear-to-r from-[#CDED4E]/0 via-[#d2f24f] to-[#d2f24f]/0 via-[50.62%] from-[3.45%] to-[91.38%] flex items-center justify-center gap-4 xs-max:gap-6 my-5 sm:my-8 w-sm xs-max:w-lg sm:w-2xl py-1">
          <span>adopt</span>
          {/* First 8px Circle */}
          <span className="size-2 bg-white rounded-full shrink-0" />
          <span>nurture</span>
          {/* Second 8px Circle */}
          <span className="size-2 bg-white rounded-full shrink-0" />
          <span>deliver</span>
        </div>

        {/* Register now button  */}
        <button className="border border-primary rounded-4xl text-[11px] xs-max:text-[13px] font-medium px-4 py-1.5 cursor-pointer transition-all duration-300 ease-in-out text-white inline-block hover:bg-[#99B81B20]">
          Register Now
        </button>
      </div>

      <div className="absolute bottom-10 sm:bottom-14 right-0 z-20">
        <WeatherWidget />
      </div>
    </section>
  );
};

export default Hero;
