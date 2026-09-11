import React from "react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Swiper CSS
import "swiper/css";
import "swiper/css/navigation";

const HeroCarousel = () => {
  return (
    <>
        <section className="w-full">
            <Swiper
                navigation={true}
                modules={[Navigation, Autoplay]}
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
                className="heroSwiper"
            >
                <SwiperSlide>
                    <img
                        src="/assets/img/banner-img.png"
                        alt="image"
                        className="w-full h-auto"
                    />
                </SwiperSlide> 
                <SwiperSlide>
                    <img
                        src="/assets/img/banner-img.png"
                        alt="image"
                        className="w-full h-auto"
                    />
                </SwiperSlide> 
                <SwiperSlide>
                    <img
                        src="/assets/img/banner-img.png"
                        alt="image"
                        className="w-full h-auto"
                    />
                </SwiperSlide>  
            </Swiper>
        </section> 
    </>
  );
};

export default HeroCarousel;