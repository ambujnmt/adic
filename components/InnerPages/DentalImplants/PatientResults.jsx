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
            <section className="xl:mt-[70px] lg:mt-[70px] mt-[50px]">
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
                                onClick={() => setActiveFilter("Implant")}
                                className={tabClass("Implant")}
                            >
                                Single Tooth
                            </button>
                            <button
                                type="button"
                                onClick={() => setActiveFilter("Full-Arch")}
                                className={tabClass("Full-Arch")}
                            >
                                Full-Arch
                            </button>
                            <button
                                type="button"
                                onClick={() => setActiveFilter("Crowns")}
                                className={tabClass("Crowns")}
                            >
                                Bone Grafting
                            </button>
                            <button
                                type="button"
                                onClick={() => setActiveFilter("Veneers")}
                                className={tabClass("Veneers")}
                            >
                                Implant- Supported Bridge
                            </button>
                        </div>
                    </div>
            
                    {/* ---------- Grid ---------- */}
                    <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {/* Card 1 */}
                        {(activeFilter === "All" || activeFilter === "Implant") && (
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
                                        IMPLANT
                                    </p>
                                    <h6 className="mt-1 text-[18px] font-medium text-[var(--primary-color)]">
                                        Single Tooth Implant
                                    </h6>
                                </div>
                            </article>
                        )}
            
                        {/* Card 2 */}
                        {(activeFilter === "All" || activeFilter === "Veneers") && (
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
                        {(activeFilter === "All" || activeFilter === "Full-Arch") && (
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
                                        Full-Arch
                                    </p>
                                    <h6 className="mt-1 text-[18px] font-medium text-[var(--primary-color)]">
                                        All-on-X Restoration
                                    </h6>
                                </div>
                            </article>
                        )}
             
            
                        {/* Card 5 */}
                        {(activeFilter === "All" || activeFilter === "Crowns") && (
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
                                        Crowns
                                    </p>
                                    <h6 className="mt-1 text-[18px] font-medium text-[var(--primary-color)]">
                                        Dental Crowns
                                    </h6>
                                </div>
                            </article>
                        )}
            
                        {/* Card 6 */}
                        {(activeFilter === "All" || activeFilter === "Implant") && (
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
                                        Implant
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
