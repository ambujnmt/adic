"use client";

import { Link } from "@heroui/react";
import { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaBars, FaTimes, FaHandPointer } from "react-icons/fa";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  /* ---------- desktop dropdown states ---------- */
  const [admissionsOpen, setAdmissionsOpen] = useState(false);
  const [admissiontabOpen, setAdmissiontabOpen] = useState(false); 
  const [learnerOpen, setLearnerOpen] = useState(false);  
  const [moreOpen, setMoreOpen] = useState(false);  

  /* ---------- hover-close timers (desktop) ---------- */
  const admissionsTimer = useRef(null);
  const admissiontabTimer = useRef(null); 
  const learnerTimer = useRef(null); 
  const moreTimer = useRef(null); 

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
                    <Link
                      href="#"
                      className="capitalize text-[14px] font-semibold text-black hover:text-[var(--secondary-color)] transition-colors py-2"
                    >
                      About
                    </Link>
                    {/* // About TAB */}

                    {/* Smile Gallery TAB */}
                    <Link
                      href="#"
                      className="capitalize text-[14px] font-semibold text-black hover:text-[var(--secondary-color)] transition-colors py-2"
                    >
                      Smile Gallery
                    </Link>
                    {/* // Smile Gallery TAB */}

                    {/* General Dentistry TAB */}
                    <Link
                      href="#"
                      className="capitalize text-[14px] font-semibold text-black hover:text-[var(--secondary-color)] transition-colors py-2"
                    >
                      General Dentistry
                    </Link>
                    {/* // General Dentistry TAB */}
          
                    {/* Cosmetic Dentistry TAB */}
                    <div
                      className="relative"
                      onMouseEnter={() => {
                        clearTimeout(admissionsTimer.current);
                        setAdmissionsOpen(true);
                      }}
                      onMouseLeave={() => {
                        admissionsTimer.current = setTimeout(() => setAdmissionsOpen(false), 150);
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
                            admissionsOpen ? "rotate-180" : ""
                          }`}
                        />
                      </Link>

                      <div
                        className={`absolute left-0 top-full w-[210px] rounded-md bg-white shadow-lg border border-gray-100 py-2 transition-all duration-200 origin-top ${
                          admissionsOpen
                            ? "opacity-100 scale-100 visible"
                            : "opacity-0 scale-95 invisible pointer-events-none"
                        }`}
                      >
                        <Link
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-[var(--primary-color)] transition-colors whitespace-normal break-words"
                        >
                          Dropdown 1
                        </Link> 
                        <Link
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-[var(--primary-color)] transition-colors whitespace-normal break-words"
                        >
                          Dropdown 2
                        </Link> 
                        <Link
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-[var(--primary-color)] transition-colors whitespace-normal break-words"
                        >
                          Dropdown 3
                        </Link> 
                      </div>
                    </div>
                    {/* // Cosmetic Dentistry TAB */} 

                    {/* Dental Implants TAB */}
                    <div
                      className="relative"
                      onMouseEnter={() => {
                        clearTimeout(admissiontabTimer.current);
                        setAdmissiontabOpen(true);
                      }}
                      onMouseLeave={() => {
                        admissiontabTimer.current = setTimeout(() => setAdmissiontabOpen(false), 150);
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
                            admissiontabOpen ? "rotate-180" : ""
                          }`}
                        />
                      </Link>

                      <div
                        className={`absolute left-0 top-full w-[210px] rounded-md bg-white shadow-lg border border-gray-100 py-2 transition-all duration-200 origin-top ${
                          admissiontabOpen
                            ? "opacity-100 scale-100 visible"
                            : "opacity-0 scale-95 invisible pointer-events-none"
                        }`}
                      >
                        <Link
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-[var(--primary-color)] transition-colors whitespace-normal break-words"
                        >
                          Dropdown 1
                        </Link>
                        <Link
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-[var(--primary-color)] transition-colors whitespace-normal break-words"
                        >
                          Dropdown 2
                        </Link>
                        <Link
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-[var(--primary-color)] transition-colors whitespace-normal break-words"
                        >
                          Dropdown 3
                        </Link>
                      </div>
                    </div>
                    {/* // Dental Implants TAB */} 

                    {/* Patient Resources TAB */}
                    <div
                      className="relative"
                      onMouseEnter={() => {
                        clearTimeout(moreTimer.current);
                        setMoreOpen(true);
                      }}
                      onMouseLeave={() => {
                        moreTimer.current = setTimeout(() => setMoreOpen(false), 150);
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
                            moreOpen ? "rotate-180" : ""
                          }`}
                        />
                      </Link>

                      <div
                        className={`absolute left-0 top-full w-[210px] rounded-md bg-white shadow-lg border border-gray-100 py-2 transition-all duration-200 origin-top ${
                          moreOpen
                            ? "opacity-100 scale-100 visible"
                            : "opacity-0 scale-95 invisible pointer-events-none"
                        }`}
                      >
                        <Link
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-[var(--primary-color)] transition-colors whitespace-normal break-words"
                        >
                          Dropdown 1
                        </Link>
                        <Link
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-[var(--primary-color)] transition-colors whitespace-normal break-words"
                        >
                          Dropdown 2
                        </Link>
                        <Link
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-[var(--primary-color)] transition-colors whitespace-normal break-words"
                        >
                          Dropdown 3
                        </Link>
                      </div>
                    </div>
                    {/* // Patient Resources TAB */}

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
              <Link href="#" className="block py-2 text-sm font-medium text-[var(--text-color)]">
                About
              </Link>
            </div>
            {/* // About */}

            {/* Smile Gallery */}
            <div className="border-b border-gray-100">
              <Link href="#" className="block py-2 text-sm font-medium text-[var(--text-color)]">
                Smile Gallery
              </Link>
            </div>
            {/* // Smile Gallery */}

            {/* General Dentistry */}
            <div className="border-b border-gray-100">
              <Link href="#" className="block py-2 text-sm font-medium text-[var(--text-color)]">
                General Dentistry
              </Link>
            </div>
            {/* // General Dentistry */}

            {/* Cosmetic Dentistry TAB */}
            <div className="border-b border-gray-100">
              <div
                className="flex items-center justify-between py-2 cursor-pointer"
                onClick={() => toggleMainTab("about")}
              >
                <span className="capitalize text-sm font-medium text-[var(--text-color)]">Cosmetic Dentistry</span>
                <FaChevronDown
                  size={12}
                  className={`mr-4 text-gray-500 transition-transform duration-300 ${
                    openMainTab === "about" ? "rotate-180" : ""
                  }`}
                />
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out bg-gray-50 ${
                  openMainTab === "about" ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <Link href="/aboutMit_Adt/about" className="block py-3 pl-4 text-sm text-gray-700">Dropdown 1</Link>
                <Link href="/aboutMit_Adt/vision" className="block py-3 pl-4 text-sm text-gray-700">Dropdown 2</Link>
                <Link href="/aboutMit_Adt/leadership" className="block py-3 pl-4 text-sm text-gray-700">Dropdown 3</Link>
              </div>
            </div>
            {/* // Cosmetic Dentistry TAB */}

            {/* Dental Implants TAB */}
            <div className="border-b border-gray-100">
              <div
                className="flex items-center justify-between py-2 cursor-pointer"
                onClick={() => toggleMainTab("cdoe")}
              >
                <span className="capitalize text-sm font-medium text-[var(--text-color)]">Dental Implants</span>
                <FaChevronDown
                  size={12}
                  className={`mr-4 text-gray-500 transition-transform duration-300 ${
                    openMainTab === "cdoe" ? "rotate-180" : ""
                  }`}
                />
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out bg-gray-50 ${
                  openMainTab === "cdoe" ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <Link href="#" className="block py-3 pl-4 text-sm text-gray-700">Dropdown 1</Link>
                <Link href="#" className="block py-3 pl-4 text-sm text-gray-700">Dropdown 2</Link>
                <Link href="#" className="block py-3 pl-4 text-sm text-gray-700">Dropdown 3</Link>
              </div>
            </div>
            {/* // Dental Implants TAB */}  
 
            {/* Patient Resources TAB */}
            <div className="border-b border-gray-100">
              <div
                className="flex items-center justify-between py-2 cursor-pointer"
                onClick={() => toggleMainTab("programs")}
              >
                <span className="capitalize text-sm font-medium text-[var(--text-color)]">Patient Resources </span>
                <FaChevronDown
                  size={12}
                  className={`mr-4 text-gray-500 transition-transform duration-300 ${
                    openMainTab === "programs" ? "rotate-180" : ""
                  }`}
                />
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out bg-gray-50 ${
                  openMainTab === "programs" ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <Link href="#" className="block py-3 pl-4 text-sm text-gray-700">Dropdown 1</Link> 
                <Link href="#" className="block py-3 pl-4 text-sm text-gray-700">Dropdown 2</Link>
                <Link href="#" className="block py-3 pl-4 text-sm text-gray-700">Dropdown 3 </Link>
              </div>
            </div>
            {/* // Patient Resources TAB */} 

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