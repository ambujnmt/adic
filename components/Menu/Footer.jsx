import React from 'react'

import { FiChevronRight, FiPhone, FiMail, FiGlobe, FiMapPin } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { Link, LinkIcon } from '@heroui/react';
import { FaXTwitter } from "react-icons/fa6"; 
import { FaCheck } from "react-icons/fa";



const QuickLinks = [
  {
    title: "About Us",
    href: "#",
  },
  {
    title: "Contact Us",
    href: "#",
  },
  {
    title: "Careers",
    href: "#",
  },
  {
    title: "Blog & Articles ",
    href: "#",
  }
];

const OurServicesLinks = [
  {
    title: "Buy Properties",
    href: "#",
  },
  {
    title: "Rent Properties",
    href: "#",
  },
  {
    title: "Commercial Spaces",
    href: "#",
  },
  {
    title: "Land & Plots",
    href: "#",
  },
  {
    title: "Builder Directory",
    href: "#",
  },
  {
    title: "Post Property Free",
    href: "#",
  }
];

const LoansFinanceLinks = [
  {
    title: "Home Loans",
    href: "#",
  },
  {
    title: "Gold Loans",
    href: "#",
  },
  {
    title: "Property Valuation",
    href: "#",
  },
  {
    title: "Legal Verification",
    href: "#",
  },
  {
    title: "Escrow Services",
    href: "#",
  },
  {
    title: "Trusted Partners",
    href: "#",
  }
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#1A2340] text-gray-200">
      <div className="container py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10">
          {/* About Us */}
          <div className="col-span-2 sm:col-span-1">
            <img 
              src="/assets/img/footer-logo.png"
              alt="image"
              className="w-[80%] h-auto mb-4"
            />
            <p className="text-[#fff]/80 text-[13px]">
              bhumimanthan.com is India's leading unified real estate platform designed to make finding, buying, renting and growing assets streamlined and trustworthy.
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

          {/* About CDOE */}
          <div>
            <h6 className="text-[#fff] font-bold text-[15px] mb-4 uppercase">
              Quick Links
            </h6>
            <ul className="space-y-2">
              {QuickLinks.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    className="flex items-start gap-1.5 text-[#fff]/80 text-[13px] font-normal hover:text-[var(--primary-color)] transition-colors pb-1"
                  >
                    <FiChevronRight className="mt-1 shrink-0 w-3.5 h-3.5 text-[var(--primary-color)]" />
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h6 className="text-[#fff] font-bold text-[15px] mb-4 uppercase">
              Our Services
            </h6>
            <ul className="space-y-2">
              {OurServicesLinks.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    className="flex items-start gap-1.5 text-[#fff]/80 text-[13px] font-normal hover:text-[var(--primary-color)] transition-colors pb-1"
                  >
                    <FiChevronRight className="mt-1 shrink-0 w-3.5 h-3.5 text-[var(--primary-color)]" />
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Student Resources */}
          <div>
            <h6 className="text-[#fff] font-bold text-[15px] mb-4 uppercase">
              Loans & Finance
            </h6>
            <ul className="space-y-2">
              {LoansFinanceLinks.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    className="flex items-start gap-1.5 text-[#fff]/80 text-[13px] font-normal hover:text-[var(--primary-color)] transition-colors pb-1"
                  >
                    <FiChevronRight className="mt-1 shrink-0 w-3.5 h-3.5 text-[var(--primary-color)]" />
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <h6 className="text-[#fff] font-bold text-[15px] mb-4 uppercase">
              Contact Us
            </h6>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-gray-200"> 
                <Link href="javascript:void(0);" className="text-[#fff]/80 text-[13px] font-normal hover:text-[var(--primary-color)] transition-colors">
                  123 2nd Floor, Sector 62, Noida, Utter Pradesh- 201301
                </Link>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-gray-200"> 
                <Link
                  href="javascript:void(0);"
                  className="text-[#fff]/80 text-[13px] font-normal hover:text-[var(--primary-color)] transition-colors break-all"
                >
                  +91 98765 43201
                </Link>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-gray-200"> 
                <Link
                  href="javascript:void(0);"
                  className="text-[#fff]/80 text-[13px] font-normal hover:text-[var(--primary-color)] transition-colors"
                >
                  info@bhumimanthan.com
                </Link>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-[15px] text-white font-normal hover:text-white"> 
                <span className="leading-relaxed text-[#fff]/80 text-[13px]">
                  Mon - Sat : 10AM- 7:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="container">
        <div className="border-t border-white/20 lg:py-4 pb-[50px] pt-[10px]">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12">
              <h6 className="text-[#fff] font-bold text-[15px] mb-4 uppercase">
                Major Cities in India
              </h6>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12">
              <ul className="flex flex-wrap gap-2">
                <li className="bg-white/10 text-[#fff]/80 text-[12px] px-3 py-1 rounded-sm mb-2"> 
                  Mumbai
                </li>
                <div className="text-white text-[20px] px-1 font-thin relative top-[-3px]">|</div>
                <li className="bg-white/10 text-[#fff]/80 text-[12px] px-3 py-1 rounded-sm mb-2"> 
                  Delhi NCR
                </li>
                <div className="text-white text-[20px] px-1 font-thin relative top-[-3px]">|</div>
                <li className="bg-white/10 text-[#fff]/80 text-[12px] px-3 py-1 rounded-sm mb-2"> 
                  Noida
                </li>
                <div className="text-white text-[20px] px-1 font-thin relative top-[-3px]">|</div>
                <li className="bg-white/10 text-[#fff]/80 text-[12px] px-3 py-1 rounded-sm mb-2"> 
                  Gurugram
                </li>
                <div className="text-white text-[20px] px-1 font-thin relative top-[-3px]">|</div>
                <li className="bg-white/10 text-[#fff]/80 text-[12px] px-3 py-1 rounded-sm mb-2"> 
                  Bengaluru
                </li>
                <div className="text-white text-[20px] px-1 font-thin relative top-[-3px]">|</div>
                <li className="bg-white/10 text-[#fff]/80 text-[12px] px-3 py-1 rounded-sm mb-2"> 
                  Pune
                </li>
                <div className="text-white text-[20px] px-1 font-thin relative top-[-3px]">|</div>
                <li className="bg-white/10 text-[#fff]/80 text-[12px] px-3 py-1 rounded-sm mb-2"> 
                  Hyderabad
                </li>
                <div className="text-white text-[20px] px-1 font-thin relative top-[-3px]">|</div>
                <li className="bg-white/10 text-[#fff]/80 text-[12px] px-3 py-1 rounded-sm mb-2"> 
                  Kolkata
                </li>
                <div className="text-white text-[20px] px-1 font-thin relative top-[-3px]">|</div>
                <li className="bg-white/10 text-[#fff]/80 text-[12px] px-3 py-1 rounded-sm mb-2"> 
                  Chennai
                </li>
                <div className="text-white text-[20px] px-1 font-thin relative top-[-3px]">|</div>
                <li className="bg-white/10 text-[#fff]/80 text-[12px] px-3 py-1 rounded-sm mb-2"> 
                  Jaipur
                </li>
                <div className="text-white text-[20px] px-1 font-thin relative top-[-3px]">|</div>
                <li className="bg-white/10 text-[#fff]/80 text-[12px] px-3 py-1 rounded-sm mb-2"> 
                  Lucknow
                </li>
                <div className="text-white text-[20px] px-1 font-thin relative top-[-3px]">|</div>
                <li className="bg-white/10 text-[#fff]/80 text-[12px] px-3 py-1 rounded-sm mb-2"> 
                  Ahmedabad
                </li>
                <div className="text-white text-[20px] px-1 font-thin relative top-[-3px]">|</div>
                <li className="bg-white/10 text-[#fff]/80 text-[12px] px-3 py-1 rounded-sm mb-2"> 
                  Chandigarh
                </li>
                <div className="text-white text-[20px] px-1 font-thin relative top-[-3px]">|</div>
                <li className="bg-white/10 text-[#fff]/80 text-[12px] px-3 py-1 rounded-sm mb-2"> 
                  Kochi
                </li>
                <div className="text-white text-[20px] px-1 font-thin relative top-[-3px]">|</div>
                <li className="bg-white/10 text-[#fff]/80 text-[12px] px-3 py-1 rounded-sm mb-2"> 
                  Visakhapatnam
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>


      <div className="container">
        <div className="lg:py-4 xl:pb-[20px] pb-[10px] pt-[10px] border-t border-white/20 xl:mt-[40px] mt-[0px] xl:flex items-center justify-between text-center">
          <p className="text-[#fff]/80 text-[13px]">Copyright © 2025 bhumimanthan.com. All rights reserved.</p>
          <div className="">
            <Link
              href="#"
              className="text-[#fff]/80 text-[13px] font-normal hover:text-[var(--primary-color)] transition-colors mr-5">
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-[#fff]/80 text-[13px] font-normal hover:text-[var(--primary-color)] transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}