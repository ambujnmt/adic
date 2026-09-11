import React from 'react'
import { FaGooglePlay, FaApple } from "react-icons/fa";


export default function MobileApp() {
    return (
        <>
            <section className="container mt-[60px] mb-[60px]">
                <div className="w-full rounded-2xl overflow-hidden bg-[url('/assets/img/app-bg.png')] bg-cover bg-center pt-[20px]">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-10 max-w-6xl mx-auto xl:px-[0px] px-[20px]">
                        {/* Left content */}
                        <div className="text-center md:text-left">
                            <h2 className="xl:text-[44px] lg:text-[44px] text-[28px] font-bold text-white leading-[35px]">
                                Search Property
                            </h2>
                            <h2 className="xl:text-[44px] lg:text-[44px] text-[28px] font-bold text-[var(--primary-color)]">
                                On the Go
                            </h2>
                    
                            <p className="text-[#DADADA] text-[16px] xl:text-[20px] lg:text-[20px] mt-4 max-w-xl">
                                Download the BhumiManthan app for voice search, instant alerts,
                                virtual tours, camera upload, and GPS-based property discovery.
                            </p>
                
                            <div className="flex mt-6 justify-center md:justify-start gap-3">
                                <div className="flex justify-center xl:justify-start">
                                    <img
                                        src="/assets/img/app-images.png"
                                        alt="images"
                                        className="h-auto w-[70%]"
                                    />
                                </div>
                            </div>
                        </div>
                
                        {/* Right phone mockup */}
                        <div className="relative">
                            <img
                                src="/assets/img/app-img.png"
                                alt="image"
                                className="w-[250px] md:w-[250px] lg:w-[250px] mx-auto relative xl:right-[50px] lg:right-[50px] right-[0px] mt-[30px]"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
