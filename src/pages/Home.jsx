import React from 'react'
import HeroSection from '../components/Home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import Testimonial from '../components/home/Testimonial';
import MapSection from '../components/home/MapSection';


export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection/>
      <Testimonial/>
      <MapSection/>
      
    </div>
  );
}
