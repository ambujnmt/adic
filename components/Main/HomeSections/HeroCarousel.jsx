import React from "react";

const HeroCarousel = () => {
  return (
    <>
        <section className="w-full">
            <video
                src="/assets/image/hero-vdo.mp4"
                autoPlay muted loop playsInline
                className="w-full h-auto block"
            /> 
        </section>
    </>
  );
};

export default HeroCarousel;