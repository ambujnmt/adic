import React from 'react'

export default function ImplantJourney() {
    return (
        <>
            <ssection className="">
                <div className="container mt-[80px]">
                    <div className="">
                        <div className="grid grid-cols-12 gap-4">
                            <div className="col-span-12">
                                <h6 className="text-[var(--secondary-color)] text-[18px] uppercase font-bold"> Smile Transformations </h6>
                                <h3 className="text-[var(--primary-color)] xl:text-[44px] lg:text-[44px] text-[30px] xl:leading-[50px] lg:leading-[50px] leading-[35px] font-semibold mb-2">The Implant Journey</h3>
                                <p className="xl:text-[20px] lg:text-[20px] text-[16px] font-normal text-[var(--text-color1)] xl:leading-[30px] lg:leading-[30px] leading-[24px]">A clear, step-by-step process for a better tomorrow.</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="container mt-[30px]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
                        {/* Card 1 */}
                        <div className="rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm">
                            <img
                                src="/assets/image/Implants1.png"
                                alt="Consultation & Evaluation"
                                className="w-full h-[130px] object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-[22px] font-medium text-[var(--primary-color)] sm:text-lg mb-2">
                                    Consultation &amp; Evaluation
                                </h3>
                                <p className="xl:text-[16px] lg:text-[16px] text-[16px] font-normal text-[var(--text-color1)] xl:leading-[26px] lg:leading-[26px] leading-[22px]">
                                    We assess your smile, health, and goals.
                                </p>
                            </div>
                        </div>
        
                        {/* Card 2 */}
                        <div className="rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm">
                            <img
                                src="/assets/image/Implants2.png"
                                alt="Consultation & Evaluation"
                                className="w-full h-[130px] object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-[22px] font-medium text-[var(--primary-color)] sm:text-lg mb-2">
                                    Digital Planning
                                </h3>
                                <p className="xl:text-[16px] lg:text-[16px] text-[16px] font-normal text-[var(--text-color1)] xl:leading-[26px] lg:leading-[26px] leading-[22px]">
                                    Advanced imaging and 3D planning for precision.
                                </p>
                            </div>
                        </div>
        
                        {/* Card 3 */}
                        <div className="rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm">
                            <img
                                src="/assets/image/Implants3.png"
                                alt="Consultation & Evaluation"
                                className="w-full h-[130px] object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-[22px] font-medium text-[var(--primary-color)] sm:text-lg mb-2">
                                    Implant Placement
                                </h3>
                                <p className="xl:text-[16px] lg:text-[16px] text-[16px] font-normal text-[var(--text-color1)] xl:leading-[26px] lg:leading-[26px] leading-[22px]">
                                    The implant is placed in your jawbone.
                                </p>
                            </div>
                        </div>
        
                        {/* Card 4 */}
                        <div className="rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm">
                            <img
                                src="/assets/image/Implants4.png"
                                alt="Consultation & Evaluation"
                                className="w-full h-[130px] object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-[22px] font-medium text-[var(--primary-color)] sm:text-lg mb-2">
                                    Restoration
                                </h3>
                                <p className="xl:text-[16px] lg:text-[16px] text-[16px] font-normal text-[var(--text-color1)] xl:leading-[26px] lg:leading-[26px] leading-[22px]">
                                    A custom crown is attached for a natural look and feel.
                                </p>
                            </div>
                        </div>
        
                        {/* Card 5 */}
                        <div className="rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm">
                            <img
                                src="/assets/image/Implants5.png"
                                alt="Consultation & Evaluation"
                                className="w-full h-[130px] object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-[22px] font-medium text-[var(--primary-color)] sm:text-lg mb-2">
                                    Your New Smile
                                </h3>
                                <p className="xl:text-[16px] lg:text-[16px] text-[16px] font-normal text-[var(--text-color1)] xl:leading-[26px] lg:leading-[26px] leading-[22px]">
                                    Enjoy a stronger, healthier, more confident smile.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </ssection>
        </>
    )
}
