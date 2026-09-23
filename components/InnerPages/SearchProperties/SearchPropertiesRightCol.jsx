import React from 'react'
import { FiHeart, FiMapPin, FiGrid, FiList, FiMaximize2 } from "react-icons/fi";
import { FaBed, FaBath } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { FiChevronDown } from "react-icons/fi";
import { useState, useRef, useEffect } from "react";

export default function SearchPropertiesRightCol() {
    const [viewMode, setViewMode] = useState("grid");
 
        const propertyTypeRef = useRef(null);
        const budgetRef = useRef(null); 
    
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
            <main className="flex-1">
                        {/* Header row */}
                        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                          <div>
                            <h1 className="text-xl font-semibold text-gray-900">
                              1284 Properties Found
                            </h1>
                            <p className="mt-1 text-sm text-gray-500">
                              Verified properties matching your search
                            </p>
                          </div>
            
                          <div className="flex items-center gap-3">
                            <span className="text-sm text-gray-500">Sort by</span>
                            <div className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700">
                              Relevance
                              <FiChevronDown className="h-4 w-4 text-gray-400" />
                            </div>
                            <div className="flex overflow-hidden rounded-lg border border-gray-300">
                              <button
                                type="button"
                                onClick={() => setViewMode("grid")}
                                className={`flex h-9 w-9 items-center justify-center ${
                                  viewMode === "grid"
                                    ? "bg-gray-900 text-white"
                                    : "bg-white text-gray-500 hover:bg-gray-50"
                                }`}
                              >
                                <FiGrid className="h-4 w-4" />
                              </button>
                              <button
                                type="button"
                                onClick={() => setViewMode("list")}
                                className={`flex h-9 w-9 items-center justify-center ${
                                  viewMode === "list"
                                    ? "bg-gray-900 text-white"
                                    : "bg-white text-gray-500 hover:bg-gray-50"
                                }`}
                              >
                                <FiList className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                        </div>
            
                        {/* Property cards - Grid view */}
                        {viewMode === "grid" && (
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                          {/* Card 1 */}
                          <article className="overflow-hidden rounded-xl border border-gray-200 bg-white transition hover:shadow-md">
                            <div className="relative h-44 w-full overflow-hidden">
                              <img
                                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80"
                                alt="DLF The Arbour"
                                className="h-full w-full object-cover"
                              />
                              <span className="absolute left-3 top-3 rounded-md uppercase bg-[#009449] px-2 py-0.5 text-[11px] font-normal text-white">
                                Featured
                              </span>
                              <button
                                type="button"
                                className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-gray-600 hover:text-red-500"
                              >
                                <FiHeart className="h-4 w-4" />
                              </button>
                            </div>
                            <div className="p-4">
                              <div className="mb-1 flex items-center justify-between">
                                <span className="text-xs font-medium text-[var(--primary-color)]">
                                  4 BHK Apartment
                                </span>
                                <MdVerified className="h-4 w-4 text-[#009449]" />
                              </div>
                              <h3 className="mb-1 text-sm font-semibold text-gray-900">
                                DLF The Arbour
                              </h3>
                              <p className="mb-3 flex items-center gap-1 text-xs text-gray-500">
                                <FiMapPin className="h-3.5 w-3.5" />
                                Sector 63, Golf Course Extn., Gurugram
                              </p>
                              <div className="mb-3 flex items-center gap-4 text-xs text-gray-500">
                                <span className="flex items-center gap-1">
                                  <FaBed className="h-3.5 w-3.5" /> 4 Beds
                                </span>
                                <span className="flex items-center gap-1">
                                  <FaBath className="h-3.5 w-3.5" /> 4 Baths
                                </span>
                                <span className="flex items-center gap-1">
                                  <FiMaximize2 className="h-3.5 w-3.5" /> 3,956 sq.ft
                                </span>
                              </div>
                              <div className="flex items-center justify-between border-t border-gray-100 pt-3">
                                <div>
                                  <p className="text-base font-bold text-[var(--primary-color)]">
                                    ₹7.25 Cr
                                  </p>
                                  <p className="text-[11px] text-gray-400">
                                    Posted 2 days ago
                                  </p>
                                </div>
                                <button
                                  type="button"
                                  className="rounded-lg border border-gray-300 px-3 py-1.5 text-xs font-semibold text-gray-700 hover:border-gray-400"
                                >
                                  View Details
                                </button>
                              </div>
                            </div>
                          </article>
            
                          {/* Card 2 */}
                          <article className="overflow-hidden rounded-xl border border-gray-200 bg-white transition hover:shadow-md">
                            <div className="relative h-44 w-full overflow-hidden">
                              <img
                                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80"
                                alt="Prestige Lakeshore Heights"
                                className="h-full w-full object-cover"
                              />
                              <span className="absolute left-3 top-3 rounded-md uppercase bg-[#009449] px-2 py-0.5 text-[11px] font-normal text-white">
                                Verified
                              </span>
                              <button
                                type="button"
                                className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-gray-600 hover:text-red-500"
                              >
                                <FiHeart className="h-4 w-4" />
                              </button>
                            </div>
                            <div className="p-4">
                              <div className="mb-1 flex items-center justify-between">
                                <span className="text-xs font-medium text-[var(--primary-color)]">
                                  3 BHK Apartment
                                </span>
                                <MdVerified className="h-4 w-4 text-[#009449]" />
                              </div>
                              <h3 className="mb-1 text-sm font-semibold text-gray-900">
                                Prestige Lakeshore Heights
                              </h3>
                              <p className="mb-3 flex items-center gap-1 text-xs text-gray-500">
                                <FiMapPin className="h-3.5 w-3.5" />
                                Whitefield, Bengaluru
                              </p>
                              <div className="mb-3 flex items-center gap-4 text-xs text-gray-500">
                                <span className="flex items-center gap-1">
                                  <FaBed className="h-3.5 w-3.5" /> 3 Beds
                                </span>
                                <span className="flex items-center gap-1">
                                  <FaBath className="h-3.5 w-3.5" /> 3 Baths
                                </span>
                                <span className="flex items-center gap-1">
                                  <FiMaximize2 className="h-3.5 w-3.5" /> 1,845 sq.ft
                                </span>
                              </div>
                              <div className="flex items-center justify-between border-t border-gray-100 pt-3">
                                <div>
                                  <p className="text-base font-bold text-[var(--primary-color)]">
                                    ₹2.35 Cr
                                  </p>
                                  <p className="text-[11px] text-gray-400">
                                    Posted today
                                  </p>
                                </div>
                                <button
                                  type="button"
                                  className="rounded-lg border border-gray-300 px-3 py-1.5 text-xs font-semibold text-gray-700 hover:border-gray-400"
                                >
                                  View Details
                                </button>
                              </div>
                            </div>
                          </article>
            
                          {/* Card 3 */}
                          <article className="overflow-hidden rounded-xl border border-gray-200 bg-white transition hover:shadow-md">
                            <div className="relative h-44 w-full overflow-hidden">
                              <img
                                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80"
                                alt="Independent Villa"
                                className="h-full w-full object-cover"
                              />
                              <span className="absolute left-3 top-3 rounded-md uppercase bg-[#009449] px-2 py-0.5 text-[11px] font-normal text-white">
                                Premium
                              </span>
                              <button
                                type="button"
                                className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-gray-600 hover:text-red-500"
                              >
                                <FiHeart className="h-4 w-4" />
                              </button>
                            </div>
                            <div className="p-4">
                              <div className="mb-1 flex items-center justify-between">
                                <span className="text-xs font-medium text-[var(--primary-color)]">
                                  4 BHK Villa
                                </span>
                                <MdVerified className="h-4 w-4 text-[#009449]" />
                              </div>
                              <h3 className="mb-1 text-sm font-semibold text-gray-900">
                                Independent Villa
                              </h3>
                              <p className="mb-3 flex items-center gap-1 text-xs text-gray-500">
                                <FiMapPin className="h-3.5 w-3.5" />
                                Sushant Lok Phase I, Gurugram
                              </p>
                              <div className="mb-3 flex items-center gap-4 text-xs text-gray-500">
                                <span className="flex items-center gap-1">
                                  <FaBed className="h-3.5 w-3.5" /> 4 Beds
                                </span>
                                <span className="flex items-center gap-1">
                                  <FaBath className="h-3.5 w-3.5" /> 5 Baths
                                </span>
                                <span className="flex items-center gap-1">
                                  <FiMaximize2 className="h-3.5 w-3.5" /> 4,500 sq.ft
                                </span>
                              </div>
                              <div className="flex items-center justify-between border-t border-gray-100 pt-3">
                                <div>
                                  <p className="text-base font-bold text-[var(--primary-color)]">
                                    ₹8.40 Cr
                                  </p>
                                  <p className="text-[11px] text-gray-400">
                                    Posted 4 days ago
                                  </p>
                                </div>
                                <button
                                  type="button"
                                  className="rounded-lg border border-gray-300 px-3 py-1.5 text-xs font-semibold text-gray-700 hover:border-gray-400"
                                >
                                  View Details
                                </button>
                              </div>
                            </div>
                          </article>
            
                          {/* Card 4 */}
                          <article className="overflow-hidden rounded-xl border border-gray-200 bg-white transition hover:shadow-md">
                            <div className="relative h-44 w-full overflow-hidden">
                              <img
                                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80"
                                alt="Sobha Dream Acres"
                                className="h-full w-full object-cover"
                              />
                              <span className="absolute left-3 top-3 rounded-md uppercase bg-[#009449] px-2 py-0.5 text-[11px] font-normal text-white">
                                Verified
                              </span>
                              <button
                                type="button"
                                className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-gray-600 hover:text-red-500"
                              >
                                <FiHeart className="h-4 w-4" />
                              </button>
                            </div>
                            <div className="p-4">
                              <div className="mb-1 flex items-center justify-between">
                                <span className="text-xs font-medium text-[var(--primary-color)]">
                                  3 BHK Apartment
                                </span>
                                <MdVerified className="h-4 w-4 text-[#009449]" />
                              </div>
                              <h3 className="mb-1 text-sm font-semibold text-gray-900">
                                Sobha Dream Acres
                              </h3>
                              <p className="mb-3 flex items-center gap-1 text-xs text-gray-500">
                                <FiMapPin className="h-3.5 w-3.5" />
                                Panathur Road, Bengaluru
                              </p>
                              <div className="mb-3 flex items-center gap-4 text-xs text-gray-500">
                                <span className="flex items-center gap-1">
                                  <FaBed className="h-3.5 w-3.5" /> 3 Beds
                                </span>
                                <span className="flex items-center gap-1">
                                  <FaBath className="h-3.5 w-3.5" /> 3 Baths
                                </span>
                                <span className="flex items-center gap-1">
                                  <FiMaximize2 className="h-3.5 w-3.5" /> 1,650 sq.ft
                                </span>
                              </div>
                              <div className="flex items-center justify-between border-t border-gray-100 pt-3">
                                <div>
                                  <p className="text-base font-bold text-[var(--primary-color)]">
                                    ₹1.92 Cr
                                  </p>
                                  <p className="text-[11px] text-gray-400">
                                    Posted 1 week ago
                                  </p>
                                </div>
                                <button
                                  type="button"
                                  className="rounded-lg border border-gray-300 px-3 py-1.5 text-xs font-semibold text-gray-700 hover:border-gray-400"
                                >
                                  View Details
                                </button>
                              </div>
                            </div>
                          </article>
            
                          {/* Card 5 */}
                          <article className="overflow-hidden rounded-xl border border-gray-200 bg-white transition hover:shadow-md">
                            <div className="relative h-44 w-full overflow-hidden">
                              <img
                                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80"
                                alt="The Trump Towers"
                                className="h-full w-full object-cover"
                              />
                              <span className="absolute left-3 top-3 rounded-md uppercase bg-[#009449] px-2 py-0.5 text-[11px] font-normal text-white">
                                Featured
                              </span>
                              <button
                                type="button"
                                className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-gray-600 hover:text-red-500"
                              >
                                <FiHeart className="h-4 w-4" />
                              </button>
                            </div>
                            <div className="p-4">
                              <div className="mb-1 flex items-center justify-between">
                                <span className="text-xs font-medium text-[var(--primary-color)]">
                                  3 BHK Apartment
                                </span>
                                <MdVerified className="h-4 w-4 text-[#009449]" />
                              </div>
                              <h3 className="mb-1 text-sm font-semibold text-gray-900">
                                The Trump Towers
                              </h3>
                              <p className="mb-3 flex items-center gap-1 text-xs text-gray-500">
                                <FiMapPin className="h-3.5 w-3.5" />
                                Sector 65, Gurugram
                              </p>
                              <div className="mb-3 flex items-center gap-4 text-xs text-gray-500">
                                <span className="flex items-center gap-1">
                                  <FaBed className="h-3.5 w-3.5" /> 3 Beds
                                </span>
                                <span className="flex items-center gap-1">
                                  <FaBath className="h-3.5 w-3.5" /> 4 Baths
                                </span>
                                <span className="flex items-center gap-1">
                                  <FiMaximize2 className="h-3.5 w-3.5" /> 3,525 sq.ft
                                </span>
                              </div>
                              <div className="flex items-center justify-between border-t border-gray-100 pt-3">
                                <div>
                                  <p className="text-base font-bold text-[var(--primary-color)]">
                                    ₹6.80 Cr
                                  </p>
                                  <p className="text-[11px] text-gray-400">
                                    Posted 3 days ago
                                  </p>
                                </div>
                                <button
                                  type="button"
                                  className="rounded-lg border border-gray-300 px-3 py-1.5 text-xs font-semibold text-gray-700 hover:border-gray-400"
                                >
                                  View Details
                                </button>
                              </div>
                            </div>
                          </article>
            
                          {/* Card 6 */}
                          <article className="overflow-hidden rounded-xl border border-gray-200 bg-white transition hover:shadow-md">
                            <div className="relative h-44 w-full overflow-hidden">
                              <img
                                src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&q=80"
                                alt="Greenwood Residency"
                                className="h-full w-full object-cover"
                              />
                              <span className="absolute left-3 top-3 rounded-md uppercase bg-[#009449] px-2 py-0.5 text-[11px] font-normal text-white">
                                New
                              </span>
                              <button
                                type="button"
                                className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-gray-600 hover:text-red-500"
                              >
                                <FiHeart className="h-4 w-4" />
                              </button>
                            </div>
                            <div className="p-4">
                              <div className="mb-1 flex items-center justify-between">
                                <span className="text-xs font-medium text-[var(--primary-color)]">
                                  2 BHK Apartment
                                </span>
                                <MdVerified className="h-4 w-4 text-[#009449]" />
                              </div>
                              <h3 className="mb-1 text-sm font-semibold text-gray-900">
                                Greenwood Residency
                              </h3>
                              <p className="mb-3 flex items-center gap-1 text-xs text-gray-500">
                                <FiMapPin className="h-3.5 w-3.5" />
                                Hinjewadi Phase 1, Pune
                              </p>
                              <div className="mb-3 flex items-center gap-4 text-xs text-gray-500">
                                <span className="flex items-center gap-1">
                                  <FaBed className="h-3.5 w-3.5" /> 2 Beds
                                </span>
                                <span className="flex items-center gap-1">
                                  <FaBath className="h-3.5 w-3.5" /> 2 Baths
                                </span>
                                <span className="flex items-center gap-1">
                                  <FiMaximize2 className="h-3.5 w-3.5" /> 1,220 sq.ft
                                </span>
                              </div>
                              <div className="flex items-center justify-between border-t border-gray-100 pt-3">
                                <div>
                                  <p className="text-base font-bold text-[var(--primary-color)]">
                                    ₹98 Lakh
                                  </p>
                                  <p className="text-[11px] text-gray-400">
                                    Posted today
                                  </p>
                                </div>
                                <button
                                  type="button"
                                  className="rounded-lg border border-gray-300 px-3 py-1.5 text-xs font-semibold text-gray-700 hover:border-gray-400"
                                >
                                  View Details
                                </button>
                              </div>
                            </div>
                          </article>
                        </div>
                        )}
            
                        {/* Property cards - List view */}
                        {viewMode === "list" && (
                        <div className="flex flex-col gap-4">
                           
                          {/* Row 2 */}
                          <article className="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition hover:shadow-md sm:flex-row">
                            <div className="relative h-48 w-full shrink-0 overflow-hidden sm:h-auto sm:w-64">
                              <img
                                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80"
                                alt="Prestige Lakeshore Heights"
                                className="h-full w-full object-cover"
                              />
                              <span className="absolute left-3 top-3 rounded-md uppercase bg-[#009449] px-2 py-0.5 text-[11px] font-normal text-white">
                                Verified
                              </span>
                            </div>
                            <div className="flex flex-1 flex-col justify-between p-4">
                              <div>
                                <div className="mb-1 flex items-center justify-between">
                                  <span className="text-xs font-medium text-[var(--primary-color)]">
                                    3 BHK Apartment
                                  </span>
                                  <div className="flex items-center gap-2">
                                    <MdVerified className="h-4 w-4 text-[#009449]" />
                                    <button
                                      type="button"
                                      className="flex h-8 w-8 items-center justify-center rounded-full text-gray-400 hover:text-red-500"
                                    >
                                      <FiHeart className="h-4 w-4" />
                                    </button>
                                  </div>
                                </div>
                                <h3 className="mb-1 text-sm font-semibold text-gray-900">
                                  Prestige Lakeshore Heights
                                </h3>
                                <p className="mb-3 flex items-center gap-1 text-xs text-gray-500">
                                  <FiMapPin className="h-3.5 w-3.5" />
                                  Whitefield, Bengaluru
                                </p>
                                <div className="mb-3 flex items-center gap-4 text-xs text-gray-500">
                                  <span className="flex items-center gap-1">
                                    <FaBed className="h-3.5 w-3.5" /> 3 Beds
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <FaBath className="h-3.5 w-3.5" /> 3 Baths
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <FiMaximize2 className="h-3.5 w-3.5" /> 1,845 sq.ft
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-center justify-between border-t border-gray-100 pt-3">
                                <div>
                                  <p className="text-base font-bold text-[var(--primary-color)]">
                                    ₹2.35 Cr
                                  </p>
                                  <p className="text-[11px] text-gray-400">
                                    Posted today
                                  </p>
                                </div>
                                <button
                                  type="button"
                                  className="rounded-lg border border-gray-300 px-3 py-1.5 text-xs font-semibold text-gray-700 hover:border-gray-400"
                                >
                                  View Details
                                </button>
                              </div>
                            </div>
                          </article>
            
                          {/* Row 3 */}
                          <article className="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition hover:shadow-md sm:flex-row">
                            <div className="relative h-48 w-full shrink-0 overflow-hidden sm:h-auto sm:w-64">
                              <img
                                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80"
                                alt="Independent Villa"
                                className="h-full w-full object-cover"
                              />
                              <span className="absolute left-3 top-3 rounded-md uppercase bg-[#009449] px-2 py-0.5 text-[11px] font-normal text-white">
                                Premium
                              </span>
                            </div>
                            <div className="flex flex-1 flex-col justify-between p-4">
                              <div>
                                <div className="mb-1 flex items-center justify-between">
                                  <span className="text-xs font-medium text-[var(--primary-color)]">
                                    4 BHK Villa
                                  </span>
                                  <div className="flex items-center gap-2">
                                    <MdVerified className="h-4 w-4 text-[#009449]" />
                                    <button
                                      type="button"
                                      className="flex h-8 w-8 items-center justify-center rounded-full text-gray-400 hover:text-red-500"
                                    >
                                      <FiHeart className="h-4 w-4" />
                                    </button>
                                  </div>
                                </div>
                                <h3 className="mb-1 text-sm font-semibold text-gray-900">
                                  Independent Villa
                                </h3>
                                <p className="mb-3 flex items-center gap-1 text-xs text-gray-500">
                                  <FiMapPin className="h-3.5 w-3.5" />
                                  Sushant Lok Phase I, Gurugram
                                </p>
                                <div className="mb-3 flex items-center gap-4 text-xs text-gray-500">
                                  <span className="flex items-center gap-1">
                                    <FaBed className="h-3.5 w-3.5" /> 4 Beds
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <FaBath className="h-3.5 w-3.5" /> 5 Baths
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <FiMaximize2 className="h-3.5 w-3.5" /> 4,500 sq.ft
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-center justify-between border-t border-gray-100 pt-3">
                                <div>
                                  <p className="text-base font-bold text-[var(--primary-color)]">
                                    ₹8.40 Cr
                                  </p>
                                  <p className="text-[11px] text-gray-400">
                                    Posted 4 days ago
                                  </p>
                                </div>
                                <button
                                  type="button"
                                  className="rounded-lg border border-gray-300 px-3 py-1.5 text-xs font-semibold text-gray-700 hover:border-gray-400"
                                >
                                  View Details
                                </button>
                              </div>
                            </div>
                          </article>
            
                          {/* Row 4 */}
                          <article className="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition hover:shadow-md sm:flex-row">
                            <div className="relative h-48 w-full shrink-0 overflow-hidden sm:h-auto sm:w-64">
                              <img
                                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80"
                                alt="Sobha Dream Acres"
                                className="h-full w-full object-cover"
                              />
                              <span className="absolute left-3 top-3 rounded-md uppercase bg-[#009449] px-2 py-0.5 text-[11px] font-normal text-white">
                                Verified
                              </span>
                            </div>
                            <div className="flex flex-1 flex-col justify-between p-4">
                              <div>
                                <div className="mb-1 flex items-center justify-between">
                                  <span className="text-xs font-medium text-[var(--primary-color)]">
                                    3 BHK Apartment
                                  </span>
                                  <div className="flex items-center gap-2">
                                    <MdVerified className="h-4 w-4 text-[#009449]" />
                                    <button
                                      type="button"
                                      className="flex h-8 w-8 items-center justify-center rounded-full text-gray-400 hover:text-red-500"
                                    >
                                      <FiHeart className="h-4 w-4" />
                                    </button>
                                  </div>
                                </div>
                                <h3 className="mb-1 text-sm font-semibold text-gray-900">
                                  Sobha Dream Acres
                                </h3>
                                <p className="mb-3 flex items-center gap-1 text-xs text-gray-500">
                                  <FiMapPin className="h-3.5 w-3.5" />
                                  Panathur Road, Bengaluru
                                </p>
                                <div className="mb-3 flex items-center gap-4 text-xs text-gray-500">
                                  <span className="flex items-center gap-1">
                                    <FaBed className="h-3.5 w-3.5" /> 3 Beds
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <FaBath className="h-3.5 w-3.5" /> 3 Baths
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <FiMaximize2 className="h-3.5 w-3.5" /> 1,650 sq.ft
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-center justify-between border-t border-gray-100 pt-3">
                                <div>
                                  <p className="text-base font-bold text-[var(--primary-color)]">
                                    ₹1.92 Cr
                                  </p>
                                  <p className="text-[11px] text-gray-400">
                                    Posted 1 week ago
                                  </p>
                                </div>
                                <button
                                  type="button"
                                  className="rounded-lg border border-gray-300 px-3 py-1.5 text-xs font-semibold text-gray-700 hover:border-gray-400"
                                >
                                  View Details
                                </button>
                              </div>
                            </div>
                          </article>
            
                          {/* Row 5 */}
                          <article className="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition hover:shadow-md sm:flex-row">
                            <div className="relative h-48 w-full shrink-0 overflow-hidden sm:h-auto sm:w-64">
                              <img
                                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80"
                                alt="The Trump Towers"
                                className="h-full w-full object-cover"
                              />
                              <span className="absolute left-3 top-3 rounded-md uppercase bg-[#009449] px-2 py-0.5 text-[11px] font-normal text-white">
                                Featured
                              </span>
                            </div>
                            <div className="flex flex-1 flex-col justify-between p-4">
                              <div>
                                <div className="mb-1 flex items-center justify-between">
                                  <span className="text-xs font-medium text-[var(--primary-color)]">
                                    3 BHK Apartment
                                  </span>
                                  <div className="flex items-center gap-2">
                                    <MdVerified className="h-4 w-4 text-[#009449]" />
                                    <button
                                      type="button"
                                      className="flex h-8 w-8 items-center justify-center rounded-full text-gray-400 hover:text-red-500"
                                    >
                                      <FiHeart className="h-4 w-4" />
                                    </button>
                                  </div>
                                </div>
                                <h3 className="mb-1 text-sm font-semibold text-gray-900">
                                  The Trump Towers
                                </h3>
                                <p className="mb-3 flex items-center gap-1 text-xs text-gray-500">
                                  <FiMapPin className="h-3.5 w-3.5" />
                                  Sector 65, Gurugram
                                </p>
                                <div className="mb-3 flex items-center gap-4 text-xs text-gray-500">
                                  <span className="flex items-center gap-1">
                                    <FaBed className="h-3.5 w-3.5" /> 3 Beds
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <FaBath className="h-3.5 w-3.5" /> 4 Baths
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <FiMaximize2 className="h-3.5 w-3.5" /> 3,525 sq.ft
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-center justify-between border-t border-gray-100 pt-3">
                                <div>
                                  <p className="text-base font-bold text-[var(--primary-color)]">
                                    ₹6.80 Cr
                                  </p>
                                  <p className="text-[11px] text-gray-400">
                                    Posted 3 days ago
                                  </p>
                                </div>
                                <button
                                  type="button"
                                  className="rounded-lg border border-gray-300 px-3 py-1.5 text-xs font-semibold text-gray-700 hover:border-gray-400"
                                >
                                  View Details
                                </button>
                              </div>
                            </div>
                          </article>
            
                          {/* Row 6 */}
                          <article className="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition hover:shadow-md sm:flex-row">
                            <div className="relative h-48 w-full shrink-0 overflow-hidden sm:h-auto sm:w-64">
                              <img
                                src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&q=80"
                                alt="Greenwood Residency"
                                className="h-full w-full object-cover"
                              />
                              <span className="absolute left-3 top-3 rounded-md uppercase bg-[#009449] px-2 py-0.5 text-[11px] font-normal text-white">
                                New
                              </span>
                            </div>
                            <div className="flex flex-1 flex-col justify-between p-4">
                              <div>
                                <div className="mb-1 flex items-center justify-between">
                                  <span className="text-xs font-medium text-[var(--primary-color)]">
                                    2 BHK Apartment
                                  </span>
                                  <div className="flex items-center gap-2">
                                    <MdVerified className="h-4 w-4 text-[#009449]" />
                                    <button
                                      type="button"
                                      className="flex h-8 w-8 items-center justify-center rounded-full text-gray-400 hover:text-red-500"
                                    >
                                      <FiHeart className="h-4 w-4" />
                                    </button>
                                  </div>
                                </div>
                                <h3 className="mb-1 text-sm font-semibold text-gray-900">
                                  Greenwood Residency
                                </h3>
                                <p className="mb-3 flex items-center gap-1 text-xs text-gray-500">
                                  <FiMapPin className="h-3.5 w-3.5" />
                                  Hinjewadi Phase 1, Pune
                                </p>
                                <div className="mb-3 flex items-center gap-4 text-xs text-gray-500">
                                  <span className="flex items-center gap-1">
                                    <FaBed className="h-3.5 w-3.5" /> 2 Beds
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <FaBath className="h-3.5 w-3.5" /> 2 Baths
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <FiMaximize2 className="h-3.5 w-3.5" /> 1,220 sq.ft
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-center justify-between border-t border-gray-100 pt-3">
                                <div>
                                  <p className="text-base font-bold text-[var(--primary-color)]">
                                    ₹98 Lakh
                                  </p>
                                  <p className="text-[11px] text-gray-400">
                                    Posted today
                                  </p>
                                </div>
                                <button
                                  type="button"
                                  className="rounded-lg border border-gray-300 px-3 py-1.5 text-xs font-semibold text-gray-700 hover:border-gray-400"
                                >
                                  View Details
                                </button>
                              </div>
                            </div>
                          </article>
                        </div>
                        )}
                      </main>
        </>
    )
}
