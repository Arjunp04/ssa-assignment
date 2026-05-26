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
    <div className="flex px-32 relative -translate-y-16 md:-translate-y-36 w-full">
      {/* Left Content Side Block (60% Width) */}
      <div className="w-3/5">
        <div className="flex gap-1 items-start">
          <p className="font-bold text-4xl text-black leading-none">About Us</p>
          <span className="size-2 bg-primary rounded-full shrink-0"></span>
        </div>

        <p className="font-light text-base leading-6 text-black mt-5">
          To be the first venue in the world to have 60 multi surface courts at{" "}
          <br />
          one location and establish first one stop tennis academy in the Asia{" "}
          <br />
          Pacific producing grand slam champions.
        </p>

        {/* Horizontal Statistics Row Loop Layout */}
        <div className="flex justify-start gap-22 items-center w-full mt-6">
          {statsData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 text-center"
            >
              <h2 className="text-4xl font-semibold text-primary leading-none">
                {item.number}
              </h2>
              <p className="text-black text-xl font-light leading-6">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        <button className="border border-primary rounded-4xl text-[13px] px-4 py-1.5 cursor-pointer transition-all duration-300 ease-in-out bg-primary text-white mt-6 hover:bg-transparent hover:text-primary">
          Read More
        </button>
      </div>

      {/* Right Media Image Block (40% Width) */}
      <div className="w-2/5 -mt-16">
        <Image
          src={tennis}
          width={900}
          height={700}
          alt="tennis players"
          className="w-full h-auto object-cover rounded-sm"
        />
      </div>
    </div>
  );
}
