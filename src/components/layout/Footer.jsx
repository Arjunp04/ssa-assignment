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
    <footer className="w-full bg-white pt-16 text-black">
      <div className="mx-auto px-32 flex flex-col">
        <div className="pl-[30%] w-full flex flex-col">
          {/* Link Grid Content Section */}
          <div className="grid grid-cols-6 gap-x-16 gap-y-6 pb-12 w-full">
            {footerLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-base font-regular text-black hover:text-primary transition-colors w-fit"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="w-full border-t border-black" />
        </div>

        {/* Lower Metadata Content Row */}
        <div className="grid grid-cols-[30%_40%_30%] py-12 items-start">
          {/* Column 1: Core Brand Identity Block */}
          <div className="flex justify-start -mt-16">
          <Image 
              src={logo} 
              alt="SSA Brand Logo" 
              width={150} 
              height={70} 
              priority     
              className="object-contain" 
            />
          </div>

          {/* Column 2: Detailed Contact Matrix Layout */}
          <div className="flex flex-col gap-4 text-sm text-[#444444]">
            <h4 className="font-medium text-xl text-primary tracking-wide mb-1">
              Signature Slam Academy
            </h4>
            <div className="flex items-center text-black">
              30 Wills Hill Road, Lovedale, NSW
            </div>
            <div className="flex items-center gap-2 tracking-wide">
              <FiPhone className="text-base text-primary shrink-0" />
              <a href="#" className="hover:underline">
                +91 5642589752
              </a>
            </div>
            <div className="flex items-center gap-2">
              <FiMail className="text-base text-primary shrink-0" />
              <a href="#" className="hover:underline">
                info@ssagroup.com
              </a>
            </div>
          </div>

          {/* Column 3: Social Media Channels Wrapper Box */}
          <div className="flex flex-col gap-4 pl-8">
            <h4 className="font-medium text-xl text-primary tracking-wide">
              Connect with us
            </h4>
            {/* Inline Icon Rows matching layout dimensions */}
            <div className="flex items-center gap-5 text-2xl text-[#111111]">
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

      {/* Under-Footer Legal Ribbon */}
      <div className="w-full bg-[linear-gradient(148.19deg,#003A5D_3.49%,#99B81B_113.07%)] py-4 text-white text-[12px]">
        <div className="mx-auto px-32 flex justify-between items-center opacity-90 font-light tracking-wide">
          <Link href="#" className="hover:underline">
            Terms And Condition
          </Link>
          <p className="font-normal text-white/90">
            © 2023 All Rights Reserved ://signatureslamacademy.com
          </p>
          <Link href="#" className="hover:underline">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
