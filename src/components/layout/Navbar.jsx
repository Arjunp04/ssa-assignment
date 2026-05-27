import Image from "next/image";
import React from "react";
import logo from "../../assets/images/logo.svg";

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
        src={logo}
        width={80}
        height={80}
        alt="Logo"
        priority
        className="object-contain" // Tells CSS to preserve the SVG aspect ratio
      />

      <div className="flex items-center gap-7 text-sm text-black font-normal">
        {navLinks.map((navItem) => (
          <p
            key={navItem}
            className="cursor-pointer transition-colors duration-300 ease-in-out hover:text-primary"
          >
            {navItem}
          </p>
        ))}
      </div>
      <button className="border border-primary rounded-4xl text-[13px] px-4 py-1.5 cursor-pointer transition-all duration-300 ease-in-out bg-primary text-white hover:bg-transparent hover:text-primary">
            Contact Us
          </button>
    </div>
  );
};

export default Navbar;
