import React from "react";

import AboutSection from "../components/home/AboutSection";
import Testimonial from "../components/home/Testimonial";
import MapSection from "../components/home/MapSection";
import GallerySection from "../components/home/GallerySection";
import HeroSection from "../components/home/HeroSection";

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      {/* 🔥 Full Screen Hero */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Testimonials */}
      <Testimonial />

      {/* Gallery */}
      <GallerySection />

      {/* Map Section */}
      <MapSection />
    </div>
  );
}
