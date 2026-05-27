import React from "react";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

const WeatherWidget = () => {
  return (
    <div className="w-full space-y-2 sm:space-y-3.5 md:space-y-4 text-white">
      <div className="flex justify-end items-center gap-1 sm:gap-1.5">
        <MdKeyboardDoubleArrowLeft className="shrink-0 text-primary text-2xl" />

        {/* 2. Weather Text */}
        <span className="text-[11px] sm:text-[13px] font-bold uppercase leading-none shrink-0">
          Weather
        </span>

        {/* 3. Horizontal Red Border Line */}
        <div className="w-16 h-px bg-[#D1F04F] ml-3"></div>
      </div>

      <div className="w-56 sm:w-64 bg-[#99B81B47] px-6 py-4 flex flex-col">
        {/* Location Tag */}
        <h3 className=" text-sm sm:text-base font-bold">Hunter Valley</h3>

        {/* Weather Stats Layout Container */}
        <div className="flex items-center justify-between mt-2">
          {/* Large Main Temperature */}
          <div className="font-bold text-2xl sm:text-4xl lg:text-[50px] flex items-start">
            <span>19</span>
            <span className="text-sm sm:text-2xl font-light select-none">
              °C
            </span>
          </div>

          {/* Right Status Information Metadata Block */}
          <div className="text-right flex flex-col justify-end">
            <p className="text-sm sm:text-base font-bold leading-none">
              Weather
            </p>
            <p className="text-xs sm:text-[13px] font-light mt-1.5 whitespace-nowrap leading-none">
              Saturday, 8 pm
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-end items-center gap-1 sm:gap-1.5 w-full">
        <MdKeyboardDoubleArrowLeft className="shrink-0 text-primary text-2xl" />

        {/* 2. ONGOING MATCHES*/}
        <span className="text-[11px] sm:text-[13px] font-bold uppercase leading-none shrink-0">
          ONGOING MATCHES
        </span>

        {/* 3. Horizontal Red Border Line */}
        <div className="w-16 h-px bg-[#D1F04F] ml-3"></div>
      </div>

      <div className="flex justify-end items-center gap-1 sm:gap-1.5 w-full">
        <MdKeyboardDoubleArrowLeft className="shrink-0 text-primary text-2xl" />

        {/* 2. SCORE Text */}
        <span className="text-[11px] sm:text-[13px] font-bold uppercase leading-none shrink-0">
          SCORE
        </span>

        {/* 3. Horizontal Red Border Line */}
        <div className="w-16 h-px bg-[#D1F04F] ml-3"></div>
      </div>
    </div>
  );
};

export default WeatherWidget;
