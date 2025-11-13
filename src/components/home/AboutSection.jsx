import React from 'react'
import img1 from "../../assets/images/concept-img-1.jpg"
import img2 from "../../assets/images/concept-img-2.jpg";
import img3 from "../../assets/images/concept-img-3.jpg";
const AboutSection = () => {
  return (
    <div className="w-screen h-[500px]  bg-white">
      <div className="pl-20 pt-25 pr-20 flex">
        <div className="w-[300px]">
          <h4 className="text-black uppercase font-bold text-[24px]">
            OUR CONCEPT
          </h4>
          <p className="text-[#666666] my-6 h-[130px] w-[230px] leading-7 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <button className="text-white bg-[#181818] text-[12px] px-10 py-4 font-extrabold mt-4">
            CHACK OUT
          </button>
        </div>
        <div className="h-[300px] w-[300px]">
          <div className="h-[260px] w-[250px]  overflow-hidden relativen">
            <img
              src={img1}
              className="w-full h-full object-cover transform transition-transform duration-700 ease-in-out hover:scale-110 hover:-translate-y-4"
            />
          </div>
        </div>
        <div className="h-[300px] w-[300px]">
          <div className="h-[260px] w-[250px]  overflow-hidden relativen">
            <img
              src={img2}
              className="w-full h-full object-cover transform transition-transform duration-700 ease-in-out hover:scale-110 hover:-translate-y-4"
            />
          </div>
        </div>
        <div className="h-[300px] w-[300px]">
          <div className="h-[260px] w-[250px]  overflow-hidden relativen">
            <img
              src={img3}
              className="w-full h-full object-cover transform transition-transform duration-700 ease-in-out hover:scale-110 hover:-translate-y-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection