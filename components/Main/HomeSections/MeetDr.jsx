import { Link } from '@heroui/react'
import React from 'react'

export default function MeetDr() {
    return (
        <>
            <section className="mt-[50px] bg-[#FEFAE6] xl:p-[80px] lg:p-[80px] py-[40px]">
                <div className="container">
                    <div className="grid grid-cols-12 gap-4 items-center">
                        <div className="xl:col-span-5 lg:col-span-5 md:col-span-5 col-span-12">
                            <img
                                src="/assets/image/dr-harry.png"
                                alt="image"
                                className="w-full h-auto"
                            />
                        </div>
                        <div className="xl:col-span-7 lg:col-span-7 md:col-span-7 col-span-12">
                            <div className="xl:pl-[50px] lg:pl-[50px] md:pl-[30px] pl-[0px]">
                                <h3 className="text-[var(--primary-color)] xl:text-[44px] lg:text-[44px] text-[30px] xl:leading-[50px] lg:leading-[50px] leading-[35px] font-semibold mb-5 relative ml-[18px] after:content-[''] after:absolute after:top-[3px] after:left-[-18px] after:w-[4px] after:h-[45px] after:bg-[var(--secondary-color)]">Meet Dr. Harry Ashitey</h3>
                                <p className="xl:text-[24px] lg:text-[24px] text-[16px] font-normal text-[var(--text-color1)] xl:leading-[35px] lg:leading-[35px] leading-[24px] mb-5">Advanced dentistry guided by experience, precision, and a commitment to every patient's individual goals.
                                Dr. Ashitey brings a thoughtful, evidence-based approach to every aspect of dental care — from routine visits to comprehensive implant treatment. He is dedicated to providing each patient with personalized attention, clear communication, and results that support long-term health and confidence.</p>
                                <Link href="#" className="text-[var(--secondary-color)] text-[16px] font-bold border border-[var(--secondary-color)] py-[12px] px-[25px] rounded-md hover:bg-[var(--primary-color)] hover:text-white duration-300 ease-in-out transition-all">
                                    Know More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
