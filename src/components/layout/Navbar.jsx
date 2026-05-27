"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../assets/images/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

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

  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="flex justify-between items-center h-14 px-4 lg:px-10 bg-white ">
      <Image
        src={logo}
        width={80}
        height={80}
        alt="Logo"
        priority
        className="object-contain"
      />

      {/* ---------- desktop view ------------ */}
      <div className="hidden lg:flex items-center gap-7 text-sm text-black font-normal">
        {navLinks.map((navItem) => (
          <p
            key={navItem}
            className="cursor-pointer transition-colors duration-300 ease-in-out hover:text-primary whitespace-nowrap"
          >
            {navItem}
          </p>
        ))}
      </div>

      <button className="hidden lg:block border border-primary rounded-4xl text-[13px] px-4 py-1.5 cursor-pointer transition-all duration-300 ease-in-out bg-primary text-white hover:bg-transparent hover:text-primary">
        Contact Us
      </button>

      {/* ------------- mobile view ------------- */}
      {/* hamburger menu icon */}
      <button
        onClick={() => setShowSidebar(true)}
        className="lg:hidden cursor-pointer p-1"
      >
        <GiHamburgerMenu size={24} />
      </button>

      {/* sidebar wrapper */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${
          showSidebar ? "visible" : "invisible"
        }`}
      >
        {/* Dark Background Overlay (Animated Separately for Performance) */}
        <div
          onClick={() => setShowSidebar(false)}
          className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ease-in-out will-change-opacity ${
            showSidebar ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Sidebar Panel (Slide Animation) */}
        <div
          className={`absolute top-0 right-0 h-full w-64 bg-white shadow-2xl p-6 flex flex-col transform transition-transform duration-300 ease-out will-change-transform ${
            showSidebar ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Header Row: Logo & Close Button */}
          <div className="flex justify-between items-center mb-8 w-full">
            <Image
              src={logo}
              width={70}
              height={70}
              alt="Logo"
              className="object-contain"
            />
            <button
              onClick={() => setShowSidebar(false)}
              className="p-1 cursor-pointer text-black hover:text-red-500 transition-colors duration-200"
            >
              <IoMdClose size={26} />
            </button>
          </div>

          {/* Sidebar Navigation Links */}
          <div className="flex flex-col gap-5 text-base text-black font-medium mb-8">
            {navLinks.map((navItem) => (
              <p
                key={navItem}
                onClick={() => setShowSidebar(false)}
                className="cursor-pointer transition-colors duration-200 hover:text-primary border-b border-gray-200 pb-2 lg:border-none"
              >
                {navItem}
              </p>
            ))}
          </div>

          {/* Sidebar Contact Button */}
          <button className="w-full mt-auto border border-primary rounded-4xl text-[13px] py-2.5 cursor-pointer transition-all duration-300 ease-in-out bg-primary text-white hover:bg-transparent hover:text-primary">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
