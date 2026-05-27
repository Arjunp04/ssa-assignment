import Image from "next/image";
import React from "react";
import p1 from "../../assets/images/p1.jpg";
import p2 from "../../assets/images/p2.jpg";
import p3 from "../../assets/images/p3.jpg";

const MeetProfessionals = () => {
  const professionals = [
    {
      id: 1,
      image: p1,
      name: "Craig Tiley",
      role: "CEO Tennis Australia &\nAustralian Open",
      alt: "Craig Tiley - CEO Tennis Australia",
    },
    {
      id: 2,
      image: p2,
      name: "Stephen Farrow",
      role: "Director - Tournament, Players &\n International Relations",
      alt: "Stephen Farrow - Director",
    },
    {
      id: 3,
      image: p3,
      name: "Cameron Pearson",
      role: "Head of Major Events - Tennis Australia",
      alt: "Cameron Pearson - Head of Major Events",
    },
  ];

  return (
    <section className="relative w-full bg-white py-12 md:py-20">
      <div className="relative z-20 px-6 md:px-12 lg:px-32 text-black mx-auto">
        
        {/* Title Area */}
        <div className="flex gap-1 items-start">
          <p className="font-bold text-2xl xs:text-3xl sm:text-4xl text-black leading-none">
            Meet our professionals
          </p>
          <span className="size-2 bg-primary rounded-full shrink-0 mt-1"></span>
        </div>

        {/* Subtitle and Action Button Layout Row */}
        <div className="flex flex-col xs-max:flex-row justify-between items-start sm:items-center gap-4 mt-4 sm:mt-5 mb-8 md:mb-12">
          <p className="font-light text-sm sm:text-base leading-6 text-black max-w-xl">
            Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.
          </p>
          <button className="border border-primary rounded-4xl text-xs sm:text-[13px] px-4 py-1.5 sm:px-6 sm:py-2 cursor-pointer transition-all duration-300 ease-in-out bg-primary text-white hover:bg-transparent hover:text-primary text-nowrap">
            View All
          </button>
        </div>

        {/* 2. Responsive Grid Layout */}
        <div className="grid grid-cols-1 xs-max:grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
          {professionals.map((prof) => (
            <div key={prof.id} className="flex flex-col group">
              
              {/* Image Frame Container */}
            
              <div className="relative h-60 lg:h-84 w-full overflow-hidden rounded-lg mb-4">
                <Image
                  src={prof.image}
                  alt={prof.alt}
                  fill
                  className="object-cover group-hover:scale-103 transition-transform duration-300 ease-in-out"
                />
              </div>

              {/* Profile Text Metadata Box */}
              <div className="flex flex-col gap-1">
                <h4 className="font-medium text-xl text-black">
                  {prof.name}
                </h4>
                <p className="font-light italic text-sm  leading-snug text-black whitespace-pre-line">
                  {prof.role}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MeetProfessionals;
