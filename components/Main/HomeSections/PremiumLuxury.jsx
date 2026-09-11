import React from 'react';
import { FaShieldAlt, FaParking, FaDumbbell, FaBed, FaVectorSquare } from "react-icons/fa";

export default function PremiumLuxury() {
    return (
        <>
            <section className="container mt-[60px]">
                <div className="grid grid-cols-12 mb-6">
                    <div className="col-span-12 text-center">
                        <h2 className="text-[28px] font-bold text-[var(--text-color1)]"> 
                            Premium Luxury Listings
                        </h2>
                        <p className="text-[16px] text-[var(--text-color2)] mb-4"> 
                            Exquisite design, premier addresses and world-class amenities for sophisticated living
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-12 gap-4">
                    {/*  */}
                    <div className="col-span-12 xl:col-span-4 lg:col-span-4 md:col-span-6">
                        <div className="bg-white rounded-2xl shadow-md overflow-hidden border-2 border-[#D4AF37] mx-auto h-full">
                            {/* Image */}
                            <img
                                src="/assets/img/PremiumLuxury1.png"
                                alt="image"
                                className="w-full h-48 object-cover"
                            />
                        
                            {/* Content */}
                            <div className="p-4">
                                <span className="inline-block bg-[#D4AF37] text-white text-[11px] font-semibold px-3 py-1 rounded-full mb-3 uppercase">
                                    Ultra Luxury
                                </span>
                        
                                <h2 className="text-[20px] font-bold text-[var(--text-color1)]">
                                    Prestige Lakeshore Heights
                                </h2>
                                <p className="text-[13px] text-[var(--text-color2)] mt-0.5">Whitefield, Bengaluru</p>
                        
                                <p className="text-[14px] text-[var(--text-color1)] mt-2 leading-relaxed">
                                    Breathtaking lake views, high-end marble flooring, private plunge pool and smart-home integrated systems.
                                </p>
                        
                                {/* Amenities */}
                                <div className="flex gap-6 mt-4">
                                    <div className="flex flex-col items-center gap-1">
                                        <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-black">
                                            <FaShieldAlt size={14} />
                                        </div>
                                        <span className="text-[14px] text-black">Security</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1">
                                        <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-black">
                                            <FaParking size={14} />
                                        </div>
                                        <span className="text-[14px] text-black">Parking</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1">
                                        <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-black">
                                            <FaDumbbell size={14} />
                                        </div>
                                        <span className="text-[14px] text-black">Gym</span>
                                    </div>
                                </div>
                        
                                <hr className="my-4 border-gray-100" />
                        
                                {/* Footer */}
                                <div className="flex items-center justify-between">
                                    <span className="text-[var(--primary-color)] font-semibold text-[20px]">
                                        ₹3.80 Cr
                                    </span>
                                    <div className="flex items-center gap-3 text-[var(--text-color2)] text-[12px]">
                                        <span className="flex items-center gap-1">
                                            <FaBed size={13} /> 4 BHK
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <FaVectorSquare size={12} /> 3400 Sq.Ft.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* // */}
                    {/*  */}
                    <div className="col-span-12 xl:col-span-4 lg:col-span-4 md:col-span-6">
                        <div className="bg-white rounded-2xl shadow-md overflow-hidden border-2 border-[#D4AF37] mx-auto h-full">
                            {/* Image */}
                            <img
                                src="/assets/img/PremiumLuxury2.png"
                                alt="image"
                                className="w-full h-48 object-cover"
                            />
                        
                            {/* Content */}
                            <div className="p-4">
                                <span className="inline-block bg-[#D4AF37] text-white text-[11px] font-semibold px-3 py-1 rounded-full mb-3 uppercase">
                                    Ultra Luxury
                                </span>
                        
                                <h2 className="text-[20px] font-bold text-[var(--text-color1)]">
                                    The Trump Towers
                                </h2>
                                <p className="text-[13px] text-[var(--text-color2)] mt-0.5">Kalyani Nagar, Pune</p>
                        
                                <p className="text-[14px] text-[var(--text-color1)] mt-2 leading-relaxed">
                                    Exquisite interior craftsmanship, double-height ceiling lounge, 24/7 concierge, private lift access.
                                </p>
                        
                                {/* Amenities */}
                                <div className="flex gap-6 mt-4">
                                    <div className="flex flex-col items-center gap-1">
                                        <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-black">
                                            <FaShieldAlt size={14} />
                                        </div>
                                        <span className="text-[14px] text-black">Security</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1">
                                        <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-black">
                                            <FaParking size={14} />
                                        </div>
                                        <span className="text-[14px] text-black">Parking</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1">
                                        <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-black">
                                            <FaDumbbell size={14} />
                                        </div>
                                        <span className="text-[14px] text-black">Gym</span>
                                    </div>
                                </div>
                        
                                <hr className="my-4 border-gray-100" />
                        
                                {/* Footer */}
                                <div className="flex items-center justify-between">
                                    <span className="text-[var(--primary-color)] font-semibold text-[20px]">
                                        ₹9.20 Cr
                                    </span>
                                    <div className="flex items-center gap-3 text-[var(--text-color2)] text-[12px]">
                                        <span className="flex items-center gap-1">
                                            <FaBed size={13} /> 4 BHK
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <FaVectorSquare size={12} /> 3400 Sq.Ft.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* // */}
                    {/*  */}
                    <div className="col-span-12 xl:col-span-4 lg:col-span-4 md:col-span-6">
                        <div className="bg-white rounded-2xl shadow-md overflow-hidden border-2 border-[#D4AF37] mx-auto h-full">
                            {/* Image */}
                            <img
                                src="/assets/img/PremiumLuxury3.png"
                                alt="image"
                                className="w-full h-48 object-cover"
                            />
                        
                            {/* Content */}
                            <div className="p-4">
                                <span className="inline-block bg-[#D4AF37] text-white text-[11px] font-semibold px-3 py-1 rounded-full mb-3 uppercase">
                                    Ultra Luxury
                                </span>
                        
                                <h2 className="text-[20px] font-bold text-[var(--text-color1)]">
                                    DLF Kings Court
                                </h2>
                                <p className="text-[13px] text-[var(--text-color2)] mt-0.5">Greater Kailash, Delhi</p>
                        
                                <p className="text-[14px] text-[var(--text-color1)] mt-2 leading-relaxed">
                                    Unmatched colonial architecture heritage, private landscaped lawn, exclusive security vault and wine cellar.
                                </p>
                        
                                {/* Amenities */}
                                <div className="flex gap-6 mt-4">
                                    <div className="flex flex-col items-center gap-1">
                                        <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-black">
                                            <FaShieldAlt size={14} />
                                        </div>
                                        <span className="text-[14px] text-black">Security</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1">
                                        <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-black">
                                            <FaParking size={14} />
                                        </div>
                                        <span className="text-[14px] text-black">Parking</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1">
                                        <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-black">
                                            <FaDumbbell size={14} />
                                        </div>
                                        <span className="text-[14px] text-black">Gym</span>
                                    </div>
                                </div>
                        
                                <hr className="my-4 border-gray-100" />
                        
                                {/* Footer */}
                                <div className="flex items-center justify-between">
                                    <span className="text-[var(--primary-color)] font-semibold text-[20px]">
                                        ₹14.50 Cr
                                    </span>
                                    <div className="flex items-center gap-3 text-[var(--text-color2)] text-[12px]">
                                        <span className="flex items-center gap-1">
                                            <FaBed size={13} /> 4 BHK
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <FaVectorSquare size={12} /> 3400 Sq.Ft.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* // */}
                </div>
            </section>
        </>
    )
}
