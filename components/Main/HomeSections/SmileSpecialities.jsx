"use client";
 
import { useRef } from "react";
import { FiArrowLeft, FiArrowRight, FiUser } from "react-icons/fi";

export default function SmileSpecialities() {

    const trackRef = useRef(null);
 
    const scrollPrev = () => {
        if (trackRef.current) {
        trackRef.current.scrollBy({ left: -320, behavior: "smooth" });
        }
    };
    
    const scrollNext = () => {
        if (trackRef.current) {
        trackRef.current.scrollBy({ left: 320, behavior: "smooth" });
        }
    };

    return (
        <>
            <section className="mt-[60px]">
                <div className="container">
                    {/* ---------- Header ---------- */}
                    <div className="flex items-start justify-between">
                        <h3 className="text-[var(--primary-color)] xl:text-[44px] lg:text-[44px] text-[30px] xl:leading-[50px] lg:leading-[50px] leading-[35px] font-semibold">
                            Smile Specialities
                        </h3>
            
                        {/* ---------- Arrows ---------- */}
                        <div className="mt-2 flex items-center gap-3">
                            <button
                                type="button"
                                onClick={scrollPrev}
                                aria-label="Previous"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition hover:bg-slate-900 hover:text-white"
                            >
                                <FiArrowLeft className="h-4 w-4" />
                            </button>
                            <button
                                type="button"
                                onClick={scrollNext}
                                aria-label="Next"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition hover:bg-slate-900 hover:text-white"
                            >
                                <FiArrowRight className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
            
                    {/* ---------- Slider track ---------- */}
                    <div
                    ref={trackRef}
                    className="mt-8 flex snap-x snap-mandatory gap-7 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                    >
                        {/* Slide 1 */}
                        <div className="relative aspect-square w-64 flex-shrink-0 snap-start overflow-hidden sm:w-72">
                            <div className="flex h-auto w-full items-center justify-center">
                                <img
                                    src="/assets/image/Dentures.png"
                                    alt="image"
                                    className="w-full h-auto"
                                />
                            </div>
                            {/* <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/60 to-transparent" />
                            <span className="absolute bottom-4 left-4 text-base font-semibold text-white">
                                Dentures
                            </span> */}
                        </div>
            
                        {/* Slide 2 */}
                        <div className="relative aspect-square w-64 flex-shrink-0 snap-start overflow-hidden sm:w-72">
                            <div className="flex h-auto w-full items-center justify-center">
                                <img
                                    src="/assets/image/DentalImplants.png"
                                    alt="image"
                                    className="w-full h-auto"
                                />
                            </div>
                            {/* <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/60 to-transparent" />
                            <span className="absolute bottom-4 left-4 text-base font-semibold text-white">
                                Dental Implants
                            </span> */}
                        </div>
            
                        {/* Slide 3 */}
                        <div className="relative aspect-square w-64 flex-shrink-0 snap-start overflow-hidden sm:w-72">
                            <div className="flex h-auto w-full items-center justify-center">
                                <img
                                    src="/assets/image/SmileMakeover.png"
                                    alt="image"
                                    className="w-full h-auto"
                                />
                            </div>
                            {/* <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/60 to-transparent" />
                            <span className="absolute bottom-4 left-4 text-base font-semibold text-white">
                                Smile Makeover
                            </span> */}
                        </div>
            
                        {/* Slide 4 */}
                        <div className="relative aspect-square w-64 flex-shrink-0 snap-start overflow-hidden sm:w-72">
                            <div className="flex h-auto w-full items-center justify-center">
                                <img
                                    src="/assets/image/Dentures.png"
                                    alt="image"
                                    className="w-full h-auto"
                                />
                            </div>
                            {/* <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/60 to-transparent" />
                            <span className="absolute bottom-4 left-4 text-base font-semibold text-white">
                                Porcelain Veneers
                            </span> */}
                        </div>
            
                        {/* Slide 5 */}
                        <div className="relative aspect-square w-64 flex-shrink-0 snap-start overflow-hidden sm:w-72">
                            <div className="flex h-auto w-full items-center justify-center">
                                <img
                                    src="/assets/image/DentalImplants.png"
                                    alt="image"
                                    className="w-full h-auto"
                                />
                            </div>
                            {/* <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/60 to-transparent" />
                            <span className="absolute bottom-4 left-4 text-base font-semibold text-white">
                                Teeth Whitening
                            </span> */}
                        </div>
            
                        {/* Slide 6 */}
                        <div className="relative aspect-square w-64 flex-shrink-0 snap-start overflow-hidden sm:w-72">
                            <div className="flex h-auto w-full items-center justify-center">
                                <img
                                    src="/assets/image/SmileMakeover.png"
                                    alt="image"
                                    className="w-full h-auto"
                                />
                            </div>
                            {/* <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/60 to-transparent" />
                            <span className="absolute bottom-4 left-4 text-base font-semibold text-white">
                                Root Canal
                            </span> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
