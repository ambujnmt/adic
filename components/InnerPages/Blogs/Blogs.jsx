import React from 'react'
import { FiArrowRight, FiCalendar, FiImage } from "react-icons/fi";

export default function Blogs() {
    return (
        <>
            <section>
                <div className="container">
                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-12">
                            <img
                                src="/assets/image/crowns-img1.png"
                                alt="imag"
                                className="w-ful h-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white my-[50px]">
                <div className="container">
                    {/* ---------- Header ---------- */}
                    <div className="">
                        <h6 className="text-[var(--secondary-color)] text-[18px] uppercase font-bold"> Our Blog </h6>
                        <h2 className="mt-3 text-[var(--primary-color)] xl:text-[44px] lg:text-[44px] text-[30px] xl:leading-[50px] lg:leading-[50px] leading-[35px] font-semibold mb-5">Tips, guides and news from our dental team.</h2>
                        <p className="xl:text-[20px] lg:text-[20px] text-[16px] font-normal text-[var(--text-color1)] xl:leading-[30px] lg:leading-[30px] leading-[24px]">Straightforward, easy-to-follow advice on keeping your smile healthy — written by our doctors and hygienists.</p>
                    </div>
            
                    {/* ---------- Grid: 3 columns ---------- */}
                    <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Post 1 */}
                    <article className="flex flex-col overflow-hidden rounded-xl border border-slate-100 shadow-sm transition hover:shadow-md">
                        <div className="flex w-full items-center justify-center bg-gradient-to-br from-stone-200 to-stone-300">
                            <img
                                src="/assets/image/Implants1.png"
                                alt="Consultation & Evaluation"
                                className="w-full h-48 object-cover"
                            />
                        </div>
                        <div className="flex flex-1 flex-col p-5"> 
                            <h3 className="mt-2 text-[var(--primary-color)] xl:text-[20px] lg:text-[20px] text-[18px] xl:leading-[25px] lg:leading-[25px] leading-[20px] font-semibold mb-2">
                                What to Expect During Your Implant Consultation
                            </h3>
                            <p className="mt-2 flex-1 xl:text-[16px] lg:text-[16px] text-[16px] font-normal text-[var(--text-color1)] xl:leading-[26px] lg:leading-[26px] leading-[22px] line-clamp-2">
                                A first look at how we assess candidacy, from bone density
                                scans to reviewing your full medical history.
                            </p>
                            <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
                                <span className="flex items-center gap-1.5 text-xs text-slate-400">
                                    <FiCalendar className="h-3.5 w-3.5" />
                                    Sep 12, 2026
                                </span>
                                <a
                                href="/blogs/blogDetail"
                                className="flex items-center gap-1 text-sm font-medium text-[var(--secondary-color)] hover:text-[var(--primary-color)]"
                                >
                                    Read more
                                    <FiArrowRight className="h-3.5 w-3.5" />
                                </a>
                            </div>
                        </div>
                    </article>
            
                    {/* Post 2 */}
                    <article className="flex flex-col overflow-hidden rounded-xl border border-slate-100 shadow-sm transition hover:shadow-md">
                        <div className="flex h-48 w-full items-center justify-center bg-gradient-to-br from-rose-100 to-stone-200">
                            <img
                                src="/assets/image/Implants2.png"
                                alt="Consultation & Evaluation"
                                className="w-full h-48 object-cover"
                            />
                        </div>
                        <div className="flex flex-1 flex-col p-5"> 
                            <h3 className="mt-2 text-[var(--primary-color)] xl:text-[20px] lg:text-[20px] text-[18px] xl:leading-[25px] lg:leading-[25px] leading-[20px] font-semibold mb-2">
                                Porcelain vs. Composite Veneers: Which Is Right for You?
                            </h3>
                            <p className="mt-2 flex-1 xl:text-[16px] lg:text-[16px] text-[16px] font-normal text-[var(--text-color1)] xl:leading-[26px] lg:leading-[26px] leading-[22px] line-clamp-2">
                                Breaking down the cost, durability, and look of each option
                                so you can choose with confidence.
                            </p>
                            <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
                                <span className="flex items-center gap-1.5 text-xs text-slate-400">
                                <FiCalendar className="h-3.5 w-3.5" />
                                    Sep 5, 2026
                                    </span>
                                <a
                                href="#"
                                className="flex items-center gap-1 text-sm font-medium text-[var(--secondary-color)] hover:text-[var(--primary-color)]"
                                >
                                    Read more
                                    <FiArrowRight className="h-3.5 w-3.5" />
                                </a>
                            </div>
                        </div>
                    </article>
            
                    {/* Post 3 */}
                    <article className="flex flex-col overflow-hidden rounded-xl border border-slate-100 shadow-sm transition hover:shadow-md">
                        <div className="flex h-48 w-full items-center justify-center bg-gradient-to-br from-slate-200 to-slate-300">
                            <img
                                src="/assets/image/Implants3.png"
                                alt="Consultation & Evaluation"
                                className="w-full h-48 object-cover"
                            />
                        </div>
                        <div className="flex flex-1 flex-col p-5"> 
                            <h3 className="mt-2 text-[var(--primary-color)] xl:text-[20px] lg:text-[20px] text-[18px] xl:leading-[25px] lg:leading-[25px] leading-[20px] font-semibold mb-2">
                                Recovering from All-on-X: A Week-by-Week Guide
                            </h3>
                            <p className="mt-2 flex-1 xl:text-[16px] lg:text-[16px] text-[16px] font-normal text-[var(--text-color1)] xl:leading-[26px] lg:leading-[26px] leading-[22px] line-clamp-2">
                                What to eat, how to manage swelling, and when you can
                                return to your normal routine.
                            </p>
                            <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
                                <span className="flex items-center gap-1.5 text-xs text-slate-400">
                                    <FiCalendar className="h-3.5 w-3.5" />
                                    Aug 28, 2026
                                </span>
                                <a
                                href="#"
                                className="flex items-center gap-1 text-sm font-medium text-[var(--secondary-color)] hover:text-[var(--primary-color)]"
                                >
                                    Read more
                                    <FiArrowRight className="h-3.5 w-3.5" />
                                </a>
                            </div>
                        </div>
                    </article>
            
                    {/* Post 4 */}
                    <article className="flex flex-col overflow-hidden rounded-xl border border-slate-100 shadow-sm transition hover:shadow-md">
                        <div className="flex h-48 w-full items-center justify-center bg-gradient-to-br from-teal-100 to-teal-200">
                            <img
                                src="/assets/image/Implants4.png"
                                alt="Consultation & Evaluation"
                                className="w-full h-48 object-cover"
                            />
                        </div>
                        <div className="flex flex-1 flex-col p-5"> 
                            <h3 className="mt-2 text-[var(--primary-color)] xl:text-[20px] lg:text-[20px] text-[18px] xl:leading-[25px] lg:leading-[25px] leading-[20px] font-semibold mb-2">
                                5 Habits That Are Secretly Damaging Your Enamel
                            </h3>
                            <p className="mt-2 flex-1 xl:text-[16px] lg:text-[16px] text-[16px] font-normal text-[var(--text-color1)] xl:leading-[26px] lg:leading-[26px] leading-[22px] line-clamp-2">
                                From ice-chewing to acidic drinks — small daily habits that
                                add up over time.
                            </p>
                            <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
                                <span className="flex items-center gap-1.5 text-xs text-slate-400">
                                    <FiCalendar className="h-3.5 w-3.5" />
                                    Aug 20, 2026
                                </span>
                                <a
                                href="#"
                                className="flex items-center gap-1 text-sm font-medium text-[var(--secondary-color)] hover:text-[var(--primary-color)]"
                                >
                                    Read more
                                    <FiArrowRight className="h-3.5 w-3.5" />
                                </a>
                            </div>
                        </div>
                    </article>
            
                    {/* Post 5 */}
                    <article className="flex flex-col overflow-hidden rounded-xl border border-slate-100 shadow-sm transition hover:shadow-md">
                        <div className="flex h-48 w-full items-center justify-center bg-gradient-to-br from-amber-100 to-amber-200">
                            <img
                                src="/assets/image/Implants5.png"
                                alt="Consultation & Evaluation"
                                className="w-full h-48 object-cover"
                            />
                        </div>
                        <div className="flex flex-1 flex-col p-5"> 
                            <h3 className="mt-2 text-[var(--primary-color)] xl:text-[20px] lg:text-[20px] text-[18px] xl:leading-[25px] lg:leading-[25px] leading-[20px] font-semibold mb-2">
                                In-Office vs. At-Home Whitening: What's the Difference?
                            </h3>
                            <p className="mt-2 flex-1 xl:text-[16px] lg:text-[16px] text-[16px] font-normal text-[var(--text-color1)] xl:leading-[26px] lg:leading-[26px] leading-[22px] line-clamp-2">
                                We compare results, cost, and how long each option keeps
                                your smile bright.
                            </p>
                            <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
                                <span className="flex items-center gap-1.5 text-xs text-slate-400">
                                    <FiCalendar className="h-3.5 w-3.5" />
                                    Aug 14, 2026
                                </span>
                                <a
                                href="#"
                                className="flex items-center gap-1 text-sm font-medium text-[var(--secondary-color)] hover:text-[var(--primary-color)]"
                                >
                                    Read more
                                    <FiArrowRight className="h-3.5 w-3.5" />
                                </a>
                            </div>
                        </div>
                    </article>
            
                    {/* Post 6 */}
                    <article className="flex flex-col overflow-hidden rounded-xl border border-slate-100 shadow-sm transition hover:shadow-md">
                        <div className="flex h-48 w-full items-center justify-center bg-gradient-to-br from-purple-100 to-purple-200">
                            <img
                                src="/assets/image/Implants1.png"
                                alt="Consultation & Evaluation"
                                className="w-full h-48 object-cover"
                            />
                        </div>
                        <div className="flex flex-1 flex-col p-5"> 
                            <h3 className="mt-2 text-[var(--primary-color)] xl:text-[20px] lg:text-[20px] text-[18px] xl:leading-[25px] lg:leading-[25px] leading-[20px] font-semibold mb-2">
                                How Long Does a Dental Crown Really Last?
                            </h3>
                            <p className="mt-2 flex-1 xl:text-[16px] lg:text-[16px] text-[16px] font-normal text-[var(--text-color1)] xl:leading-[26px] lg:leading-[26px] leading-[22px] line-clamp-2">
                                The honest answer depends on material and care — here's
                                what affects the lifespan of your crown.
                            </p>
                            <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
                                <span className="flex items-center gap-1.5 text-xs text-slate-400">
                                    <FiCalendar className="h-3.5 w-3.5" />
                                    Aug 7, 2026
                                </span>
                                <a
                                href="#"
                                className="flex items-center gap-1 text-sm font-medium text-[var(--secondary-color)] hover:text-[var(--primary-color)]"
                                >
                                    Read more
                                    <FiArrowRight className="h-3.5 w-3.5" />
                                </a>
                            </div>
                        </div>
                    </article>
                    </div>
                </div>
            </section>
        </>
    )
}
