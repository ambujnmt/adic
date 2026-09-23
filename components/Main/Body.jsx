import React from 'react'
import HeroCarousel from './HomeSections/HeroCarousel';
// import HomeTestimonial from './HomeSections/HomeTestimonial';
// import Blogs from './HomeSections/Blogs'; 
import AboutUs from './HomeSections/AboutUs';
import ComprehensiveDentistry from './HomeSections/ComprehensiveDentistry';
import SmileTransformations from './HomeSections/SmileTransformations';
import MeetDr from './HomeSections/MeetDr';
import AdvancedTechnology from './HomeSections/AdvancedTechnology';
import SmileSpecialities from './HomeSections/SmileSpecialities';
import HomeAccordian from './HomeSections/HomeAccordian';


export default function Body() {
 
 
  return (
    <>
      <HeroCarousel />
      <AboutUs />
      <ComprehensiveDentistry />
      <SmileTransformations />
      <MeetDr />
      <AdvancedTechnology />
      <SmileSpecialities />
      <HomeAccordian /> 
      {/* <HomeTestimonial /> */} 
      {/* <Blogs /> */} 
    </>
  );
}
