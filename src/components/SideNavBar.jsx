import React from 'react'
import { NavLink } from 'react-router-dom';
import img from "../assets/images/logo-light.png";
import { RxCross1 } from "react-icons/rx";
import { FaArrowRight } from "react-icons/fa";
import img1 from "../assets/images/sideArea-1.jpg"
import img2 from "../assets/images/sideArea-2.jpg";
import img3 from "../assets/images/sideArea-3.jpg";
import img4 from "../assets/images/sideArea-4.jpg";
const SideNavBar = () => {

const Slider1 = [
  { index: 1, img: img1 },
  { index: 1, img: img2 },
  { index: 1, img: img3 },
  { index: 1, img: img4 },
];

  return (
    <div className="flex absolute right-0">
      <div className="bg-[rgb(24,24,24)] h-screen w-[35vw] relative ">
        <div className=" absolute right-10 top-12 text-[#666666e0]">
          <RxCross1 className="h-6 w-6" />
        </div>
        <div>
          <NavLink>
            <img src={img} className="h-6 pl-20 absolute  top-30 " />
          </NavLink>
        </div>

        <div>
          <ul className="flex flex-col absolute top-50 pl-16 text-[13px] gap-2 tracking-wider text-[#bcbbbbc9] in-hover:text-[#f6f4f4d6] not-hover:text-[#bcbbbbc9]">
            <a href="#">
              <li className="hover:translate-x-2.5 transition-all duration-500 ease-in-out ">
                <span className="inline-block opacity-0 hover:opacity-100">
                  <FaArrowRight />
                </span>
                Home
              </li>
            </a>
            <a href="#">
              <li className="hover:translate-x-2.5 transition-all duration-500 ease-in-out">
                <span className="inline-block opacity-0 hover:opacity-100">
                  <FaArrowRight />
                </span>
                Pages
              </li>
            </a>
            <a href="#">
              <li className="hover:translate-x-2.5 transition-all duration-500 ease-in-out">
                <span className="inline-block opacity-0 hover:opacity-100">
                  <FaArrowRight />
                </span>
                Blogs
              </li>
            </a>
            <a href="#">
              <li className="hover:translate-x-2.5 transition-all duration-500 ease-in-out">
                <span className="inline-block opacity-0 hover:opacity-100">
                  <FaArrowRight />
                </span>
                Contact
              </li>
            </a>
          </ul>
        </div>
        <hr className="text-[#bcbbbbc9] absolute top-80 right-0 w-7xl  " />
      </div>

      <div className="absolute top-100 pl-20 flex w-auto h-[200px] overflow-hidden">
      <img src={img1}alt='img1'/>
        {/* {Slider1.map((item) => (
          <div>
            <img
              src={item.img}
              className="w-full h-full shrink-0 "
            />
          </div>
        ))} */}
      </div>
    </div>
  );
}

export default SideNavBar