import React from 'react'

export default function AboutUs() {
    return (
        <>
            <section className="mt-[60px]">
                <div className="container">
                    <div className="grid grid-cols-12 gap-4 items-center">
                        <div className="xl:col-span-7 lg:col-span-7 md:col-span-7 col-span-12">
                            <h6 className="text-[var(--secondary-color)] text-[18px] uppercase font-bold"> Welcome to </h6>
                            <h1 className="text-[var(--primary-color)] xl:text-[44px] lg:text-[44px] text-[30px] xl:leading-[50px] lg:leading-[50px] leading-[35px] font-semibold mb-5">Aesthetic Dentistry & <span className="xl:block lg:block"> Implant Center</span></h1>
                            <p className="xl:text-[18px] lg:text-[18px] text-[16px] font-normal text-black xl:leading-[26px] lg:leading-[26px] leading-[24px]">Dr. Harry Ashitey and the Aesthetic Dentistry & Implant Center team offer painless, high-quality dental care in a warm and friendly atmosphere. We take pride in restoring oral health and confident smiles, one person at a time!</p>
                            <p className="xl:text-[18px] lg:text-[18px] text-[16px] font-normal text-black xl:leading-[26px] lg:leading-[26px] leading-[24px]"> Our friendly staff listens to our patients, engaging with respect and compassion, and seeking to learn each individual’s expectations. You will be heard, treated kindly and gently, and supported as we work with you to achieve your healthiest, most radiant smile.</p>
                        </div>
                        <div className="xl:col-span-5 lg:col-span-5 md:col-span-5 col-span-12">
                            <img
                                src="/assets/image/about-img.png"
                                alt="image"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>


                <div className="container mt-[50px]">
                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-12">
                            <h4 className="text-[var(--primary-color)] xl:text-[30px] lg:text-[30px] text-[25px] xl:leading-[40px] lg:leading-[40px] leading-[30px] font-semibold mb-2">In addition to dental exams, cleanings, and general dentistry, Dr. Ashitey offers:</h4>
                        </div>
                        <div className="xl:col-span-3 lg:col-span-3 md:col-span-6 col-span-12">
                            <div className="bg-[#E0DED8] p-3 h-full">
                                <h5 className="text-[var(--primary-color)] xl:text-[25px] lg:text-[25px] text-[20px] mb-1 font-semibold leading-[30px]">Dental Implants</h5>
                                <div className="border-b border-b-[var(--secondary-color)] w-[30%] mb-2"></div>
                                <p className="xl:text-[16px] lg:text-[16px] text-[14px] font-normal text-black xl:leading-[23px] lg:leading-[23px] leading-[20px]"> Restore missing teeth with natural-looking, functional implant solutions.</p>
                            </div>
                        </div>
                        <div className="xl:col-span-3 lg:col-span-3 md:col-span-6 col-span-12">
                            <div className="bg-[#E0DED8] p-3 h-full">
                                <h5 className="text-[var(--primary-color)] xl:text-[25px] lg:text-[25px] text-[20px] mb-1 font-semibold leading-[30px]">Restorative Dentistry</h5>
                                <div className="border-b border-b-[var(--secondary-color)] w-[30%] mb-2"></div>
                                <p className="xl:text-[16px] lg:text-[16px] text-[14px] font-normal text-black xl:leading-[23px] lg:leading-[23px] leading-[20px]"> Crowns, bridges, dentures, and full-mouth rehabilitation tailored to your needs.</p>
                            </div>
                        </div>
                        <div className="xl:col-span-3 lg:col-span-3 md:col-span-6 col-span-12">
                            <div className="bg-[#E0DED8] p-3 h-full">
                                <h5 className="text-[var(--primary-color)] xl:text-[25px] lg:text-[25px] text-[20px] mb-1 font-semibold leading-[30px]">Cosmetic & Aligner Therapy</h5>
                                <div className="border-b border-b-[var(--secondary-color)] w-[30%] mb-2"></div>
                                <p className="xl:text-[16px] lg:text-[16px] text-[14px] font-normal text-black xl:leading-[23px] lg:leading-[23px] leading-[20px]"> Veneers, Invisalign clear aligners, teeth whitening, and aesthetic smile treatments.</p>
                            </div>
                        </div>
                        <div className="xl:col-span-3 lg:col-span-3 md:col-span-6 col-span-12">
                            <div className="bg-[#E0DED8] p-3 h-full">
                                <h5 className="text-[var(--primary-color)] xl:text-[25px] lg:text-[25px] text-[20px] mb-1 font-semibold leading-[30px]">Comfort-Focused Care</h5>
                                <div className="border-b border-b-[var(--secondary-color)] w-[30%] mb-2"></div>
                                <p className="xl:text-[16px] lg:text-[16px] text-[14px] font-normal text-black xl:leading-[23px] lg:leading-[23px] leading-[20px]"> Laser dentistry and safe sedation options for a more comfortable experience.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
