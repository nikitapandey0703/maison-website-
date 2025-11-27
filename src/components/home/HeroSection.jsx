import React, { useState, useEffect } from "react";
import img0 from "../../assets/images/Carousel-1.jpg";
import img1 from "../../assets/images/Carousel-2.jpg";
import img2 from "../../assets/images/Carousel-3.jpg";
import img3 from "../../assets/images/Carousel-4.jpg";

const slides = [
  {
    img: img0,
    heading: "Discover Endless Possibilities",
    subText:
      "Step into the world of innovation and creativity. We bring modern design & ideas to life.",
  },
  {
    img: img1,
    heading: "Your Vision, Our Mission",
    subText:
      "We bring your ideas to life with smart solutions crafted with precision.",
  },
  {
    img: img2,
    heading: "Empowering the Future",
    subText:
      "Building technology that inspires, connects and drives real change.",
  },
  {
    img: img3,
    heading: "Experience the Change",
    subText: "Join us in creating something truly extraordinary.",
  },
];

// Custom Tailwind Animations (Add these in tailwind.config if needed)
const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      5000
    );

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">

      {/* SLIDES */}
      {slides.map((item, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out
          ${index === current ? "opacity-100 z-20" : "opacity-0 z-0"}`}
        >
          {/* Background Image */}
          <img
            src={item.img}
            className={`w-full h-full object-cover transition-transform duration-[5000ms]
            ${index === current ? "scale-110" : "scale-100"}`}
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* TEXT CONTENT */}
          {index === current && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 select-none">

              <h1 className="text-4xl md:text-6xl font-bold mb-5 animate-slideUp">
                {item.heading}
              </h1>

              <p className="text-white/80 text-sm md:text-lg max-w-lg animate-fadeUp delay-200">
                {item.subText}
              </p>

              {/* Button */}
              <button className="mt-8 rounded-full bg-white text-black text-xs md:text-sm font-bold px-8 py-3 shadow-lg transition-all duration-300 hover:bg-[#f0f0f0] hover:scale-105 hover:shadow-xl">
                PURCHASE NOW
              </button>
              {/* <button className="px-10 py-4 bg-white text-black text-xs md:text-sm font-bold rounded-full shadow-lg hover:bg-[#f0f0f0] hover:shadow-xl hover:scale-105 transition-all duration-300 animate-fadeUp delay-500">
                PURCHASE NOW
              </button> */}
            </div>
          )}
        </div>
      ))}

      {/* INDICATORS / DOTS */}
      <div className="absolute bottom-10 w-full flex justify-center gap-3 z-30">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-3 w-3 rounded-full cursor-pointer transition-all duration-300
            ${current === i ? "bg-white scale-110" : "bg-white/40 hover:bg-white/60"}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
