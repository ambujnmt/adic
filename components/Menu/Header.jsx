"use client";

import { Link } from "@heroui/react";
import { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaBars, FaTimes, FaHandPointer } from "react-icons/fa";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  /* ---------- desktop dropdown states ---------- */
  const [cosmeticOpen, setCosmeticOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [dentalOpen, setDentalOpen] = useState(false);
  const [patientOpen, setPatientOpen] = useState(false);  

  /* ---------- hover-close timers (desktop) ---------- */
  const cosmeticTimer = useRef(null);
  const aboutTimer = useRef(null);
  const dentalTimer = useRef(null);
  const patientTimer = useRef(null); 

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);


  const [isSticky, setIsSticky] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
 
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  // ============== This is for mobile dropdown ==============
  {/* Single state for main tabs — sirf ek hi khula rahega */}
  const [openMainTab, setOpenMainTab] = useState(null); 
  // possible values: 'about', 'cdoe', 'academics', 'programs', 'admission', 'learner'

  const toggleMainTab = (tab) => {
    setOpenMainTab((prev) => (prev === tab ? null : tab));
  };

  {/* Nested accordion states (in "about mit adt" section) */}
  const [openAboutNested, setOpenAboutNested] = useState(null);
  const toggleAboutNested = (tab) => {
    setOpenAboutNested((prev) => (prev === tab ? null : tab));
  };

  {/* Nested accordion states (in "academics" section) */}
  const [openAcademicsNested, setOpenAcademicsNested] = useState(null);
  const toggleAcademicsNested = (tab) => {
    setOpenAcademicsNested((prev) => (prev === tab ? null : tab));
  };
  // ============== // This is for mobile dropdown ==============

  return (
    <>
      <header className={`w-full z-50 transition-all duration-300 ease-in-out ${
        isSticky ? "fixed top-0 left-0 bg-white shadow-md" : "relative bg-transparent"
      }`}>
        {/* =================== Desktop Header =================== */}
        <div className={`left-0 w-full transition-all duration-300 ease-in-out ${
          isSticky ? "bg-white shadow-md" : "bg-transparent"
        }`}>
          <div className="container">
            <div className={`py-3 shadow-sm rounded-2xl transition-all lg:block flex justify-between duration-300 ${
              isSticky ? "bg-white" : "bg-white/80"
            }`}>
              <div className="grid lg:grid-cols-12 grid-cols-6 lg:gap-0 items-center">
                {/* Logo */}
                <div className="col-span-4 xl:col-span-2 lg:col-span-2">
                  <Link href="/" className="flex items-center gap-3 shrink-0">
                    <img
                      src="/assets/image/logo.png"
                      alt="image"
                      className="lg:w-[200px] w-[130px] h-[auto]"
                    />
                  </Link>
                </div>
                {/* // Logo */}

                {/* Nav Section */}
                <div className="col-span-8 xl:col-span-10 lg:col-span-10">
                  <nav className="hidden lg:flex items-center justify-end gap-3">
                    {/* HOME */}
                    <Link
                      href="/"
                      className="capitalize text-[14px] font-semibold text-[var(--primary-color)] hover:text-[var(--secondary-color)] transition-colors py-2 px-[7px]"
                    >
                      home
                    </Link>
                    {/* // HOME */}

                    {/* About TAB */}
                    <div
                      className="relative"
                      onMouseEnter={() => {
                        clearTimeout(aboutTimer.current);
                        setAboutOpen(true);
                      }}
                      onMouseLeave={() => {
                        aboutTimer.current = setTimeout(() => setAboutOpen(false), 150);
                      }}
                    >
                      <Link
                        href="#"
                        className="capitalize flex items-center gap-1 text-[14px] font-semibold text-black hover:text-[var(--secondary-color)] transition-colors py-2 px-[7px]"
                      >
                        About
                        <FaChevronDown
                          size={10}
                          className={`mt-[2px] transition-transform duration-200 ${
                            aboutOpen ? "rotate-180" : ""
                          }`}
                        />
                      </Link>

                      <div
                        className={`absolute left-0 top-full w-[210px] rounded-md bg-white shadow-lg border border-gray-100 py-2 transition-all duration-200 origin-top ${
                          aboutOpen
                            ? "opacity-100 scale-100 visible"
                            : "opacity-0 scale-95 invisible pointer-events-none"
                        }`}
                      >
                        <Link
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-[var(--primary-color)] transition-colors whitespace-normal break-words"
                        >
                          Meet Dr. Harry Ashitey
                        </Link>
                        <Link
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-[var(--primary-color)] transition-colors whitespace-normal break-words"
                        >
                          Our Team
                        </Link>
                        <Link
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-[var(--primary-color)] transition-colors whitespace-normal break-words"
                        >
                          Our Office
                        </Link>
                        <Link
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-[var(--primary-color)] transition-colors whitespace-normal break-words"
                        >
                          Technology
                        </Link>
                      </div>
                    </div>
                    {/* // About TAB */}

                    {/* Dental Implants TAB */}
                    <div
                      className="relative"
                      onMouseEnter={() => {
                        clearTimeout(dentalTimer.current);
                        setDentalOpen(true);
                      }}
                      onMouseLeave={() => {
                        dentalTimer.current = setTimeout(() => setDentalOpen(false), 150);
                      }}
                    >
                      <Link
                        href="#"
                        className="capitalize flex items-center gap-1 text-[14px] font-semibold text-black hover:text-[var(--secondary-color)] transition-colors py-2 px-[7px]"
                      >
                        Dental Implants
                        <FaChevronDown
                          size={10}
                          className={`mt-[2px] transition-transform duration-200 ${
                            dentalOpen ? "rotate-180" : ""
                          }`}
                        />
                      </Link>

                      <div
                        className={`absolute left-0 top-full w-[210px] rounded-md bg-white shadow-lg border border-gray-100 py-2 transition-all duration-200 origin-top ${
                          dentalOpen
                            ? "opacity-100 scale-100 visible"
                            : "opacity-0 scale-95 invisible pointer-events-none"
                        }`}
                      >
                        <Link
                          href="/dentalImplants/dentalImplants"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-[var(--primary-color)] transition-colors whitespace-normal break-words"
                        >
                          Dental Implants
                        </Link>
                        <Link
                          href="/singleDentalImplants/singleDentalImplants"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-[var(--primary-color)] transition-colors whitespace-normal break-words"
                        >
                          Single Dental Implants
                        </Link>
                        <Link
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-[var(--primary-color)] transition-colors whitespace-normal break-words"
                        >
                          Implant-Supported Dentures
                        </Link>
                        <Link
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-[var(--primary-color)] transition-colors whitespace-normal break-words"
                        >
                          All-on-X / Full-Arch
                        </Link>
                        <Link
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-[var(--primary-color)] transition-colors whitespace-normal break-words"
                        >
                          Bone Grafting
                        </Link>
                        <Link
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-[var(--primary-color)] transition-colors whitespace-normal break-words"
                        >
                          Implant FAQs
                        </Link>
                      </div>
                    </div>
                    {/* // Dental Implants TAB */} 

                    {/* Cosmetic Dentistry TAB */}
                    <div
                      className="relative"
                      onMouseEnter={() => {
                        clearTimeout(cosmeticTimer.current);
                        setCosmeticOpen(true);
                      }}
                      onMouseLeave={() => {
                        cosmeticTimer.current = setTimeout(() => setCosmeticOpen(false), 150);
                      }}
                    >
                      <Link
                        href="#"
                        className="capitalize flex items-center gap-1 text-[14px] font-semibold text-black hover:text-[var(--secondary-color)] transition-colors py-2 px-[7px]"
                      >
                        Cosmetic Dentistry
                        <FaChevronDown
                          size={10}
                          className={`mt-[2px] transition-transform duration-200 ${
                            cosmeticOpen ? "rotate-180" : ""
                          }`}
                        />
                      </Link>

                      <div
                        className={`absolute left-0 top-full w-[210px] rounded-md bg-white shadow-lg border border-gray-100 py-2 transition-all duration-200 origin-top ${
                          cosmeticOpen
                            ? "opacity-100 scale-100 visible"
                            : "opacity-0 scale-95 invisible pointer-events-none"
                        }`}
                      >
                        <Link
                          href="/cosmeticDentistry/cosmeticDentistry"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-[var(--primary-color)] transition-colors whitespace-normal break-words"
                        >
                          Cosmetic Dentistry
                        </Link> 
                        <Link
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-[var(--primary-color)] transition-colors whitespace-normal break-words"
                        >
                          Smile Makeovers
                        </Link> 
                        <Link
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-[var(--primary-color)] transition-colors whitespace-normal break-words"
                        >
                          Porcelain Veneers
                        </Link> 
                        <Link
                          href="/crowns/crowns"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-[var(--primary-color)] transition-colors whitespace-normal break-words"
                        >
                          Crowns
                        </Link> 
                        <Link
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-[var(--primary-color)] transition-colors whitespace-normal break-words"
                        >
                          Invisalign
                        </Link> 
                        <Link
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-[var(--primary-color)] transition-colors whitespace-normal break-words"
                        >
                          Teeth Whitening
                        </Link> 
                        <Link
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-[var(--primary-color)] transition-colors whitespace-normal break-words"
                        >
                          Cosmetic Bonding
                        </Link> 
                      </div>
                    </div>
                    {/* // Cosmetic Dentistry TAB */} 

                    {/* General Dentistry TAB */}
                    <Link
                      href="#"
                      className="capitalize text-[14px] font-semibold text-black hover:text-[var(--secondary-color)] transition-colors py-2"
                    >
                      General Dentistry
                    </Link>
                    {/* // General Dentistry TAB */}

                    {/* Patient Resources TAB */}
                    <div
                      className="relative"
                      onMouseEnter={() => {
                        clearTimeout(patientTimer.current);
                        setPatientOpen(true);
                      }}
                      onMouseLeave={() => {
                        patientTimer.current = setTimeout(() => setPatientOpen(false), 150);
                      }}
                    >
                      <Link
                        href="#"
                        className="capitalize flex items-center gap-1 text-[14px] font-semibold text-black hover:text-[var(--secondary-color)] transition-colors py-2 px-[7px]"
                      >
                        Patient Resources
                        <FaChevronDown
                          size={10}
                          className={`mt-[2px] transition-transform duration-200 ${
                            patientOpen ? "rotate-180" : ""
                          }`}
                        />
                      </Link>

                      <div
                        className={`absolute left-0 top-full w-[210px] rounded-md bg-white shadow-lg border border-gray-100 py-2 transition-all duration-200 origin-top ${
                          patientOpen
                            ? "opacity-100 scale-100 visible"
                            : "opacity-0 scale-95 invisible pointer-events-none"
                        }`}
                      >
                        <Link
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-[var(--primary-color)] transition-colors whitespace-normal break-words"
                        >
                          New Patients
                        </Link>
                        <Link
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-[var(--primary-color)] transition-colors whitespace-normal break-words"
                        >
                          Patient Forms
                        </Link>
                        <Link
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-[var(--primary-color)] transition-colors whitespace-normal break-words"
                        >
                          Financing
                        </Link>
                        <Link
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-[var(--primary-color)] transition-colors whitespace-normal break-words"
                        >
                          FAQs
                        </Link>
                        <Link
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-[var(--primary-color)] transition-colors whitespace-normal break-words"
                        >
                          Blog / Education Center
                        </Link>
                      </div>
                    </div>
                    {/* // Patient Resources TAB */}

                    {/* Smile Gallery TAB */}
                    <Link
                      href="#"
                      className="capitalize text-[14px] font-semibold text-black hover:text-[var(--secondary-color)] transition-colors py-2"
                    >
                      Smile Gallery
                    </Link>
                    {/* // Smile Gallery TAB */} 

                    {/* Contact TAB */}
                    <Link
                      href="#"
                      className="capitalize text-[14px] font-semibold text-black hover:text-[var(--secondary-color)] transition-colors py-2"
                    >
                      Contact
                    </Link>
                    {/* // Contact TAB */} 
                  </nav> 
                </div>
                {/* // Nav Section */} 
              </div> 
              
              {/* Mobile toggle button */}
              <button
                aria-label="Toggle menu"
                onClick={() => setMobileOpen(true)}
                className="lg:hidden text-[var(--primary-color)] text-2xl p-2"
              >
                <FaBars />
              </button>
            </div>
          </div>
        </div>
        {/* =================== // Desktop Header =================== */}




        {/* =================== Mobile Header =================== */} 
        {/* Overlay */}
        <div
          onClick={() => setMobileOpen(false)}
          className={`fixed inset-0 bg-black/40 transition-opacity duration-300 lg:hidden ${
            mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        />
 
        {/* Side panel */}
        <div
          className={`fixed top-0 right-0 h-full w-[80%] max-w-[340px] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
            <Link
              href="#"
              className="flex items-center justify-center"
            >
              {/* Apply Now &nbsp; <FaHandPointer size={14} /> */}
              <img
                src="/assets/image/logo.png"
                alt="image"
                className="lg:w-[200px] w-[130px] h-[auto]"
              />
            </Link>
            <button
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="text-2xl text-gray-600 p-1"
            >
              <FaTimes />
            </button>
          </div>

          <div className="overflow-y-auto h-[calc(100%-190px)] px-4">
            {/* HOME */}
            <div className="border-b border-gray-100">
              <Link href="/" className="block py-2 text-sm font-medium text-[var(--text-color)]">
                Home
              </Link>
            </div>
            {/* // HOME */}

            {/* About */}
            <div className="border-b border-gray-100">
              <div
                className="flex items-center justify-between py-2 cursor-pointer"
                onClick={() => toggleMainTab("m_About")}
              >
                <span className="capitalize text-sm font-medium text-[var(--text-color)]">About</span>
                <FaChevronDown
                  size={12}
                  className={`mr-4 text-gray-500 transition-transform duration-300 ${
                    openMainTab === "m_About" ? "rotate-180" : ""
                  }`}
                />
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out bg-gray-50 ${
                  openMainTab === "m_About" ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <Link href="#" className="block py-3 pl-4 text-sm text-gray-700">Meet Dr. Harry Ashitey</Link>
                <Link href="#" className="block py-3 pl-4 text-sm text-gray-700">Our Team</Link>
                <Link href="#" className="block py-3 pl-4 text-sm text-gray-700">Our Office</Link>
                <Link href="#" className="block py-3 pl-4 text-sm text-gray-700">Technology</Link>
              </div>
            </div>
            {/* // About */}

            {/* Dental Implants TAB */}
            <div className="border-b border-gray-100">
              <div
                className="flex items-center justify-between py-2 cursor-pointer"
                onClick={() => toggleMainTab("m_Dental")}
              >
                <span className="capitalize text-sm font-medium text-[var(--text-color)]">Dental Implants</span>
                <FaChevronDown
                  size={12}
                  className={`mr-4 text-gray-500 transition-transform duration-300 ${
                    openMainTab === "m_Dental" ? "rotate-180" : ""
                  }`}
                />
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out bg-gray-50 ${
                  openMainTab === "m_Dental" ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <Link href="/dentalImplants/dentalImplants" className="block py-3 pl-4 text-sm text-gray-700">Dental Implants</Link>
                <Link href="/singleDentalImplants/singleDentalImplants" className="block py-3 pl-4 text-sm text-gray-700">Single Dental Implants</Link>
                <Link href="#" className="block py-3 pl-4 text-sm text-gray-700">Implant-Supported Dentures</Link>
                <Link href="#" className="block py-3 pl-4 text-sm text-gray-700">All-on-X / Full-Arch</Link>
                <Link href="#" className="block py-3 pl-4 text-sm text-gray-700">Bone Grafting</Link>
                <Link href="#" className="block py-3 pl-4 text-sm text-gray-700">Implant FAQs</Link>
              </div>
            </div>
            {/* // Dental Implants TAB */}

            {/* Cosmetic Dentistry TAB */}
            <div className="border-b border-gray-100">
              <div
                className="flex items-center justify-between py-2 cursor-pointer"
                onClick={() => toggleMainTab("m_Cosmetic")}
              >
                <span className="capitalize text-sm font-medium text-[var(--text-color)]">Cosmetic Dentistry</span>
                <FaChevronDown
                  size={12}
                  className={`mr-4 text-gray-500 transition-transform duration-300 ${
                    openMainTab === "m_Cosmetic" ? "rotate-180" : ""
                  }`}
                />
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out bg-gray-50 ${
                  openMainTab === "m_Cosmetic" ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <Link href="/cosmeticDentistry/cosmeticDentistry" className="block py-3 pl-4 text-sm text-gray-700">Cosmetic Dentistry</Link>
                <Link href="#" className="block py-3 pl-4 text-sm text-gray-700">Smile Makeovers</Link>
                <Link href="#" className="block py-3 pl-4 text-sm text-gray-700">Porcelain Veneers</Link>
                <Link href="/crowns/crowns" className="block py-3 pl-4 text-sm text-gray-700">Crowns</Link>
                <Link href="#" className="block py-3 pl-4 text-sm text-gray-700">Invisalign</Link>
                <Link href="#" className="block py-3 pl-4 text-sm text-gray-700">Teeth Whitening</Link>
                <Link href="#" className="block py-3 pl-4 text-sm text-gray-700">Cosmetic Bonding</Link>
              </div>
            </div>
            {/* // Cosmetic Dentistry TAB */} 

            {/* General Dentistry */}
            <div className="border-b border-gray-100">
              <Link href="#" className="block py-2 text-sm font-medium text-[var(--text-color)]">
                General Dentistry
              </Link>
            </div>
            {/* // General Dentistry */} 

            {/* Patient Resources TAB */}
            <div className="border-b border-gray-100">
              <div
                className="flex items-center justify-between py-2 cursor-pointer"
                onClick={() => toggleMainTab("m_Patient")}
              >
                <span className="capitalize text-sm font-medium text-[var(--text-color)]">Patient Resources </span>
                <FaChevronDown
                  size={12}
                  className={`mr-4 text-gray-500 transition-transform duration-300 ${
                    openMainTab === "m_Patient" ? "rotate-180" : ""
                  }`}
                />
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out bg-gray-50 ${
                  openMainTab === "m_Patient" ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <Link href="#" className="block py-3 pl-4 text-sm text-gray-700">New Patients</Link> 
                <Link href="#" className="block py-3 pl-4 text-sm text-gray-700">Patient Forms</Link>
                <Link href="#" className="block py-3 pl-4 text-sm text-gray-700">Financing </Link>
                <Link href="#" className="block py-3 pl-4 text-sm text-gray-700">FAQs </Link>
                <Link href="#" className="block py-3 pl-4 text-sm text-gray-700">Blog / Education Center </Link>
              </div>
            </div>
            {/* // Patient Resources TAB */} 

            {/* Smile Gallery */}
            <div className="border-b border-gray-100">
              <Link href="#" className="block py-2 text-sm font-medium text-[var(--text-color)]">
                Smile Gallery
              </Link>
            </div>
            {/* // Smile Gallery */}  

            {/* Contact */}
            <div className="border-b border-gray-100">
              <Link href="#" className="block py-2 text-sm font-medium text-[var(--text-color)]">
                Contact
              </Link>
            </div>
            {/* // Contact */}
          </div> 
        </div>
        {/* =================== // Mobile Header =================== */}

      </header>
    </>
  );
}