"use client";
import { Link } from '@heroui/react'
import React from 'react'
import { useState, useRef, useEffect } from "react";
import { FiSearch, FiSliders, FiChevronDown, FiCheck } from "react-icons/fi";
import SearchPropertiesLeftCol from './SearchPropertiesLeftCol';
import SearchPropertiesRightCol from './SearchPropertiesRightCol';

export default function SearchProperties() {

    const [activeTab, setActiveTab] = useState("Buy");
    const [propertyType, setPropertyType] = useState("Property Type");
    const [budget, setBudget] = useState("Budget");
    const [isPropertyTypeOpen, setIsPropertyTypeOpen] = useState(false);
    const [isBudgetOpen, setIsBudgetOpen] = useState(false);

    const propertyTypeRef = useRef(null);
    const budgetRef = useRef(null);

    const tabs = ["Buy", "Rent", "New Projects", "Commercial"];

    const propertyTypeOptions = [
        "Flat / Apartment",
        "Independent House / Villa",
        "Plot / Land",
        "Office Space",
        "Shop / Showroom",
    ];

    const budgetOptions = [
        "Under ₹20 Lac",
        "₹20 - 40 Lac",
        "₹40 - 60 Lac",
        "₹60 Lac - 1 Cr",
        "Above ₹1 Cr",
    ];

    const popularSearchesByTab = {
        Buy: ["Flats in Noida", "Plots in Lucknow", "2 BHK in Mumbai", "Villas in Gurgaon", "Ready to Move Flats"],
        Rent: ["Flats for Rent in Delhi", "1 BHK in Bangalore", "PG in Pune", "Furnished Flats in Mumbai", "Rental Villas in Goa"],
        "New Projects": ["New Projects in Noida", "Upcoming Projects in Pune", "Launches in Hyderabad", "New Projects in Mumbai", "Pre-Launch Offers"],
        Commercial: ["Office Space in Gurgaon", "Shops in Noida", "Commercial Plots", "Coworking Spaces", "Warehouses for Lease"],
    };

    const handlePropertyTypeToggle = () => {
        setIsPropertyTypeOpen((prev) => !prev);
        setIsBudgetOpen(false);
    };

    const handleBudgetToggle = () => {
        setIsBudgetOpen((prev) => !prev);
        setIsPropertyTypeOpen(false);
    };

    useEffect(() => {
        function handleClickOutside(event) {
        if (
            propertyTypeRef.current &&
            !propertyTypeRef.current.contains(event.target)
        ) {
            setIsPropertyTypeOpen(false);
        }
        if (budgetRef.current && !budgetRef.current.contains(event.target)) {
            setIsBudgetOpen(false);
        }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    return (
        <>
            <section className="mt-[10px]">
              <div className="bg-[#eaeff5] py-10">
                <div className="container">
                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-12">
                            <div className="flex mb-4">
                                <Link href="/" className="text-[14px] text-[var(--text-color2)]">Home </Link> 
                                <p className="text-[14px] text-[var(--text-color2)]">&nbsp; / &nbsp;Buy Properties</p>
                            </div>
                            <h2 className="text-[28px] font-bold text-[var(--text-color1)]">
                                Properties for Sale in India
                            </h2>
                            <p className="text-[16px] text-[var(--text-color2)] mb-4">
                                Discover verified homes from trusted owners, builders and agents.
                            </p>
                        </div>
                    </div>
                </div>
 
                {/* Start Search bar */}
                <div className="container xl:mt-0 lg:mt-0 mt-[50px]">
                    <div className="w-full bg-[#0B1B3A] rounded-2xl px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-7 z-10 relative">
                        {/* Tabs */}
                        <div className="flex items-center gap-2 sm:gap-3 mb-4 overflow-x-auto no-scrollbar">
                        {tabs.map((tab) => (
                            <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`shrink-0 text-sm font-semibold px-4 py-2 rounded-lg transition-colors ${
                                activeTab === tab
                                ? "bg-white text-[#0B1B3A]"
                                : "text-white/80 hover:text-white"
                            }`}
                            >
                            {tab}
                            </button>
                        ))}
                        </div>

                        {/* Search row */}
                        <div className="flex flex-col lg:flex-row gap-3">
                        {/* Location input */}
                        <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-3 flex-1">
                            <FiSearch className="text-gray-400 text-lg shrink-0" />
                            <input
                            type="text"
                            placeholder="Enter Location or Project Name"
                            className="w-full text-sm text-gray-700 placeholder-gray-400 outline-none bg-transparent"
                            />
                        </div>

                        {/* Property Type dropdown */}
                        <div ref={propertyTypeRef} className="relative w-full lg:w-52 shrink-0">
                            <button
                            onClick={handlePropertyTypeToggle}
                            className="flex items-center justify-between gap-2 bg-white rounded-lg px-4 py-3 text-sm text-gray-600 w-full"
                            >
                            <span className="truncate">{propertyType}</span>
                            <FiChevronDown
                                className={`text-gray-400 shrink-0 transition-transform ${
                                isPropertyTypeOpen ? "rotate-180" : ""
                                }`}
                            />
                            </button>

                            {isPropertyTypeOpen && (
                            <div className="absolute z-20 top-full mt-2 w-full bg-white rounded-lg shadow-lg border border-gray-100 py-2 overflow-hidden">
                                {propertyTypeOptions.map((option) => (
                                <button
                                    key={option}
                                    onClick={() => {
                                    setPropertyType(option);
                                    setIsPropertyTypeOpen(false);
                                    }}
                                    className="flex items-center justify-between w-full text-left text-sm text-gray-700 px-4 py-2 hover:bg-gray-50"
                                >
                                    <span>{option}</span>
                                    {propertyType === option && (
                                    <FiCheck className="text-orange-500 shrink-0" />
                                    )}
                                </button>
                                ))}
                            </div>
                            )}
                        </div>

                        {/* Budget dropdown */}
                        <div ref={budgetRef} className="relative w-full lg:w-44 shrink-0">
                            <button
                            onClick={handleBudgetToggle}
                            className="flex items-center justify-between gap-2 bg-white rounded-lg px-4 py-3 text-sm text-gray-600 w-full"
                            >
                            <span className="truncate">{budget}</span>
                            <FiChevronDown
                                className={`text-gray-400 shrink-0 transition-transform ${
                                isBudgetOpen ? "rotate-180" : ""
                                }`}
                            />
                            </button>

                            {isBudgetOpen && (
                            <div className="absolute z-20 top-full mt-2 w-full bg-white rounded-lg shadow-lg border border-gray-100 py-2 overflow-hidden">
                                {budgetOptions.map((option) => (
                                <button
                                    key={option}
                                    onClick={() => {
                                    setBudget(option);
                                    setIsBudgetOpen(false);
                                    }}
                                    className="flex items-center justify-between w-full text-left text-sm text-gray-700 px-4 py-2 hover:bg-gray-50"
                                >
                                    <span>{option}</span>
                                    {budget === option && (
                                    <FiCheck className="text-orange-500 shrink-0" />
                                    )}
                                </button>
                                ))}
                            </div>
                            )}
                        </div>

                        {/* More Filters */}
                        <button className="flex items-center justify-center gap-2 bg-white rounded-lg px-4 py-3 text-sm text-gray-600 w-full lg:w-40 shrink-0">
                            <FiSliders className="text-gray-500" />
                            <span>More Filters</span>
                        </button>

                        {/* Search button */}
                        <Link href="#" className="bg-[var(--secondary-color)] hover:[var(--secondary-color)] transition-colors text-white text-sm font-semibold rounded-lg px-8 py-3 w-full lg:w-auto shrink-0">
                            Search
                        </Link>
                        </div>

                        {/* Popular searches */}
                        <div className="flex flex-wrap items-center gap-2 mt-4">
                        <span className="text-white/60 text-sm mr-1">Popular Searches:</span>
                        {popularSearchesByTab[activeTab].map((item) => (
                            <button
                            key={item}
                            className="text-white/90 text-xs sm:text-sm border border-white/30 rounded-full px-3 py-1.5 hover:bg-white/10 transition-colors"
                            >
                            {item}
                            </button>
                        ))}
                        </div>
                    </div>
                </div>
                {/* // End Search bar */}
              </div>

                

                <div className="min-h-screen bg-gray-50 mt-5">
                  <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <div className="flex flex-col gap-6 lg:flex-row">
                      {/* ---------------- Sidebar Filters ---------------- */}
                      <SearchPropertiesLeftCol />
            


                      {/* ---------------- Right Side Filters ---------------- */}
                      <SearchPropertiesRightCol />
                    </div>
                  </div>
                </div>
            </section>
        </>
    )
}
