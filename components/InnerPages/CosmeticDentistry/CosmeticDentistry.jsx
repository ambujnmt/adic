import React from 'react'
import ImplantJourney from './ImplantJourney'
import ArtScience from './ArtScience'
import ImplantSolutions from './ImplantSolutions'
import PatientResults from './PatientResults'
import HomeAccordian from '../../Main/HomeSections/HomeAccordian'

export default function CosmeticDentistry() {
    return (
        <>
            <section>
                <div className="container">
                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-12">
                            <img
                                src="/assets/image/CosmeticDentistry.png"
                                alt="imag"
                                className="w-ful h-auto"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-12 gap-4 mt-[60px]">
                        <div className="col-span-12 text-center">
                            <h1 className="text-[var(--primary-color)] xl:text-[44px] lg:text-[44px] text-[30px] xl:leading-[50px] lg:leading-[50px] leading-[35px] font-semibold mb-5">What Are Cosmetic Dentistry?</h1>
                            <p className="xl:text-[18px] lg:text-[18px] text-[16px] font-normal text-black xl:leading-[26px] lg:leading-[26px] leading-[24px]">Your smile is one of the most important features of your appearance, shaping the way you express yourself, connect with others, and feel about your own reflection. As modern dentistry continues to evolve, patients today have access to a wide range of advanced cosmetic treatment options designed to improve the appearance, health, and harmony of their smiles. Whether you're looking to brighten your teeth, refine their shape, correct imperfections, or completely transform your smile, cosmetic dentistry can be thoughtfully tailored to your individual needs and goals. At ADIC, we combine modern techniques, advanced materials, and personalized treatment planning to help create a beautiful, healthy, natural-looking smile that complements you at every age.</p>
                        </div>
                    </div>
                </div>


                <div className="container mt-[70px]">
                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-12">
                            <h4 className="text-[var(--primary-color)] xl:text-[30px] lg:text-[30px] text-[25px] xl:leading-[40px] lg:leading-[40px] leading-[30px] font-semibold mb-2 text-center">Why Patients Choose ADIC for Cosmetic Dentistry</h4>
                        </div>
                        <div className="xl:col-span-3 lg:col-span-3 md:col-span-6 col-span-12">
                            <div className="bg-[#E0DED8] p-3 h-full">
                                <h5 className="text-[var(--primary-color)] xl:text-[25px] lg:text-[25px] text-[20px] mb-1 font-semibold leading-[30px]">Smile Confidence</h5>
                                <div className="border-b border-b-[var(--secondary-color)] w-[30%] mb-2"></div>
                                <p className="xl:text-[16px] lg:text-[16px] text-[14px] font-normal text-black xl:leading-[23px] lg:leading-[23px] leading-[20px]"> Do you hesitate when you smile? Cosmetic dentistry can help you feel more confident.</p>
                            </div>
                        </div>
                        <div className="xl:col-span-3 lg:col-span-3 md:col-span-6 col-span-12">
                            <div className="bg-[#FFEFCA] p-3 h-full">
                                <h5 className="text-[var(--primary-color)] xl:text-[25px] lg:text-[25px] text-[20px] mb-1 font-semibold leading-[30px]">Look Your Best</h5>
                                <div className="border-b border-b-[var(--secondary-color)] w-[30%] mb-2"></div>
                                <p className="xl:text-[16px] lg:text-[16px] text-[14px] font-normal text-black xl:leading-[23px] lg:leading-[23px] leading-[20px]"> Create a smile that complements your personality, appearance in both social and professional settings.</p>
                            </div>
                        </div>
                        <div className="xl:col-span-3 lg:col-span-3 md:col-span-6 col-span-12">
                            <div className="bg-[#E0DED8] p-3 h-full">
                                <h5 className="text-[var(--primary-color)] xl:text-[25px] lg:text-[25px] text-[20px] mb-1 font-semibold leading-[30px]">Correct Imperfections</h5>
                                <div className="border-b border-b-[var(--secondary-color)] w-[30%] mb-2"></div>
                                <p className="xl:text-[16px] lg:text-[16px] text-[14px] font-normal text-black xl:leading-[23px] lg:leading-[23px] leading-[20px]"> Address concerns such as discoloration, chips, gaps, or uneven teeth.</p>
                            </div>
                        </div>
                        <div className="xl:col-span-3 lg:col-span-3 md:col-span-6 col-span-12">
                            <div className="bg-[#FFEFCA] p-3 h-full">
                                <h5 className="text-[var(--primary-color)] xl:text-[25px] lg:text-[25px] text-[20px] mb-1 font-semibold leading-[30px]">A Smile That Feels Like You</h5>
                                <div className="border-b border-b-[var(--secondary-color)] w-[30%] mb-2"></div>
                                <p className="xl:text-[16px] lg:text-[16px] text-[14px] font-normal text-black xl:leading-[23px] lg:leading-[23px] leading-[20px]"> Personalized cosmetic treatments designed around your goals and natural features.</p>
                            </div>
                        </div>
                    </div>
                </div>


                <ImplantJourney />

                <ArtScience />

                <ImplantSolutions />

                <PatientResults />

                <HomeAccordian />
            </section> 
        </>
    )
}
