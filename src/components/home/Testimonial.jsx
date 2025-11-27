import React from "react";
import img from "../../assets/images/couples.jpg";
import { Link } from "react-router-dom";
import img1 from "../../assets/images/client-1.png";
import img2 from "../../assets/images/client-2.png";
import img3 from "../../assets/images/client-3.png";

const clientLogos = [
  { src: img1, alt: "Client 1", to: "#" },
  { src: img2, alt: "Client 2", to: "#" },
  { src: img3, alt: "Client 3", to: "#" }
];

const Testimonial = () => {
  return (
    <section className="w-full bg-[#f5f5f5] py-12 px-8 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 relative flex justify-center">
          <img
            src={img}
            className="w-full rounded-xl shadow-lg object-cover aspect-4/3 hover:scale-105 transition-transform duration-500"
            alt="Happy couple"
          />
          {/* <div className="absolute hidden md:block -bottom-8 left-8 bg-white/70 backdrop-blur-lg rounded-xl px-6 py-3 shadow-md">
            <span className="text-[#4B5563] text-sm font-semibold">Trusted by hundreds of clients</span>
          </div> */}
        </div>
        {/* Text Section */}
        <div className="w-full lg:w-1/2 flex flex-col space-y-6">
          <h4 className="text-black uppercase font-extrabold text-2xl sm:text-4xl tracking-wide leading-tight">
            Maison gives you everything you need to create an amazing website.
          </h4>
          <p className="text-[#666666] leading-7 text-base sm:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.
          </p>
          <p className="text-[#666666] leading-7 text-base sm:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim.
          </p>
          <div className="flex items-center space-x-6 mt-4">
            {clientLogos.map(({ src, alt, to }, i) => (
              <Link to={to} key={i} className="block">
                <img
                  src={src}
                  alt={alt}
                  className="h-18 w-18 rounded-full border-2 border-white shadow transition-transform duration-300 hover:scale-110 bg-white object-contain"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;