import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
const HomeDropDown = () => {
  return (
    <div className="bg-white  drop-shadow-sm shadow-gray-400/30 w-60 border-2 p-8">
      <ul className="font-light text-gray-600 text-[12px] tracking-wider space-y-4.5 ">
        <li className=" in-hover:text-black not-hover:text-gray-600">
          <NavLink>
            <span className="inline-block ">
              <FaArrowRight />
            </span>
            Main Home
          </NavLink>
        </li>
        <li className="hover:translate-x-2.5 transition-all duration-500 ease-in-out  in-hover:text-black not-hover:text-gray-600">
          <NavLink>
            <span className="inline-block opacity-0 hover:opacity-100">
              <FaArrowRight />
            </span>
            Interior Decort
            <FaStar className="inline-block pb-1" />
          </NavLink>
        </li>
        <li className="hover:translate-x-2.5 transition-all duration-500 ease-in-out in-hover:text-black not-hover:text-gray-600">
          <NavLink>
            <span className="inline-block opacity-0 hover:opacity-100">
              <FaArrowRight />
            </span>
            Shop Home
          </NavLink>
        </li>
        <li className="hover:translate-x-2.5 transition-all duration-500 ease-in-out  in-hover:text-black not-hover:text-gray-600">
          <NavLink>
            <span className="inline-block opacity-0 hover:opacity-100">
              <FaArrowRight />
            </span>
            Studio Home
            <FaStar className="inline-block pb-1" />
          </NavLink>
        </li>
        <li className="hover:translate-x-2.5 transition-all duration-500 ease-in-out  in-hover:text-black not-hover:text-gray-600">
          <NavLink>
            <span className="inline-block opacity-0 hover:opacity-100">
              <FaArrowRight />
            </span>
            Architect Home
          </NavLink>
        </li>
        <li className="hover:translate-x-2.5 transition-all duration-500 ease-in-out  in-hover:text-black not-hover:text-gray-600">
          <NavLink>
            <span className="inline-block opacity-0 hover:opacity-100">
              <FaArrowRight />
            </span>
            Landing Page
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default HomeDropDown