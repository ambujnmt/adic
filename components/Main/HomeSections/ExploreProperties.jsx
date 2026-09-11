import React from 'react'

export default function ExploreProperties() {
    return (
        <>
            <section className="w-full bg-[#F5F7FA] py-14">
                <div className="container">
                    <div className="grid grid-cols-12 mb-6">
                        <div className="col-span-12 text-center">
                            <h2 className="text-[28px] font-bold text-[var(--text-color1)]"> 
                                Explore Properties in Popular Indian Cities
                            </h2>
                            <p className="text-[16px] text-[var(--text-color2)] mb-4"> 
                                Invest or find your ideal dwelling in metropolitan hubs and high-growth cities
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
                        {/* Mumbai */}
                        <div className="group relative h-32 sm:h-36 rounded-xl overflow-hidden cursor-pointer">
                        <img
                            src="/assets/img/city-1.png"
                            alt="Mumbai"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/35" />
                        <span className="absolute inset-0 flex items-center justify-center text-white text-[20] sm:text-base font-medium">
                            Mumbai
                        </span>
                        </div>
                
                        {/* Delhi */}
                        <div className="group relative h-32 sm:h-36 rounded-xl overflow-hidden cursor-pointer">
                        <img
                            src="/assets/img/city-2.png"
                            alt="Delhi"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/35" />
                        <span className="absolute inset-0 flex items-center justify-center text-white text-[20] sm:text-base font-medium">
                            Delhi
                        </span>
                        </div>
                
                        {/* Bengaluru */}
                        <div className="group relative h-32 sm:h-36 rounded-xl overflow-hidden cursor-pointer">
                        <img
                            src="/assets/img/city-3.png"
                            alt="Bengaluru"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/35" />
                        <span className="absolute inset-0 flex items-center justify-center text-white text-[20] sm:text-base font-medium">
                            Bengaluru
                        </span>
                        </div>
                
                        {/* Pune */}
                        <div className="group relative h-32 sm:h-36 rounded-xl overflow-hidden cursor-pointer">
                        <img
                            src="/assets/img/city-4.png"
                            alt="Pune"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/35" />
                        <span className="absolute inset-0 flex items-center justify-center text-white text-[20] sm:text-base font-medium">
                            Pune
                        </span>
                        </div>
                
                        {/* Hyderabad */}
                        <div className="group relative h-32 sm:h-36 rounded-xl overflow-hidden cursor-pointer">
                        <img
                            src="/assets/img/city-5.png"
                            alt="Hyderabad"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/35" />
                        <span className="absolute inset-0 flex items-center justify-center text-white text-[20] sm:text-base font-medium">
                            Hyderabad
                        </span>
                        </div>
                
                        {/* Chennai */}
                        <div className="group relative h-32 sm:h-36 rounded-xl overflow-hidden cursor-pointer">
                        <img
                            src="/assets/img/city-6.png"
                            alt="Chennai"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/35" />
                        <span className="absolute inset-0 flex items-center justify-center text-white text-[20] sm:text-base font-medium">
                            Chennai
                        </span>
                        </div>
                
                        {/* Kolkata */}
                        <div className="group relative h-32 sm:h-36 rounded-xl overflow-hidden cursor-pointer">
                        <img
                            src="/assets/img/city-7.png"
                            alt="Kolkata"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/35" />
                        <span className="absolute inset-0 flex items-center justify-center text-white text-[20] sm:text-base font-medium">
                            Kolkata
                        </span>
                        </div>
                
                        {/* Jaipur */}
                        <div className="group relative h-32 sm:h-36 rounded-xl overflow-hidden cursor-pointer">
                        <img
                            src="/assets/img/city-8.png"
                            alt="Jaipur"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/35" />
                        <span className="absolute inset-0 flex items-center justify-center text-white text-[20] sm:text-base font-medium">
                            Jaipur
                        </span>
                        </div>
                
                        {/* Lucknow */}
                        <div className="group relative h-32 sm:h-36 rounded-xl overflow-hidden cursor-pointer">
                        <img
                            src="/assets/img/city-9.png"
                            alt="Lucknow"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/35" />
                        <span className="absolute inset-0 flex items-center justify-center text-white text-[20] sm:text-base font-medium">
                            Lucknow
                        </span>
                        </div>
                
                        {/* Ahmedabad */}
                        <div className="group relative h-32 sm:h-36 rounded-xl overflow-hidden cursor-pointer">
                        <img
                            src="/assets/img/city-10.png"
                            alt="Ahmedabad"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/35" />
                        <span className="absolute inset-0 flex items-center justify-center text-white text-[20] sm:text-base font-medium">
                            Ahmedabad
                        </span>
                        </div>
                
                        {/* Noida */}
                        <div className="group relative h-32 sm:h-36 rounded-xl overflow-hidden cursor-pointer">
                        <img
                            src="/assets/img/city-11.png"
                            alt="Noida"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/35" />
                        <span className="absolute inset-0 flex items-center justify-center text-white text-[20] sm:text-base font-medium">
                            Noida
                        </span>
                        </div>
                
                        {/* Ghaziabad */}
                        <div className="group relative h-32 sm:h-36 rounded-xl overflow-hidden cursor-pointer">
                        <img
                            src="/assets/img/city-12.png"
                            alt="Ghaziabad"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/35" />
                        <span className="absolute inset-0 flex items-center justify-center text-white text-[20] sm:text-base font-medium">
                            Ghaziabad
                        </span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
