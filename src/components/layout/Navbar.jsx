import Image from "next/image";
import React from "react";

const Navbar = () => {
  const navLinks = [
    "About Us",
    "Matches",
    "Programs",
    "Coaches",
    "Amenities",
    "Events",
    "News",
    "Blogs",
  ];

  return (
    <div className=" flex justify-between items-center h-14 px-10">
      <Image
        src="/icon.svg"
        width={50}
        height={40}
        alt="Logo"
        priority
        className="w-auto h-auto" // Tells CSS to preserve the SVG aspect ratio
      />

      <div className="flex items-center gap-7 text-sm text-primary font-normal">
        {navLinks.map((navItem) => (
          <p
            key={navItem}
            className="cursor-pointer transition-colors duration-300 ease-in-out hover:text-black"
          >
            {navItem}
          </p>
        ))}
      </div>
      <button className="border border-accent rounded-4xl text-xs font-medium px-4 py-1.5 cursor-pointer transition-all duration-300 ease-in-out bg-accent text-black">
        Contact Us
      </button>
    </div>
  );
};

export default Navbar;
