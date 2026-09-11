import React from 'react'
import { FiArrowRight } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";

export default function Blogs() {
    return (
        <section className="container mt-[60px]">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-6">
                <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                        Real Estate News & Insights
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                        Stay ahead with smart property trends, regulatory updates and investment advice
                    </p>
                </div>
                <a
                    href="#"
                    className="flex items-center gap-1 text-sm font-semibold text-blue-700 hover:text-blue-800 shrink-0 whitespace-nowrap"
                >
                    View All News Blogs
                    <FiArrowRight className="text-base" />
                </a>
            </div>
 

            <div className="grid grid-cols-12 gap-4 mt-[30px]">
                <div className="col-span-12 xl:col-span-4 lg:col-span-4 md:col-span-6">
                    <div className="max-w-sm w-full bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 mx-auto">
                        {/* Image */}
                        <img
                            src="/assets/img/blog-img1.png"
                            alt="image"
                            className="w-full h-44 object-cover"
                        />
                    
                        {/* Content */}
                        <div className="p-4">
                            <div className="flex items-center justify-between text-[11px] text-[var(--text-color2)]">
                                <span>Jan 12, 2025</span>
                                <span>5 min read</span>
                            </div>
                    
                            <h2 className="text-[18px] font-bold text-[var(--text-color1)] mt-2 leading-snug line-clamp-1">
                                Top 10 Tips for First-Time Home Buyers in 2025
                            </h2>
                    
                            <button className="flex items-center gap-1.5 text-[var(--primary-color)] text-[13px] font-semibold mt-3 hover:gap-2.5 transition-all">
                                Read More <FaArrowRight size={12} />
                            </button>
                        </div>
                    </div>                            
                </div>

                <div className="col-span-12 xl:col-span-4 lg:col-span-4 md:col-span-6">
                    <div className="max-w-sm w-full bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 mx-auto">
                        {/* Image */}
                        <img
                            src="/assets/img/blog-img2.png"
                            alt="image"
                            className="w-full h-44 object-cover"
                        />
                    
                        {/* Content */}
                        <div className="p-4">
                            <div className="flex items-center justify-between text-[11px] text-[var(--text-color2)]">
                                <span>Jan 12, 2025</span>
                                <span>5 min read</span>
                            </div>
                    
                            <h2 className="text-[18px] font-bold text-[var(--text-color1)] mt-2 leading-snug line-clamp-1">
                                Real Estate Market Trends: Where to Invest for High Returns
                            </h2>
                    
                            <button className="flex items-center gap-1.5 text-[var(--primary-color)] text-[13px] font-semibold mt-3 hover:gap-2.5 transition-all">
                                Read More <FaArrowRight size={12} />
                            </button>
                        </div>
                    </div>                            
                </div>

                <div className="col-span-12 xl:col-span-4 lg:col-span-4 md:col-span-6">
                    <div className="max-w-sm w-full bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 mx-auto">
                        {/* Image */}
                        <img
                            src="/assets/img/blog-img3.png"
                            alt="image"
                            className="w-full h-44 object-cover"
                        />
                    
                        {/* Content */}
                        <div className="p-4">
                            <div className="flex items-center justify-between text-[11px] text-[var(--text-color2)]">
                                <span>Jan 12, 2025</span>
                                <span>5 min read</span>
                            </div>
                    
                            <h2 className="text-[18px] font-bold text-[var(--text-color1)] mt-2 leading-snug line-clamp-1">
                                Understanding RERA and Property Documentation in India
                            </h2>
                    
                            <button className="flex items-center gap-1.5 text-[var(--primary-color)] text-[13px] font-semibold mt-3 hover:gap-2.5 transition-all">
                                Read More <FaArrowRight size={12} />
                            </button>
                        </div>
                    </div>                            
                </div>
            </div>
        </section>
    )
}
