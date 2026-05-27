import Image from "next/image";
import React from "react";
import { IoGolfOutline } from "react-icons/io5";
import golfcourse from "../../assets/images/golfcourse.jpg";

const ConnectivityLaunch = () => {
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
      <div className="grid grid-cols-1 sm:grid-cols-2 w-full">
        
        {/* LEFT PANEL: CONTENT & CONNECTIVITY LIST */}
        <div className="relative flex flex-col justify-center bg-[linear-gradient(148.19deg,#003A5D_3.49%,#99B81B_113.07%)] px-6 xs-max:px-10 md:px-16 lg:px-20 text-white py-10 drop-shadow-lg order-last sm:order-first">
          <span className="text-xl xs:text-2xl uppercase font-light leading-none"> 
            Launching 
          </span>
          
          {/* Fluid Typography for Headers */}
          <h2 className="text-2xl xs:text-3xl   lg:text-[36px] font-bold leading-tight mt-4 xs-max:mt-6"> 
            Signature Slam Academy <br className="hidden sm:block"/> Hunter Valley 
          </h2>
          
          <h3 className="text-lg xs:text-xl xs-max:text-2xl font-medium mt-4 xs-max:mt-6">
            SSA Connectivity
          </h3>

          {/* Dotted Connections List */}
          <ul className="flex flex-col gap-4 xs:gap-5 w-full mt-6">
            {connectivityData.map((item, index) => (
              <li 
                key={index} 
                className="flex items-center justify-between w-full group text-xs xs:text-sm md:text-base"
              >
                {/* Location Item Name Wrapper */}
                {/* Added 'min-w-0' to parent and 'truncate' to handle long names gracefully */}
                <div className="flex items-center gap-2 xs:gap-3 min-w-0 pr-2">
                  <IoGolfOutline className="text-white text-sm xs:text-base group-hover:text-accent transition-colors shrink-0" />
                  <span className="font-semibold tracking-wide group-hover:text-accent truncate"> 
                    {item.name} 
                  </span>
                </div>

                {/* Flexible CSS Dotted Connector Line */}
                <div className="grow border-b border-dashed border-white/40 h-1 min-w-[15px]" />

                {/* Distance Token Box */}
                <div className="shrink-0 text-right font-regular text-white pl-2"> 
                  {item.distance} 
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT PANEL: IMAGERY SHOWCASE LAYOUT */}   
        <div className="relative w-full h-80 xs-max:h-full min-h-80 order-first sm:order-last">
          <Image 
            src={golfcourse} 
            alt="Signature Slam Academy Hunter Valley aerial golf course view" 
            fill 
            priority 
            className="object-cover" 
          />
        </div>

      </div>
    </section>
  );
};

export default ConnectivityLaunch;
