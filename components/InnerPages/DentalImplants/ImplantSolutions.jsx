import React from 'react';
import { useState } from "react";

const tabsData = [
    {
        label: "Single Tooth",
        title: "Single Tooth Implant",
        image:
            "/assets/image/SingleTooth.png",
        description:
            "A single titanium implant replaces the root of a missing tooth, topped with a custom porcelain crown that perfectly matches your surrounding teeth. No neighboring teeth are involved or compromised.",
    },
    {
        label: "Implant- Supported Bridge",
        title: "Implant-Supported Bridge",
        image:
            "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=900&auto=format&fit=crop",
        description:
            "Two or more implants support a fixed bridge that replaces several missing teeth in a row, restoring your bite without relying on natural teeth for support.",
    },
    {
        label: "Full-Arch Implants",
        title: "Full-Arch Implants",
        image:
            "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=900&auto=format&fit=crop",
        description:
            "A full set of teeth is replaced using just four to six strategically placed implants, giving you a permanent, natural-looking smile in a single arch.",
    },
    {
        label: "Bone Grafting",
        title: "Bone Grafting",
        image:
            "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=900&auto=format&fit=crop",
        description:
            "When jawbone density is insufficient, a bone graft rebuilds a strong foundation so implants can be placed securely and last for years to come.",
    },
    {
        label: "Full arch workflow",
        title: "Full Arch Workflow",
        image:
            "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=900&auto=format&fit=crop",
        description:
            "From digital planning to final restoration, our full-arch workflow guides you through every step for a predictable, comfortable treatment journey.",
    },
];

export default function ImplantSolutions() {

    const [activeIndex, setActiveIndex] = useState(0);
    const [fade, setFade] = useState(true);
 
    const handleTabClick = (index) => {
        if (index === activeIndex) return;
        setFade(false);
        setTimeout(() => {
            setActiveIndex(index);
            setFade(true);
        }, 150);
    };
 
    const active = tabsData[activeIndex];


    return (
        <>
            <section className="container mt-[60px]">
                <div class="grid grid-cols-12 mb-[50px]">
                    <div className="col-span-2"></div>
                    <div class="xl:col-span-8 lg:col-span-8 col-span-12 text-center">
                        <h2 class="text-[var(--primary-color)] xl:text-[44px] lg:text-[44px] text-[30px] xl:leading-[50px] lg:leading-[50px] leading-[35px] font-semibold mb-2">Implant Solutions for Every Situation</h2>
                        <p class="xl:text-[20px] lg:text-[20px] text-[16px] font-normal text-[var(--text-color1)] xl:leading-[30px] lg:leading-[30px] leading-[24px]">Whether you're missing one tooth or all of them, we have a proven implant solution designed for your unique anatomy and goals.</p>
                    </div>
                    <div className="col-span-2"></div>
                </div>


                <div className="mt-[40px]">
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                        {/* Tabs List */}
                        <div className="flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible lg:w-[220px] flex-shrink-0 pb-2 lg:pb-0">
                            {tabsData.map((tab, index) => (
                                <button
                                    key={tab.label}
                                    type="button"
                                    onClick={() => handleTabClick(index)}
                                    className={`whitespace-nowrap lg:whitespace-normal text-center rounded-full border px-5 py-3 text-[13px] sm:text-[14px] font-semibold transition-colors duration-200 ${
                                        index === activeIndex
                                            ? "bg-[#c9a25f] border-[#c9a25f] text-white"
                                            : "bg-white border-gray-300 text-[#1e2a3a] hover:border-[#c9a25f]"
                                    }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
        
                        {/* Content Panel */}
                        <div className="flex-1 rounded-2xl bg-[#f0f0ee] p-5 sm:p-6 md:p-8">
                            <div
                                className={`flex flex-col md:flex-row gap-6 md:gap-8 items-start transition-opacity duration-300 ease-in-out ${
                                    fade ? "opacity-100" : "opacity-0"
                                }`}
                            >
                                <img
                                    src={active.image}
                                    alt={active.title}
                                    className="w-full md:w-[300px] h-[220px] md:h-[260px] object-cover rounded-xl flex-shrink-0"
                                />
        
                                <div className="flex-1">
                                    <h3 className="text-[var(--primary-color)] xl:text-[30px] lg:text-[30px] text-[25px] xl:leading-[40px] lg:leading-[40px] leading-[30px] font-semibold mb-2">
                                        {active.title}
                                    </h3>
                                    <p className="xl:text-[18px] lg:text-[18px] text-[16px] font-normal text-black xl:leading-[26px] lg:leading-[26px] leading-[24px] mb-6">
                                        {active.description}
                                    </p>
                                    <button
                                        type="button"
                                        className="rounded-md bg-[var(--primary-color)] px-7 py-3 text-[13px] sm:text-[14px] font-semibold text-white hover:bg-[var(--secondary-color)] transition-colors"
                                    >
                                        Know More
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
