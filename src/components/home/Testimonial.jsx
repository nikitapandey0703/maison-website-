import React from 'react'
import img from "../../assets/images/couples.jpg"
import { Link } from 'react-router-dom';
import img1 from "../../assets/images/client-1.png"
import img2 from "../../assets/images/client-2.png";
import img3 from "../../assets/images/client-3.png";
const Testimonial = () => {
  return (
    <div className=" flex w-full h-[600px] bg-[#f5f5f5] pl-20 pr-20 gap-x-16 pt-25">
      <div>
        <img src={img} className="w-[520px] h-auto" />
      </div>
      <div className="w-[520px] h-auto space-y-6">
        <h4 className="text-black uppercase font-bold text-[28px] leading-9">
          Maison&nbsp;gives you everything you need to create an amazing
          website.
        </h4>
        <p className="text-[#666666]  leading-7 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.
        </p>
        <p className="text-[#666666]  leading-7 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim.
        </p>
        <div className="flex divide-x divide-gray-400 ">
          <Link>
            <img src={img1} className="h-9 " />
          </Link>
          <Link>
            <img src={img2} className="h-9" />
          </Link>
          <Link>
            <img src={img3} className="h-9 " />
          </Link>
        </div>
      </div>
      
    </div>
  );
}

export default Testimonial