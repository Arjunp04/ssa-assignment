import Image from 'next/image';
import React from 'react';
import { IoGolfOutline } from "react-icons/io5";
import golfcourse from "../../assets/images/golfcourse.jpg";

const ConnectivityLaunch = () => {
  // Centralized data storage array for easy maintenance
  const connectivityData = [
    { name: "Hunter Valley Golf And Country Club", distance: "220m" },
    { name: "Rydges Resort Hunter Valley", distance: "550m" },
    { name: "Cressnock Airport", distance: "1.7km" },
    { name: "Cressnock CBD", distance: "7km" },
    { name: "Nulkaba Public School", distance: "4.8km" },
    { name: "Cressnock Hospital", distance: "7.3km" },
    { name: "Mcdonalds, KFC, Oporto", distance: "7km" },
  ];

  return (
    <section className="relative w-full overflow-hidden">
      {/* 50/50 Screen-Half Container Grid */}
      <div className="grid grid-cols-2 w-full">
        <div className="relative flex flex-col justify-center bg-[linear-gradient(148.19deg,#003A5D_3.49%,#99B81B_113.07%)] px-20 text-white py-10 drop-shadow-lg">
          
          <span className="text-2xl uppercase font-light leading-none">
            Launching
          </span>

          {/* Brand Title */}
          <h2 className="text-[40px] font-bold leading-tight mt-6">
            Signature Slam Academy <br/> Hunter Valley
          </h2>

          <h3 className="text-2xl font-medium mt-6">
            SSA Connectivity
          </h3>

          {/* looping map distances */}
          <ul className="flex flex-col gap-5 w-full mt-6">
            {connectivityData.map((item, index) => (
              <li key={index} className="flex items-center justify-between w-full group text-base">
                
                {/* Location Name Info Box with Icon */}
                <div className="flex items-center gap-3 shrink-0">
                  <IoGolfOutline className="text-white text-base group-hover:text-accent transition-colors shrink-0" />
                  <span className="font-semibold tracking-wide group-hover:text-accent">
                    {item.name}
                  </span>
                </div>

                {/* Flexible CSS Dotted Connector Line */}
                <div className="mx-4 grow border-b border-dashed border-white h-1" />

                {/* Distance Token Box */}
                <div className="shrink-0 text-right font-regular text-white">
                  {item.distance}
                </div>

              </li>
            ))}
          </ul>

        </div>

        {/* ========================================================================= */}
        {/* RIGHT PANEL: Fixed Resolution Imagery Showcase Layout                    */}
        {/* ========================================================================= */}
        <div className="relative w-full h-full">
          <Image 
            src={golfcourse} 
            alt="Signature Slam Academy Hunter Valley aerial golf course view" 
            fill 
            priority
            className="object-cover"
          />

          {/* Image Slider/Paging Indicators Overlay (Matching lower-right white dots) */}
          <div className="absolute bottom-6 right-12 flex gap-2 z-10 pointer-events-none">
            <span className="size-2 bg-white rounded-full opacity-100" />
            <span className="size-2 bg-white/40 rounded-full" />
            <span className="size-2 bg-white/40 rounded-full" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default ConnectivityLaunch;
