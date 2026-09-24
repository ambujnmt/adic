import React from 'react'

export default function CtaSec() {
    return (
        <> 
            <section className="relative w-full overflow-hidden">
                {/* Background Image */}
                <img
                    src="/assets/image/cta-bg.png"
                    alt="Dental clinic interior"
                    className="absolute w-full h-full object-cover"
                /> 
    
                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center px-4 py-16 sm:py-20 md:py-24 max-w-3xl mx-auto">
                    <h3 className="xl:text-[50px] lg:text-[50px] text-[30px] xl:leading-[50px] lg:leading-[50px] leading-[35px] font-semibold text-white mb-4 sm:mb-5">
                        Your Smile Starts
                        <br />
                        With a Conversation.
                    </h3>
    
                    <p className="text-white/90 xl:text-[20px] lg:text-[20px] text-[16px] font-normal xl:leading-[30px] lg:leading-[30px] leading-[24px] max-w-xxl">
                        Whether you're considering dental implants, a full-arch transformation, cosmetic dentistry, or comprehensive care, we're here to help.
                    </p>
                    <div className="mt-[40px]"></div>
                    <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                        <button
                            type="button"
                            className="text-white text-[16px] font-bold border border-[var(--secondary-color)] bg-[var(--secondary-color)] py-[12px] px-[25px] rounded-md hover:bg-[var(--primary-color)] hover:text-white duration-300 ease-in-out transition-all"
                        >
                            Request a consultation
                        </button>
    
                        <button
                            type="button"
                            className="text-white text-[16px] font-bold border border-white py-[12px] px-[25px] rounded-md hover:bg-[var(--primary-color)] hover:text-white duration-300 ease-in-out transition-all"
                        >
                            Call Now
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}
