import {
  FiArrowLeft,
  FiArrowRight,
  FiCalendar,
  FiClock,
  FiImage,
  FiFacebook,
  FiTwitter,
  FiLinkedin,
  FiLink,
  FiUser,
} from "react-icons/fi";
 
export default function BlogDetail() {
    return (
        <article className="bg-white">
            {/* ---------- Back link + header ---------- */}
            <div className="mx-auto max-w-3xl px-6 pt-12 sm:px-10 lg:px-0">
                <a
                href="/blogs/blogs"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-slate-700"
                >
                <FiArrowLeft className="h-3.5 w-3.5" />
                    Back to blog
                </a>
                <h6 className="mt-2 text-[var(--secondary-color)] text-[18px] uppercase font-bold"> DENTAL IMPLANTS </h6>
                <h2 className="mt-3 text-[var(--primary-color)] xl:text-[44px] lg:text-[44px] text-[30px] xl:leading-[50px] lg:leading-[50px] leading-[35px] font-semibold mb-5">What to Expect During Your Implant Consultation</h2> 

                {/* ---------- Meta row ---------- */}
                <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 border-b border-slate-100 pb-6">
                <div className="flex items-center gap-2.5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-stone-200">
                    <FiUser className="h-4 w-4 text-stone-500" />
                    </div>
                    <span className="text-sm font-medium text-slate-700">
                    Dr. Ashitey
                    </span>
                </div>
                <span className="flex items-center gap-1.5 text-sm text-slate-400">
                    <FiCalendar className="h-3.5 w-3.5" />
                    Sep 12, 2026
                </span>
                <span className="flex items-center gap-1.5 text-sm text-slate-400">
                    <FiClock className="h-3.5 w-3.5" />
                    6 min read
                </span>
                </div>
            </div>

            {/* ---------- Hero image ---------- */}
            <div className="mx-auto mt-8 max-w-5xl px-6 sm:px-10 lg:px-0">
                <div className="flex w-full items-center justify-center rounded-xl bg-gradient-to-br from-stone-200 to-stone-300">
                    <img
                        src="/assets/image/crowns-img1.png"
                        alt="imag"
                        className="w-ful h-auto"
                    />
                </div>
            </div>

            {/* ---------- Article body ---------- */}
            <div className="mx-auto max-w-3xl px-6 py-12 sm:px-10 lg:px-0">
                <div className="space-y-6 xl:text-[18px] lg:text-[18px] text-[16px] font-normal text-black xl:leading-[26px] lg:leading-[26px] leading-[24px]">
                <p>
                    Deciding to explore dental implants is a big step, and most of
                    the uncertainty people feel comes from simply not knowing what
                    the first appointment looks like. Your consultation is designed
                    to answer every question before any treatment begins, so you
                    can make a decision that feels informed rather than rushed.
                </p>

                <p>
                    The visit typically starts with a conversation about your goals
                    — whether you're replacing a single tooth, several teeth, or
                    considering a full-arch restoration. From there, we move into
                    the clinical assessment that determines candidacy.
                </p>

                <h2 className="pt-4 font-serif text-2xl text-slate-900">
                    Reviewing your oral health
                </h2>
                <p>
                    Dr. Ashitey will examine your gums, remaining teeth, and any
                    existing dental work to check for signs of infection or disease
                    that would need to be addressed first. Healthy gums are one of
                    the strongest predictors of long-term implant success.
                </p>

                <h2 className="pt-4 font-serif text-2xl text-slate-900">
                    Checking bone density
                </h2>
                <p>
                    A 3D scan gives us a clear picture of the bone available to
                    support an implant. If bone density is lower than ideal, that
                    doesn't rule implants out — it usually just means a bone
                    grafting step is added to the plan.
                </p>

                <blockquote className="border-l-2 border-amber-700 pl-5 text-lg italic text-slate-700">
                    "Most adults in good general health may be candidates for
                    dental implants — the consultation is really about finding the
                    right plan for your specific mouth."
                </blockquote>

                <h2 className="pt-4 font-serif text-2xl text-slate-900">
                    Discussing your options
                </h2>
                <p>
                    Once we have a full picture of your oral and bone health, we'll
                    walk through the restoration types available to you, expected
                    timelines, and a cost estimate — so there are no surprises
                    before you commit to treatment.
                </p>
                </div>

               

                {/* ---------- Author bio ---------- */}
                <div className="mt-10 flex flex-col gap-4 rounded-xl bg-[#FAF7F2] p-6 sm:flex-row sm:items-center">
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-stone-200">
                    <FiUser className="h-7 w-7 text-stone-500" />
                </div>
                <div>
                    <p className="text-sm font-semibold text-slate-900">
                    Dr. Ashitey
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-500">
                    Dr. Ashitey has over 15 years of experience in implant and
                    restorative dentistry, focused on making complex treatment
                    plans easy to understand.
                    </p>
                </div>
                </div>
            </div>

            {/* ---------- Related posts ---------- */}
            <div className="border-t border-slate-100 bg-[#FAF7F2] py-16 px-6 sm:px-10 lg:px-16">
                <div className="container">
                <h2 className="text-[var(--primary-color)] xl:text-[44px] lg:text-[44px] text-[30px] xl:leading-[50px] lg:leading-[50px] leading-[35px] font-semibold mb-5">
                    Related articles
                </h2>

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
                                    </div>
                </div>
            </div>
        </article>
    );
}