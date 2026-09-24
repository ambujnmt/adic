"use client";
import { useEffect, useState } from "react";
import { FaStar, FaUserCircle } from "react-icons/fa";
 

const CARDS = [
    {
        id: "Harry",
        name: "Harry",
        role: "Marketing Manager",
        rating: 5,
        image: "/assets/image/testi-img1.png",
        review:
            "Finding an apartment in Sector 137 Noida was incredibly smooth. bhumimanthan.com helped us connect with verified agents and schedule tours quickly.",
    },
    {
        id: "Sunio",
        name: "Sunio",
        role: "Doctor",
        rating: 5,
        image: "/assets/image/testi-img2.png",
        review:
        "The experience was exceptional from beginning to end. I appreciated how clearly everything was explained and how personalized my treatment plan felt.",
    },
    {
        id: "Sizu",
        name: "Sizuss",
        role: "Student",
        rating: 4,
        image: "/assets/image/testi-img3.png",
        review:
        "I finally feel confident smiling again. The team made the entire process feel comfortable, thoughtful, and focused on what was best for me",
    },
];

export default function HomeTestimonial() {
    const [cardsPerView, setCardsPerView] = useState(3);
    const [slideIndex, setSlideIndex] = useState(0);
    const [withTransition, setWithTransition] = useState(true);

    useEffect(() => {
        const updateCardsPerView = () => {
        if (window.innerWidth < 640) {
            setCardsPerView(1);
        } else if (window.innerWidth < 1024) {
            setCardsPerView(2);
        } else {
            setCardsPerView(3);
        }
        };

        updateCardsPerView();
        window.addEventListener("resize", updateCardsPerView);
        return () => window.removeEventListener("resize", updateCardsPerView);
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
        setWithTransition(true);
        setSlideIndex((prev) => prev + 1);
        }, 4000);

        return () => clearInterval(timer);
    }, []);

    const trackCards = [...CARDS, ...CARDS.slice(0, cardsPerView)];

    useEffect(() => {
        if (slideIndex === CARDS.length) {
        const resetTimer = setTimeout(() => {
            setWithTransition(false);
            setSlideIndex(0);
        }, 600);

        return () => clearTimeout(resetTimer);
        }
    }, [slideIndex]);

    useEffect(() => {
        if (!withTransition) {
        const raf = requestAnimationFrame(() => {
            requestAnimationFrame(() => setWithTransition(true));
        });

        return () => cancelAnimationFrame(raf);
        }
    }, [withTransition]);

    const activeDot = slideIndex % CARDS.length;

    const goToSlide = (idx) => {
        setWithTransition(true);
        setSlideIndex(idx);
    };

    return (
        <section className="w-full py-14 mt-[40px]">
            <div className="container">
                <div className="grid grid-cols-12 mb-6">
                    <div className="col-span-12 text-center">
                        <h2 className="text-[var(--primary-color)] xl:text-[44px] lg:text-[44px] text-[30px] xl:leading-[50px] lg:leading-[50px] leading-[35px] font-semibold"> 
                            Testimonials
                        </h2>
                        <p className="xl:text-[20px] lg:text-[20px] text-[16px] font-normal text-[var(--text-color1)] xl:leading-[30px] lg:leading-[30px] leading-[24px]"> 
                            Their Stories. Their Smiles
                        </p>
                    </div>
                </div>

                 

                {/* Card slider */}
                <div className="overflow-hidden">
                    <div
                        className="flex"
                        style={{
                        transform: `translateX(-${slideIndex * (100 / cardsPerView)}%)`,
                        transition: withTransition ? "transform 0.6s ease" : "none",
                        }}
                    >
                        {trackCards.map((card, idx) => (
                            <div
                                key={`${card.id}-${idx}`}
                                className="shrink-0 px-3"
                                style={{ width: `${100 / cardsPerView}%` }}
                            >
                                <div className="rounded-2xl p-5 bg-[#f7f5f2] border border-gray-200 shadow-sm h-full">
                                    {/* Reviewer Info - avatar + name + role */}
                                    <div className="flex items-center gap-3 mb-4">
                                        {card.image ? (
                                            <img
                                                src={card.image}
                                                alt={card.name}
                                                className="w-11 h-11 rounded-full object-cover flex-shrink-0"
                                            />
                                        ) : (
                                            <div className="w-11 h-11 flex-shrink-0 flex items-center justify-center rounded-full bg-purple-100 text-purple-500">
                                                <FaUserCircle size={24} />
                                            </div>
                                        )}
                                        <div>
                                            <h5 className="xl:text-[24pxpx] lg:text-[24pxpx] text-[16px] font-normal text-[var(--text-color1)] xl:leading-[26px] lg:leading-[26px] leading-[22px]">
                                                {card.name}
                                            </h5>
                                            <p className="xl:text-[14px] lg:text-[14px] text-[16px] font-normal text-[var(--text-color1)] xl:leading-[26px] lg:leading-[26px] leading-[22px]">
                                                {card.role}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Stars */}
                                    <div className="flex gap-1 mb-3">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <FaStar
                                                key={i}
                                                size={14}
                                                className={i < card.rating ? "text-[var(--secondary-color)]" : "text-gray-200"}
                                            />
                                        ))}
                                    </div>

                                    {/* Review */}
                                    <p className="xl:text-[16px] lg:text-[16px] text-[16px] font-normal text-[var(--text-color1)] xl:leading-[26px] lg:leading-[26px] leading-[22px]">
                                        {card.review}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Dots */}
                <div className="flex justify-center gap-2 mt-8">
                {CARDS.map((card, idx) => (
                    <button
                    key={card.id}
                    aria-label={`Go to slide ${idx + 1}`}
                    onClick={() => goToSlide(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                        idx === activeDot
                        ? "w-6 bg-[var(--primary-color)]"
                        : "w-2 bg-gray-300 hover:bg-gray-400"
                    }`}
                    />
                ))}
                </div>
            </div>

            <style>{`
                @keyframes logo-scroll {
                from {
                    transform: translateX(0);
                }
                to {
                    transform: translateX(-50%);
                }
                }

                .animate-logo-scroll {
                animation: logo-scroll 20s linear infinite;
                }
            `}</style>
        </section>
    );
}