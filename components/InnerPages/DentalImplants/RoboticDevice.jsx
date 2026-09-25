import { Link } from '@heroui/react'
import React from 'react'

export default function RoboticDevice() {
    return (
        <>
            <section className="bg-[#0B1F3A] xl:py-[70px] lg:py-[70px] py-[40px] mt-[60px]">
                <div className="container">
                    <div className="grid grid-cols-12 gap-4 items-center">
                        <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12">
                            <img
                                src="/assets/image/AdvancedTechnology.png"
                                alt="image"
                                className="w-full h-auto"
                            />
                        </div>
                        <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12">
                            <div className="xl:pl-[50px] lg:pl-[50px] md:pl-[30px] pl-[0px]">
                                <h3 className="text-white xl:text-[44px] lg:text-[44px] text-[30px] xl:leading-[50px] lg:leading-[50px] leading-[35px] font-semibold mb-5">The only FDA-cleared robotic device for dental surgery</h3>
                                <p className="xl:text-[20px] lg:text-[20px] text-[16px] font-normal text-[#FAF8F2BF] xl:leading-[26px] lg:leading-[26px] leading-[24px] mb-5">We're proudly offering Yomi®, the only FDA-cleared robotic platform designed for dental implant surgery. Yomi tracks movements in real-time and prevents any off-plan movements through haptic feedback and multisensory guidance. Clinical research has shown that Yomi is the most accurate modality for implant surgery.</p>
                                <Link href="#" className="text-white text-[16px] font-bold border border-[var(--secondary-color)] bg-[var(--secondary-color)] py-[12px] px-[25px] rounded-md hover:bg-[var(--primary-color)] hover:text-white duration-300 ease-in-out transition-all">
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
