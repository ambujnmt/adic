import React from 'react'
import { FaPhoneAlt, FaRegClock, FaMapMarkerAlt } from "react-icons/fa";


export default function Location() {
    return (
        <>
            <section className="xl:my-[70px] lg:my-[70px] my-[50px]">
                <div className="container">
                    <div className="grid grid-cols-12 xl:gap-10 lg:gap-10 gap-4 items-center">
                        <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12">
                            <h3 className="text-[var(--primary-color)] xl:text-[44px] lg:text-[44px] text-[30px] xl:leading-[50px] lg:leading-[50px] leading-[35px] font-semibold mb-2">Location</h3>
                            <p className="xl:text-[20px] lg:text-[20px] text-[16px] font-normal text-[var(--text-color1)] xl:leading-[30px] lg:leading-[30px] leading-[24px]">Conveniently located and designed around your schedule — with parking, flexible hours, and a team ready to welcome you.</p>

                            <div className="mt-5">
                                {/* Phone */}
                                <div className="flex items-center gap-3 mb-4">
                                    <FaPhoneAlt size={16} className="text-[#c9a25f] flex-shrink-0" />
                                    <p className="xl:text-[20px] lg:text-[20px] text-[16px] font-normal text-[var(--text-color1)] xl:leading-[30px] lg:leading-[30px] leading-[24px]">
                                        (940) 489-8181
                                    </p>
                                </div>
                    
                                {/* Hours */}
                                <div className="flex items-start gap-3 mb-4">
                                    <FaRegClock size={16} className="text-[#c9a25f] flex-shrink-0 mt-[5px]" />
                                    <p className="xl:text-[20px] lg:text-[20px] text-[16px] font-normal text-[var(--text-color1)] xl:leading-[30px] lg:leading-[30px] leading-[24px]">
                                        Hours: Mon–Thu 9:00am to 5:00pm
                                        <br /> 
                                        ( Fri 9:00am to 1:00pm)
                                    </p>
                                </div>
                    
                                {/* Address */}
                                <div className="flex items-start gap-3 mb-6">
                                    <FaMapMarkerAlt size={16} className="text-[#c9a25f] flex-shrink-0 mt-[5px]" />
                                    <p className="xl:text-[20px] lg:text-[20px] text-[16px] font-normal text-[var(--text-color1)] xl:leading-[30px] lg:leading-[30px] leading-[24px]">
                                        3500 Corinth Parkway, Suite #200
                                        <br />
                                        Corinth, TX 76208
                                    </p>
                                </div>
                    
                                {/* Buttons */}
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <button
                                        type="button"
                                        className="text-[var(--secondary-color)] text-[16px] font-bold border border-[var(--secondary-color)] py-[12px] px-[25px] rounded-md hover:bg-[var(--primary-color)] hover:text-white duration-300 ease-in-out transition-all"
                                    >
                                        GET DIRECTION
                                    </button>
                    
                                    <button
                                        type="button"
                                        className="text-white text-[16px] font-bold border border-[var(--secondary-color)] bg-[var(--secondary-color)] py-[12px] px-[25px] rounded-md hover:bg-[var(--primary-color)] hover:text-white duration-300 ease-in-out transition-all"
                                    >
                                        CALL NOW
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3340.3299747871524!2d-97.0553651!3d33.15296299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c3483dfa96a57%3A0x6be13b969808719f!2s3500%20Corinth%20Pkwy%20Ste%20200%2C%20Corinth%2C%20TX%2076208%2C%20USA!5e0!3m2!1sen!2sin!4v1790238030350!5m2!1sen!2sin"
                                width="100%"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="strict-origin-when-cross-origin"
                                title="Google Maps"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
