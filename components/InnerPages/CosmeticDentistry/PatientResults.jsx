"use client"; 
import { useState } from "react";

export default function PatientResults() {

    const [activeFilter, setActiveFilter] = useState("All");
 
    const tabClass = (tab) =>
    activeFilter === tab
        ? "rounded-md bg-[var(--secondary-color)] px-4 py-2 text-[14px] font-medium text-white"
        : "rounded-md bg-[#E0DED8] px-4 py-2 text-[14px] font-medium text-[var(--primary-color)] hover:bg-[var(--secondary-color)] hover:text-white";


    return (
        <>
            <section className="xl:mt-[80px] lg:mt-[70px] mt-[50px]">
                <div className="container">
                    {/* ---------- Header ---------- */}
                    <div className="gap-6 border-b border-slate-100 pb-8 md:flex-row md:items-end md:justify-between text-center">
                        <div className="">
                            <h6 className="text-[var(--secondary-color)] text-[18px] uppercase font-bold">
                                Patient Results
                            </h6>
                            <h3 className="text-[var(--primary-color)] xl:text-[44px] lg:text-[44px] text-[30px] xl:leading-[50px] lg:leading-[50px] leading-[35px] font-semibold mb-5">
                                Documented Before & After Results
                            </h3>
                            <p className="xl:text-[20px] lg:text-[20px] text-[16px] font-normal text-[var(--text-color1)] xl:leading-[30px] lg:leading-[30px] leading-[24px]">
                                Real patients. Real results. See the transformations that have changed lives at ADIC.
                            </p>
                        </div>
            
                        {/* ---------- Filter tabs ---------- */}
                        <div className="flex flex-wrap gap-1 justify-center mt-[30px]">
                            <button
                                type="button"
                                onClick={() => setActiveFilter("All")}
                                className={tabClass("All")}
                            >
                                All
                            </button>
                            <button
                                type="button"
                                onClick={() => setActiveFilter("Teeth Whitening")}
                                className={tabClass("Teeth Whitening")}
                            >
                                Teeth Whitening
                            </button>
                            <button
                                type="button"
                                onClick={() => setActiveFilter("Invisalign")}
                                className={tabClass("Invisalign")}
                            >
                                Invisalign
                            </button>
                            <button
                                type="button"
                                onClick={() => setActiveFilter("Cosmetic Bonding")}
                                className={tabClass("Cosmetic Bonding")}
                            >
                                Cosmetic Bonding
                            </button>
                            <button
                                type="button"
                                onClick={() => setActiveFilter("Porcelain Veneers")}
                                className={tabClass("Porcelain Veneers")}
                            >
                                Porcelain Veneers
                            </button>
                            <button
                                type="button"
                                onClick={() => setActiveFilter("Smile Makeover")}
                                className={tabClass("Smile Makeover")}
                            >
                                Smile Makeover
                            </button>
                        </div>
                    </div>
            
                    {/* ---------- Grid ---------- */}
                    <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {/* Card 1 */}
                        {(activeFilter === "All" || activeFilter === "Teeth Whitening") && (
                            <article className="overflow-hidden border border-slate-300 shadow-sm transition hover:shadow-md">
                                <div className="">
                                    <img
                                        src="/assets/image/transform-img1.png"
                                        alt="image"
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                                <div className="p-4">
                                    <p className="text-[14px] font-semibold tracking-wide text-[var(--secondary-color)] uppercase">
                                        Teeth Whitening
                                    </p>
                                    <h6 className="mt-1 text-[18px] font-medium text-[var(--primary-color)]">
                                        Single Tooth Implant
                                    </h6>
                                </div>
                            </article>
                        )}
            
                        {/* Card 2 */}
                        {(activeFilter === "All" || activeFilter === "Porcelain Veneers") && (
                            <article className="overflow-hidden border border-slate-300 shadow-sm transition hover:shadow-md">
                                <div className="">
                                    <img
                                        src="/assets/image/transform-img2.png"
                                        alt="image"
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                                <div className="p-4">
                                    <p className="text-[14px] font-semibold tracking-wide text-[var(--secondary-color)] uppercase">
                                        Veneers
                                    </p>
                                    <h6 className="mt-1 text-[18px] font-medium text-[var(--primary-color)]">
                                        Porcelain Veneers
                                    </h6>
                                </div>
                            </article>
                        )}
                
                        {/* Card 3 */}
                        {(activeFilter === "All" || activeFilter === "Invisalign") && (
                            <article className="overflow-hidden border border-slate-300 shadow-sm transition hover:shadow-md">
                                <div className="">
                                    <img
                                        src="/assets/image/transform-img3.png"
                                        alt="image"
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                                <div className="p-4">
                                    <p className="text-[14px] font-semibold tracking-wide text-[var(--secondary-color)] uppercase">
                                        Invisalign
                                    </p>
                                    <h6 className="mt-1 text-[18px] font-medium text-[var(--primary-color)]">
                                        All-on-X Restoration
                                    </h6>
                                </div>
                            </article>
                        )}
             
            
                        {/* Card 4 */}
                        {(activeFilter === "All" || activeFilter === "Smile Makeover") && (
                            <article className="overflow-hidden border border-slate-300 shadow-sm transition hover:shadow-md">
                                <div className="">
                                    <img
                                        src="/assets/image/transform-img4.png"
                                        alt="image"
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                                <div className="p-4">
                                    <p className="text-[14px] font-semibold tracking-wide text-[var(--secondary-color)] uppercase">
                                        Smile Makeover
                                    </p>
                                    <h6 className="mt-1 text-[18px] font-medium text-[var(--primary-color)]">
                                        Complete Smile Makeover
                                    </h6>
                                </div>
                            </article>
                        )}
                        

                        {/* Card 5 */}
                        {(activeFilter === "All" || activeFilter === "Cosmetic Bonding") && (
                            <article className="overflow-hidden border border-slate-300 shadow-sm transition hover:shadow-md">
                                <div className="">
                                    <img
                                        src="/assets/image/transform-img5.png"
                                        alt="image"
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                                <div className="p-4">
                                    <p className="text-[14px] font-semibold tracking-wide text-[var(--secondary-color)] uppercase">
                                        Cosmetic Bonding
                                    </p>
                                    <h6 className="mt-1 text-[18px] font-medium text-[var(--primary-color)]">
                                        Cosmetic Bonding
                                    </h6>
                                </div>
                            </article>
                        )}
            
                        {/* Card 6 */}
                        {(activeFilter === "All" || activeFilter === "Teeth Whitening") && (
                            <article className="overflow-hidden border border-slate-300 shadow-sm transition hover:shadow-md">
                                <div className="">
                                    <img
                                        src="/assets/image/transform-img6.png"
                                        alt="image"
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                                <div className="p-4">
                                    <p className="text-[14px] font-semibold tracking-wide text-[var(--secondary-color)] uppercase">
                                        Teeth Whitening
                                    </p>
                                    <h6 className="mt-1 text-[18px] font-medium text-[var(--primary-color)]">
                                        Single Tooth Implant
                                    </h6>
                                </div>
                            </article>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}
