

import React, { useState, useEffect } from "react";
import img0 from "../../assets/images/Carousel-1.jpg";
import img1 from "../../assets/images/Carousel-2.jpg";
import img2 from "../../assets/images/Carousel-3.jpg";
import img3 from "../../assets/images/Carousel-4.jpg";
import BasicDetail from "../BasicDetail";

const slider = [
  {
    img: img0,
    heading: "Discover Endless Possibilities",
    subText:
      "Step into the world of innovation and creativity. Step into the world of innovation and creativity.",
  },
  {
    img: img1,
    heading: "Your Vision, Our Mission",
    subText:
      "We bring your ideas to life with modern solutions. We bring your ideas to life with modern solutions.",
  },
  {
    img: img2,
    heading: "Empowering the Future",
    subText:
      "Building technology that inspires and connects. Building technology that inspires and connects.",
  },
  {
    img: img3,
    heading: "Experience the Change",
    subText: "Join us in creating something truly extraordinary.",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slider.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div>
        <BasicDetail />
      </div>

      <div className="relative w-full h-screen overflow-hidden">
        {slider.map((item, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* 🔹 Image with scale animation only on active */}
            <img
              src={item.img}
              alt=""
              className={`w-full h-full object-cover transition-transform duration-5000 ${
                index === current ? "scale-110" : "scale-100"
              }`}
            />

            {/* 🔹 Text fade-up animation */}
            {index === current && (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/40 animate-fadeIn">
                <h1 className="font-bold text-6xl mb-4 animate-slideUp">
                  {item.heading}
                </h1>
                <p className="text-[#ffffffc8] text-lg w-[500px] animate-slideUp delay-200">
                  {item.subText}
                </p>
                <button className="text-black bg-white text-[12px] px-10 py-4 mt-10 font-bold animate-slideUp delay-500">
                  PURCHASE NOW
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default HeroSection;

