import React from 'react'
import { Link } from '@heroui/react'
import { FaArrowRight } from "react-icons/fa";


export default function ComprehensiveDentistry() {
    return (
        <>
            <section className="xl:mt-[80px] lg:mt-[80px] mt-[50px]">
                <div className="container">
                    <div className="grid grid-cols-12 gap-4 mb-[50px]">
                        <div className="xl:col-span-6 lg:col-span-6 col-span-12">
                            <h3 className="text-[var(--primary-color)] xl:text-[44px] lg:text-[44px] text-[30px] xl:leading-[50px] lg:leading-[50px] leading-[35px] font-semibold">Comprehensive Dentistry. <span className="xl:block lg:block"> Exceptional Results.</span></h3>
                        </div>
                        <div className="xl:col-span-6 lg:col-span-6 col-span-12">
                            <p className="xl:text-[20px] lg:text-[20px] text-[16px] font-normal text-[var(--text-color1)] xl:leading-[30px] lg:leading-[30px] leading-[24px]">Personalized dental care combining advanced technology, clinical expertise, and a thoughtful patient experience — from your first visit through every milestone.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-12 gap-4">
                        <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12">
                            <div className="h-full mb-5">
                                <img
                                    src="/assets/image/Dentistry-img1.png"
                                    alt="image"
                                    className="w-full xl:h-[300px] lg:h-[300px] h-[150px] object-cover"
                                />
                                <div className="mt-[10px]">
                                    <h5 className="text-[var(--primary-color)] xl:text-[25px] lg:text-[25px] text-[20px] mb-1 font-semibold leading-[30px]">
                                        Dental Implants
                                    </h5>
                                    <p className="xl:text-[18px] lg:text-[18px] text-[16px] font-normal text-[var(--text-color1)] xl:leading-[26px] lg:leading-[26px] leading-[22px] mb-2">
                                        Restore function, confidence, and a natural-looking smile with personalized implant solutions tailored to your anatomy and goals.
                                    </p>
                                    <Link href="#" className="uppercase text-[var(--primary-color)] hover:text-[var(--secondary-color)] transition-colors text-[14px] font-bold">
                                        Learn more &nbsp; <FaArrowRight />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12">
                            <div className="h-full mb-5">
                                <img
                                    src="/assets/image/Dentistry-img2.png"
                                    alt="image"
                                    className="w-full xl:h-[300px] lg:h-[300px] h-[150px] object-cover"
                                />
                                <div className="mt-[10px]">
                                    <h5 className="text-[var(--primary-color)] xl:text-[25px] lg:text-[25px] text-[20px] mb-1 font-semibold leading-[30px]">
                                        Full-Arch / All-on-X
                                    </h5>
                                    <p className="xl:text-[18px] lg:text-[18px] text-[16px] font-normal text-[var(--text-color1)] xl:leading-[26px] lg:leading-[26px] leading-[22px] mb-2">
                                        A complete solution for patients with missing or failing teeth — restoring your full smile with durable, natural-looking results.
                                    </p>
                                    <Link href="#" className="uppercase text-[var(--primary-color)] hover:text-[var(--secondary-color)] transition-colors text-[14px] font-bold">
                                        Learn more &nbsp; <FaArrowRight />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12">
                            <div className="h-full mb-5">
                                <img
                                    src="/assets/image/Dentistry-img3.png"
                                    alt="image"
                                    className="w-full xl:h-[300px] lg:h-[300px] h-[150px] object-cover"
                                />
                                <div className="mt-[10px]">
                                    <h5 className="text-[var(--primary-color)] xl:text-[25px] lg:text-[25px] text-[20px] mb-1 font-semibold leading-[30px]">
                                        Cosmetic Dentistry
                                    </h5>
                                    <p className="xl:text-[18px] lg:text-[18px] text-[16px] font-normal text-[var(--text-color1)] xl:leading-[26px] lg:leading-[26px] leading-[22px] mb-2">
                                        Transform your smile with personalized cosmetic treatments including veneers, whitening, and smile makeovers designed around your goals.
                                    </p>
                                    <Link href="#" className="uppercase text-[var(--primary-color)] hover:text-[var(--secondary-color)] transition-colors text-[14px] font-bold">
                                        Learn more &nbsp; <FaArrowRight />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12">
                            <div className="h-full mb-5">
                                <img
                                    src="/assets/image/Dentistry-img4.png"
                                    alt="image"
                                    className="w-full xl:h-[300px] lg:h-[300px] h-[150px] object-cover"
                                />
                                <div className="mt-[10px]">
                                    <h5 className="text-[var(--primary-color)] xl:text-[25px] lg:text-[25px] text-[20px] mb-1 font-semibold leading-[30px]">
                                        Smile Makeovers
                                    </h5>
                                    <p className="xl:text-[18px] lg:text-[18px] text-[16px] font-normal text-[var(--text-color1)] xl:leading-[26px] lg:leading-[26px] leading-[22px] mb-2">
                                        Comprehensive plans combining whitening, bonding, veneers, and restorative work.
                                    </p>
                                    <Link href="#" className="uppercase text-[var(--primary-color)] hover:text-[var(--secondary-color)] transition-colors text-[14px] font-bold">
                                        Learn more &nbsp; <FaArrowRight />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
