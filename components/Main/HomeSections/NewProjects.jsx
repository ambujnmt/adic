import { FiArrowRight } from "react-icons/fi";

export default function NewProjects() {
    return (
        <section className="container mt-[60px] py-10">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-6">
                <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-color1)]">
                        New Launch &amp; Premium Projects
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                        Explore newly introduced landmark developments from India&apos;s most trusted real estate builders
                    </p>
                </div>
                <a
                    href="#"
                    className="flex items-center gap-1 text-sm font-semibold text-blue-700 hover:text-blue-800 shrink-0 whitespace-nowrap"
                >
                    Explore New Projects
                    <FiArrowRight className="text-base" />
                </a>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
                {/* Card 1 */}
                <div className="group cursor-pointer">
                <div className="overflow-hidden rounded-lg mb-3">
                    <img
                    src="/assets/img/pro-1.png"
                    alt="image"
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                </div>
                <p className="text-[11px] font-semibold tracking-wide text-[var(--text-color2)] mb-1">
                    GODREJ PROPERTIES
                </p>
                <h3 className="text-[18px] font-bold text-[var(--text-color1)]">Godrej Horizon</h3>
                <p className="text-[13px] text-[var(--text-color2)] mt-0.5">Wadala, Mumbai</p>
                <p className="text-[14px] font-bold text-[var(--primary-color)] mt-2">
                    ₹2.45 Cr onwards
                </p>
                <p className="ext-[11px] text-[var(--text-color2)] mt-0.5">2 &amp; 3 BHK Apartments</p>
                </div>

                {/* Card 2 */}
                <div className="group cursor-pointer">
                <div className="overflow-hidden rounded-lg mb-3">
                    <img
                    src="/assets/img/pro-2.png"
                    alt="image"
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                </div>
                <p className="text-[11px] font-semibold tracking-wide text-[var(--text-color2)] mb-1">
                    DLF LIMITED
                </p>
                <h3 className="text-[18px] font-bold text-[var(--text-color1)]">DLF The Arbour</h3>
                <p className="text-[13px] text-[var(--text-color2)] mt-0.5">Sector 63, Gurugram</p>
                <p className="text-[14px] font-bold text-[var(--primary-color)] mt-2">
                    ₹7.50 Cr onwards
                </p>
                <p className="ext-[11px] text-[var(--text-color2)] mt-0.5">Ultra Luxury 4 BHK</p>
                </div>

                {/* Card 3 */}
                <div className="group cursor-pointer">
                <div className="overflow-hidden rounded-lg mb-3">
                    <img
                    src="/assets/img/pro-3.png"
                    alt="image"
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                </div>
                <p className="text-[11px] font-semibold tracking-wide text-[var(--text-color2)] mb-1">
                    PRESTIGE GROUP
                </p>
                <h3 className="text-[18px] font-bold text-[var(--text-color1)]">Prestige City</h3>
                <p className="text-[13px] text-[var(--text-color2)] mt-0.5">Sarjapur, Bengaluru</p>
                <p className="text-[14px] font-bold text-[var(--primary-color)] mt-2">
                    ₹1.20 Cr onwards
                </p>
                <p className="ext-[11px] text-[var(--text-color2)] mt-0.5">Villas &amp; Apartments</p>
                </div>

                {/* Card 4 */}
                <div className="group cursor-pointer">
                <div className="overflow-hidden rounded-lg mb-3">
                    <img
                    src="/assets/img/pro-4.png"
                    alt="image"
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                </div>
                <p className="text-[11px] font-semibold tracking-wide text-[var(--text-color2)] mb-1">
                    LODHA GROUP
                </p>
                <h3 className="text-[18px] font-bold text-[var(--text-color1)]">Lodha Palava</h3>
                <p className="text-[13px] text-[var(--text-color2)] mt-0.5">Dombivli, Mumbai</p>
                <p className="text-[14px] font-bold text-[var(--primary-color)] mt-2">
                    ₹42.00 Lakh onwards
                </p>
                <p className="text-[11px] text-[var(--text-color2)] mt-0.5">1, 2, 3 BHK Townships</p>
                </div>

                {/* Card 5 */}
                <div className="group cursor-pointer">
                <div className="overflow-hidden rounded-lg mb-3">
                    <img
                    src="/assets/img/pro-5.png"
                    alt="image"
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                </div>
                <p className="text-[11px] font-semibold tracking-wide text-[var(--text-color2)] mb-1">
                    SOBHA DEVELOPERS
                </p>
                <h3 className="text-[18px] font-bold text-[var(--text-color1)]">Sobha Dream Acres</h3>
                <p className="text-[13px] text-[var(--text-color2)] mt-0.5">Balagere, Bengaluru</p>
                <p className="text-[14px] font-bold text-[var(--primary-color)] mt-2">
                    ₹85.00 Lakh onwards
                </p>
                <p className="ext-[11px] text-[var(--text-color2)] mt-0.5">Premium 2 BHK</p>
                </div>
            </div>
        </section>
    );
}