import React from 'react'

export default function ArtScience() {
    return (
        <>  
            <section>
                <div className="container"> 
                    <div className="grid grid-cols-12 xl:gap-10 lg:gap-10 gap-4 mt-[60px]">
                        <div className="xl:col-span-8 lg:col-span-8 md:col-span-6 col-span-12">
                            <h6 className="text-[var(--secondary-color)] text-[18px] uppercase font-bold"> The ART & SCIENCE </h6>
                            <h1 className="text-[var(--primary-color)] xl:text-[44px] lg:text-[44px] text-[30px] xl:leading-[50px] lg:leading-[50px] leading-[35px] font-semibold mb-5">Cosmetic Dentistry is an Art and a Science</h1>
                            <p className="xl:text-[18px] lg:text-[18px] text-[16px] font-normal text-black xl:leading-[26px] lg:leading-[26px] leading-[24px] mb-3">Let us help you achieve your smile goals! Cosmetic dentistry is different from general dental care; it is both an art and science. By providing cosmetic dental care, your dentist is able to offer smile enhancement, restoration, and maintenance treatments for optimal dental health. Using cutting-edge techniques and advanced materials, our office proudly offers you a beautiful, natural smile and all the benefits that come with it.</p>
                            <p className="xl:text-[18px] lg:text-[18px] text-[16px] font-normal text-black xl:leading-[26px] lg:leading-[26px] leading-[24px]">Feel more confident about your appearance with a new smile that is as beautiful as it is healthy. You no longer have to suffer from missing, chipped, discolored, or crooked teeth. Contact our practice today and schedule your smile makeover!</p>
                        </div>
                        <div className="xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12">
                            <img
                                src="/assets/image/CosmeticDentistry-img2.png"
                                alt="image"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
