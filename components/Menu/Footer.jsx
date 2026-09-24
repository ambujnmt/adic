import React from 'react'

import { FiChevronRight, FiPhone, FiMail, FiGlobe, FiMapPin } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { Link, LinkIcon } from '@heroui/react';
import { FaXTwitter } from "react-icons/fa6"; 
import { FaCheck } from "react-icons/fa";
import { FaPhoneAlt, FaRegClock, FaMapMarkerAlt } from "react-icons/fa";

 

const OurServicesLinks = [
  {
    title: "About ADIC",
    href: "#",
  },
  {
    title: "Dental Implants",
    href: "#",
  },
  {
    title: "Cosmetic Dentistry",
    href: "#",
  },
  {
    title: "General Dentistry",
    href: "#",
  },
  {
    title: "Contact",
    href: "#",
  },
  {
    title: "Smile Gallery",
    href: "#",
  }
];

const LoansFinanceLinks = [
  {
    title: "Dental Implants",
    href: "#",
  },
  {
    title: "Full-Arch / All-on-X",
    href: "#",
  },
  {
    title: "Cosmetic Veneers",
    href: "#",
  },
  {
    title: "Smile Makeovers",
    href: "#",
  },
  {
    title: "Crowns & Bridges",
    href: "#",
  },
  {
    title: "Preventive Care",
    href: "#",
  }
]; 

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-[#0B1F3A] to-[#0C131D] text-gray-200">
      <div className="container py-12">
        <div className="grid grid-cols-12 xl:gap-10 lg:gap-10 gap-4">
          {/* About Us */}
          <div className="xl:col-span-3 lg:col-span-3 md:col-span-6 col-span-12">
            <img 
              src="/assets/image/logo.png"
              alt="image"
              className="w-[80%] h-auto mb-4"
            />
            <p className="text-[#fff]/80 xl:text-[16px] lg:text-[16px] text-[16px] font-normal xl:leading-[26px] lg:leading-[26px] leading-[22px] mb-2">
              Aesthetic Dentistry & Implant Center Serving Corinth, Denton, Lantana, and surrounding DFW communities.
            </p>

            {/* Logo + Stay Connected */}
            <div className="mt-8">
              <div className="flex items-center gap-3">
                <Link
                  href="#"
                  target="_blank"
                  className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-[#fff] hover:bg-[var(--primary-color)] hover:text-white transition-colors"
                >
                  <FaFacebookF className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="#"
                  target="_blank"
                  className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-[#fff] hover:bg-[var(--primary-color)] hover:text-white transition-colors"
                >
                  <FaInstagram className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="#"
                  target="_blank"
                  className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-[#fff] hover:bg-[var(--primary-color)] hover:text-white transition-colors"
                >
                  <FaLinkedinIn className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="#"
                  target="_blank"
                  className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-[#fff] hover:bg-[var(--primary-color)] hover:text-white transition-colors"
                >
                  <FaXTwitter className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
 
          {/* Navigation */}
          <div className="xl:col-span-3 lg:col-span-3 md:col-span-6 col-span-12">
            <h5 className="text-[var(--secondary-color)] font-bold text-[20px] mb-4 uppercase">
              Navigation
            </h5>
            <ul className="space-y-2">
              {OurServicesLinks.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    className="flex text-[#fff]/80 hover:text-[var(--secondary-color)] pb-1 xl:text-[16px] lg:text-[16px] text-[16px] font-normal xl:leading-[26px] lg:leading-[26px] leading-[22px]"
                  > 
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments */}
          <div className="xl:col-span-3 lg:col-span-3 md:col-span-6 col-span-12">
            <h5 className="text-[var(--secondary-color)] font-bold text-[20px] mb-4 uppercase">
              Treatments
            </h5>
            <ul className="space-y-2">
              {LoansFinanceLinks.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    className="flex text-[#fff]/80 hover:text-[var(--secondary-color)] pb-1 xl:text-[16px] lg:text-[16px] text-[16px] font-normal xl:leading-[26px] lg:leading-[26px] leading-[22px]"
                  > 
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="xl:col-span-3 lg:col-span-3 md:col-span-6 col-span-12">
            <h5 className="text-[var(--secondary-color)] font-bold text-[20px] mb-4 uppercase">
                Contact
            </h5>
            <ul className="space-y-4">
                {/* Hours */}
                <li className="flex items-start gap-2.5 text-sm text-gray-200">
                    <Link
                        href="javascript:void(0);"
                        className="text-[#fff]/80 hover:text-[var(--secondary-color)] pb-1 xl:text-[16px] lg:text-[16px] text-[16px] font-normal xl:leading-[26px] lg:leading-[26px] leading-[22px] flex items-start gap-2.5"
                    >
                        <FaRegClock size={16} className="text-[#c9a25f] flex-shrink-0 mt-[5px]" />
                        <span>Mon–Thu 9:00am to 5:00pm ( Fri 9:00am to 1:00pm)</span>
                    </Link>
                </li>

                {/* Address */}
                <li className="flex items-start gap-2.5 text-sm text-gray-200">
                    <Link
                        href="javascript:void(0);"
                        className="text-[#fff]/80 hover:text-[var(--secondary-color)] pb-1 xl:text-[16px] lg:text-[16px] text-[16px] font-normal xl:leading-[26px] lg:leading-[26px] leading-[22px] flex items-start gap-2.5"
                    >
                        <FaMapMarkerAlt size={16} className="text-[#c9a25f] flex-shrink-0 mt-[5px]" />
                        <span>3500 Corinth Parkway, Suite #200 Corinth, TX 76208</span>
                    </Link>
                </li>

                {/* Phone */}
                <li className="flex items-start gap-2.5 text-sm text-gray-200">
                    <Link
                        href="javascript:void(0);"
                        className="text-[#fff]/80 hover:text-[var(--secondary-color)] pb-1 xl:text-[16px] lg:text-[16px] text-[16px] font-normal xl:leading-[26px] lg:leading-[26px] leading-[22px] flex items-center gap-2.5"
                    >
                        <FaPhoneAlt size={16} className="text-[#c9a25f] flex-shrink-0" />
                        <span>(940) 489-8181</span>
                    </Link>
                </li>
            </ul>
        </div>
        </div>
      </div>

      

      <div className="container">
        <div className="lg:py-4 xl:pb-[20px] pb-[10px] pt-[10px] border-t border-white/20 xl:mt-[40px] mt-[0px] xl:flex items-center justify-between text-center">
          <p className="text-[#fff]/80 text-[13px]">© 2026 Aesthetic Dentistry & Implant Center. All rights reserved.</p>
          <div className="">
            <Link
              href="#"
              className="text-[#fff]/80 text-[13px] font-normal hover:text-[var(--primary-color)] transition-colors mr-5">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}