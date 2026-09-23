"use client";

import { Link } from "@heroui/react";
import { FaPhoneAlt, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function TopBar() {
    return (
        <section className="w-full py-[6px] text-white text-xs md:text-sm">
            <div className="container">
                <div className="border-b border-b-[#ccc] bg-[#f8f6ee]">
                    <div className="grid grid-cols-12 gap-6 items-center">
                        <div className="col-span-4">
                            <div className="flex flex-wrap items-center gap-2 md:gap-3"> 
                                <span className="flex items-center gap-1.5"> 
                                    <p className="text-[#585B5F] font-normal text-[14px]">
                                        3500 Corinth Parkway, Suite #200Corinth, TX 76208
                                    </p>
                                </span> 
                            </div>
                        </div>
                        <div className="col-span-8">
                            <div className="flex flex-wrap items-center justify-end gap-2 md:gap-3">
                                <Link href="#" className="hover:text-[var(--primary-color)] text-[#102240] font-normal text-[14px] transition-all duration-300 ease-in-out uppercase">
                                    <FaPhoneAlt className="text-[var(--primary-color)]" size={12} />&nbsp; Call Now
                                </Link> 
                                <Link href="#" className="bg-[var(--primary-color)] py-3 px-3 text-white font-light text-[14px] transition-all duration-300 ease-in-out hover:text-white hover:bg-[var(--secondary-color)] uppercase">
                                    Request a Consultation
                                </Link> 
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </section>
    );
}