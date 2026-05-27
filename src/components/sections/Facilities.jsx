import Image from "next/image";
import React from "react";
import { FaPlay } from "react-icons/fa6";
import facility1 from "../../assets/images/facility1.jpg";
import facility2 from "../../assets/images/facility2.jpg";
import facility3 from "../../assets/images/facility3.jpg";
import facility4 from "../../assets/images/facility4.jpg";
import trophy from "../../assets/images/trophy.svg";

const Facilities = () => {
  return (
    <section className="w-full bg-white text-black py-10 px-32 relative">
      <div className="mx-auto mb-12">
        <div className="flex gap-1 items-start">
          <h2 className="font-bold text-4xl text-black leading-none">
            Facilities
          </h2>
          <span className="size-2 bg-primary rounded-full shrink-0 mt-1"></span>
        </div>
        <p className="font-light text-base text-[#555555] mt-4 max-w-xl">
          Lorem Ipsum has been the industry&apos;s standard dummy text ever
          since the 1500s.
        </p>
      </div>

      <div className="absolute left-0 top-[350px] w-full h-[600px] z-0 bg-[linear-gradient(103.14deg,#002F50_11.16%,#99B81B_111.06%)] opacity-100">
        <div className="absolute right-12 top-1/2 -translate-y-1/2 text-white/5 font-black text-[280px] pointer-events-none select-none">
          🏆
        </div>
      </div>

      <div className="relative z-10 mx-auto flex flex-col gap-8">
        {/* ROW 1: TENNIS & ACCOMMODATION */}
        <div className="flex justify-start gap-10">
          {/* Box 1: Tennis Layout Section */}
          <div className="flex flex-col group cursor-pointer">
            <div className="relative h-96 w-96 overflow-hidden rounded-xl shadow-xl mb-6">
              <Image
                src={facility1}
                alt="60 Court multi-surface tennis facility stadium wireframe"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              {/* Centered Video Action Play Overlay Trigger Anchor */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
                <button className="size-12 rounded-full bg-white text-black flex items-center justify-center pl-1 shadow-lg hover:scale-110 transition-transform">
                  <FaPlay className="text-lg text-gray-800" />
                </button>
              </div>
            </div>
            <h3 className="text-[28px] font-medium text-white mb-3">Tennis</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-white text-black text-[13px] font-light px-3 py-1 rounded-full">
                9 Clay Courts
              </span>
              <span className="bg-white text-black text-[13px] font-light px-3 py-1 rounded-full">
                4 Hard Courts
              </span>
            </div>
            <p className="font-light text-[14px] leading-relaxed text-white max-w-sm">
              Lorem Ipsum has been the industry&apos;s standard dummy text ever
              since the 1500s.
            </p>
          </div>

          {/* Box 2: Accommodation Layout Section */}
          <div className="flex flex-col group cursor-pointer">
            <div className="relative h-96 w-96 overflow-hidden rounded-xl shadow-xl mb-6">
              <Image
                src={facility2}
                alt="5 Star Luxury Hunter Valley resort bedroom suites"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
                <button className="size-12 rounded-full bg-white text-black flex items-center justify-center pl-1 shadow-lg hover:scale-110 transition-transform">
                  <FaPlay className="text-lg text-gray-800" />
                </button>
              </div>
            </div>
            <h3 className="text-[28px] font-medium text-white mb-3">
              Accommodation
            </h3>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-white text-black text-[13px] font-light px-3 py-1 rounded-full">
                5 Star Hotel
              </span>
            </div>
            <p className="font-light text-[14px] leading-relaxed text-white max-w-sm">
              Lorem Ipsum has been the industry&apos;s standard dummy text ever
              since the 1500s.
            </p>
          </div>
        </div>

        {/* ROW 2: FITNESS & RECOVERY (Staggered to descend below the gradient sheet fold) */}
        <div className="flex justify-end gap-10 mt-6">
          {/* Box 3: Fitness Layout Section */}
          <div className="flex flex-col group cursor-pointer">
            <div className="relative h-96 w-96 overflow-hidden rounded-xl shadow-xl mb-6">
              <Image
                src={facility3}
                alt="Professional athletic performance gym center machinery training deck"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
                <button className="size-12 rounded-full bg-white text-black flex items-center justify-center pl-1 shadow-lg hover:scale-110 transition-transform">
                  <FaPlay className="text-lg text-gray-800" />
                </button>
              </div>
            </div>
            <h3 className="text-[28px] font-medium text-black mb-3">Fitness</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-primary text-white text-[13px] font-light px-3 py-1 rounded-full">
                Gym
              </span>
              <span className="bg-primary text-white text-[13px] font-light px-3 py-1 rounded-full">
                Outdoor Layout
              </span>
            </div>
            <p className="font-light text-[14px] leading-relaxed text-black max-w-sm">
              Lorem Ipsum has been the industry&apos;s standard dummy text ever
              since the 1500s.
            </p>
          </div>

          {/* Box 4: Recovery Layout Section */}
          <div className="flex flex-col group cursor-pointer">
            <div className="relative h-96 w-96 overflow-hidden rounded-xl shadow-xl mb-6">
              <Image
                src={facility4}
                alt="Hydrotherapy pool recovery spa deck resort station"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
                <button className="size-12 rounded-full bg-white text-black flex items-center justify-center pl-1 shadow-lg hover:scale-110 transition-transform">
                  <FaPlay className="text-sm text-gray-800" />
                </button>
              </div>
            </div>
            <h3 className="text-[28px] font-medium text-black mb-3">
              Recovery
            </h3>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-white text-black text-[13px] font-light px-3 py-1 rounded-full">
                Spa
              </span>
              <span className="bg-white text-black text-[13px] font-light px-3 py-1 rounded-full">
                Pool
              </span>
              <span className="bg-white text-black text-[13px] font-light px-3 py-1 rounded-full">
                Massage
              </span>
            </div>
            <p className="font-light text-[14px] leading-relaxed text-black max-w-sm">
              Lorem Ipsum has been the industry&apos;s standard dummy text ever
              since the 1500s.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
