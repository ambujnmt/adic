import React from 'react';
import { FaChevronDown } from "react-icons/fa";


export default function SmileJourney() {
    return (
        <>
            <section className="mt-[50px] bg-[#f7f5f2] py-[60px]">
                <div className="container">
                    <div className="grid grid-cols-12 xl:gap-10 lg:gap-10 gap-4">
                        <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12">
                            <h3 className="text-[var(--primary-color)] xl:text-[44px] lg:text-[44px] text-[30px] xl:leading-[50px] lg:leading-[50px] leading-[35px] font-semibold mb-2">let’s Start your smile journey</h3>
                            <p className="xl:text-[20px] lg:text-[20px] text-[16px] font-normal text-[var(--text-color1)] xl:leading-[30px] lg:leading-[30px] leading-[24px]">Share a few details and our team will follow up to schedule your evaluation.</p>
                            <div class="border-b border-b-[var(--secondary-color)] w-[90%] my-5"></div>
                            <p className="xl:text-[20px] lg:text-[20px] text-[16px] font-normal text-[var(--text-color1)] xl:leading-[30px] lg:leading-[30px] leading-[24px]">Prefer to talk? <span className="text-[var(--secondary-color)]"> (940) 489-8181</span></p>
                            <p className="xl:text-[20px] lg:text-[20px] text-[16px] font-normal text-[var(--text-color1)] xl:leading-[30px] lg:leading-[30px] leading-[24px]">Hours: Mon–Thu 9:00am to 5:00pm ( Fri 9:00am to 1:00pm)</p>
                        </div>

                        {/* Form column */}
                        <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12">
                            <div className="bg-white p-5 rounded-lg">
                                {/* Heading */}
                                <p className="text-[13px] font-bold tracking-wide text-gray-800 mb-3">
                                    HOW CAN WE HELP
                                </p>
                    
                                {/* Toggle: Consultation / Appointment */}
                                <div className="flex flex-col sm:flex-row gap-3 mb-6">
                                    <label className="flex-1 flex items-center gap-3 rounded-xl border-1 border-[#93753B] px-4 py-3 cursor-pointer">
                                        <span className="relative flex-shrink-0 w-4 h-4 rounded-full border-1 border-[#102240] flex items-center justify-center">
                                            <span className="w-2 h-2 rounded-full bg-[#c9a25f]" />
                                        </span>
                                        <span className="text-[14px] sm:text-[15px] font-medium text-[#1e2a3a]">
                                            Request a Consultation
                                        </span>
                                    </label>
                    
                                    <label className="flex-1 flex items-center gap-3 rounded-xl border border-gray-300 px-4 py-3 cursor-pointer">
                                        <span className="relative flex-shrink-0 w-4 h-4 rounded-full border-2 border-gray-300" />
                                        <span className="text-[14px] sm:text-[15px] font-medium text-[#1e2a3a]">
                                            Request an Appointment
                                        </span>
                                    </label>
                                </div>
                    
                                {/* First / Last Name */}
                                <div className="flex flex-col sm:flex-row gap-4 mb-5">
                                    <div className="flex-1">
                                        <label className="block text-[14px] font-medium text-[#1e2a3a] mb-2">
                                            First Name <span className="text-[#c9a25f]">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Your First Name"
                                            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-[14px] text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#c9a25f]"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <label className="block text-[14px] font-medium text-[#1e2a3a] mb-2">
                                            Last Name<span className="text-[#c9a25f]">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Your Last Name"
                                            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-[14px] text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#c9a25f]"
                                        />
                                    </div>
                                </div>
                    
                                {/* Phone / Email */}
                                <div className="flex flex-col sm:flex-row gap-4 mb-5">
                                    <div className="flex-1">
                                        <label className="block text-[14px] font-medium text-[#1e2a3a] mb-2">
                                            Phone Number <span className="text-[#c9a25f]">*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            placeholder="Enter Your Number"
                                            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-[14px] text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#c9a25f]"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <label className="block text-[14px] font-medium text-[#1e2a3a] mb-2">
                                            Email<span className="text-[#c9a25f]">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="your@email.com"
                                            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-[14px] text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#c9a25f]"
                                        />
                                    </div>
                                </div>
                    
                                {/* Area of interest */}
                                <div className="mb-6">
                                    <label className="block text-[14px] font-medium text-[#1e2a3a] mb-2">
                                        Area of interest <span className="text-[#c9a25f]">*</span>
                                    </label>
                                    <div className="relative">
                                        <select
                                            defaultValue="Dental Implant"
                                            className="w-full appearance-none rounded-lg border border-gray-300 px-4 py-3 pr-10 text-[14px] text-gray-700 bg-white focus:outline-none focus:border-[#c9a25f]"
                                        >
                                            <option value="Dental Implant">Dental Implant</option>
                                            <option value="Teeth Whitening">Teeth Whitening</option>
                                            <option value="Root Canal">Root Canal</option>
                                            <option value="Braces">Braces</option>
                                        </select>
                                        <FaChevronDown
                                            size={13}
                                            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-700"
                                        />
                                    </div>
                                </div>
                    
                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full text-white text-[16px] font-bold border border-[var(--secondary-color)] bg-[var(--secondary-color)] py-[12px] px-[25px] rounded-md hover:bg-[var(--primary-color)] hover:text-white duration-300 ease-in-out transition-all"
                                >
                                    REQUEST A CONSULTATION
                                </button>
                            </div>
                        </div>
                        {/* // Form column */}
                    </div>
                </div>
            </section>
        </>
    )
}
