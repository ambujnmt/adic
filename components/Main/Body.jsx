import React from 'react'
import HeroCarousel from './HomeSections/HeroCarousel';
import PropertySearchBar from './HomeSections/PropertySearchBar';
import FeaturedProperties from './HomeSections/FeaturedProperties';
import NewProjects from './HomeSections/NewProjects';
import ExploreProperties from './HomeSections/ExploreProperties';
import PremiumLuxury from './HomeSections/PremiumLuxury';
import MiddleColumn from './HomeSections/MiddleColumn';
import HomeTestimonial from './HomeSections/HomeTestimonial';
import Blogs from './HomeSections/Blogs';
import MobileApp from './HomeSections/MobileApp';


export default function Body() {
 
 
  return (
    <>
      <HeroCarousel />
      <PropertySearchBar />
      <FeaturedProperties />
      <NewProjects />
      <ExploreProperties />
      <PremiumLuxury />
      <MiddleColumn />
      <HomeTestimonial />
      <Blogs />
      <MobileApp />
    </>
  );
}
