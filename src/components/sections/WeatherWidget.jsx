import React from "react";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

const WeatherWidget = () => {
  return (
    <div className="w-full space-y-5 text-white">
      <div className="flex justify-end items-center gap-1.5">
        <MdKeyboardDoubleArrowLeft
          size={26}
          className="shrink-0 text-primary"
        />

        {/* 2. Weather Text */}
        <span className="text-[13px] font-bold uppercase leading-none shrink-0">
          Weather
        </span>

        {/* 3. Horizontal Red Border Line */}
        <div className="w-16 h-px bg-[#D1F04F] ml-3"></div>
      </div>

      <div className="w-64 bg-[#99B81B47] px-6 py-4 flex flex-col">
        {/* Location Tag */}
        <h3 className=" text-base font-bold">Hunter Valley</h3>

        {/* Weather Stats Layout Container */}
        <div className="flex items-center justify-between mt-2">
          {/* Large Main Temperature */}
          <div className="font-bold text-[50px] flex items-start">
            <span>19</span>
            <span className="text-2xl font-light select-none">°C</span>
          </div>

          {/* Right Status Information Metadata Block */}
          <div className="text-right flex flex-col justify-end">
            <p className="text-base font-bold leading-none">Weather</p>
            <p className="text-[13px] font-light mt-1 whitespace-nowrap leading-none">
              Saturday, 8 pm
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-end items-center gap-1.5 w-full">
        <MdKeyboardDoubleArrowLeft
          size={26}
          className="shrink-0 text-primary"
        />

        {/* 2. Weather Text */}
        <span className="text-[13px] font-bold uppercase leading-none shrink-0">
          ONGOING MATCHES
        </span>

        {/* 3. Horizontal Red Border Line */}
        <div className="w-16 h-px bg-[#D1F04F] ml-3"></div>
      </div>

      <div className="flex justify-end items-center gap-1.5 w-full">
        <MdKeyboardDoubleArrowLeft
          size={26}
          className="shrink-0 text-primary"
        />

        {/* 2. Weather Text */}
        <span className="text-[13px] font-bold uppercase leading-none shrink-0">
          SCORE
        </span>

        {/* 3. Horizontal Red Border Line */}
        <div className="w-16 h-px bg-[#D1F04F] ml-3"></div>
      </div>
    </div>
  );
};

export default WeatherWidget;
