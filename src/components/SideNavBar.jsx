import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import img from "../assets/images/logo-light.png";
import { RxCross1 } from "react-icons/rx";
import { FaArrowRight } from "react-icons/fa";
import img1 from "../assets/images/sideArea-1.jpg";
import img2 from "../assets/images/sideArea-2.jpg";
import img3 from "../assets/images/sideArea-3.jpg";
import img4 from "../assets/images/sideArea-4.jpg";

const SideNavBar = ({ showSideBar, toggleSideBar }) => {
  const SliderImages = [img1, img2, img3, img4];
  const [activeIndex, setActiveIndex] = useState(0);

  // ⭐ Navigation Menu with paths
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "OurServices", path: "/our-services" },
    { name: "About us", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Testimonial", path: "/testimonial" },
  ];

  return (
    <div
      className={`fixed top-0 right-0 h-screen w-[35vw] min-w-[320px] bg-[rgb(24,24,24)] text-[#bcbbbbc9] transition-transform duration-500 ease-in-out z-50 shadow-2xl ${
        showSideBar ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div
        className="absolute right-6 top-6 text-[#999] cursor-pointer hover:text-white transition"
        onClick={toggleSideBar}
      >
        <RxCross1 className="h-6 w-6" />
      </div>

      <div className="mt-14 pl-12">
        <NavLink to="/">
          <img src={img} alt="Logo" className="h-6" />
        </NavLink>
      </div>

      {/* ⭐ Menu With Navigation */}
      <ul className="mt-12 flex flex-col gap-5 pl-12 text-sm font-medium tracking-wider">
        {menuItems.map((item, i) => (
          <NavLink
            key={i}
            to={item.path}
            onClick={toggleSideBar}
            className="group flex items-center gap-3 cursor-pointer hover:translate-x-2 transition-all duration-300"
          >
            <span className="opacity-0 group-hover:opacity-100 transition">
              <FaArrowRight size={12} />
            </span>
            <span className="group-hover:text-white transition">
              {item.name}
            </span>
          </NavLink>
        ))}
      </ul>

      <div className="mt-12 flex justify-center items-center flex-col">
        <div className="w-75 h-48 overflow-hidden border border-[#333]">
          <img
            src={SliderImages[activeIndex]}
            alt={`Slide-${activeIndex}`}
            className="w-full h-full object-cover transition-all duration-700"
          />
        </div>

        <div className="flex justify-center gap-4 mt-4 ">
          {SliderImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-6 h-6 rounded-full border text-xs font-semibold transition-all duration-300 ${
                activeIndex === i
                  ? "bg-white text-black border-white"
                  : "border-[#666] text-[#999] hover:bg-[#444]"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>

      <div className="absolute bottom-6 left-0 w-full text-center text-xs text-[#777]">
        © 2025 Your Company. All rights reserved.
      </div>
    </div>
  );
};

export default SideNavBar;
