import React from "react";
import img1 from "../../assets/images/concept-img-1.jpg";
import img2 from "../../assets/images/concept-img-2.jpg";
import img3 from "../../assets/images/concept-img-3.jpg";

const images = [
  {
    src: img1,
    alt: "Concept 1",
  },
  {
    src: img2,
    alt: "Concept 2",
  },
  {
    src: img3,
    alt: "Concept 3",
  },
];

const AboutSection = () => {
  return (
    <section className="w-full bg-white py-12 px-8 md:px-10 lg:px-24">
      <div className="mx-auto max-w-7xl flex flex-col lg:flex-row  items-center lg:items-start gap-10 lg:gap-20">
        {/* TEXT SECTION */}
        <div className="w-full  max-w-sm shrink-0 mb-6 lg:mb-0">
          <h4 className="text-black uppercase  font-extrabold text-2xl sm:text-4xl mb-6 tracking-wide">
            Our Concept
          </h4>
          <p className="text-[#666666] mb-8 text-base sm:text-lg leading-7 max-w-xs sm:max-w-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <button className="rounded-full bg-[#181818] text-white text-xs md:text-sm font-bold px-8 py-3  shadow-lg transition-all duration-300 hover:bg-black hover:scale-105 hover:shadow-xl">
            CHECK OUT
          </button>
        </div>
        {/* IMAGES SECTION */}
        <div className="w-full flex-1 flex flex-col sm:flex-row justify-center gap-10">
          {images.map(({ src, alt }, idx) => (
            <div
              key={idx}
              className="flex-1 w-full 
                  rounded-xl bg-white shadow-lg overflow-hidden transition duration-300 group
                  hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="relative h-full w-full">
                <img
                  src={src}
                  alt={alt}
                  className="w-full h-full object-cover rounded transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:-translate-y-2"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;