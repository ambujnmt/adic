import React from 'react'
import { FiArrowRight } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";
import { Link } from '@heroui/react';

export default function Blogs() {
    return (
        <section className="container mt-[40px]">
            {/* Header */}
            <div class="grid grid-cols-12 mb-[50px]">
                <div className="col-span-2"></div>
                <div class="xl:col-span-8 lg:col-span-8 col-span-12 text-center">
                    <h2 class="text-[var(--primary-color)] xl:text-[44px] lg:text-[44px] text-[30px] xl:leading-[50px] lg:leading-[50px] leading-[35px] font-semibold">Helpful Answers for a Healthier, More Confident Smile</h2>
                    <p class="xl:text-[20px] lg:text-[20px] text-[16px] font-normal text-[var(--text-color1)] xl:leading-[30px] lg:leading-[30px] leading-[24px]">Clear, practical guidance to help you understand your options and feel confident before your visit.</p>
                </div>
                <div className="col-span-2"></div>
            </div>
 

            <div className="grid grid-cols-12 gap-4 mt-[30px]">
                <div className="col-span-12 xl:col-span-4 lg:col-span-4 md:col-span-6">
                    <div className="max-w-sm w-full bg-white shadow-md overflow-hidden border border-gray-100 mx-auto h-full">
                        {/* Image */}
                        <img
                            src="/assets/image/blog-img1.jpg"
                            alt="image"
                            className="w-full h-auto object-cover"
                        />
                    
                        {/* Content */}
                        <div className="p-4">
                            <h5 className="text-[22px] font-medium text-[var(--primary-color)] sm:text-lg mb-2">
                                Are Dental Implants Right for You?
                            </h5>
                            <p className="xl:text-[16px] lg:text-[16px] text-[16px] font-normal text-[var(--text-color1)] xl:leading-[26px] lg:leading-[26px] leading-[22px] mb-2">Learn how dental implants replace missing teeth,what makes someone a good candidate, and which questions to ask during your consultation.</p>
                    
                            <button className="flex items-center gap-1.5 text-[var(--primary-color)] text-[13px] font-semibold mt-3 hover:gap-2.5 transition-all uppercase">
                                Read article <FaArrowRight size={12} />
                            </button>
                        </div>
                    </div>                            
                </div>

                <div className="col-span-12 xl:col-span-4 lg:col-span-4 md:col-span-6">
                    <div className="max-w-sm w-full bg-white shadow-md overflow-hidden border border-gray-100 mx-auto h-full">
                        {/* Image */}
                        <img
                            src="/assets/image/blog-img2.jpg"
                            alt="image"
                            className="w-full h-auto object-cover"
                        />
                    
                        {/* Content */}
                        <div className="p-4">
                            <h5 className="text-[22px] font-medium text-[var(--primary-color)] sm:text-lg mb-2">
                                What to Expect From Full-Arch...
                            </h5>
                            <p className="xl:text-[16px] lg:text-[16px] text-[16px] font-normal text-[var(--text-color1)] xl:leading-[26px] lg:leading-[26px] leading-[22px] mb-2">A step-by-step overview of All-on-X planning surgery, provisional teeth, and the final restoration — with realistic timelines.</p>
                    
                            <button className="flex items-center gap-1.5 text-[var(--primary-color)] text-[13px] font-semibold mt-3 hover:gap-2.5 transition-all uppercase">
                                Read article <FaArrowRight size={12} />
                            </button>
                        </div>
                    </div>                           
                </div>

                <div className="col-span-12 xl:col-span-4 lg:col-span-4 md:col-span-6">
                    <div className="max-w-sm w-full bg-white shadow-md overflow-hidden border border-gray-100 mx-auto h-full">
                        {/* Image */}
                        <img
                            src="/assets/image/blog-img3.jpg"
                            alt="image"
                            className="w-full h-auto object-cover"
                        />
                    
                        {/* Content */}
                        <div className="p-4">
                            <h5 className="text-[22px] font-medium text-[var(--primary-color)] sm:text-lg mb-2">
                                Understanding Your Smile...
                            </h5>
                            <p className="xl:text-[16px] lg:text-[16px] text-[16px] font-normal text-[var(--text-color1)] xl:leading-[26px] lg:leading-[26px] leading-[22px] mb-2">Explore how cosmetic dentistry combines veneers, whitening, and restorative work to create a smile that looks and feels natural.</p>
                    
                            <button className="flex items-center gap-1.5 text-[var(--primary-color)] text-[13px] font-semibold mt-3 hover:gap-2.5 transition-all uppercase">
                                Read article <FaArrowRight size={12} />
                            </button>
                        </div>
                    </div> 
                </div>

                <div className="col-span-12 block m-auto mt-[30px]">
                    <Link href="#" className="text-[var(--secondary-color)] text-[16px] font-bold border border-[var(--secondary-color)] py-[12px] px-[25px] rounded-md hover:bg-[var(--primary-color)] hover:text-white duration-300 ease-in-out transition-all ">
                        Explore Patient Education &nbsp; <FaArrowRight size={12} />
                    </Link>
                </div>
            </div>
        </section>
    )
}
