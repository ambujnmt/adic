"use client";
 
import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

export default function HomeAccordian() {

    const [openItem, setOpenItem] = useState(1);
    const toggle = (item) => {
        setOpenItem((current) => (current === item ? null : item));
    };


    return ( 
        <>
            <section className="mt-[50px] bg-[#f7f5f2] xl:p-[80px] lg:p-[80px] py-[40px]">
                <div className="container">
                    <div className="grid grid-cols-12 xl:gap-10 lg:gap-10 gap-4">
                        <div className="xl:col-span-5 lg:col-span-5 md:col-span-5 col-span-12">
                            <h6 className="text-[var(--secondary-color)] text-[18px] uppercase font-bold"> Frequently Asked </h6>
                            <h3 className="text-[var(--primary-color)] xl:text-[44px] lg:text-[44px] text-[30px] xl:leading-[50px] lg:leading-[50px] leading-[35px] font-semibold">Questions patients ask us most.</h3>
                            <p className="xl:text-[20px] lg:text-[20px] text-[16px] font-normal text-[var(--text-color1)] xl:leading-[30px] lg:leading-[30px] leading-[24px]">General information only — not a substitute for a clinical evaluation.</p>
                        </div>
                        <div className="xl:col-span-7 lg:col-span-7 md:col-span-7 col-span-12">
                            <div className="divide-y divide-slate-200">
                                {/* Item 1 */}
                                <div className="py-5">
                                    <button
                                        type="button"
                                        onClick={() => toggle(1)}
                                        className="flex w-full items-center justify-between text-left"
                                    >
                                        <span className="text-[20px] font-medium text-[var(--primary-color)] sm:text-lg">
                                        Am I a candidate for dental implants?
                                            </span>
                                        {openItem === 1 ? (
                                            <FiMinus className="h-4 w-4 flex-shrink-0 text-slate-500 transition-transform duration-300" />
                                            ) : (
                                            <FiPlus className="h-4 w-4 flex-shrink-0 text-slate-500 transition-transform duration-300" />
                                        )}
                                    </button>
                                    <div
                                        className="grid transition-[grid-template-rows] duration-300 ease-in-out"
                                        style={{ gridTemplateRows: openItem === 1 ? "1fr" : "0fr" }}
                                    >
                                        <div className="overflow-hidden">
                                            <p className="mt-3 pr-8 xl:text-[16px] lg:text-[16px] text-[16px] font-normal text-[var(--text-color1)] xl:leading-[26px] lg:leading-[26px] leading-[22px] mb-2">
                                                Most adults in good general health may be candidates for
                                                dental implants. During your consultation, Dr. Ashitey will
                                                review your oral health, bone density, and overall health to
                                                determine whether implants are appropriate for you and
                                                discuss all available options.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                        
                                {/* Item 2 */}
                                <div className="py-5">
                                    <button
                                        type="button"
                                        onClick={() => toggle(2)}
                                        className="flex w-full items-center justify-between text-left"
                                    >
                                        <span className="text-[20px] font-medium text-[var(--primary-color)] sm:text-lg">
                                            How long does full-arch treatment take?
                                        </span>
                                        {openItem === 2 ? (
                                            <FiMinus className="h-4 w-4 flex-shrink-0 text-slate-500 transition-transform duration-300" />
                                            ) : (
                                            <FiPlus className="h-4 w-4 flex-shrink-0 text-slate-500 transition-transform duration-300" />
                                        )}
                                    </button>
                                    <div
                                        className="grid transition-[grid-template-rows] duration-300 ease-in-out"
                                        style={{ gridTemplateRows: openItem === 2 ? "1fr" : "0fr" }}
                                    >
                                        <div className="overflow-hidden">
                                            <p className="mt-3 pr-8 xl:text-[16px] lg:text-[16px] text-[16px] font-normal text-[var(--text-color1)] xl:leading-[26px] lg:leading-[26px] leading-[22px] mb-2">
                                                Full-arch treatment timelines vary by case, but most patients
                                                complete the process across a few appointments spanning
                                                several months to allow proper healing and integration
                                                before the final restoration is placed.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                        
                                {/* Item 3 */}
                                <div className="py-5">
                                    <button
                                        type="button"
                                        onClick={() => toggle(3)}
                                        className="flex w-full items-center justify-between text-left"
                                    >
                                        <span className="text-[20px] font-medium text-[var(--primary-color)] sm:text-lg">
                                            Will treatment be uncomfortable?
                                        </span>
                                        {openItem === 3 ? (
                                            <FiMinus className="h-4 w-4 flex-shrink-0 text-slate-500 transition-transform duration-300" />
                                            ) : (
                                            <FiPlus className="h-4 w-4 flex-shrink-0 text-slate-500 transition-transform duration-300" />
                                        )}
                                    </button>
                                    <div
                                        className="grid transition-[grid-template-rows] duration-300 ease-in-out"
                                        style={{ gridTemplateRows: openItem === 3 ? "1fr" : "0fr" }}
                                    >
                                        <div className="overflow-hidden">
                                            <p className="mt-3 pr-8 xl:text-[16px] lg:text-[16px] text-[16px] font-normal text-[var(--text-color1)] xl:leading-[26px] lg:leading-[26px] leading-[22px] mb-2">
                                                Local anesthesia and sedation options are used throughout
                                                treatment to keep you comfortable, and any post-procedure
                                                soreness is typically mild and manageable with standard pain
                                                relief.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                        
                                {/* Item 4 */}
                                <div className="py-5">
                                    <button
                                        type="button"
                                        onClick={() => toggle(4)}
                                        className="flex w-full items-center justify-between text-left"
                                    >
                                        <span className="text-[20px] font-medium text-[var(--primary-color)] sm:text-lg">
                                            What does treatment cost?
                                        </span>
                                        {openItem === 4 ? (
                                            <FiMinus className="h-4 w-4 flex-shrink-0 text-slate-500 transition-transform duration-300" />
                                            ) : (
                                            <FiPlus className="h-4 w-4 flex-shrink-0 text-slate-500 transition-transform duration-300" />
                                        )}
                                    </button>
                                    <div
                                        className="grid transition-[grid-template-rows] duration-300 ease-in-out"
                                        style={{ gridTemplateRows: openItem === 4 ? "1fr" : "0fr" }}
                                    >
                                        <div className="overflow-hidden">
                                            <p className="mt-3 pr-8 xl:text-[16px] lg:text-[16px] text-[16px] font-normal text-[var(--text-color1)] xl:leading-[26px] lg:leading-[26px] leading-[22px] mb-2">
                                                Cost depends on the number of implants and the type of
                                                restoration needed. We'll provide a full breakdown after your
                                                consultation, along with any financing options available.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                        
                                {/* Item 5 */}
                                <div className="py-5">
                                    <button
                                        type="button"
                                        onClick={() => toggle(5)}
                                        className="flex w-full items-center justify-between text-left"
                                    >
                                        <span className="text-[20px] font-medium text-[var(--primary-color)] sm:text-lg">
                                            How long do implants last?
                                        </span>
                                        {openItem === 5 ? (
                                            <FiMinus className="h-4 w-4 flex-shrink-0 text-slate-500 transition-transform duration-300" />
                                            ) : (
                                            <FiPlus className="h-4 w-4 flex-shrink-0 text-slate-500 transition-transform duration-300" />
                                        )}
                                    </button>
                                    <div
                                        className="grid transition-[grid-template-rows] duration-300 ease-in-out"
                                        style={{ gridTemplateRows: openItem === 5 ? "1fr" : "0fr" }}
                                    >
                                        <div className="overflow-hidden">
                                            <p className="mt-3 pr-8 xl:text-[16px] lg:text-[16px] text-[16px] font-normal text-[var(--text-color1)] xl:leading-[26px] lg:leading-[26px] leading-[22px] mb-2">
                                                With proper oral hygiene and regular checkups, dental
                                                implants can last decades — many patients keep theirs for
                                                the rest of their life.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                        
                                {/* Item 6 */}
                                <div className="py-5">
                                    <button
                                        type="button"
                                        onClick={() => toggle(6)}
                                        className="flex w-full items-center justify-between text-left"
                                    >
                                        <span className="text-[20px] font-medium text-[var(--primary-color)] sm:text-lg">
                                            Do you accept my insurance?
                                        </span>
                                        {openItem === 6 ? (
                                            <FiMinus className="h-4 w-4 flex-shrink-0 text-slate-500 transition-transform duration-300" />
                                            ) : (
                                            <FiPlus className="h-4 w-4 flex-shrink-0 text-slate-500 transition-transform duration-300" />
                                        )}
                                    </button>
                                    <div
                                        className="grid transition-[grid-template-rows] duration-300 ease-in-out"
                                        style={{ gridTemplateRows: openItem === 6 ? "1fr" : "0fr" }}
                                    >
                                        <div className="overflow-hidden">
                                            <p className="mt-3 pr-8 xl:text-[16px] lg:text-[16px] text-[16px] font-normal text-[var(--text-color1)] xl:leading-[26px] lg:leading-[26px] leading-[22px] mb-2">
                                                We work with most major insurance providers and will help
                                                you verify your coverage and estimate out-of-pocket costs
                                                before treatment begins.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
