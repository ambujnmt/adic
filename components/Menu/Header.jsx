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
            <div className={`py-3 shadow-sm rounded-2xl lg:px-[20px] transition-all lg:block flex justify-between duration-300 ${
              isSticky ? "bg-white" : "bg-white/80"
            }`}>
              <div className="grid lg:grid-cols-12 grid-cols-6 lg:gap-0 items-center">
                {/* Logo */}
                <div className="col-span-4 xl:col-span-2 lg:col-span-2">
                  <Link href="/" className="flex items-center gap-3 shrink-0">
                    <img
                      src="/assets/img/logo.png"
                      alt="image"
                      className="lg:w-[200px] w-[130px] h-[auto]"
                    />
                  </Link>
                </div>
                {/* // Logo */}

                {/* Nav Section */}
                <div className="col-span-8 xl:col-span-7 lg:col-span-7">
                  <nav className="hidden lg:flex items-center justify-center gap-3">
                    {/* HOME */}
                    <Link
                      href="/"
                      className="capitalize text-[14px] font-semibold text-[var(--primary-color)] hover:text-[var(--secondary-color)] transition-colors py-2 px-[7px]"
                    >
                      home
                    </Link>
                    {/* // HOME */}
          
                    {/* Buy TAB */}
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
                        Buy
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
                    {/* // Buy TAB */} 

                    {/* Rent TAB */}
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
                        Rent
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
                    {/* // Rent TAB */}

                    {/* New Projects TAB */}
                    <Link
                      href="#"
                      className="capitalize text-[14px] font-semibold text-black hover:text-[var(--secondary-color)] transition-colors py-2"
                    >
                      New Projects
                    </Link>
                    {/* // New Projects TAB */}

                    {/* Commercial TAB */}
                    <Link
                      href="#"
                      className="capitalize text-[14px] font-semibold text-black hover:text-[var(--secondary-color)] transition-colors py-2"
                    >
                      Commercial
                    </Link>
                    {/* // Commercial TAB */}

                    {/* Agents TAB */}
                    <Link
                      href="#"
                      className="capitalize text-[14px] font-semibold text-black hover:text-[var(--secondary-color)] transition-colors py-2"
                    >
                      Agents
                    </Link>
                    {/* // Agents TAB */} 
                  
                    {/* Services TAB */}
                    <div
                      className="relative"
                      onMouseEnter={() => {
                        clearTimeout(learnerTimer.current);
                        setLearnerOpen(true);
                      }}
                      onMouseLeave={() => {
                        learnerTimer.current = setTimeout(() => setLearnerOpen(false), 150);
                      }}
                    >
                      <Link
                        href="#"
                        className="capitalize flex items-center gap-1 text-[14px] font-semibold text-black hover:text-[var(--secondary-color)] transition-colors py-2 px-[7px]"
                      >
                        Services
                        <FaChevronDown
                          size={10}
                          className={`mt-[2px] transition-transform duration-200 ${
                            learnerOpen ? "rotate-180" : ""
                          }`}
                        />
                      </Link>

                      <div
                        className={`absolute left-0 top-full w-[210px] rounded-md bg-white shadow-lg border border-gray-100 py-2 transition-all duration-200 origin-top ${
                          learnerOpen
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
                    {/* // Services TAB */} 

                    {/* More TAB */}
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
                        More
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
                    {/* // More TAB */}
                  </nav> 
                </div>
                {/* // Nav Section */}
                
                {/* Nav button */}
                <div className="col-span-8 hidden xl:block lg:block xl:col-span-3 lg:col-span-3">
                  <div className="lg:flex items-center gap-3">
                    <Link
                      href="#"
                      className="capitalize text-[14px] font-semibold text-[var(--text-color3)] hover:text-[var(--secondary-color)] transition-colors py-2"
                    >
                      Login / Register
                    </Link>
                    <Link href="#" className="flex items-center hover:bg-[var(--secondary-color)] text-white px-3 py-4 rounded-lg border text-[15px] font-medium leading-[100%] bg-[var(--primary-color)] hover:text-white transition-all duration-500 ease-in-out">
                      Post Property Free
                    </Link>
                  </div>
                </div>
                {/* // Nav button */}
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
                src="/assets/img/logo.png"
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

            {/* Buy TAB */}
            <div className="border-b border-gray-100">
              <div
                className="flex items-center justify-between py-2 cursor-pointer"
                onClick={() => toggleMainTab("about")}
              >
                <span className="capitalize text-sm font-medium text-[var(--text-color)]">Buy</span>
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
            {/* // Buy TAB */}

            {/* Rent TAB */}
            <div className="border-b border-gray-100">
              <div
                className="flex items-center justify-between py-2 cursor-pointer"
                onClick={() => toggleMainTab("cdoe")}
              >
                <span className="capitalize text-sm font-medium text-[var(--text-color)]">Rent</span>
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
            {/* // ABOUT CDOE TAB */} 

            {/* New Projects */}
            <div className="border-b border-gray-100">
              <Link href="#" className="block py-2 text-sm font-medium text-[var(--text-color)]">
                New Projects
              </Link>
            </div>
            {/* // New Projects */}

            {/* Commercial */}
            <div className="border-b border-gray-100">
              <Link href="#" className="block py-2 text-sm font-medium text-[var(--text-color)]">
                Commercial
              </Link>
            </div>
            {/* // Commercial */}

            {/* Agents */}
            <div className="border-b border-gray-100">
              <Link href="#" className="block py-2 text-sm font-medium text-[var(--text-color)]">
                Agents
              </Link>
            </div>
            {/* // Agents */}

            {/* Services TAB */}
            <div className="border-b border-gray-100">
              <div
                className="flex items-center justify-between py-2 cursor-pointer"
                onClick={() => toggleMainTab("programs")}
              >
                <span className="capitalize text-sm font-medium text-[var(--text-color)]">Services </span>
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
            {/* // Services TAB */}

            {/* More TAB */}
            <div className="border-b border-gray-100">
              <div
                className="flex items-center justify-between py-2 cursor-pointer"
                onClick={() => toggleMainTab("admission")}
              >
                <span className="capitalize text-sm font-medium text-[var(--text-color)]">More </span>
                <FaChevronDown
                  size={12}
                  className={`mr-4 text-gray-500 transition-transform duration-300 ${
                    openMainTab === "admission" ? "rotate-180" : ""
                  }`}
                />
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out bg-gray-50 ${
                  openMainTab === "admission" ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <Link href="#" className="block py-3 pl-4 text-sm text-gray-700">Dropdown 1</Link>
                <Link href="#" className="block py-3 pl-4 text-sm text-gray-700">Dropdown 2</Link>
                <Link href="#" className="block py-3 pl-4 text-sm text-gray-700">Dropdown 3</Link>
              </div>
            </div>
            {/* // More TAB */}
          </div>

          <div className="p-4 border-t border-gray-100 flex gap-4 justify-between">
            <Link
              href="#"
              className="flex items-center justify-center text-white text-sm font-medium rounded-md px-5 py-2.5 bg-[var(--primary-color)] hover:bg-[var(--secondary-color)] hover:text-white transition-all duration-500 ease-in-out whitespace-nowrap w-[48%]"
            >
              Login
            </Link>
            <Link
              href="#"
              className="flex items-center justify-center text-white text-sm font-medium rounded-md px-5 py-2.5 bg-[var(--primary-color)] hover:bg-[var(--secondary-color)] hover:text-white transition-all duration-500 ease-in-out whitespace-nowrap w-[48%]"
            >
              Register
            </Link>
          </div>
        </div>
        {/* =================== // Mobile Header =================== */}

      </header>
    </>
  );
}