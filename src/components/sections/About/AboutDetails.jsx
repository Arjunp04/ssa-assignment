import React from "react";
import Image from "next/image";
import tennis from "../../../assets/images/tennis.jpg";

export default function AboutDetails() {
  const statsData = [
    { number: "20", label: "courts" },
    { number: "12", label: "coaches" },
    { number: "17", label: "years" },
    { number: "10", label: "clubs" },
  ];

  return (
   
    <div className="flex flex-col sm:flex-row px-6 md:px-12 lg:px-32 relative -translate-y-60 xs-max:-translate-y-40 md:-translate-y-36 w-full gap-10">
      
      {/* Left Content Side Block*/}
      <div className="w-full sm:w-3/5 text-center sm:text-start flex flex-col items-center sm:items-start">
        <div className="flex gap-1 items-start max-sm:justify-center">
          <p className="font-bold text-4xl text-black leading-none">About Us</p>
          <span className="size-2 bg-primary rounded-full shrink-0"></span>
        </div>
        <p className="font-light text-base leading-6 text-black mt-5 max-w-xl">
          To be the first venue in the world to have 60 multi surface courts at{" "}
          one location and establish first one stop tennis academy in the Asia{" "}
          Pacific producing grand slam champions.
        </p>

        {/* Horizontal Statistics Row Loop Layout */}
        <div className="grid grid-cols-2 sm:flex justify-start gap-8 sm:gap-10 items-center w-full mt-6">
          {statsData.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-2 text-center">
              <h2 className="text-4xl font-semibold text-primary leading-none">
                {item.number}
              </h2>
              <p className="text-black text-xl font-light leading-6">
                {item.label}
              </p>
            </div>
          ))}
        </div>
        
        <button className="border border-primary rounded-4xl text-[13px] px-4 py-1.5 cursor-pointer transition-all duration-300 ease-in-out bg-primary text-white mt-8 hover:bg-transparent hover:text-primary">
          Read More
        </button>
      </div>

      {/* Right Media Image Block */}
      <div className="w-full sm:w-2/5  md:-mt-10 h-60 xs:h-80 sm:h-64 lg:h-84 hidden sm:block relative">
        <Image 
          src={tennis} 
          fill 
          alt="tennis players" 
          className="object-cover rounded-sm" 
        />
      </div>

    </div>
  );
}
