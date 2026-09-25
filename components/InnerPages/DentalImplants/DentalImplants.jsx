import React from 'react'
import ImplantJourney from './ImplantJourney'
import RoboticDevice from './RoboticDevice'
import ImplantSolutions from './ImplantSolutions'
import PatientResults from './PatientResults'
import HomeAccordian from '../../Main/HomeSections/HomeAccordian'

export default function DentalImplants() {
    return (
        <>
            <section>
                <div className="container">
                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-12">
                            <img
                                src="/assets/image/DentalImplants-breadcrumb-img.png"
                                alt="imag"
                                className="w-ful h-auto"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-12 gap-4 mt-[60px]">
                        <div className="col-span-12 text-center">
                            <h1 className="text-[var(--primary-color)] xl:text-[44px] lg:text-[44px] text-[30px] xl:leading-[50px] lg:leading-[50px] leading-[35px] font-semibold mb-5">What Are Dental Implants?</h1>
                            <p className="xl:text-[18px] lg:text-[18px] text-[16px] font-normal text-black xl:leading-[26px] lg:leading-[26px] leading-[24px]">A dental implant is a small, biocompatible titanium post designed to replace the natural root of a missing tooth. Carefully placed within the jawbone, the implant creates a stable foundation for a custom restoration. Once the implant has healed, an abutment connects it to a carefully crafted crown designed to complement the shape, color, and appearance of your natural teeth. Together, these components create a secure, natural-looking replacement that can help restore your ability to eat, speak, and smile with greater comfort and confidence.</p>
                        </div>
                    </div>
                </div>


                <div className="container mt-[70px]">
                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-12">
                            <h4 className="text-[var(--primary-color)] xl:text-[30px] lg:text-[30px] text-[25px] xl:leading-[40px] lg:leading-[40px] leading-[30px] font-semibold mb-2 text-center">Why Patients Choose ADIC for Implants</h4>
                        </div>
                        <div className="xl:col-span-3 lg:col-span-3 md:col-span-6 col-span-12">
                            <div className="bg-[#E0DED8] p-3 h-full">
                                <h5 className="text-[var(--primary-color)] xl:text-[25px] lg:text-[25px] text-[20px] mb-1 font-semibold leading-[30px]">Experiences Care</h5>
                                <div className="border-b border-b-[var(--secondary-color)] w-[30%] mb-2"></div>
                                <p className="xl:text-[16px] lg:text-[16px] text-[14px] font-normal text-black xl:leading-[23px] lg:leading-[23px] leading-[20px]"> Skilled, compassionate team with extensive implant experience.</p>
                            </div>
                        </div>
                        <div className="xl:col-span-3 lg:col-span-3 md:col-span-6 col-span-12">
                            <div className="bg-[#FFEFCA] p-3 h-full">
                                <h5 className="text-[var(--primary-color)] xl:text-[25px] lg:text-[25px] text-[20px] mb-1 font-semibold leading-[30px]">Advanced Technology</h5>
                                <div className="border-b border-b-[var(--secondary-color)] w-[30%] mb-2"></div>
                                <p className="xl:text-[16px] lg:text-[16px] text-[14px] font-normal text-black xl:leading-[23px] lg:leading-[23px] leading-[20px]"> Digital planning, CBCT and modern diagnostic tools.</p>
                            </div>
                        </div>
                        <div className="xl:col-span-3 lg:col-span-3 md:col-span-6 col-span-12">
                            <div className="bg-[#E0DED8] p-3 h-full">
                                <h5 className="text-[var(--primary-color)] xl:text-[25px] lg:text-[25px] text-[20px] mb-1 font-semibold leading-[30px]">Natural-Looking Results</h5>
                                <div className="border-b border-b-[var(--secondary-color)] w-[30%] mb-2"></div>
                                <p className="xl:text-[16px] lg:text-[16px] text-[14px] font-normal text-black xl:leading-[23px] lg:leading-[23px] leading-[20px]"> Designed to look, feel, and function like your natural teeth.</p>
                            </div>
                        </div>
                        <div className="xl:col-span-3 lg:col-span-3 md:col-span-6 col-span-12">
                            <div className="bg-[#FFEFCA] p-3 h-full">
                                <h5 className="text-[var(--primary-color)] xl:text-[25px] lg:text-[25px] text-[20px] mb-1 font-semibold leading-[30px]">Comprehensive Care</h5>
                                <div className="border-b border-b-[var(--secondary-color)] w-[30%] mb-2"></div>
                                <p className="xl:text-[16px] lg:text-[16px] text-[14px] font-normal text-black xl:leading-[23px] lg:leading-[23px] leading-[20px]"> From planning through restoration and beyond.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <ImplantJourney />

            <RoboticDevice />

            <ImplantSolutions />

            <PatientResults />

            <HomeAccordian />
        </>
    )
}
