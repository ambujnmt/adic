import React from 'react'
import { Link } from "@heroui/react";
import { FaArrowRight } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FiMapPin } from "react-icons/fi";

export default function FeaturedProperties() {
    return (
        <>
            <section className="container-fluid px-[15px]">
                {/* Header */}
                <div className="grid grid-cols-12 gap-4 mt-[60px]">
                    <div className="hidden lg:block lg:col-span-1"></div>
                    <div className="col-span-12 xl:col-span-10 lg:col-span-10 gap-4 flex flex-col sm:flex-row items-start sm:items-center justify-between">
                        <div className="">
                            <h2 className="text-[22px] sm:text-[28px] font-bold text-[var(--text-color1)]">
                                Featured Properties
                            </h2>
                            <p className="text-[14px] sm:text-[16px] text-[var(--text-color2)] mb-4">
                                Handpicked residential, commercial and land listings across prime Indian micro-markets
                            </p>
                        </div>
                        <div className="">
                            <Link href="#">
                                <h6 className="text-[var(--text-color3)] text-[15px] font-semibold flex items-center hover:text-[var(--primary-color)]">View All Properties &nbsp; <FaArrowRight /></h6>
                            </Link>
                        </div>
                    </div>
                    <div className="hidden lg:block lg:col-span-1"></div>
                </div>

                <div className="grid grid-cols-12 gap-4 mt-[30px]">
                    {/* Home Loan Widget */}
                    <div className="col-span-12 sm:col-span-6 lg:col-span-1 order-1 lg:order-1">
                        <div className="bg-[var(--secondary-color)] p-2 rounded-lg">
                            <h6 className="text-[var(--primary-color)] text-[10px] mb-[10px] text-center">LOW INTEREST</h6>
                            <h3 className="text-white text-[24px] font-bold leading-[33px] mb-[10px] text-center">HOME LOAN</h3>
                            <p className="text-white/80 text-[10px] mb-[8px] text-center">Interest Rate</p>
                            <h2 className="text-[var(--primary-color)] text-[21px] font-bold text-center">8.40%*</h2>
                            <p className="text-white/80 text-[10px] mb-[8px] text-center">p.a.</p>
                            <div className="border border-slate-500 w-full my-[15px]"></div>
                            <p className="text-white/80 text-[10px] mb-[5px]">Quick Approval</p>
                            <p className="text-white/80 text-[10px] mb-[5px]">Lowest Interest</p>
                            <p className="text-white/80 text-[10px] mb-[5px]">Minimal Docs</p>
                            <p className="text-white/80 text-[10px] mb-[5px]">Trusted Partners</p>
                            <Link href="#" className="mt-[20px] flex items-center justify-center hover:bg-[var(--secondary-color)] text-white px-1 py-2 rounded-lg border text-[11px] font-medium leading-[100%] bg-[var(--primary-color)] hover:text-white transition-all duration-500 ease-in-out">
                                APPLY NOW
                            </Link>
                            <img src="/assets/img/property-img.png" alt="Featured Properties" className="w-full h-[70px] object-cover mt-4 rounded-lg" />
                        </div>
                    </div>

                    {/* Property Cards */}
                    <div className="col-span-12 sm:col-span-12 lg:col-span-10 gap-4 order-3 lg:order-2">
                        <div className="grid grid-cols-12 gap-4">

                            <div className="col-span-12 xl:col-span-3 lg:col-span-3 md:col-span-6">
                                <div className="bg-white rounded-lg shadow-md overflow-hidden relative mb-4">
                                    <img src="/assets/img/prop-1.png" alt="Property 1" className="w-full h-48 object-cover" />
                                    <div className="">
                                        <div className="absolute top-[10px] left-[10px] bg-[#22C55E] text-white px-2 py-1 rounded-md">
                                            <p className="text-[11px] font-bold">FEATURED</p>
                                        </div>
                                        <div className="absolute top-[10px] right-[10px] w-[30px] h-[30px] p-[4px] bg-black/40 text-[#fff] rounded-full flex items-center justify-center cursor-pointer hover:bg-[var(--primary-color)] hover:text-[#fff] transition-all duration-500 ease-in-out">
                                            <CiHeart />
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-[16px] font-semibold text-[var(--text-color1)]">2 BHK Apartment</h3>
                                        <p className="text-[12px] text-[var(--text-color2)] mt-2 flex items-center"><FiMapPin />&nbsp; Sector 137, Noida</p>
                                        <h5 className="text-[18px] font-bold text-[var(--primary-color)] mt-1">₹78.60 Lakh</h5>
                                        <div className="border border-slate-200 w-full my-[9px]"></div>
                                        <div className="flex items-center justify-between mt-2">
                                            <p className="text-[11px] text-[var(--text-color2)]">1050 Sq.Ft.</p>
                                            <p className="text-[11px] text-[var(--text-color1)]">Ready to Move</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 xl:col-span-3 lg:col-span-3 md:col-span-6">
                                <div className="bg-white rounded-lg shadow-md overflow-hidden relative mb-4">
                                    <img src="/assets/img/prop-2.png" alt="Property 1" className="w-full h-48 object-cover" />
                                    <div className="">
                                        <div className="absolute top-[10px] left-[10px] bg-[var(--primary-color)] text-white px-2 py-1 rounded-md">
                                            <p className="text-[11px] font-bold">PREMIUM</p>
                                        </div>
                                        <div className="absolute top-[10px] right-[10px] w-[30px] h-[30px] p-[4px] bg-black/40 text-[#fff] rounded-full flex items-center justify-center cursor-pointer hover:bg-[var(--primary-color)] hover:text-[#fff] transition-all duration-500 ease-in-out">
                                            <CiHeart />
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-[16px] font-semibold text-[var(--text-color1)]">4 BHK Villa</h3>
                                        <p className="text-[12px] text-[var(--text-color2)] mt-2 flex items-center"><FiMapPin />&nbsp; Indirapuram, Ghaziabad</p>
                                        <h5 className="text-[18px] font-bold text-[var(--primary-color)] mt-1">₹1.25 Cr</h5>
                                        <div className="border border-slate-200 w-full my-[9px]"></div>
                                        <div className="flex items-center justify-between mt-2">
                                            <p className="text-[11px] text-[var(--text-color2)]">2300 Sq.Ft.</p>
                                            <p className="text-[11px] text-[var(--text-color1)]">Under Construction</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 xl:col-span-3 lg:col-span-3 md:col-span-6">
                                <div className="bg-white rounded-lg shadow-md overflow-hidden relative mb-4">
                                    <img src="/assets/img/prop-3.png" alt="Property 1" className="w-full h-48 object-cover" />
                                    <div className="">
                                        <div className="absolute top-[10px] left-[10px] bg-[#3B82F6] text-white px-2 py-1 rounded-md">
                                            <p className="text-[11px] font-bold">NEW</p>
                                        </div>
                                        <div className="absolute top-[10px] right-[10px] w-[30px] h-[30px] p-[4px] bg-black/40 text-[#fff] rounded-full flex items-center justify-center cursor-pointer hover:bg-[var(--primary-color)] hover:text-[#fff] transition-all duration-500 ease-in-out">
                                            <CiHeart />
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-[16px] font-semibold text-[var(--text-color1)]">Plot / Land</h3>
                                        <p className="text-[12px] text-[var(--text-color2)] mt-2 flex items-center"><FiMapPin />&nbsp; Sushant Golf City, Lucknow</p>
                                        <h5 className="text-[18px] font-bold text-[var(--primary-color)] mt-1">₹45.50 Lakh</h5>
                                        <div className="border border-slate-200 w-full my-[9px]"></div>
                                        <div className="flex items-center justify-between mt-2">
                                            <p className="text-[11px] text-[var(--text-color2)]">1200 Sq.Ft.</p>
                                            <p className="text-[11px] text-[var(--text-color1)]">Residential Plot</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 xl:col-span-3 lg:col-span-3 md:col-span-6">
                                <div className="bg-white rounded-lg shadow-md overflow-hidden relative mb-4">
                                    <img src="/assets/img/prop-4.png" alt="Property 1" className="w-full h-48 object-cover" />
                                    <div className="">
                                        <div className="absolute top-[10px] left-[10px] bg-[#22C55E] text-white px-2 py-1 rounded-md">
                                            <p className="text-[11px] font-bold">FEATURED</p>
                                        </div>
                                        <div className="absolute top-[10px] right-[10px] w-[30px] h-[30px] p-[4px] bg-black/40 text-[#fff] rounded-full flex items-center justify-center cursor-pointer hover:bg-[var(--primary-color)] hover:text-[#fff] transition-all duration-500 ease-in-out">
                                            <CiHeart />
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-[16px] font-semibold text-[var(--text-color1)]">3 BHK Independent House</h3>
                                        <p className="text-[12px] text-[var(--text-color2)] mt-2 flex items-center"><FiMapPin />&nbsp; Varanasi, Uttar Pradesh</p>
                                        <h5 className="text-[18px] font-bold text-[var(--primary-color)] mt-1">₹90.00 Lakh</h5>
                                        <div className="border border-slate-200 w-full my-[9px]"></div>
                                        <div className="flex items-center justify-between mt-2">
                                            <p className="text-[11px] text-[var(--text-color2)]">1650 Sq.Ft.</p>
                                            <p className="text-[11px] text-[var(--text-color1)]">Ready to Move</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 xl:col-span-3 lg:col-span-3 md:col-span-6">
                                <div className="bg-white rounded-lg shadow-md overflow-hidden relative mb-4">
                                    <img src="/assets/img/prop-5.png" alt="Property 1" className="w-full h-48 object-cover" />
                                    <div className="">
                                        <div className="absolute top-[10px] left-[10px] bg-[#E87722] text-white px-2 py-1 rounded-md">
                                            <p className="text-[11px] font-bold">PREMIUM</p>
                                        </div>
                                        <div className="absolute top-[10px] right-[10px] w-[30px] h-[30px] p-[4px] bg-black/40 text-[#fff] rounded-full flex items-center justify-center cursor-pointer hover:bg-[var(--primary-color)] hover:text-[#fff] transition-all duration-500 ease-in-out">
                                            <CiHeart />
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-[16px] font-semibold text-[var(--text-color1)]">Office Space</h3>
                                        <p className="text-[12px] text-[var(--text-color2)] mt-2 flex items-center"><FiMapPin />&nbsp; Sector 62, Noida</p>
                                        <h5 className="text-[18px] font-bold text-[var(--primary-color)] mt-1">₹78.60 Lakh</h5>
                                        <div className="border border-slate-200 w-full my-[9px]"></div>
                                        <div className="flex items-center justify-between mt-2">
                                            <p className="text-[11px] text-[var(--text-color2)]">1050 Sq.Ft.</p>
                                            <p className="text-[11px] text-[var(--text-color1)]">Ready to Move</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 xl:col-span-3 lg:col-span-3 md:col-span-6">
                                <div className="bg-white rounded-lg shadow-md overflow-hidden relative mb-4">
                                    <img src="/assets/img/prop-6.png" alt="Property 1" className="w-full h-48 object-cover" />
                                    <div className="">
                                        <div className="absolute top-[10px] left-[10px] bg-[var(--primary-color)] text-white px-2 py-1 rounded-md">
                                            <p className="text-[11px] font-bold">PREMIUM</p>
                                        </div>
                                        <div className="absolute top-[10px] right-[10px] w-[30px] h-[30px] p-[4px] bg-black/40 text-[#fff] rounded-full flex items-center justify-center cursor-pointer hover:bg-[var(--primary-color)] hover:text-[#fff] transition-all duration-500 ease-in-out">
                                            <CiHeart />
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-[16px] font-semibold text-[var(--text-color1)]">4 BHK Villa</h3>
                                        <p className="text-[12px] text-[var(--text-color2)] mt-2 flex items-center"><FiMapPin />&nbsp; Indirapuram, Ghaziabad</p>
                                        <h5 className="text-[18px] font-bold text-[var(--primary-color)] mt-1">₹1.25 Cr</h5>
                                        <div className="border border-slate-200 w-full my-[9px]"></div>
                                        <div className="flex items-center justify-between mt-2">
                                            <p className="text-[11px] text-[var(--text-color2)]">2300 Sq.Ft.</p>
                                            <p className="text-[11px] text-[var(--text-color1)]">Under Construction</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 xl:col-span-3 lg:col-span-3 md:col-span-6">
                                <div className="bg-white rounded-lg shadow-md overflow-hidden relative mb-4">
                                    <img src="/assets/img/prop-7.png" alt="Property 1" className="w-full h-48 object-cover" />
                                    <div className="">
                                        <div className="absolute top-[10px] left-[10px] bg-[#3B82F6] text-white px-2 py-1 rounded-md">
                                            <p className="text-[11px] font-bold">NEW</p>
                                        </div>
                                        <div className="absolute top-[10px] right-[10px] w-[30px] h-[30px] p-[4px] bg-black/40 text-[#fff] rounded-full flex items-center justify-center cursor-pointer hover:bg-[var(--primary-color)] hover:text-[#fff] transition-all duration-500 ease-in-out">
                                            <CiHeart />
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-[16px] font-semibold text-[var(--text-color1)]">Plot / Land</h3>
                                        <p className="text-[12px] text-[var(--text-color2)] mt-2 flex items-center"><FiMapPin />&nbsp; Sushant Golf City, Lucknow</p>
                                        <h5 className="text-[18px] font-bold text-[var(--primary-color)] mt-1">₹45.50 Lakh</h5>
                                        <div className="border border-slate-200 w-full my-[9px]"></div>
                                        <div className="flex items-center justify-between mt-2">
                                            <p className="text-[11px] text-[var(--text-color2)]">1200 Sq.Ft.</p>
                                            <p className="text-[11px] text-[var(--text-color1)]">Residential Plot</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 xl:col-span-3 lg:col-span-3 md:col-span-6">
                                <div className="bg-white rounded-lg shadow-md overflow-hidden relative mb-4">
                                    <img src="/assets/img/prop-8.png" alt="Property 1" className="w-full h-48 object-cover" />
                                    <div className="">
                                        <div className="absolute top-[10px] left-[10px] bg-[#22C55E] text-white px-2 py-1 rounded-md">
                                            <p className="text-[11px] font-bold">FEATURED</p>
                                        </div>
                                        <div className="absolute top-[10px] right-[10px] w-[30px] h-[30px] p-[4px] bg-black/40 text-[#fff] rounded-full flex items-center justify-center cursor-pointer hover:bg-[var(--primary-color)] hover:text-[#fff] transition-all duration-500 ease-in-out">
                                            <CiHeart />
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-[16px] font-semibold text-[var(--text-color1)]">3 BHK Independent House</h3>
                                        <p className="text-[12px] text-[var(--text-color2)] mt-2 flex items-center"><FiMapPin />&nbsp; Varanasi, Uttar Pradesh</p>
                                        <h5 className="text-[18px] font-bold text-[var(--primary-color)] mt-1">₹90.00 Lakh</h5>
                                        <div className="border border-slate-200 w-full my-[9px]"></div>
                                        <div className="flex items-center justify-between mt-2">
                                            <p className="text-[11px] text-[var(--text-color2)]">1650 Sq.Ft.</p>
                                            <p className="text-[11px] text-[var(--text-color1)]">Ready to Move</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 xl:col-span-3 lg:col-span-3 md:col-span-6">
                                <div className="bg-white rounded-lg shadow-md overflow-hidden relative mb-4">
                                    <img src="/assets/img/prop-9.png" alt="Property 1" className="w-full h-48 object-cover" />
                                    <div className="">
                                        <div className="absolute top-[10px] left-[10px] bg-[#22C55E] text-white px-2 py-1 rounded-md">
                                            <p className="text-[11px] font-bold">FEATURED</p>
                                        </div>
                                        <div className="absolute top-[10px] right-[10px] w-[30px] h-[30px] p-[4px] bg-black/40 text-[#fff] rounded-full flex items-center justify-center cursor-pointer hover:bg-[var(--primary-color)] hover:text-[#fff] transition-all duration-500 ease-in-out">
                                            <CiHeart />
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-[16px] font-semibold text-[var(--text-color1)]">2 BHK Apartment</h3>
                                        <p className="text-[12px] text-[var(--text-color2)] mt-2 flex items-center"><FiMapPin />&nbsp; Sector 137, Noida</p>
                                        <h5 className="text-[18px] font-bold text-[var(--primary-color)] mt-1">₹78.60 Lakh</h5>
                                        <div className="border border-slate-200 w-full my-[9px]"></div>
                                        <div className="flex items-center justify-between mt-2">
                                            <p className="text-[11px] text-[var(--text-color2)]">1050 Sq.Ft.</p>
                                            <p className="text-[11px] text-[var(--text-color1)]">Ready to Move</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 xl:col-span-3 lg:col-span-3 md:col-span-6">
                                <div className="bg-white rounded-lg shadow-md overflow-hidden relative mb-4">
                                    <img src="/assets/img/prop-10.png" alt="Property 1" className="w-full h-48 object-cover" />
                                    <div className="">
                                        <div className="absolute top-[10px] left-[10px] bg-[var(--primary-color)] text-white px-2 py-1 rounded-md">
                                            <p className="text-[11px] font-bold">PREMIUM</p>
                                        </div>
                                        <div className="absolute top-[10px] right-[10px] w-[30px] h-[30px] p-[4px] bg-black/40 text-[#fff] rounded-full flex items-center justify-center cursor-pointer hover:bg-[var(--primary-color)] hover:text-[#fff] transition-all duration-500 ease-in-out">
                                            <CiHeart />
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-[16px] font-semibold text-[var(--text-color1)]">4 BHK Villa</h3>
                                        <p className="text-[12px] text-[var(--text-color2)] mt-2 flex items-center"><FiMapPin />&nbsp; Indirapuram, Ghaziabad</p>
                                        <h5 className="text-[18px] font-bold text-[var(--primary-color)] mt-1">₹1.25 Cr</h5>
                                        <div className="border border-slate-200 w-full my-[9px]"></div>
                                        <div className="flex items-center justify-between mt-2">
                                            <p className="text-[11px] text-[var(--text-color2)]">2300 Sq.Ft.</p>
                                            <p className="text-[11px] text-[var(--text-color1)]">Under Construction</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 xl:col-span-3 lg:col-span-3 md:col-span-6">
                                <div className="bg-white rounded-lg shadow-md overflow-hidden relative mb-4">
                                    <img src="/assets/img/prop-11.png" alt="Property 1" className="w-full h-48 object-cover" />
                                    <div className="">
                                        <div className="absolute top-[10px] left-[10px] bg-[#3B82F6] text-white px-2 py-1 rounded-md">
                                            <p className="text-[11px] font-bold">NEW</p>
                                        </div>
                                        <div className="absolute top-[10px] right-[10px] w-[30px] h-[30px] p-[4px] bg-black/40 text-[#fff] rounded-full flex items-center justify-center cursor-pointer hover:bg-[var(--primary-color)] hover:text-[#fff] transition-all duration-500 ease-in-out">
                                            <CiHeart />
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-[16px] font-semibold text-[var(--text-color1)]">Plot / Land</h3>
                                        <p className="text-[12px] text-[var(--text-color2)] mt-2 flex items-center"><FiMapPin />&nbsp; Sushant Golf City, Lucknow</p>
                                        <h5 className="text-[18px] font-bold text-[var(--primary-color)] mt-1">₹45.50 Lakh</h5>
                                        <div className="border border-slate-200 w-full my-[9px]"></div>
                                        <div className="flex items-center justify-between mt-2">
                                            <p className="text-[11px] text-[var(--text-color2)]">1200 Sq.Ft.</p>
                                            <p className="text-[11px] text-[var(--text-color1)]">Residential Plot</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 xl:col-span-3 lg:col-span-3 md:col-span-6">
                                <div className="bg-white rounded-lg shadow-md overflow-hidden relative mb-4">
                                    <img src="/assets/img/prop-12.png" alt="Property 1" className="w-full h-48 object-cover" />
                                    <div className="">
                                        <div className="absolute top-[10px] left-[10px] bg-[#22C55E] text-white px-2 py-1 rounded-md">
                                            <p className="text-[11px] font-bold">FEATURED</p>
                                        </div>
                                        <div className="absolute top-[10px] right-[10px] w-[30px] h-[30px] p-[4px] bg-black/40 text-[#fff] rounded-full flex items-center justify-center cursor-pointer hover:bg-[var(--primary-color)] hover:text-[#fff] transition-all duration-500 ease-in-out">
                                            <CiHeart />
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-[16px] font-semibold text-[var(--text-color1)]">3 BHK Independent House</h3>
                                        <p className="text-[12px] text-[var(--text-color2)] mt-2 flex items-center"><FiMapPin />&nbsp; Varanasi, Uttar Pradesh</p>
                                        <h5 className="text-[18px] font-bold text-[var(--primary-color)] mt-1">₹90.00 Lakh</h5>
                                        <div className="border border-slate-200 w-full my-[9px]"></div>
                                        <div className="flex items-center justify-between mt-2">
                                            <p className="text-[11px] text-[var(--text-color2)]">1650 Sq.Ft.</p>
                                            <p className="text-[11px] text-[var(--text-color1)]">Ready to Move</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-12 order-4">
                                <Link href="#" className="flex items-center justify-center hover:bg-[var(--secondary-color)] text-[var(--secondary-color)] px-3 py-4 rounded-lg border text-[15px] font-medium leading-[100%] border-[var(--secondary-color)] hover:text-white transition-all duration-500 ease-in-out w-max mx-auto">
                                    View More Properties
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Gold Loan Widget */}
                    <div className="col-span-12 sm:col-span-6 lg:col-span-1 order-2 lg:order-3">
                        <div className="bg-[var(--secondary-color)] p-2 rounded-lg">
                            <h6 className="text-[var(--primary-color)] text-[10px] mb-[10px] text-center">GET INSTANT</h6>
                            <h3 className="text-white text-[24px] font-bold leading-[33px] mb-[10px] text-center">GOLD LOAN</h3>
                            <p className="text-white/80 text-[10px] mb-[8px] text-center">Loan Upto</p>
                            <h2 className="text-[var(--primary-color)] text-[21px] font-bold text-center">₹20 Lakhs*</h2>
                            <p className="text-white/80 text-[10px] mb-[8px] text-center">Instant Disbursal</p>
                            <div className="border border-slate-500 w-full my-[15px]"></div>
                            <p className="text-white/80 text-[10px] mb-[5px]">Quick Disbursal</p>
                            <p className="text-white/80 text-[10px] mb-[5px]">Minimal Documents</p>
                            <p className="text-white/80 text-[10px] mb-[5px]">Lowest Interest</p>
                            <p className="text-white/80 text-[10px] mb-[5px]">Trusted Partners</p>
                            <Link href="#" className="mt-[20px] flex items-center justify-center hover:bg-[var(--secondary-color)] text-white px-1 py-2 rounded-lg border text-[11px] font-medium leading-[100%] bg-[var(--primary-color)] hover:text-white transition-all duration-500 ease-in-out">
                                APPLY NOW
                            </Link>
                            <img src="/assets/img/gold-loan.png" alt="Featured Properties" className="w-full h-[70px] object-cover mt-4 rounded-lg" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
