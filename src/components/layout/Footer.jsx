import React from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiPhone, FiMail } from "react-icons/fi";
import Image from "next/image";
import logo from "../../assets/images/logo.svg";

const Footer = () => {
  const footerLinks = [
    { name: "About Us", href: "#" },
    { name: "Coaches", href: "#" },
    { name: "News", href: "#" },
    { name: "Matches", href: "#" },
    { name: "Events", href: "#" },
    { name: "FAQs", href: "#" },
    { name: "Programs", href: "#" },
    { name: "Amenities", href: "#" },
    { name: "Blogs", href: "#" },
  ];

  return (
    <footer className="w-full bg-white pt-10 md:pt-16 text-black border-t border-gray-100">
      <div className="mx-auto px-4 xs:px-6 md:px-16 lg:px-32 flex flex-col">
        {/*NAVIGATION LINKS */}

        <div className="md:pl-[30%] w-full flex flex-col">
          {/* Link Grid Content Section */}

          <div className="grid grid-cols-2 phone:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-x-6 sm:gap-x-16 gap-y-4 pb-8 md:pb-12 w-full">
            {footerLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-sm md:text-base font-regular text-black hover:text-primary transition-colors w-fit whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="w-full border-t border-black/20 hidden md:block" />
        </div>

        {/* LOWER SECTION: METADATA & BRAND IDENTITIES */}

        <div className="flex flex-col md:grid md:grid-cols-[30%_40%_30%] py-8 md:py-12 items-start gap-8 md:gap-0 border-t border-black/20 md:border-none">
          {/* Column 1: Core Brand Identity Block */}

          <div className="flex justify-start w-full md:w-auto md:-mt-16">
            <Image
              src={logo}
              alt="SSA Brand Logo"
              width={140}
              height={65}
              priority
              className="object-contain"
            />
          </div>

          {/* Column 2: Detailed Contact Matrix Layout */}
          <div className="flex flex-col gap-3 md:gap-4 text-sm text-[#444444] w-full">
            <h4 className="font-medium text-lg md:text-xl text-primary tracking-wide mb-1">
              Signature Slam Academy
            </h4>
            <div className="flex items-center text-black leading-relaxed">
              30 Wills Hill Road, Lovedale, NSW
            </div>
            <div className="flex items-center gap-2 tracking-wide text-black">
              <FiPhone className="text-base text-primary shrink-0" />
              <a href="tel:#" className="hover:underline">
                +91 5642589752
              </a>
            </div>
            <div className="flex items-center gap-2 text-black">
              <FiMail className="text-base text-primary shrink-0" />
              <a href="mailto:#" className="hover:underline break-all">
                info@ssagroup.com
              </a>
            </div>
          </div>

          {/* Column 3: Social Media Channels Wrapper Box */}
          <div className="flex flex-col gap-3 md:gap-4 md:pl-8 w-full">
            <h4 className="font-medium text-lg md:text-xl text-primary tracking-wide">
              Connect with us
            </h4>
            <div className="flex items-center gap-5 text-xl md:text-2xl text-[#111111]">
              <a
                href="#"
                aria-label="Facebook Profile"
                className="hover:text-primary transition-colors"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                aria-label="X Twitter Profile"
                className="hover:text-primary transition-colors"
              >
                <FaXTwitter />
              </a>
              <a
                href="#"
                aria-label="Instagram Profile"
                className="hover:text-primary transition-colors"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                aria-label="Youtube Channel"
                className="hover:text-primary transition-colors"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* UNDER-FOOTER LEGAL RIBBON */}

      <div className="w-full bg-[linear-gradient(148.19deg,#003A5D_3.49%,#99B81B_113.07%)] py-6 md:py-4 text-white text-[11px] md:text-[12px]">
        <div className="mx-auto px-4 xs:px-6 md:px-16 lg:px-32 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0 opacity-90 font-light tracking-wide text-center">
          <div className="flex gap-4 items-center order-2 sm:order-1">
            <Link href="#" className="hover:underline">
              Terms And Conditions
            </Link>
            <span className="hidden sm:inline opacity-4xl">•</span>
            <Link href="#" className="hover:underline sm:hidden block mt-1">
              Privacy Policy
            </Link>
          </div>

          <p className="font-normal text-white/90 order-1 sm:order-2">
            © 2023 All Rights Reserved : signatureslamacademy.com
          </p>

          <Link href="#" className="hover:underline hidden sm:block order-3">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
