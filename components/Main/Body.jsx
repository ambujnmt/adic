import React from 'react'
import HeroCarousel from './HomeSections/HeroCarousel';
import HomeTestimonial from './HomeSections/HomeTestimonial';
import Blogs from './HomeSections/Blogs'; 
import AboutUs from './HomeSections/AboutUs';
import ComprehensiveDentistry from './HomeSections/ComprehensiveDentistry';
import SmileTransformations from './HomeSections/SmileTransformations';
import MeetDr from './HomeSections/MeetDr';
import AdvancedTechnology from './HomeSections/AdvancedTechnology';
import SmileSpecialities from './HomeSections/SmileSpecialities';
import HomeAccordian from './HomeSections/HomeAccordian';
import SmileJourney from './HomeSections/SmileJourney';
import CtaSec from './HomeSections/CtaSec';
import Location from './HomeSections/Location';


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
      <HomeTestimonial /> 
      <Blogs /> 
      <SmileJourney />
      <CtaSec /> 
      <Location />
    </>
  );
}
